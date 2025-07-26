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

      const dayMap = {
        Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
      };
      const day = dayMap[dayString as keyof typeof dayMap];

      setIsOpen(day >= 1 && day <= 6 && hour >= 10 && hour < 22);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
            Get In <span className="text-yellow-500">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Ready to experience authentic home-style cooking? Connect with us instantly via WhatsApp or Instagram.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Details */}
          <div className="space-y-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Contact Information</h3>
            <div className="space-y-8 text-base sm:text-lg md:text-xl">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 sm:p-4 rounded-full">
                  <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <a href="tel:+919611333720" className="text-gray-700 hover:underline block">+91 96113 33720</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 sm:p-4 rounded-full">
                  <Mail className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <a href="mailto:mnfkitchens@gmail.com" className="text-gray-700 hover:underline block">mnfkitchens@gmail.com</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 sm:p-4 rounded-full">
                  <MapPin className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <p className="text-gray-700">16th cross, 4th Main Rd</p>
                  <p className="text-gray-700">Lakkasandra, Bengaluru, Karnataka 560030</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 sm:p-4 rounded-full">
                  <Clock className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Opening Hours</h4>
                  <p className="text-gray-700">Mon–Sat: 10:00 AM – 10:00 PM</p>
                  <p className={`font-medium ${isOpen ? 'text-green-600' : 'text-red-500'}`}>
                    {isOpen ? 'Currently Open' : 'Currently Closed'}
                  </p>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="pt-8">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Follow Us</h4>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-2xl">
                <a href="https://www.instagram.com/mnf_kitchen" target="_blank" className="text-pink-600 hover:text-pink-700">
                  <FaInstagram className="inline-block mr-2" /> @mnf_kitchen
                </a>
                <a href="https://youtube.com/@mnf-kitchen" target="_blank" className="text-red-600 hover:text-red-700">
                  <FaYoutube className="inline-block mr-2" /> @mnf-kitchen
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp Box */}
          <div className="w-full bg-yellow-50 border border-yellow-200 rounded-3xl shadow-xl px-6 sm:px-10 py-12 text-center space-y-8">
            <h3 className="text-3xl md:text-4xl font-extrabold text-yellow-700">Let’s Chat on WhatsApp!</h3>
            <p className="text-lg md:text-xl text-gray-800">
              Have a question? Need a custom meal? Want to know today’s menu?
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Whether it's office lunches, weekend cravings, or meal plans — we’re just a tap away.
            </p>

            <div className="flex justify-center">
              <img
                src="/whatsapp-qr.png"
                alt="WhatsApp QR"
                className="w-36 sm:w-40 h-36 sm:h-40 rounded-xl border border-green-500 shadow-md animate-pulse-slow"
              />
            </div>
            <p className="text-gray-700 text-base">Scan to chat on WhatsApp</p>

            <a
              href="https://wa.me/919611333720"
              target="_blank"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500 text-white font-semibold py-3 px-6 rounded-full inline-flex items-center justify-center text-lg transition-all duration-300 ease-in-out hover:scale-105"
            >
              <MessageCircleMore className="h-5 w-5 mr-2" /> Start WhatsApp Chat
            </a>

            <p className="text-gray-500 text-sm">Response Time: Usually within 5 minutes</p>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-20 overflow-hidden rounded-2xl shadow-xl">
          <iframe
            title="M&F Kitchen Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.296107701593!2d77.594!3d12.942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f2c18b3fdb%3A0x9165fc221b23ad9!2sLakkasandra%2C%20Bengaluru%2C%20Karnataka%20560030!5e0!3m2!1sen!2sin!4v1721800000000"
            width="100%"
            height="450"
            className="w-full h-[450px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Animations */}
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
