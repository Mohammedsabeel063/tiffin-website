import React from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-gray-800 py-10 px-4 sm:px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Logo and Copyright */}
        <div className="space-y-2">
          <img
            src="/logo.png"
            alt="M&F Kitchen Logo"
            className="h-12 sm:h-14 mx-auto md:mx-0"
          />
          <p className="text-sm md:text-base text-gray-600">
            © {new Date().getFullYear()} M&F Kitchen. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 items-center justify-center">
          <a
            href="https://www.instagram.com/mnf_kitchen"
            target="_blank"
            className="text-pink-600 hover:text-pink-700 text-2xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/@mnf-kitchen"
            target="_blank"
            className="text-red-600 hover:text-red-700 text-2xl"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
