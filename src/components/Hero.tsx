// Hero.tsx
import React from 'react';
import { Star, Clock, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section
  id="home"
  className="relative min-h-screen flex items-center overflow-hidden bg-black text-white pt-36"
>

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-cinzel font-extrabold mb-6 leading-tight">
            Welcome to
            <span className="block text-yellow-400 text-5xl sm:text-6xl md:text-7xl leading-tight mt-2 font-cinzel">
              M&F Kitchen
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-10 text-gray-200 font-poppins tracking-wide">
            From hostel nights to hectic office days, <br />
            you don’t have to miss the comfort of home-cooked meals. <br />
            <span className="text-yellow-300 font-semibold">
              Ghar Ka Swad, Cloud Mein — delivering warmth in every dabba.
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10 text-white text-base sm:text-lg">
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-yellow-400" />
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-6 w-6 text-yellow-400" />
              <span>Fast Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-yellow-400" />
              <span>Loved by All</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-base sm:text-lg transition"
            >
              Learn More About Us
            </a>
            <a
              href="#contact"
              className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-full text-base sm:text-lg transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-9 border-2 border-white rounded-full flex justify-center items-start">
          <div className="w-1 h-2 bg-white rounded-full mt-1 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
