import {
  FaCalendarAlt,
  FaMedal,
  FaCheckCircle,
  FaUserCheck,
  FaTrophy,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { FaDoorOpen, FaListCheck } from "react-icons/fa6";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";

const timeline = [
  // {
  //   title: "Registration Opens",
  //   desc: "Schools and students can begin the registration process",
  //   date: "September 1, 2025",
  //   side: "left",
  //   icon: <FaDoorOpen className="text-white" />,
  //   color: "white",
  // },
  // {
  //   title: "Registration Deadline",
  //   desc: "Final date for school and student registrations",
  //   date: "December 15, 2025",
  //   side: "right",
  //   icon: <FaUserCheck className="text-white" />,
  //   color: "white",
  // },
  {
    title: "1st Week of August 2026 – Phase 1 (School Level)",
    desc: "Initial round conducted within schools.",
    date: "January 15–31, 2026",
    side: "left",
    icon: <RiNumber1 className="text-white" />,
    color: "white",
  },
  // {
  //   title: "Stage 1 Results",
  //   desc: "Announcement of zonal qualifiers from each school",
  //   date: "February 15, 2026",
  //   side: "right",
  //   icon: <FaListCheck className="text-white" />,
  //   color: "white",
  // },
  {
    title: "3rd Week of October 2026 – Phase 2 (Zonal/State Level)",
    desc: "Regional-level competition across states/zones.",
    date: "April 5–20, 2026",
    side: "right",
    icon: <RiNumber2 className="text-white" />,
    color: "white",
  },
  // {
  //   title: "Stage 2 Results",
  //   desc: "Selection of 140 national finalists",
  //   date: "May 1, 2026",
  //   side: "right",
  //   icon: <FaMedal className="text-white" />,
  //   color: "white",
  // },
  {
    title: "7th December 2026 – Phase 3 (National Level)",
    desc: "Final round in New Delhi with interviews and team-based tasks",
    date: "June 15, 2026",
    side: "left",
    icon: <RiNumber3 className="text-white" />,
    color: "white",
  },
  // {
  //   title: "Awards Ceremony",
  //   desc: "Recognition of winners and distribution of prizes",
  //   date: "June 16, 2026",
  //   side: "right",
  //   icon: <FaTrophy className="text-black" />,
  //   color: "black",
  // },
];

export default function CompetitionTimeline() {
  return (
    <section className="py-16 bg-[#f9fafb] ">
      <motion.div
        className="max-w-4xl px-4 md:px-6 mx-auto text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-[2.4rem] mb-4 text-primary">
          Competition Timeline
        </h2>
        <p className="text-gray-700 max-w-3xl text-lg md:text-xl text-justify mx-auto">
          Complete schedule of the National Aviation Olympiad from registration
          to final awards ceremony, designed to provide adequate preparation
          time for all participants.
        </p>
      </motion.div>
      <div className="relative max-w-6xl px-4 md:px-6 mx-auto flex flex-col">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full border-r-2 border-gray-300 transform -translate-x-1/2 z-0 hidden md:block"></div>
        <div className="flex flex-col space-y-0">
          {timeline.map((item, idx) => (
            <motion.div
              key={item.title}
              className="relative flex justify-between items-center w-full mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.075, duration: 0.45 }}
            >
              {/* Left card */}
              {item.side === "left" ? (
                <div className="  md:w-[44%] pl-0 md:pl-0">
                  <div className="p-4 bg-white border border-gray-300 text-right ml-0 md:ml-auto">
                    <div className="text-lg md:text-xl text-primary mb-1">
                      {item.title}
                    </div>
                    <div className="mb-1 md:text-lg text-gray-700">
                      {item.desc}
                    </div>
                    {/* <div className="flex justify-end items-center gap-2 text-sm text-gray-600 mt-2">
                      <FaCalendarAlt className="inline mr-1 text-primary" />
                      {item.date}
                    </div> */}
                  </div>
                </div>
              ) : (
                <div className="w-[46%] md:w-[44%]" />
              )}
              {/* Timeline dot */}
              <div className="flex flex-col items-center z-10 w-[8%]">
                <div
                  className={`rounded-full  w-8 h-8 flex items-center justify-center 
                  ${item.color === "white" ? "bg-primary" : "bg-secondary"}
                `}
                >
                  {item.icon}
                </div>
              </div>
              {/* Right card */}
              {item.side === "right" ? (
                <div className=" md:w-[44%] pr-0 md:pr-0">
                  <div className="p-4 bg-white  border border-gray-300 text-left mr-0 md:mr-auto">
                    <div className="text-lg md:text-xl text-primary mb-1">
                      {item.title}
                    </div>
                    <div className="mb-1 md:text-lg text-gray-700">
                      {item.desc}
                    </div>
                    {/* <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                      <FaCalendarAlt className="inline mr-1 text-primary" />
                      {item.date}
                    </div> */}
                  </div>
                </div>
              ) : (
                <div className="w-[46%] md:w-[44%]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
