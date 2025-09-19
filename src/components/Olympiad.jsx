import React, { useState } from "react";
import { motion } from "framer-motion";
import Tab1 from "./OlympiadTabs/Tab1";
import Tab3 from "./OlympiadTabs/Tab3";
import Tab4 from "./OlympiadTabs/Tab4";
import Tab2 from "./OlympiadTabs/Tab2";

const zones = [
  {
    label: "North Zone",
    states: "Punjab, Haryana, Delhi, UP, Uttarakhand, HP, J&K",
  },
  {
    label: "South Zone",
    states: "Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, Telangana",
  },
  {
    label: "East Zone",
    states: "West Bengal, Odisha, Jharkhand, Bihar, Assam",
  },
  {
    label: "West Zone",
    states: "Maharashtra, Gujarat, Rajasthan, MP, Goa",
  },
];

export default function Olympiad() {
  const [activeTab, setActiveTab] = useState(0);

  const tabLabels = [
    "Exam Format",
    "How to Prepare",
    "Class Syllabus",
    "Question Bank",
  ];

  return (
    <section id="olympiad" className="py-16  bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center mb-10">
        <motion.h2
          className="text-3xl md:text-[2.75rem]  mb-4 text-primary"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          National Olympiad Exam
        </motion.h2>
        <motion.p
          className="text-gray-700 max-w-3xl text-lg md:text-xl text-justify mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          The National Aviation Olympiad is exclusively designed for students of
          Classes 8–12 across India. This comprehensive three stage competition
          evaluates students’ understanding of aviation principles, mathematics,
          physics, and general aviation knowledge through a structured and
          progressive examination system.
        </motion.p>
        {/* Tabs */}
        <div className="flex  gap-6 mt-12 text-gray-500 border-b border-gray-200 ">
          {tabLabels.map((label, index) => (
            <button
              key={label}
              onClick={() => setActiveTab(index)}
              className={`pb-2  cursor-pointer ${
                activeTab === index
                  ? "text-primary border-b-2 border-primary font-semibold"
                  : "hover:text-primary transition-colors"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 0 && <Tab1 zones={zones} />}

      {/* How to Prepare Tab */}
      {activeTab === 1 && <Tab2 />}

      {/* Class Syllabus Tab */}
      {activeTab === 2 && <Tab3 />}

      {/* Question Bank Tab */}
      {activeTab === 3 && <Tab4 />}
    </section>
  );
}
