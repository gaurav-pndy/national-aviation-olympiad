import {
  FaBook,
  FaCheck,
  FaDownload,
  FaPlay,
  FaQuestionCircle,
  FaVideo,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function PreparationResources() {
  return (
    <section id="resources" className="py-16 px-4 md:px-6 bg-[#f9fafb]">
      <motion.div
        className="max-w-4xl mx-auto text-center mb-10"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-[2.75rem] mb-4 text-primary">
          Preparation Resources
        </h2>
        <p className="text-gray-700 max-w-3xl text-lg md:text-xl text-justify mx-auto">
          Comprehensive study materials and resources designed to help students
          excel in the National Aviation Olympiad across all three stages of
          competition.
        </p>
      </motion.div>

      {/* Resource Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-7 mb-12">
        {/* Study Guides */}
        <motion.div
          className="bg-white border border-gray-300 p-6 flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.5 }}
        >
          <FaBook className="text-primary text-4xl mb-3" />
          <div className="text-xl mb-3 text-primary">Study Guides</div>
          <ul className="text-gray-700 text-left space-y-2 mb-6">
            <li className="flex items-start">
              <FaCheck className="text-secondary mr-2 mt-1" />
              Class-wise comprehensive study materials
            </li>
            <li className="flex items-start">
              <FaCheck className="text-secondary mr-2 mt-1" />
              Aviation fundamentals and principles
            </li>
            <li className="flex items-start">
              <FaCheck className="text-secondary mr-2 mt-1" />
              Mathematics and physics applications
            </li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-primary text-white px-6 py-2 flex gap-2 items-center hover:bg-blue-900 transition-all duration-300 cursor-pointer"
          >
            <FaDownload />
            Download PDF
          </motion.button>
        </motion.div>
        {/* Question Banks */}
        <motion.div
          className="bg-white border border-gray-300 p-6 flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <FaQuestionCircle className="text-primary text-4xl mb-3" />
          <div className="text-xl mb-3 text-primary">Question Banks</div>
          <ul className="text-gray-700 text-left space-y-2 mb-6">
            <li className="flex items-start">
              <FaCheck className="text-secondary mr-2 mt-1" />
              1000+ practice questions per class
            </li>
            <li className="flex items-start">
              <FaCheck className="text-secondary mr-2 mt-1" />
              Previous year{" "}
              <a href="#" className="text-primary underline">
                sample papers
              </a>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-secondary mr-2 mt-1" />
              Detailed solutions and explanations
            </li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-primary text-white px-6 py-2 flex gap-2 items-center hover:bg-blue-900 transition-all duration-300 cursor-pointer"
          >
            <FaDownload />
            Download PDF
          </motion.button>
        </motion.div>
        {/* Video Tutorials */}
        <motion.div
          className="bg-white border border-gray-300 p-6 flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <FaVideo className="text-primary text-4xl mb-3" />
          <div className="text-xl mb-3 text-primary">Video Tutorials</div>
          <ul className="text-gray-700 text-left space-y-2 mb-6">
            <li className="flex items-start">
              <FaCheck className="text-secondary mr-2 mt-1" />
              Expert-led video explanations
            </li>
            <li className="flex items-start">
              <FaCheck className="text-secondary mr-2 mt-1" />
              Interactive aviation simulations
            </li>
            <li className="flex items-start">
              <FaCheck className="text-secondary mr-2 mt-1" />
              Real-world aviation case studies
            </li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-primary text-white px-6 py-2 flex gap-2 items-center hover:bg-blue-900 transition-all duration-300 cursor-pointer"
          >
            <FaPlay />
            Watch Now
          </motion.button>
        </motion.div>
      </div>

      {/* Syllabus Overview */}
      <motion.div
        id="syllabus"
        className="max-w-7xl mx-auto bg-white border border-gray-300 p-4 md:p-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="text-primary text-center text-xl mb-6">
          Class-wise Syllabus Overview
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            <div className="text-primary text-lg mb-1">Class 8</div>
            <div className="text-gray-700 ">
              Basic Aviation History
              <br />
              Aircraft Parts & Functions
              <br />
              Flight Principles
              <br />
              Weather & Aviation
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <div className="text-primary text-lg mb-1">Class 9</div>
            <div className="text-gray-700 ">
              Aerodynamics Basics
              <br />
              Navigation Principles
              <br />
              Airport Operations
              <br />
              Aviation Mathematics
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.4 }}
          >
            <div className="text-primary text-lg mb-1">Class 10</div>
            <div className="text-gray-700">
              Aircraft Systems
              <br />
              Flight Planning
              <br />
              Aviation Physics
              <br />
              Air Traffic Control
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <div className="text-primary text-lg mb-1">Class 11</div>
            <div className="text-gray-700 ">
              Advanced Aerodynamics
              <br />
              Aviation Technology
              <br />
              Airline Operations
              <br />
              Aviation Law Basics
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.4 }}
          >
            <div className="text-primary text-lg mb-1">Class 12</div>
            <div className="text-gray-700">
              Commercial Aviation
              <br />
              Aviation Management
              <br />
              Emerging Technologies
              <br />
              Career Pathways
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
