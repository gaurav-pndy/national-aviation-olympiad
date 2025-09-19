import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

export default function OlympiadInstructions() {
  return (
    <section className="py-16 px-4 md:px-6  max-w-7xl mx-auto grid gap-8 md:grid-cols-2">
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
            <h3 className="text-primary text-lg mb-2">
              Level I – School Level:
            </h3>
            <p>
              Your Olympiad journey begins at your own school. You’ll attempt
              the first test, and if you’re among the <b>top 3 performers</b>,
              you’ll move on to the next stage.
            </p>
          </div>
          <div className="bg-[#f9fafb] border border-gray-300 p-4">
            <h3 className="text-primary text-lg mb-2">
              Level II – Zonal/State Level:
            </h3>
            <p>
              Here, you’ll compete with the <b>best students from your state</b>
              (Classes 8–12). The challenge gets tougher, and if you’re among
              the <b>top 5 winners of your state</b>, you’ll earn a place in the
              National Finals.
            </p>
          </div>
          <div className="bg-[#f9fafb] border border-gray-300 p-4">
            <h3 className="text-primary text-lg mb-2">
              Level III – National Level:
            </h3>
            <p>
              The ultimate stage takes place in <b>New Delhi.</b> All national
              qualifiers come together for the final round, which includes a
              <b>Personal Interview (PI) and team-based tasks.</b> The winners
              here will be crowned the{" "}
              <b>National Aviation Olympiad Champions.</b>.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
