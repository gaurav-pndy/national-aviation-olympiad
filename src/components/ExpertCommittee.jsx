import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";

const experts = [
  {
    name: "Dr. Rajesh Kumar",
    title: "Chairman & Aviation Expert",
    desc: "Former Director General of Civil Aviation with 30+ years of experience in aviation regulatory affairs and policy development. Expert in aviation safety and international aviation standards.",
    img: "/male.avif",
    icons: [<FaLinkedin key="linkedin" />, <FaTwitter key="twitter" />],
  },
  {
    name: "Prof. Meera Sharma",
    title: "Academic Coordinator",
    desc: "Professor of Aerospace Engineering at IIT Delhi with expertise in aircraft design and aerodynamics. Published over 100 research papers and holds multiple patents in aviation technology.",
    img: "/female.avif",
    icons: [<FaLinkedin key="linkedin" />, <FaGoogle key="google" />],
  },
  {
    name: "Capt. Arjun Singh",
    title: "Industry Representative",
    desc: "Senior Captain with Air India having 25+ years of flying experience. Certified flight instructor and aviation safety expert with extensive knowledge of modern aircraft systems.",
    img: "/male.avif",
    icons: [<FaLinkedin key="linkedin" />, <FaInstagram key="instagram" />],
  },
  {
    name: "Dr. Priya Patel",
    title: "Curriculum Designer",
    desc: "Educational psychologist specializing in STEM curriculum development. Former consultant to NCERT with expertise in designing age-appropriate aviation education programs for students.",
    img: "/female.avif",
    icons: [<FaLinkedin key="linkedin" />, <FaFacebookF key="facebook" />],
  },
  {
    name: "Mr. Vikash Gupta",
    title: "Technology Advisor",
    desc: "Chief Technology Officer at a leading aviation software company. Expert in aviation simulation, air traffic management systems, and emerging technologies in aviation industry.",
    img: "/male.avif",
    icons: [<FaLinkedinIn key="linkedin" />, <FaGithub key="github" />],
  },
  {
    name: "Ms. Anjali Reddy",
    title: "Operations Director",
    desc: "Former airport operations manager with expertise in aviation logistics and ground operations. Currently heads operations at a major Indian airline with focus on efficiency and safety.",
    img: "/female.avif",
    icons: [<FaLinkedinIn key="linkedin" />, <FaTwitter key="twitter" />],
  },
];

export default function ExpertCommittee() {
  return (
    <section id="expert-committee" className="py-16  bg-[#f9fafb]">
      <div className="max-w-7xl px-4 md:px-6 mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl md:text-[2.75rem]  mb-4 text-primary"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Expert Committee
        </motion.h2>
        {/* <motion.p
          className="text-gray-700 max-w-3xl text-lg md:text-xl text-justify mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.6 }}
        >
          <b>
            To express your interest in joining this committee, please complete
            the form below for consideration
          </b>
        </motion.p> */}
      </div>
      {/* <div className="max-w-7xl px-4 md:px-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experts.map((e, idx) => (
          <motion.div
            key={e.name}
            className="bg-white border border-gray-300 p-6 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 * idx, duration: 0.6 }}
          >
            <img
              src={e.img}
              alt={e.name}
              className="mb-4 w-24 h-24 object-cover border border-gray-400"
            />
            <div className=" text-primary text-xl">{e.name}</div>
            <div className=" text-gray-700 mb-2">{e.title}</div>
            <div className="mb-4 text-gray-600 text-justify ">{e.desc}</div>
            <div className="flex gap-4 text-gray-400 mt-auto text-base">
              {e.icons.map((icon) => icon)}
            </div>
          </motion.div>
        ))}
      </div> */}
      <div className="text-2xl font-semibold text-center">TBA</div>
    </section>
  );
}
