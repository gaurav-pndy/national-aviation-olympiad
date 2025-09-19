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
              Stage 1: School Level{" "}
              <p className="text-gray-800 text-sm">January 2026</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="text-primary text-lg mb-2">
                Examination Details
              </div>
              <ul className="text-gray-700   space-y-1">
                <li className="flex items-center">
                  <FaCircle className="text-secondary text-xs mr-2" /> Conducted
                  at individual schools across India
                </li>
                <li className="flex ">
                  <FaCircle className="text-secondary mt-1.5 text-xs mr-2" />{" "}
                  Multiple choice questions covering basic aviation concepts
                </li>
                <li className="flex ">
                  <FaCircle className="text-secondary mt-1.5 text-xs mr-2" />{" "}
                  Duration: 90 minutes
                </li>
                <li className="flex ">
                  <FaCircle className="text-secondary mt-1.5 text-xs mr-2" /> 50
                  questions total
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className=" mb-3 text-primary text-lg">
                Qualification Criteria
              </div>
              <div className=" w-full bg-white border border-gray-300 px-4 py-4 inline-block  text-2xl text-primary text-center">
                Top 3
                <div className="text-sm text-gray-600 font-normal">
                  students per school qualify for Zonal Level
                </div>
              </div>
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
              Stage 2: Zonal Level{" "}
              <p className="text-gray-800 text-sm">April 2026</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="text-primary text-lg mb-2">
                Examination Details
              </div>
              <ul className="text-gray-700  space-y-1">
                <li className="flex ">
                  <FaCircle className="text-secondary mt-1.5 text-xs mr-2" />
                  India divided into 4 zones: North, South, East, West
                </li>
                <li className="flex ">
                  <FaCircle className="text-secondary mt-1.5 text-xs mr-2" />
                  Advanced aviation content and problem-solving
                </li>
                <li className="flex ">
                  <FaCircle className="text-secondary mt-1.5 text-xs mr-2" />
                  Duration: 120 minutes
                </li>
                <li className="flex items-center">
                  <FaCircle className="text-secondary text-xs mr-2" />
                  75 questions including descriptive answers
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="mb-3 text-primary text-lg">
                Qualification Criteria
              </div>
              <div className=" w-full bg-white border border-gray-300 px-4 py-4 inline-block  text-2xl text-primary text-center">
                5
                <div className="text-sm mb-1 text-gray-600 font-normal">
                  winners per state (Classes 8-12)
                </div>
                140
                <div className="text-sm  text-gray-600 font-normal">
                  students qualify nationally
                </div>
              </div>
            </div>
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
              <p className="text-gray-800 text-sm">June 2026 in New Delhi</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="text-primary text-lg mb-2">
                Examination Details
              </div>
              <ul className="text-gray-700  space-y-1">
                <li className="flex ">
                  <FaCircle className="text-secondary mt-1.5 text-xs mr-2" />
                  Conducted in New Delhi with all national qualifiers
                </li>
                <li className="flex ">
                  <FaCircle className="text-secondary mt-1.5 text-xs mr-2" />
                  Comprehensive aviation knowledge assessment
                </li>
                <li className="flex ">
                  <FaCircle className="text-secondary mt-1.5 text-xs mr-2" />
                  Duration: 180 minutes
                </li>
                <li className="flex ">
                  <FaCircle className="text-secondary mt-1.5 text-xs mr-2" />
                  100 questions with practical applications
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="mb-3 text-primary text-lg">
                Awards & Recognition
              </div>
              <div className="w-full bg-white border border-gray-300 px-4 py-4 inline-block  text-gray-700 text-center space-y-1">
                <div className="flex items-start  text-left">
                  <FaTrophy className="text-secondary mt-1.5 text-xs mr-2" />
                  Winner receives Cash Prize (TBA)
                </div>
                <div className="flex items-start  text-left">
                  <FaTrophy className="text-secondary mt-1.5 text-xs mr-2" />
                  National recognition certificate
                </div>
                <div className="flex items-start  text-left">
                  <FaTrophy className="text-secondary mt-1.5 text-xs mr-2" />
                  Aviation industry internship opportunities
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
