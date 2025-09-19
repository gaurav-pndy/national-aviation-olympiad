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
          The <b> National Aviation Olympiad (NAO)</b> is India’s first
          dedicated Olympiad designed to inspire and connect students with the
          exciting world of aviation. Aligned with the vision of <b>NEP 2020</b>
          , it aims to build{" "}
          <b>
            critical thinking, logical reasoning, and problem-solving skills
          </b>{" "}
          among students while introducing them to aviation and aerospace
          opportunities.
        </motion.p>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-10 mb-16 items-center">
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
            The mission of the National Aviation Olympiad is to empower students
            of Classes 8–12 with a structured, syllabus-aligned competition that
            enhances critical thinking, logical reasoning, and awareness of
            aviation and aerospace. Through multi-level tests, rewards, and
            national recognition, the Olympiad strives to nurture talent,
            support schools, and create a future-ready community of young
            learners in line with NEP 2020.
          </p>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-secondary" />
              Providing equal opportunities through online & offline platforms
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-secondary" />⭐ Recognizing and
              rewarding talent with scholarships, prizes, and certifications{" "}
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-secondary" />
              Building a nationwide community of aspiring aviators and
              innovators
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

      <div className="grid lg:grid-cols-2 gap-10 items-center">
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
            The vision of the National Aviation Olympiad is to establish itself
            as the leading educational platform that inspires students of
            Classes 8–12 to explore aviation and aerospace, while building
            future-ready skills like innovation, logical reasoning, and
            problem-solving. By nurturing curiosity and excellence, the Olympiad
            aims to shape tomorrow’s leaders in aviation, contributing to
            India’s growth in science, technology, and industry.
          </p>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-center gap-2">
              <FaStar className="text-secondary" />
              Creating national benchmarks in aviation-based learning{" "}
            </li>
            <li className="flex items-center gap-2">
              <FaStar className="text-secondary" />
              Inspiring innovation, curiosity, and critical thinking
            </li>
            <li className="flex items-center gap-2">
              <FaStar className="text-secondary" />
              Shaping future professionals for India’s aviation growth
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
