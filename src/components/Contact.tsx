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
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Get In <span className="text-yellow-500">Touch</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience authentic home-style cooking? Connect with us instantly via WhatsApp or Instagram.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info + Socials (Left Side) */}
          <div className="flex-1 space-y-12 text-base md:text-xl">
            <h3 className="text-3xl font-bold text-gray-800">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-yellow-600" />
                <a href="tel:+919611333720" className="text-gray-800 hover:underline font-medium">+91 96113 33720</a>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-yellow-600" />
                <a href="mailto:mnfkitchens@gmail.com" className="text-gray-800 hover:underline font-medium">mnfkitchens@gmail.com</a>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-yellow-600" />
                <div>
                  <p className="text-gray-800">16th cross, 4th Main Rd</p>
                  <p className="text-gray-800">Lakkasandra, Bengaluru, Karnataka 560030</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-yellow-600" />
                <div>
                  <p className="text-gray-800">Mon–Sat: 10:00 AM – 10:00 PM</p>
                  <p className={`text-sm font-semibold ${isOpen ? 'text-green-600' : 'text-red-600'}`}>
                    {isOpen ? 'Currently Open' : 'Currently Closed'}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Follow Us</h4>
              <div className="flex space-x-6 text-2xl">
                <a href="https://www.instagram.com/mnf_kitchen?igsh=eGp6cXB2MGh5NHdz" target="_blank" rel="noreferrer" className="text-pink-600 hover:text-pink-700">@mnf_kitchen</a>
                <a href="https://youtube.com/@mnf-kitchen?si=t3ayntsNehfFwNKs" target="_blank" rel="noreferrer" className="text-red-600 hover:text-red-700">@mnf-kitchen</a>
              </div>
            </div>
          </div>

          {/* WhatsApp Box (Right Side) */}
          <div className="flex-1 bg-yellow-50 border border-yellow-300 rounded-3xl shadow-xl px-6 sm:px-10 py-10 text-center space-y-6">
            <h3 className="text-3xl font-bold text-yellow-700">Let’s Chat on WhatsApp!</h3>
            <p className="text-gray-700 text-lg">Scan the QR or click to start chatting.</p>

            <img
              src="/whatsapp-qr.png"
              alt="WhatsApp QR"
              className="mx-auto w-36 h-36 rounded-xl border border-green-500 shadow-md animate-pulse-slow"
            />
            <p className="text-gray-700">Scan to chat with us on WhatsApp</p>

            <a
              href="https://wa.me/919611333720"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-6 py-3 rounded-full transition"
            >
              <MessageCircleMore className="h-5 w-5 mr-2" />
              Start WhatsApp Chat
            </a>

            <p className="text-sm text-gray-500">Response Time: Usually within 5 minutes</p>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16 overflow-hidden rounded-2xl shadow-xl w-full">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.296107701593!2d77.594!3d12.942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f2c18b3fdb%3A0x9165fc221b23ad9!2sLakkasandra%2C%20Bengaluru%2C%20Karnataka%20560030!5e0!3m2!1sen!2sin!4v1721800000000"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            className="w-full rounded-xl border-none"
          ></iframe>
        </div>
      </div>

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
