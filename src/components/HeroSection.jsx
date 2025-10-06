import React from "react";
import { FaArrowRightLong, FaUserPlus } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    const offset = 80; // change this value for desired margin from top
    if (targetElement) {
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    } else if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white pt-28 xl:min-h-screen flex flex-col justify-center">
      <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between px-4 md:px-6">
        {/* Text and CTA */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-medium text-primary mb-6">
            National Aviation Olympiad-2026
          </h1>
          <h1 className="text-xl md:text-3xl  text-primary mb-6">
            Igniting young minds, elevating India's skies
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            1st Pan India Aviation Olympiad <br />
            Classes 8th - 12th <br />
            August 2026 - December 2026
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleScroll(e, "#about")}
              className="bg-primary text-white font-medium px-6 py-2.5 cursor-pointer  hover:bg-blue-800 transition-all duration-300 flex gap-2 items-center"
            >
              Learn More <FaArrowRightLong />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleScroll(e, "#registration")}
              className="bg-secondary text-primary font-medium px-6 py-2.5 cursor-pointer  hover:bg-yellow-200 transition-all duration-300 flex gap-2 items-center"
            >
              Register Now <FaUserPlus />
            </motion.button>
          </div>
        </motion.div>
        {/* Illustration */}
        <motion.div
          className="lg:w-1/2  w-full flex items-center  justify-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full flex items-center justify-center rounded">
            <img
              src="./hero6.jpg"
              alt=""
              className="w-full max-h-90 h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
      {/* Statistics */}
      <div className="bg-[#f9fafb]  mt-12 py-12">
        <div className="container max-w-7xl w-full mx-auto grid grid-cols-2 md:grid-cols-4 justify-center gap-6 px-4 md:px-6">
          <StatBox number="28/8" label="States & UTs Participating" delay={0} />
          <StatBox
            number="1,00,000+"
            label="Students Participating"
            delay={0.1}
          />
          <StatBox number="3" label="Competition Phases" delay={0.2} />
          <StatBox number="145" label="National Qualifiers" delay={0.3} />
        </div>
      </div>
    </section>
  );
}

// Statistic Box Sub-component with animation delay prop
function StatBox({ number, label, delay = 0 }) {
  return (
    <motion.div
      className="bg-white border border-gray-300 text-center px-8 py-6 min-w-[180px]"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
    >
      <div className="text-3xl font-semibold text-primary mb-2">{number}</div>
      <div className="text-gray-600 text-lg">{label}</div>
    </motion.div>
  );
}
