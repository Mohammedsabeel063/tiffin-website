import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaTruck, FaCheckCircle } from 'react-icons/fa';

const Menu = () => {
  const dishes = [
    { img: "/menu1.jpg", title: "Chicken Dry", desc: "Crispy, juicy dry chicken tossed in signature spices." },
    { img: "/menu2.jpg", title: "Pepper Chicken Dry", desc: "Bold pepper flavor on tender chicken pieces." },
    { img: "/menu3.jpg", title: "Matar Rice", desc: "Hearty rice dish with spicy mutton chunks." },
    { img: "/menu4.jpg", title: "Biryani Rice", desc: "Classic biryani rice bursting with traditional flavors." },
    { img: "/menu5.jpg", title: "Chicken Dry Combo", desc: "A combo plate with dry chicken and rice." },
    { img: "/menu6.jpg", title: "Chicken Kebab Combo", desc: "Grilled kebabs with rice and salad." },
    { img: "/menu7.jpg", title: "Pepper Chicken Combo", desc: "Pepper chicken served with rice and side dishes." },
    { img: "/menu8.jpg", title: "Roti Items", desc: "Soft roti served with veg and non-veg curries." }
  ];

  return (
    <section id="menu" className="py-24 bg-white w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-cinzel text-dark mb-4">Our Delicious Menu</h2>
          <p className="text-gray-600 text-lg">Enjoy our handpicked specials made with love and flavor.</p>
        </div>

        {/* Dish Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {dishes.map((dish, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <img src={dish.img} alt={dish.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg text-dark mb-2">{dish.title}</h3>
                <p className="text-gray-600">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tiffin Services */}
        <motion.div
          className="mt-32 bg-gray-50 py-28 px-4 sm:px-6 md:px-16 rounded-3xl shadow-lg"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-cinzel font-bold text-center text-gray-800 mb-10 flex justify-center items-center gap-3">
            <FaUtensils className="text-orange-600" />
            TIFFIN SERVICES
          </h3>

          <p className="text-center text-gray-600 text-lg font-medium mb-10">
            Serving all over Bangalore – Home-style meals, delivered fresh!
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-gray-800 text-base">
            {[
              {
                title: "VEG MEAL",
                price: "₹110/MEAL or ₹2750/MONTH",
                note: "(2 roti, Dal, Rice, sabji, fryums)",
              },
              {
                title: "NON-VEG MEAL",
                price: "₹125/MEAL or ₹3125/MONTH",
                note: "(2 roti, Dal, Rice, Chicken curry, curd)",
              },
              {
                title: "ROTI MEAL",
                price: "₹90/MEAL or ₹2250/MONTH",
                note: "(4 roti, sabji/Chicken, curd, pickle)",
              },
            ].map((meal, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-xl shadow hover:scale-105 transition duration-300 bg-white"
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-semibold text-lg"><FaCheckCircle className="inline text-green-600 mr-2" /> {meal.title}</p>
                <p className="ml-6 mt-2">{meal.price}</p>
                <p className="ml-6 text-sm text-gray-700">{meal.note}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12 text-base text-gray-800 font-medium"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="text-xl mb-3">🚫 <strong>No Soda</strong> | 🚫 <strong>No Maida Added</strong></p>
            <p className="flex justify-center items-center gap-2 text-xl">
              <FaTruck className="text-blue-600" />
              <span><strong>Free Delivery</strong> within 5 km – ₹5/km after 5 km</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
