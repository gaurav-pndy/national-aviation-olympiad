import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Tab4 = () => {
  return (
    <div className="bg-[#f9fafb] rounded-lg p-6 max-w-7xl mx-auto px-4 md:px-6  grid lg:grid-cols-2 gap-10">
      <h3 className="lg:col-span-2 text-primary text-xl mb-3">
        Question Bank & Practice Materials
      </h3>
      <motion.div
        className=""
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <div className="text-primary text-lg mb-4">Available Resources</div>
          <div className="space-y-4">
            {[
              {
                label: "Sample Papers Class 8-9",
                desc: "50 questions with detailed solutions",
              },
              {
                label: "Sample Papers Class 10-11",
                desc: "75 questions with explanations",
              },
              {
                label: "Sample Papers Class 12",
                desc: "100 questions with case studies",
              },
            ].map((r) => (
              <div
                key={r.label}
                className="flex items-center bg-white border border-gray-300 p-4 justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-block text-primary text-2xl">
                    <IoDocumentTextOutline />
                  </span>
                  <div>
                    <div className="">{r.label}</div>
                    <div className="text-sm text-gray-600 ">{r.desc}</div>
                  </div>
                </div>
                <button className="bg-primary text-white px-4 py-2 text-sm  hover:bg-blue-900 transition-all duration-300 cursor-pointer">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        className=""
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <div className="text-primary text-lg mb-4">Question Types</div>
          <div className="space-y-4 mb-8">
            {[
              {
                label: "Multiple Choice Questions (60%)",
                desc: "Conceptual understanding and application",
              },
              {
                label: "Numerical Problems (25%)",
                desc: "Calculations and quantitative analysis",
              },
              {
                label: "Case Studies (15%)",
                desc: "Real-world aviation scenarios",
              },
            ].map((t) => (
              <div
                key={t.label}
                className=" bg-white border border-gray-300 p-4 "
              >
                <div>{t.label}</div>
                <div className="text-gray-600 text-sm">{t.desc}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#f3f5f9] p-6 border border-gray-300 text-primary  text-xl text-center">
            Free Practice Platform
            <div className="text-gray-700 text-sm mt-2 font-normal">
              Access our online practice platform with unlimited mock tests,
              performance tracking, and detailed analytics.
            </div>
            <button className="mt-4 w-full bg-primary text-white px-4 py-2 text-base hover:bg-blue-900 transition-all duration-300 cursor-pointer">
              Access Practice Platform
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Tab4;
