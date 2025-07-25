import React from 'react';
import { Star, Clock, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white animate-fade-in-up">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-extrabold mb-8 leading-tight font-['Cinzel'] animate-fade-in-up transition-all duration-700">
            Welcome to
            <span className="block text-yellow-400 text-[80px] md:text-[120px] leading-tight animate-slide-up delay-200 font-['Cinzel']">
              M&F Kitchen
            </span>
          </h1>

          <p className="text-[22px] md:text-[28px] mb-14 text-gray-200 font-['Merriweather'] leading-relaxed tracking-wide animate-fade-in-up delay-300">
            From hostel nights to hectic office days, <br />
            you don’t have to miss the comfort of home-cooked meals. <br />
            <span className="text-yellow-300 font-semibold text-[20px] md:text-[24px]">
              Ghar Ka Swad, Cloud Mein — delivering warmth in every dabba.
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-10 mb-14 text-white font-['Lora'] text-2xl animate-fade-in-up delay-500">
            <div className="flex items-center space-x-4">
              <Star className="h-8 w-8 text-yellow-400" />
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="h-8 w-8 text-yellow-400" />
              <span>Fast Service</span>
            </div>
            <div className="flex items-center space-x-4">
              <Heart className="h-8 w-8 text-yellow-400" />
              <span>Loved by All</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center font-['Lora'] animate-fade-in-up delay-700">
            <a
              href="#about"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-6 px-12 rounded-full transition transform hover:scale-110 shadow-xl text-2xl"
            >
              Learn More About Us
            </a>
            <a
              href="#contact"
              className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-6 px-12 rounded-full transition transform hover:scale-110 text-2xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
