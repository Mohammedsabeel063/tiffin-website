// src/components/Footer.tsx
import React from 'react';
import { Mail, MapPin, Phone, Clock, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white w-full rounded-t-[2rem]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Column - Logo & Text */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img src="/logo.png" alt="M&F Logo" className="w-16 h-16" />
              <div>
                <h2 className="text-2xl font-extrabold text-white">M&F Kitchen</h2>
                <p className="text-yellow-400 text-sm font-semibold">Ghar Ka Swad, Cloud Mein</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience authentic home-style cooking with fresh ingredients and warm hospitality.
              Located in Lakkasandra, Bengaluru, we're committed to serving delicious, homemade
              meals that bring comfort and joy.
            </p>
            <div className="flex gap-4 mt-4">
              <span className="bg-yellow-400 p-2 rounded-full">
                <Instagram size={16} className="text-black" />
              </span>
              <span className="bg-yellow-400 p-2 rounded-full">
                <Youtube size={16} className="text-black" />
              </span>
              <span className="bg-yellow-400 p-2 rounded-full">
                <MessageCircle size={16} className="text-black" />
              </span>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-4">Quick Links</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#menu" className="hover:text-white">Catering</a></li>
              <li><a href="#events" className="hover:text-white">Events</a></li>
            </ul>
          </div>

          {/* Right Column - Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-4">Contact Info</h3>
            <ul className="text-sm text-gray-300 space-y-3">
              <li className="flex items-start gap-2"><Phone size={16} /> +91 96113 33720</li>
              <li className="flex items-start gap-2"><Mail size={16} /> mnfkitchens@gmail.com</li>
              <li className="flex items-start gap-2">
                <MapPin size={16} />
                <span>16th Cross, 4th Main Rd<br />Lakkasandra, Bengaluru, Karnataka 560030</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} />
                <span>
                  <span className="font-bold text-yellow-400">Opening Hours</span><br />
                  Mon – Sat: 10:00 AM – 10:00 PM
                </span>
              </li>
              <li className="text-green-400 font-semibold">Open Now</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} M&F Kitchen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
