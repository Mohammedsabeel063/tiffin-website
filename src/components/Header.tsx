import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFullAddress, setShowFullAddress] = useState(false);

  const shortAddress = 'Lakkasandra, Bengaluru';
  const fullAddress = '12/3, 2nd Cross Rd, Lakkasandra, Wilson Garden, Bengaluru, Karnataka 560030';
  const googleMapsLink = `https://www.google.com/maps/place/${encodeURIComponent(fullAddress)}`;

  return (
    <header className="relative shadow-md sticky top-0 z-50 w-full">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

      <div className="relative px-4 sm:px-6 lg:px-10 max-w-screen-xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-y-4">
          {/* Left: Logo and Name */}
          <div className="flex items-center space-x-4 min-w-0 md:justify-start w-full md:w-auto">
            <img 
              src="/logo.png"
              alt="Restaurant Logo" 
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded-full border-4 border-yellow-500 shadow bg-white"
            />
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-serif leading-tight">
                M&F Kitchen
              </h1>
              <p className="text-sm sm:text-base text-yellow-600 italic font-medium">
                 Ghar Ka Swad, Cloud Mein
              </p>

            </div>
          </div>

          {/* Right: Nav + Info */}
          <div className="hidden md:flex flex-col lg:flex-row items-center justify-end space-y-4 lg:space-y-0 lg:space-x-8 w-full md:w-auto">
            <nav className="flex space-x-6 text-lg font-semibold">
              <a href="#home" className="text-gray-800 hover:text-yellow-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-800 hover:text-yellow-600 transition-colors">About</a>
              <a href="#menu" className="text-gray-800 hover:text-yellow-600 transition-colors">Menu</a>
              <a href="#contact" className="text-gray-800 hover:text-yellow-600 transition-colors">Contact</a>
            </nav>
            <div className="flex items-center space-x-6 pl-0 lg:pl-6 border-l-0 lg:border-l border-gray-300 text-base">
              <div className="flex items-center text-gray-800">
                <Phone className="h-5 w-5 mr-2 text-yellow-600" />
                <span>+91 96113 33720</span>
              </div>
              <div
                className="flex items-center cursor-pointer text-gray-800 hover:text-yellow-600"
                onClick={() => window.open(googleMapsLink, '_blank')}
                onMouseEnter={() => setShowFullAddress(true)}
                onMouseLeave={() => setShowFullAddress(false)}
              >
                <MapPin className="h-5 w-5 mr-2 text-yellow-600" />
                <span className="overflow-hidden whitespace-nowrap text-ellipsis max-w-[180px]">
                  {showFullAddress ? fullAddress : shortAddress}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white/90 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4 text-lg font-semibold">
              <a href="#home" className="text-gray-800 hover:text-yellow-600">Home</a>
              <a href="#about" className="text-gray-800 hover:text-yellow-600">About</a>
              <a href="#menu" className="text-gray-800 hover:text-yellow-600">Menu</a>
              <a href="#contact" className="text-gray-800 hover:text-yellow-600">Contact</a>
              <div className="flex items-center text-gray-800 mt-3">
                <Phone className="h-5 w-5 mr-2 text-yellow-600" />
                <span>+91 96113 33720</span>
              </div>
              <div
                className="flex items-center text-gray-800 cursor-pointer"
                onClick={() => window.open(googleMapsLink, '_blank')}
              >
                <MapPin className="h-5 w-5 mr-2 text-yellow-600" />
                <span>{fullAddress}</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
