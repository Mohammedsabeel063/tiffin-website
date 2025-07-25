import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Heart, MessageCircle, Youtube } from 'lucide-react';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 6 = Saturday
      const hour = now.getHours();
      const minutes = now.getMinutes();

      const isWeekday = day >= 1 && day <= 6; // Monday to Saturday
      const isWithinHours = (hour > 10 || (hour === 10 && minutes >= 0)) &&
                            (hour < 22 || (hour === 22 && minutes === 0));

      setIsOpen(isWeekday && isWithinHours);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Update every 60 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-gray-900 text-white font-sans">
      <div className="w-full px-8 py-16">
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/logo.png" 
                alt="M&F Kitchen Logo" 
                className="h-20 w-20 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-4xl font-extrabold tracking-wide">M&F Kitchen</h3>
                <p className="text-yellow-400 text-lg mt-1 font-medium">Ghar Ka Swad, Cloud Mein</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Experience authentic home-style cooking with fresh ingredients and warm hospitality. 
              Located in Lakkasandra, Bengaluru, we're committed to serving delicious, 
              homemade meals that bring comfort and joy.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/mnf_kitchen?igsh=eGp6cXB2MGh5NHdz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-full transition"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.youtube.com/@mnf-kitchen" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-full transition"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a 
                href="https://wa.me/919611333720" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-full transition"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-2xl font-bold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-3 text-lg">
              <li><a href="#home" className="text-gray-300 hover:text-yellow-400 transition">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-yellow-400 transition">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-yellow-400 transition">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition">Catering</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition">Events</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h4 className="text-2xl font-bold mb-4 text-yellow-400">Contact Info</h4>
            <div className="space-y-4 text-lg">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-yellow-400" />
                <span className="text-gray-300">+91 96113 33720</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-yellow-400" />
                <span className="text-gray-300">mnfkitchens@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-yellow-400 mt-1" />
                <div className="text-gray-300 leading-snug">
                  <p>16th Cross, 4th Main Rd</p>
                  <p>Lakkasandra, Bengaluru, Karnataka 560030</p>
                </div>
              </div>
              <div className="mt-4">
                <h5 className="text-yellow-400 font-semibold mb-1">Opening Hours</h5>
                <p className="text-gray-300">Mon – Sat: 10:00 AM – 10:00 PM</p>
                <p className={`font-bold ${isOpen ? 'text-green-400' : 'text-red-400'}`}>
                  {isOpen ? 'Open Now' : 'Currently Closed'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-base">&copy; 2025 M&F Kitchen. All rights reserved.</p>
          <p className="text-gray-400 text-base flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for food lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
