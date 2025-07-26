import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircleMore } from 'lucide-react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const Contact = () => {
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
    <section id="contact" className="py-24 bg-white w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Get In <span className="text-yellow-500">Touch</span></h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Ready to experience authentic home-style cooking? Connect with us instantly via WhatsApp or Instagram.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-14">
            <h3 className="text-4xl font-bold text-gray-800">Contact Information</h3>
            <div className="space-y-10 text-2xl">
              <div className="flex items-start space-x-5">
                <div className="bg-yellow-100 p-4 rounded-full"><Phone className="h-7 w-7 text-yellow-600" /></div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p><a href="tel:+919611333720" className="text-gray-700 hover:underline">+91 96113 33720</a></p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="bg-yellow-100 p-4 rounded-full"><Mail className="h-7 w-7 text-yellow-600" /></div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p><a href="mailto:mnfkitchens@gmail.com" className="text-gray-700 hover:underline">mnfkitchens@gmail.com</a></p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="bg-yellow-100 p-4 rounded-full"><MapPin className="h-7 w-7 text-yellow-600" /></div>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-700">16th Cross, 4th Main Rd</p>
                  <p className="text-gray-700">Lakkasandra, Bengaluru, Karnataka 560030</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="bg-yellow-100 p-4 rounded-full"><Clock className="h-7 w-7 text-yellow-600" /></div>
                <div>
                  <h4 className="font-semibold">Opening Hours</h4>
                  <p className="text-gray-700">Mon–Sat: 10:00 AM – 10:00 PM</p>
                  <p className={`font-medium ${isOpen ? 'text-green-600' : 'text-red-500'}`}>
                    {isOpen ? ' Currently Open' : ' Currently Closed'}
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="pt-10">
              <h4 className="text-3xl font-semibold mb-4 text-gray-800">Follow Us</h4>
              <div className="flex flex-wrap gap-6 text-3xl items-center">
                <a href="https://www.instagram.com/mnf_kitchen" target="_blank" className="text-pink-600 hover:text-pink-700 flex items-center space-x-2">
                  <FaInstagram />
                  <span className="text-2xl">@mnf_kitchen</span>
                </a>
                <a href="https://youtube.com/@mnf-kitchen" target="_blank" className="text-red-600 hover:text-red-700 flex items-center space-x-2">
                  <FaYoutube />
                  <span className="text-2xl">@mnf-kitchen</span>
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp Section */}
          <div className="w-full bg-yellow-50 border border-yellow-300 rounded-3xl shadow-xl px-8 py-16 text-center">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-yellow-700 mb-6">Let’s Chat on WhatsApp!</h3>
            <p className="text-xl text-gray-800 mb-4">
              Have a question? Need a custom meal? Want to know today’s menu?
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We’re always ready to help you enjoy tasty, fresh, and healthy homemade food.
            </p>
            <div className="flex justify-center">
              <img
                src="/whatsapp-qr.png"
                alt="WhatsApp QR"
                className="w-40 h-40 rounded-xl border border-green-500 animate-pulse-slow"
              />
            </div>
            <p className="mt-4 text-base text-gray-700">Scan to chat on WhatsApp</p>

            <a
              href="https://wa.me/919611333720"
              target="_blank"
              className="mt-6 inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all"
            >
              <MessageCircleMore className="h-6 w-6 mr-2" />
              Start WhatsApp Chat
            </a>

            <p className="text-gray-600 text-sm mt-4">Response Time: Usually within 5 minutes</p>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-20 overflow-hidden rounded-2xl shadow-xl">
          <iframe
            title="M&F Kitchen Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.296107701593!2d77.594!3d12.942!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f2c18b3fdb%3A0x9165fc221b23ad9!2sLakkasandra%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1721800000000"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[450px] rounded-xl"
          ></iframe>
        </div>
      </div>

      {/* Custom Animation Style */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
