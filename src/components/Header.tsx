import React, { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFullAddress, setShowFullAddress] = useState(false);

  const fullAddress =
    "16th Cross, 4th Main Rd, Lakkasandra, Laljinagar, Wilson Garden, Bengaluru, Karnataka 560030";
  const shortAddress = "Lakkasandra, Bengaluru";
  const googleMapsLink = `https://www.google.com/maps/place/${encodeURIComponent(
    fullAddress
  )}`;

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-sm shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center py-3">
          {/* Left: Logo + Name */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Restaurant Logo"
              className="h-14 w-14 sm:h-16 sm:w-16 object-contain rounded-full border-2 border-yellow-500 shadow bg-white"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 font-serif leading-tight">
                M&F Kitchen
              </h1>
              <p className="text-xs sm:text-sm text-yellow-600 italic">
                Ghar Ka Swad, Cloud Mein
              </p>
            </div>
          </div>

          {/* Right: Nav + Phone + Address */}
          <div className="hidden lg:flex items-center space-x-8 ml-auto">
            {/* Navigation */}
            <nav className="flex space-x-6 text-base font-medium">
              <a href="#home" className="text-gray-800 hover:text-yellow-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-800 hover:text-yellow-600 transition-colors">About</a>
              <a href="#menu" className="text-gray-800 hover:text-yellow-600 transition-colors">Menu</a>
              <a href="#founder" className="text-gray-800 hover:text-yellow-600 transition-colors">Founder's Note</a>
              <a href="#contact" className="text-gray-800 hover:text-yellow-600 transition-colors">Contact</a>
            </nav>

            {/* Phone */}
            <div className="flex items-center text-gray-800 text-sm">
              <Phone className="h-4 w-4 mr-2 text-yellow-600" />
              <a href="tel:+919611333720" className="hover:text-yellow-600">
                +91 96113 33720
              </a>
            </div>

            {/* Address */}
            <div
              className="flex items-center text-gray-800 text-sm cursor-pointer max-w-[220px] truncate hover:text-yellow-600"
              onClick={() => window.open(googleMapsLink, "_blank")}
              onMouseEnter={() => setShowFullAddress(true)}
              onMouseLeave={() => setShowFullAddress(false)}
              title={fullAddress}
            >
              <MapPin className="h-4 w-4 mr-2 text-yellow-600 shrink-0" />
              <span className="truncate">
                {showFullAddress ? fullAddress : shortAddress}
              </span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden ml-auto p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/90 backdrop-blur-sm shadow-inner px-4 py-4 space-y-4 text-base font-medium">
          <nav className="flex flex-col space-y-3">
            <a href="#home" className="text-gray-800 hover:text-yellow-600">Home</a>
            <a href="#about" className="text-gray-800 hover:text-yellow-600">About</a>
            <a href="#menu" className="text-gray-800 hover:text-yellow-600">Menu</a>
            <a href="#founder" className="text-gray-800 hover:text-yellow-600">Founder's Note</a>
            <a href="#contact" className="text-gray-800 hover:text-yellow-600">Contact</a>
          </nav>

          <div className="border-t pt-3 space-y-3">
            {/* Phone */}
            <div className="flex items-center text-gray-800">
              <Phone className="h-5 w-5 mr-2 text-yellow-600" />
              <a href="tel:+919611333720" className="hover:text-yellow-600">
                +91 96113 33720
              </a>
            </div>
            {/* Address */}
            <div
              className="flex items-start text-gray-800 cursor-pointer"
              onClick={() => window.open(googleMapsLink, "_blank")}
            >
              <MapPin className="h-5 w-5 mr-2 text-yellow-600 mt-0.5" />
              <span className="text-sm">{fullAddress}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
