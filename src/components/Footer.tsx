import React from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-yellow-50 border-t border-yellow-200 w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-16 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo + About */}
        <div className="space-y-4">
          <img src="/logo.png" alt="M&F Kitchen Logo" className="w-36" />
          <p className="text-gray-600 text-sm">
            Authentic home-style meals prepared with love. Taste tradition in every bite.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 text-sm text-gray-700">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Contact</h4>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-yellow-500" /> +91 96113 33720
          </p>
          <p className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-yellow-500 mt-1" />
            16th Cross, 4th Main Rd<br />
            Lakkasandra, Bengaluru
          </p>
          <p className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-yellow-500" /> Mon–Sat: 10 AM – 10 PM
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3 text-sm text-gray-700">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#home" className="hover:text-yellow-600">Home</a></li>
            <li><a href="#menu" className="hover:text-yellow-600">Menu</a></li>
            <li><a href="#contact" className="hover:text-yellow-600">Contact</a></li>
            <li><a href="#about" className="hover:text-yellow-600">About</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Follow Us</h4>
          <div className="flex gap-5 text-2xl">
            <a href="https://www.instagram.com/mnf_kitchen" target="_blank" className="text-pink-600 hover:text-pink-700">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@mnf-kitchen" target="_blank" className="text-red-600 hover:text-red-700">
              <FaYoutube />
            </a>
          </div>
          <p className="text-gray-600 text-sm">Stay updated with daily specials & offers</p>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="bg-yellow-100 text-center text-sm text-gray-700 py-4 border-t border-yellow-300">
        © {new Date().getFullYear()} M&F Kitchen. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
