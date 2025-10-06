import React from "react";
import { motion } from "framer-motion";
import { FaCircle, FaTrophy } from "react-icons/fa";

const Tab1 = ({ zones }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      {/* Stage 1: School Level */}
      <motion.div
        className="bg-[#f9fafb] border border-gray-300 p-6  mx-auto mb-8 flex flex-col md:flex-row gap-6 md:items-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex-grow">
          <div className="flex gap-4 items-center mb-4">
            <div className="bg-primary text-white  w-12 h-12 flex items-center justify-center text-2xl  mb-4 md:mb-0">
              1
            </div>
            <div className=" text-primary  text-xl">
              Stage 1: School Level (Online Screening Test){" "}
              <p className="text-gray-800 text-sm">August 2026</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="text-primary text-lg mb-2">
                Examination Details
              </div>
              <ul className="text-gray-700   space-y-1">
                <li className="flex items-center">
                  <FaCircle className=" shrink-0 text-secondary text-xs mr-2" />{" "}
                  Exam to be conducted at individual schools across India{" "}
                </li>
                <li className="flex ">
                  <FaCircle className=" shrink-0 text-secondary mt-1.5 text-xs mr-2" />{" "}
                  <span>
                    Multiple choice questions covering basic aviation concepts{" "}
                  </span>
                </li>
                <li className="flex ">
                  <FaCircle className=" shrink-0 text-secondary mt-1.5 text-xs mr-2" />{" "}
                  <span>
                    {" "}
                    <strong> Duration: </strong> 65 minutes{" "}
                  </span>
                </li>
                <li className="flex ">
                  <FaCircle className=" shrink-0 text-secondary mt-1.5 text-xs mr-2" />{" "}
                  <span>
                    <strong> No. of Questions: </strong> 60{" "}
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className=" mb-3 text-primary text-lg">
                Qualification Criteria
              </div>
              <div className=" w-full bg-white border border-gray-300 px-4 py-4 inline-block  text-2xl text-primary text-center">
                Top 15
                <div className="text-sm text-gray-600 font-normal">
                  Students per school qualify for Zonal Level. (Group 1 – 10 |
                  Group 2 – 5){" "}
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 text-primary text-lg mt-6">Group Division</div>
          <div className="text-xs text-gray-600 mt-4 grid grid-cols-2  gap-4">
            <div className="border text-center border-gray-300 p-4 bg-white">
              <span className="mb-2 text-lg text-primary">Group 1</span>

              <p>CLasses 8, 9 & 10</p>
            </div>

            <div className="border text-center border-gray-300 p-4 bg-white">
              <span className="mb-2 text-lg text-primary">Group 2</span>

              <p>CLasses 11 & 12</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stage 2: Zonal Level */}
      <motion.div
        className="bg-[#f9fafb] border border-gray-300 p-6  mx-auto mb-8 flex flex-col md:flex-row gap-6 md:items-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.06, duration: 0.6 }}
      >
        <div className="flex-grow">
          <div className="flex gap-4 items-center mb-4">
            <div className="bg-primary text-white  w-12 h-12 flex items-center justify-center text-2xl  mb-4 md:mb-0">
              2
            </div>
            <div className=" text-primary  text-xl">
              Stage 2: State/UT Round{" "}
              <p className="text-gray-800 text-sm">October 2026</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="text-primary text-lg mb-2">
                Examination Details
              </div>
              <ul className="text-gray-700  space-y-1">
                <li className="flex ">
                  <FaCircle className=" shrink-0 text-secondary mt-1.5 text-xs mr-2" />
                  <span>
                    {" "}
                    Exam to be conducted in 4 zones:{" "}
                    <b>North, South, East, West </b>{" "}
                  </span>
                </li>
                <li className="flex ">
                  <FaCircle className=" shrink-0 text-secondary mt-1.5 text-xs mr-2" />
                  <span> Advanced aviation content and problem-solving </span>
                </li>
                <li className="flex ">
                  <FaCircle className=" shrink-0 text-secondary mt-1.5 text-xs mr-2" />
                  <span>
                    {" "}
                    <b> Duration:</b> 95 minutes{" "}
                  </span>
                </li>
                <li className="flex items-center">
                  <FaCircle className=" shrink-0 text-secondary text-xs mr-2" />
                  <span>
                    {" "}
                    <b> No. of Questions: </b> 90{" "}
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="mb-3 text-primary text-lg">
                Qualification Criteria
              </div>
              <div className=" w-full bg-white border border-gray-300 px-4 py-4 inline-block  text-2xl text-primary text-center">
                Top 5
                <div className="text-sm mb-1 text-gray-600 font-normal">
                  winners per state & UT
                </div>
                145
                <div className="text-sm  text-gray-600 font-normal">
                  students qualify at National Level
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 text-primary text-lg mt-6">
            Zone Distribution
          </div>
          <div className="text-xs text-gray-600 mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {zones.map((z) => (
              <div
                className="border text-center border-gray-300 p-4 bg-white"
                key={z.label}
              >
                <span className="mb-2 text-lg text-primary">{z.label}</span>

                <p>{z.states}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Stage 3: National Level */}
      <motion.div
        className="bg-[#f9fafb] border border-gray-300 p-6  mx-auto mb-8 flex flex-col md:flex-row gap-6 md:items-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.12, duration: 0.6 }}
      >
        <div className="flex-grow">
          <div className="flex gap-4 items-center mb-4">
            <div className="bg-primary text-white  w-12 h-12 flex items-center justify-center text-2xl  mb-4 md:mb-0">
              3
            </div>
            <div className=" text-primary  text-xl">
              Stage 3: National Level{" "}
              <p className="text-gray-800 text-sm">December 2026, New Delhi</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="text-primary text-lg mb-2">
                Examination Details
              </div>
              <ul className="text-gray-700  space-y-1">
                <li className="flex ">
                  <FaCircle className=" shrink-0 text-secondary mt-1.5 text-xs mr-2" />
                  <span>
                    {" "}
                    Exam will be conducted in New Delhi among all the National
                    Qualifiers{" "}
                  </span>
                </li>
                <li className="flex ">
                  <FaCircle className=" shrink-0 text-secondary mt-1.5 text-xs mr-2" />
                  <span> Comprehensive Aviation Knowledge Assessment</span>
                </li>
                <li className="flex ">
                  <FaCircle className=" shrink-0 text-secondary mt-1.5 text-xs mr-2" />
                  <span>
                    {" "}
                    <b>Duration:</b> 4 Hours{" "}
                  </span>
                </li>
                <li className="flex ">
                  <FaCircle className=" shrink-0 text-secondary mt-1.5 text-xs mr-2" />
                  <span>
                    {" "}
                    <b>Mode of Examination:</b> Viva{" "}
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="mb-3 text-primary text-lg">
                Awards & Recognition
              </div>
              <div className="w-full bg-white border border-gray-300 px-4 py-4 inline-block  text-gray-700 text-center space-y-1">
                <div className="flex items-start  text-left">
                  <FaTrophy className="shrink-0 text-secondary mt-1.5 text-xs mr-2" />
                  <span> Winners receive cash prize (TBA)</span>
                </div>
                <div className="flex items-start  text-left">
                  <FaTrophy className="shrink-0 text-secondary mt-1.5 text-xs mr-2" />
                  National Recognition Certificate
                </div>
                <div className="flex items-start  text-left">
                  <FaTrophy className="shrink-0 text-secondary mt-1.5 text-xs mr-2" />
                  <span> Internship Opportunities in Aviation Industry </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Tab1;
