import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaStar } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-4 md:px-6 max-w-7xl mx-auto overflow-x-hidden"
    >
      {/* Title & Subtitle */}
      <div className="mb-12 text-center">
        <motion.h2
          className="text-3xl md:text-[2.75rem]  mb-4 text-primary"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About National Aviation Olympiad
        </motion.h2>
        <motion.p
          className="text-gray-700 max-w-3xl text-lg md:text-xl text-justify mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          The National Aviation Olympiad is India's pioneering educational
          initiative designed to promote aviation knowledge and inspire the next
          generation of aviation professionals among students from Classes 8 to
          12.
        </motion.p>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-10 mb-16">
        {/* Mission */}
        <motion.div
          className=" flex flex-col justify-center "
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-[2rem]  mb-8 text-primary">
            Our Mission
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            To create a comprehensive platform that nurtures aviation knowledge,
            promotes STEM education, and identifies talented young minds who can
            contribute to India's growing aviation sector. We aim to bridge the
            gap between theoretical knowledge and practical aviation
            applications.
          </p>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-secondary" />
              Promoting aviation education across all Indian states
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-secondary" />
              Encouraging STEM learning through aviation concepts
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-secondary" />
              Building a foundation for future aviation careers
            </li>
          </ul>
        </motion.div>
        {/* Aviation Education Visual */}
        <motion.div
          className="flex items-center justify-center max-h-90"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=600&q=80"
            alt="Aviation Education"
            className=" object-cover w-full  h-full "
          />
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Excellence & Achievement Visual */}
        <motion.div
          className="flex row-start-2 lg:row-start-1 items-center justify-center max-h-90"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1532364158125-02d75a0f7fb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGxhbmUlMjB3aW5kb3d8ZW58MHwwfDB8fHwy"
            alt="Excellence & Achievement"
            className="object-cover w-full  h-full "
          />
        </motion.div>
        {/* Vision */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-2xl md:text-[2rem]  mb-8 text-primary">
            Our Vision
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            To establish the National Aviation Olympiad as the premier
            educational competition in India that shapes young aviation
            enthusiasts into knowledgeable professionals, contributing to the
            nation's aviation industry growth and technological advancement.
          </p>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-center gap-2">
              <FaStar className="text-secondary" />
              Creating national standards for aviation education
            </li>
            <li className="flex items-center gap-2">
              <FaStar className="text-secondary" />
              Fostering innovation and critical thinking
            </li>
            <li className="flex items-center gap-2">
              <FaStar className="text-secondary" />
              Supporting India's aviation industry development
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
