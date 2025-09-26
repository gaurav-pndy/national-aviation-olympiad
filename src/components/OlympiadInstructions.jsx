import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

export default function OlympiadInstructions() {
  return (
    <section className="py-16 px-4 md:px-6  max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-primary text-3xl  mb-6">
          Olympiad Instructions for Students
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 md:space-y-5 md:text-lg mx-auto">
          <li className="flex ">
            <FaCircle className=" shrink-0 text-secondary mt-2 text-xs mr-2" />
            Use a laptop/desktop with webcam, microphone, and stable internet.
          </li>
          <li className="flex ">
            <FaCircle className=" shrink-0 text-secondary mt-2 text-xs mr-2" />
            Login with official credentials and keep ID/admit card ready.
          </li>
          <li className="flex ">
            <FaCircle className=" shrink-0 text-secondary mt-2 text-xs mr-2" />
            Sit in a quiet, well-lit room with no one else present.
          </li>
          <li className="flex ">
            <FaCircle className=" shrink-0 text-secondary mt-2 text-xs mr-2" />
            Keep webcam on and follow all on-screen instructions.
          </li>
          <li className="flex ">
            <FaCircle className=" shrink-0 text-secondary mt-2 text-xs mr-2" />
            Do not use phones, notes, or collaborate with others.
          </li>
          <li className="flex ">
            <FaCircle className=" shrink-0 text-secondary mt-2 text-xs mr-2" />
            Do not refresh or switch browser tabs, report technical issues
            immediately.
          </li>
          <li className="flex ">
            <FaCircle className=" shrink-0 text-secondary mt-2 text-xs mr-2" />
            Submit all answers before time ends and confirm submission.
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-primary text-3xl  mb-6">
          Olympiad Journey for Students
        </h2>
        <div className="space-y-4   text-gray-700">
          <div className="bg-[#f9fafb] border border-gray-300 p-4">
            <h3 className="text-primary text-lg ">Level I – School Level:</h3>
            <p>
              Conducted within each school; Top 10 Students from Group 1
              (Classes 8, 9 & 10) and Top 5 Students from Group 2 (Classes 11 &
              12) qualify for the State Level
            </p>
          </div>
          <div className="bg-[#f9fafb] border border-gray-300 p-4">
            <h3 className="text-primary text-lg ">
              Level II – Zonal/State Level:
            </h3>
            <p>
              Top students from each state (Classes 8-12) compete; 5 winners per
              State/UT qualify for the National Level
            </p>
          </div>
          <div className="bg-[#f9fafb] border border-gray-300 p-4">
            <h3 className="text-primary text-lg ">
              Level III – National Level:
            </h3>
            <p>
              The final round will be held in New Delhi, with personal
              interviews (PI) and team-based tasks to determine the National
              Aviation Olympiad champion.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
