import React from "react";

const Founder = () => {
  return (
    <section id="founder" className="py-20 bg-white w-full">
      <div className="max-w-6xl mx-auto px-6 flex justify-center">
        {/* Founder’s Message Card */}
        <div
          className="
            bg-yellow-50 rounded-2xl shadow-lg 
            p-8 md:p-12 
            text-gray-700 leading-relaxed space-y-6 
            max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-5xl 
            w-full text-center
          "
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-gray-900 mb-8">
            Founder’s <span className="text-yellow-500">Note</span>
          </h2>

          {/* Message */}
          <p className="text-lg">
            MNF Kitchen was born from a heartfelt belief — that everyone deserves
            the comfort of a home-style meal, even when they’re far from home.
            Having experienced firsthand the challenge of finding fresh, simple,
            and authentic food in the middle of busy workdays, I wanted to build
            something that feels like an extension of your own kitchen.
          </p>
          <p className="text-lg">
            What started as a small catering initiative has now grown into a
            space where every meal is prepared with care, honesty, and love. We
            don’t see ourselves as just another food business — we’re here to
            bring you food that nourishes, comforts, and connects.
          </p>
          <p className="text-lg">
            My vision is to make wholesome, homemade meals easily accessible for
            everyone — whether you’re at work, away from family, or simply
            craving the warmth of real food. With MNF Kitchen, you’ll always
            know that what’s on your plate is made with the same care as if it
            were cooked at home.
          </p>
          <p className="text-lg">
            Thank you for being a part of this journey — together, we’re
            bringing the taste of home closer to your everyday life.
          </p>

          {/* Signature */}
          <div className="pt-8">
            <p className="text-lg font-semibold text-gray-900">Warmly,</p>
            <p className="text-2xl font-bold text-yellow-600">Mohammed Aquib</p>
            <p className="text-lg text-gray-700">Founder, M&F Kitchen</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;

