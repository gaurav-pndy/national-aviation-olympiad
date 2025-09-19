import React from "react";
import { motion } from "framer-motion";

const Tab2 = () => {
  return (
    <div className="bg-[#f9fafb] rounded-lg p-6 max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-10">
      <motion.div
        className="lg:w-1/2"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-primary  text-xl mb-3">Study Resources</h3>
        <div className="bg-white p-4 mb-4">
          <span className="text-primary text-lg mb-2">
            Official Study Material
          </span>

          <p className="text-gray-700 mb-4">
            Comprehensive guides tailored for each class level covering all exam
            topics.
          </p>
        </div>

        <div className="bg-white p-4 mb-4">
          <span className="text-primary text-lg mb-2">Video Lectures</span>
          <p className="text-gray-700 mb-4">
            Expert-led video sessions explaining complex aviation concepts with
            practical demonstrations.
          </p>
        </div>
        <div className="bg-white p-4 mb-4">
          <span className="text-primary text-lg mb-2">Practice Tests</span>
          <p className="text-gray-700 mb-4">
            Mock examinations with detailed solutions and performance analytics.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="lg:w-1/2"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-primary  text-xl mb-3">Preparation Strategy</h3>
        <div className="bg-white p-4 mb-4">
          <span className="text-primary text-lg mb-2">
            Phase 1: Foundation (3 months)
          </span>
          <p className="text-gray-700">
            Build basic understanding of aviation principles and terminology.
          </p>
        </div>
        <div className="bg-white p-4 mb-4">
          <span className="text-primary text-lg mb-2">
            Phase 2: Application (2 months)
          </span>
          <p className="text-gray-700">
            Solve practical problems and case studies related to aviation
            scenarios.
          </p>
        </div>
        <div className="bg-white p-4">
          <span className="text-primary text-lg mb-2">
            Phase 3: Mastery (1 month)
          </span>
          <p className="text-gray-700">
            Intensive practice with mock tests and performance optimization.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Tab2;
