import React, { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircleMore } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        weekday: "short",
        hour: "2-digit",
        hour12: false,
      });

      const parts = formatter.formatToParts(new Date());
      const dayString = parts.find((p) => p.type === "weekday")?.value;
      const hour = parseInt(parts.find((p) => p.type === "hour")?.value, 10);

      const dayMap: { [key: string]: number } = {
        Sun: 0,
        Mon: 1,
        Tue: 2,
        Wed: 3,
        Thu: 4,
        Fri: 5,
        Sat: 6,
      };
      const day = dayMap[dayString || ""];

      setIsOpen(day >= 1 && day <= 6 && hour >= 10 && hour < 22);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-16 bg-white w-full">
      {/* Wider than before, but not full edge-to-edge */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
            Get In <span className="text-yellow-500">Touch</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to experience authentic home-style cooking? Connect with us
            instantly via WhatsApp or Instagram.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 w-full">
          {/* Contact Info + Socials */}
          <div className="flex-1 space-y-8 text-sm md:text-base">
            <h3 className="text-2xl font-bold text-gray-800">
              Contact Information
            </h3>

            <div className="space-y-5">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-yellow-600" />
                <a
                  href="tel:+919611333720"
                  className="text-gray-800 hover:underline font-medium"
                >
                  +91 96113 33720
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-yellow-600" />
                <a
                  href="mailto:mnfkitchens@gmail.com"
                  className="text-gray-800 hover:underline font-medium"
                >
                  mnfkitchens@gmail.com
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-600" />
                <div className="text-gray-800">
                  <p>16/16, 4th Main Rd</p>
                  <p>
                    Lakkasandra, Wilson Garden, Bengaluru, Karnataka 560030
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-yellow-600" />
                <div>
                  <p className="text-gray-800 text-sm md:text-base">
                    Mon–Sat: 7:00 AM – 10:00 PM
                  </p>
                  <p
                    className={`text-xs md:text-sm font-semibold ${
                      isOpen ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {isOpen ? "Currently Open" : "Currently Closed"}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-x-5 gap-y-3 text-base md:text-lg items-center">
                <a
                  href="https://www.instagram.com/mnf_kitchen?igsh=eGp6cXB2MGh5NHdz"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-pink-600 hover:text-pink-700 space-x-2"
                >
                  <FaInstagram />
                  <span>@mnf_kitchen</span>
                </a>

                <a
                  href="https://youtube.com/@mnf-kitchen?si=t3ayntsNehfFwNKs"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-red-600 hover:text-red-700 space-x-2"
                >
                  <FaYoutube />
                  <span>@mnf-kitchen</span>
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp Box */}
          <div
            className="flex-1 bg-yellow-50 border border-yellow-300 
            rounded-2xl shadow-lg 
            px-5 sm:px-8 py-8 text-center space-y-5"
          >
            <h3 className="text-2xl font-bold text-yellow-700">
              Let’s Chat on WhatsApp!
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              Scan the QR or click to start chatting.
            </p>

            <img
              src="/whatsapp-qr.png"
              alt="WhatsApp QR"
              className="mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-xl border border-green-500 shadow-md animate-pulse-slow"
            />
            <p className="text-gray-700 text-sm">Scan to chat with us</p>

            <a
              href="https://wa.me/919611333720"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold text-sm md:text-base px-5 py-2.5 rounded-full transition"
            >
              <MessageCircleMore className="h-4 w-4 mr-2" />
              Start WhatsApp Chat
            </a>

            <p className="text-xs text-gray-500">
              Response Time: Usually within 5 minutes
            </p>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12 overflow-hidden w-full rounded-xl shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d622.5949588799302!2d77.5986461!3d12.9424088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b654fa61bd%3A0xef6f8d84a8c86fc0!2s16%2F16%2C%204th%20Main%20Rd%2C%20Lakkasandra%2C%20Wilson%20Garden%2C%20Bengaluru%2C%20Karnataka%20560030!5e0!3m2!1sen!2sin!4v1721971271234!5m2!1sen!2sin"
            width="100%"
            height="350"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full border-none rounded-xl"
          ></iframe>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
