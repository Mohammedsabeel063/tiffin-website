import React, { useRef, useEffect, useState } from 'react';
import { Users, Heart, Utensils, Clock, Star } from 'lucide-react';

const About = () => {
  const videoRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        weekday: 'short',
        hour: '2-digit',
        hour12: false,
      });

      const parts = formatter.formatToParts(new Date());
      const dayString = parts.find(p => p.type === 'weekday')?.value;
      const hour = parseInt(parts.find(p => p.type === 'hour')?.value, 10);

      const dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      const day = dayMap[dayString];

      setIsOpen(day >= 1 && day <= 6 && hour >= 10 && hour < 22);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-white w-full">
      <div className="w-full px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-cinzel text-gray-900 mb-4 tracking-wide">
            About{' '}
            <span className="font-cinzel font-bold text-yellow-400 text-5xl md:text-6xl tracking-tight">
              M&F Kitchen
            </span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Where love meets flavor. Inspired by mom’s cooking, powered by passion.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20 animate-fade-in-up max-w-[1280px] mx-auto">
          {/* Vimeo Embed */}
          <div className="w-full h-full">
            <div className="rounded-3xl shadow-xl w-full aspect-video overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1104689279?autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="M&F Kitchen Video"
              ></iframe>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            <h3 className="text-2xl md:text-4xl font-semibold text-gray-900">Our Mission</h3>
            <p>
              At <span className="font-semibold text-gray-900">M&F Kitchen</span>, our mission is to bring authentic,
              home-style meals that remind you of <em>maa ke haath ka khana</em> — warm, fresh, and soul-satisfying.
            </p>
            <p>
              Based in Lakkasandra, Bengaluru, we prepare food every day with the same love and dedication
              you'd find in a home kitchen. Whether it's a busy workday or you're missing home, we’re here
              to serve you comfort in every bite.
            </p>

            <div className="flex items-center space-x-4 pt-6">
              <img
                src="/logo.png"
                alt="M&F Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-primary object-cover shadow"
              />
              <div>
                <p className="font-cinzel text-xl sm:text-2xl font-semibold text-gray-800">
                  M&F Kitchen
                </p>
                <p className="text-gray-600 text-base sm:text-lg">Ghar Jaisa Khana. Cloud Mein.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-20 text-center animate-slide-up">
          {[
            { icon: <Users className="h-10 w-10 text-primary mx-auto mb-3" />, title: '500+', subtitle: 'Happy Customers' },
            { icon: <Heart className="h-10 w-10 text-primary mx-auto mb-3" />, title: '100%', subtitle: 'Fresh Ingredients' },
            { icon: <Utensils className="h-10 w-10 text-primary mx-auto mb-3" />, title: 'Daily', subtitle: 'Fresh Cooking' },
            {
              icon: <Clock className="h-10 w-10 text-primary mx-auto mb-3" />,
              title: isOpen ? ' Open Now' : ' Closed',
              subtitle: 'Mon–Sat: 10:00 AM – 10:00 PM'
            }
          ].map((item, i) => (
            <div key={i} className="bg-yellow-50 p-6 sm:p-10 rounded-2xl shadow hover:shadow-xl transition">
              {item.icon}
              <h4 className={`text-xl sm:text-2xl font-bold ${isOpen ? 'text-green-600' : 'text-red-500'} mb-1`}>
                {item.title}
              </h4>
              <p className="text-gray-600 text-base sm:text-lg">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="text-center w-full animate-fade-in-up">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mb-6">Why Choose Us?</h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
            Because when you miss home, we’re here with a warm dabba. No gimmicks — just wholesome, mom-style food delivered to your door.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            {[
              {
                icon: <Star className="h-8 w-8 sm:h-10 sm:w-10 text-primary mx-auto mb-3" />,
                title: 'Tastes Like Home',
                desc: 'Every recipe is tried, tested, and rooted in family tradition.',
              },
              {
                icon: <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-primary mx-auto mb-3" />,
                title: 'Cooked with Love',
                desc: 'Our meals are made fresh every day by caring hands — just like maa.',
              },
              {
                icon: <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-primary mx-auto mb-3" />,
                title: 'Always On Time',
                desc: 'Hot meals, delivered when you need them — lunch or dinner.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white shadow-md p-6 sm:p-8 rounded-xl hover:shadow-lg transition">
                {item.icon}
                <h4 className="font-semibold text-gray-800 text-lg sm:text-2xl mb-2">{item.title}</h4>
                <p className="text-gray-600 text-base sm:text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
