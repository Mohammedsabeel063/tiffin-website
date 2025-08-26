import React from "react";

const Founder = () => {
  return (
    <section id="founder" className="py-12 bg-white w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Founder’s Message Card */}
        <div
          className="
            bg-yellow-50 rounded-2xl shadow-lg 
            p-6 sm:p-8 md:p-10 
            text-gray-700 leading-loose space-y-7 
            w-full text-center
          "
        >
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-gray-900 mb-6">
            Founder’s <span className="text-yellow-500">Note</span>
          </h2>

          {/* Message */}
          <div className="space-y-6">
            <p className="text-sm sm:text-base">
              MNF Kitchen was born from a heartfelt belief — that everyone
              deserves the comfort of a home-style meal, even when they’re far
              from home. Having experienced firsthand the challenge of finding
              fresh, simple, and authentic food in the middle of busy workdays,
              I wanted to build something that feels like an extension of your
              own kitchen.
            </p>
            <p className="text-sm sm:text-base">
              What started as a small catering initiative has now grown into a
              space where every meal is prepared with care, honesty, and love.
              We don’t see ourselves as just another food business — we’re here
              to bring you food that nourishes, comforts, and connects.
            </p>
            <p className="text-sm sm:text-base">
              My vision is to make wholesome, homemade meals easily accessible
              for everyone — whether you’re at work, away from family, or simply
              craving the warmth of real food. With MNF Kitchen, you’ll always
              know that what’s on your plate is made with the same care as if it
              were cooked at home.
            </p>
            <p className="text-sm sm:text-base mb-4">
              Thank you for being a part of this journey — together, we’re
              bringing the taste of home closer to your everyday life.
            </p>
          </div>

          {/* Signature */}
          <div className="pt-4">
            <p className="text-xs sm:text-sm font-medium text-gray-900">
              Warmly,
            </p>
            <p className="text-lg sm:text-xl font-bold text-yellow-600">
              Mohammed Aquib
            </p>
            <p className="text-xs sm:text-sm text-gray-700">
              Founder, M&F Kitchen
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
