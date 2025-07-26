// src/components/About.tsx
import React, { useRef, useEffect, useState } from 'react';
import { Users, Heart, Utensils, Clock, Star } from 'lucide-react';

const About = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();

      setIsOpen(day >= 1 && day <= 6 && hour >= 10 && hour < 22);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-white w-full">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-cinzel text-gray-900 mb-4">
            About{' '}
            <span className="font-bold text-yellow-400">M&F Kitchen</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Where love meets flavor. Inspired by mom’s cooking, powered by passion.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="w-full h-full">
            <video
              ref={videoRef}
              src="/mom-cooking.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-3xl shadow-xl w-full h-[300px] md:h-[500px] object-cover transition-transform duration-500 transform hover:scale-105"
              onMouseOver={() => videoRef.current?.pause()}
              onMouseOut={() => videoRef.current?.play()}
            />
          </div>

          <div className="space-y-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            <h3 className="text-3xl font-semibold text-gray-900">Our Mission</h3>
            <p>
              At <span className="font-semibold">M&F Kitchen</span>, our mission is to bring authentic,
              home-style meals that remind you of <em>maa ke haath ka khana</em>.
            </p>
            <p>
              Based in Lakkasandra, Bengaluru, we prepare food every day with love and dedication.
            </p>

            <div className="flex items-center space-x-4 pt-4">
              <img
                src="/logo.png"
                alt="M&F Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-yellow-400 shadow"
              />
              <div>
                <p className="font-cinzel text-xl sm:text-2xl font-semibold">M&F Kitchen</p>
                <p className="text-gray-600 text-base sm:text-lg">Ghar Jaisa Khana. Cloud Mein.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 text-center">
          {[
            { icon: <Users className="h-10 w-10 text-yellow-600 mx-auto" />, title: '500+', subtitle: 'Happy Customers' },
            { icon: <Heart className="h-10 w-10 text-yellow-600 mx-auto" />, title: '100%', subtitle: 'Fresh Ingredients' },
            { icon: <Utensils className="h-10 w-10 text-yellow-600 mx-auto" />, title: 'Daily', subtitle: 'Fresh Cooking' },
            {
              icon: <Clock className="h-10 w-10 text-yellow-600 mx-auto" />,
              title: isOpen ? 'Open Now' : 'Closed',
              subtitle: 'Mon–Sat: 10:00 AM – 10:00 PM'
            }
          ].map((item, index) => (
            <div key={index} className="bg-yellow-50 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl">
              {item.icon}
              <h4 className={`text-xl sm:text-2xl font-bold ${isOpen && item.title === 'Open Now' ? 'text-green-600' : 'text-gray-800'}`}>
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm sm:text-base">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Why Choose Us?</h3>
          <p className="text-base sm:text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
            Because when you miss home, we’re here with a warm dabba. No gimmicks — just wholesome, mom-style food delivered to your door.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
            {[
              {
                icon: <Star className="h-8 w-8 text-yellow-600 mx-auto mb-3" />,
                title: 'Tastes Like Home',
                desc: 'Every recipe is rooted in family tradition.',
              },
              {
                icon: <Heart className="h-8 w-8 text-yellow-600 mx-auto mb-3" />,
                title: 'Cooked with Love',
                desc: 'Meals made fresh daily by caring hands.',
              },
              {
                icon: <Clock className="h-8 w-8 text-yellow-600 mx-auto mb-3" />,
                title: 'Always On Time',
                desc: 'Delivered hot — for lunch or dinner.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white shadow p-6 rounded-xl hover:shadow-lg transition">
                {item.icon}
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
