import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { FaInstagram as Instagram, FaYoutube as Youtube, FaRegCommentDots as MessageCircle } from 'react-icons/fa';

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
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        {/* Flexbox Layout */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          {/* Left: Logo + About + Social */}
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="M&F Logo" className="h-14 w-14 rounded-full shadow-md" />
              <div className="ml-3">
                <h3 className="text-xl font-bold">M&F Kitchen</h3>
                <p className="text-yellow-400 italic text-sm">Ghar Ka Swad, Cloud Mein</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Experience authentic home-style cooking with fresh ingredients and warm hospitality.  
              Located in Lakkasandra, Bengaluru, we’re committed to serving delicious, homemade meals that bring comfort and joy.
            </p>
            <div className="flex space-x-4 mt-5">
              <a href="https://www.instagram.com/mnf_kitchen?igsh=eGp6cXB2MGh5NHdz" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 transition">
                <Instagram size={22} />
              </a>
              <a href="https://youtube.com/@mnf-kitchen?si=t3ayntsNehfFwNKs" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 transition">
                <Youtube size={22} />
              </a>
              <a href="https://wa.me/919611333720" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 transition">
                <MessageCircle size={22} />
              </a>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="flex-1 md:pl-12">
            <h4 className="text-yellow-400 text-lg font-semibold mb-3">Contact Info</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center">
                <Phone className="mr-2 text-yellow-400" size={18} />
                <a href="tel:+919611333720" className="hover:text-yellow-400">+91 96113 33720</a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 text-yellow-400" size={18} />
                <a href="mailto:mnfkitchens@gmail.com" className="hover:text-yellow-400">mnfkitchens@gmail.com</a>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-2 text-yellow-400" size={18} />
                <a
                  href="https://www.google.com/maps/place/16th+Cross,+4th+Main+Rd,+Lakkasandra,+Bengaluru,+Karnataka+560030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400"
                >
                  16th Cross, 4th Main Rd<br />
                  Lakkasandra, Bengaluru, Karnataka 560030
                </a>
              </div>
              <div className="mt-4">
                <p className="text-yellow-400 font-medium">Opening Hours</p>
                <p>Mon – Sat: 7:00 AM – 10:00 PM</p>
                <p className={`font-bold ${isOpen ? 'text-green-400' : 'text-red-400'}`}>
                  {isOpen ? 'Open Now' : 'Currently Closed'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2025 M&F Kitchen. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-center">
            Made with <Heart className="inline h-3 w-3 text-red-500 mx-1" /> by 
            <span className="text-yellow-400 font-medium"> Mohammed Sabeel</span> for food lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
