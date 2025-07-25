import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFullAddress, setShowFullAddress] = useState(false);

  const shortAddress = 'Lakkasandra, Bengaluru';
  const fullAddress = '12/3, 2nd Cross Rd, Lakkasandra, Wilson Garden, Bengaluru, Karnataka 560030';

  const googleMapsLink = `https://www.google.com/maps/place/${encodeURIComponent(fullAddress)}`;

  return (
    <header
      className="relative shadow-md sticky top-0 z-50 w-full"
      style={{
        backgroundImage: 'url("/header-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      <div className="relative px-4 sm:px-6 lg:px-12 w-full">
        <div className="flex items-center justify-between py-6 w-full">
          <div className="flex items-center space-x-6">
            <img 
              src="/logo.png"
              alt="Restaurant Logo" 
              className="h-40 w-40 object-contain rounded-full border-[6px] border-yellow-500 shadow-xl bg-white"
            />
            <div className="text-left">
              <h1 className="text-6xl font-extrabold text-gray-900 font-serif leading-tight">
                M&F Kitchen
              </h1>
              <p className="text-xl text-yellow-600 italic font-medium">
                Ghar Ka Swad, Cloud Mein
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-12 ml-auto">
            <nav className="flex space-x-10 text-2xl font-semibold">
              <a href="#home" className="text-gray-800 hover:text-yellow-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-800 hover:text-yellow-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-800 hover:text-yellow-600 transition-colors">Contact</a>
            </nav>
            <div className="hidden lg:flex items-center space-x-8 text-2xl font-semibold pl-8 border-l border-gray-300">
              <div className="flex items-center text-gray-800">
                <Phone className="h-6 w-6 mr-2 text-yellow-600" />
                <span>+91 96113 33720</span>
              </div>

              {/* Address - Click to toggle full address or open map */}
              <div
                className="flex items-center text-gray-800 cursor-pointer group"
                onClick={() => window.open(googleMapsLink, '_blank')}
                onMouseEnter={() => setShowFullAddress(true)}
                onMouseLeave={() => setShowFullAddress(false)}
              >
                <MapPin className="h-6 w-6 mr-2 text-yellow-600" />
                <span className="relative transition-all duration-300 group-hover:text-yellow-600">
                  <span className={`block overflow-hidden transition-all duration-500 ease-in-out ${
                    showFullAddress ? 'max-h-[300px]' : 'max-h-[24px]'
                  }`}>
                    {showFullAddress ? fullAddress : shortAddress}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden p-2 ml-auto" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white/90 backdrop-blur-sm relative z-10">
            <nav className="flex flex-col space-y-4 text-xl font-semibold">
              <a href="#home" className="text-gray-800 hover:text-yellow-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-800 hover:text-yellow-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-800 hover:text-yellow-600 transition-colors">Contact</a>

              <div className="flex items-center mt-4 text-gray-800">
                <Phone className="h-5 w-5 mr-2 text-yellow-600" />
                <span>+91 96113 33720</span>
              </div>

              {/* Mobile Address - Click to open map */}
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
