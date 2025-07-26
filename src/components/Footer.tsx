import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { Instagram, Youtube, MessageCircle } from 'react-icons/fa';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpen = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      const min = now.getMinutes();
      const weekday = day >= 1 && day <= 6;
      const within = (hour > 10 || (hour === 10 && min >= 0)) && (hour < 22 || (hour === 22 && min === 0));
      setIsOpen(weekday && within);
    };
    checkOpen();
    const iv = setInterval(checkOpen, 60000);
    return () => clearInterval(iv);
  }, []);

  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + About */}
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="M&F Logo" className="h-16 w-16 rounded-full" />
              <div className="ml-3">
                <h3 className="text-2xl font-extrabold">M&F Kitchen</h3>
                <p className="text-yellow-400 italic">Ghar Ka Swad, Cloud Mein</p>
              </div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              Experience authentic home‑style cooking with fresh ingredients and warm hospitality. Located in Lakkasandra, Bengaluru, we're committed to serving delicious, homemade meals that bring comfort and joy.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-yellow-500 hover:text-yellow-400"><Instagram size={24} /></a>
              <a href="#" className="text-yellow-500 hover:text-yellow-400"><Youtube size={24} /></a>
              <a href="#" className="text-yellow-500 hover:text-yellow-400"><MessageCircle size={24} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-yellow-400 text-xl font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400">About</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
              <li><a href="#" className="hover:text-yellow-400">Catering</a></li>
              <li><a href="#" className="hover:text-yellow-400">Events</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-yellow-400 text-xl font-bold mb-3">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="mr-2 text-yellow-400" size={20} />
                <span>+91 96113 33720</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 text-yellow-400" size={20} />
                <span>mnfkitchens@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-2 text-yellow-400" size={20} />
                <span>16th Cross, 4th Main Rd<br />Lakkasandra, Bengaluru, Karnataka 560030</span>
              </div>
              <div className="mt-4">
                <p className="text-yellow-400 font-semibold">Opening Hours</p>
                <p>Mon – Sat: 10:00 AM – 10:00 PM</p>
                <p className={`font-bold ${isOpen ? 'text-green-400' : 'text-red-400'}`}>
                  {isOpen ? 'Open Now' : 'Currently Closed'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          <p>© 2025 M&F Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
