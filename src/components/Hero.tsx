// Hero.tsx
import React from 'react';
import { Star, Clock, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black text-white"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center animate-fade-in-up">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-cinzel font-extrabold mb-8 leading-tight">
            Welcome to
            <span className="block text-yellow-400 text-6xl sm:text-7xl md:text-8xl leading-tight animate-slide-up delay-200 font-cinzel">
              M&F Kitchen
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-200 font-poppins leading-relaxed tracking-wide animate-fade-in-up delay-300">
            From hostel nights to hectic office days, <br />
            you don’t have to miss the comfort of home-cooked meals. <br />
            <span className="text-yellow-300 font-semibold">
              Ghar Ka Swad, Cloud Mein — delivering warmth in every dabba.
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-10 mb-12 text-white font-poppins text-xl animate-fade-in-up delay-500">
            <div className="flex items-center space-x-3">
              <Star className="h-7 w-7 text-yellow-400" />
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-7 w-7 text-yellow-400" />
              <span>Fast Service</span>
            </div>
            <div className="flex items-center space-x-3">
              <Heart className="h-7 w-7 text-yellow-400" />
              <span>Loved by All</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center font-poppins animate-fade-in-up delay-700">
            <a
              href="#about"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-10 rounded-full transition transform hover:scale-110 shadow-lg text-lg"
            >
              Learn More About Us
            </a>
            <a
              href="#contact"
              className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 px-10 rounded-full transition transform hover:scale-110 text-lg"
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
