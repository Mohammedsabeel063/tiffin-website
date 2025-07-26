import React, { useEffect, useRef, useState } from 'react';
import { Users, Heart, Utensils, Clock, Star } from 'lucide-react';

const About = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday
    const hour = now.getHours();

    const isOpenNow = day >= 1 && day <= 6 && hour >= 10 && hour < 22;
    setIsOpen(isOpenNow);
  }, []);

  return (
    <section id="about" className="w-full bg-white py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-cinzel text-gray-900 mb-4">
            About{' '}
            <span className="font-bold text-yellow-400">
              M&F Kitchen
            </span>
          </h2>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto">
            Where love meets flavor. Inspired by mom’s cooking, powered by passion.
          </p>
        </div>

        {/* Video + Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <video
              ref={videoRef}
              src="/mom-cooking.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-lg"
              onMouseEnter={() => videoRef.current?.pause()}
              onMouseLeave={() => videoRef.current?.play()}
            />
          </div>
          <div className="text-gray-700 text-lg md:text-xl space-y-6">
            <h3 className="text-3xl font-semibold text-gray-900">Our Mission</h3>
            <p>
              At <strong>M&F Kitchen</strong>, our mission is to bring authentic,
              home-style meals that remind you of <em>maa ke haath ka khana</em> —
              warm, fresh, and soul-satisfying.
            </p>
            <p>
              Based in Lakkasandra, Bengaluru, we prepare food every day with the same
              love and dedication you’d find in a home kitchen. Whether it’s a busy
              workday or you're missing home, we’re here to serve you comfort in every bite.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <img
                src="/logo.png"
                alt="M&F Logo"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border object-cover shadow"
              />
              <div>
                <p className="font-cinzel text-xl font-semibold">M&F Kitchen</p>
                <p className="text-gray-600 text-sm">Ghar Jaisa Khana. Cloud Mein.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-24 text-center">
          {[
            { icon: <Users className="h-10 w-10 mx-auto text-yellow-500" />, title: '500+', subtitle: 'Happy Customers' },
            { icon: <Heart className="h-10 w-10 mx-auto text-yellow-500" />, title: '100%', subtitle: 'Fresh Ingredients' },
            { icon: <Utensils className="h-10 w-10 mx-auto text-yellow-500" />, title: 'Daily', subtitle: 'Fresh Cooking' },
            {
              icon: <Clock className="h-10 w-10 mx-auto text-yellow-500" />,
              title: isOpen ? 'Open Now' : 'Closed',
              subtitle: 'Mon–Sat: 10 AM – 10 PM'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-yellow-50 p-6 rounded-xl shadow-md">
              {item.icon}
              <h4 className={`text-xl font-bold mt-2 ${isOpen && idx === 3 ? 'text-green-600' : 'text-gray-800'}`}>
                {item.title}
              </h4>
              <p className="text-gray-600">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-6 text-gray-800">Why Choose Us?</h3>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Because when you miss home, we’re here with a warm dabba. No gimmicks — just wholesome, mom-style food delivered to your door.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 mx-auto text-yellow-500 mb-3" />,
                title: 'Tastes Like Home',
                desc: 'Every recipe is tried, tested, and rooted in family tradition.',
              },
              {
                icon: <Heart className="h-8 w-8 mx-auto text-yellow-500 mb-3" />,
                title: 'Cooked with Love',
                desc: 'Our meals are made fresh every day by caring hands — just like maa.',
              },
              {
                icon: <Clock className="h-8 w-8 mx-auto text-yellow-500 mb-3" />,
                title: 'Always On Time',
                desc: 'Hot meals, delivered when you need them — lunch or dinner.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                {item.icon}
                <h4 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
