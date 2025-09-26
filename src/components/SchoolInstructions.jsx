import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

export default function SchoolInstructions() {
  return (
    <section className="bg-white py-16 px-4 md:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl  text-primary mb-6">School Instructions</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-5 ">
          <li className="flex ">
            <FaCircle className=" shrink-0 text-secondary mt-2 text-xs mr-2" />
            <span>
              {" "}
              Participation is open only through <b>school registration</b>.
            </span>
          </li>
          <li className="flex ">
            <FaCircle className=" shrink-0 text-secondary mt-2 text-xs mr-2" />
            <span>
              A registration form will be sent to schools; they must complete
              the form and pay the required fees.
            </span>
          </li>
          <li className="flex ">
            <FaCircle className=" shrink-0 text-secondary mt-2 text-xs mr-2" />
            <span>
              {" "}
              The <b>examination fee is ₹200 per student</b>.
            </span>
          </li>
          <li className="flex flex-col">
            <p className="flex ">
              <FaCircle className=" shrink-0 text-secondary mt-2 text-xs mr-2" />
              <span>
                {" "}
                <b>Fee Structure:</b>.
              </span>
            </p>
            <ul className="mt-2 grid md:grid-cols-2 gap-4 list-inside  text-gray-700  pl-6">
              <li className="bg-[#f9fafb] border border-gray-300 p-4">
                <h3 className="text-primary text-lg ">Till 31 March 2026:</h3>{" "}
                Rs. 200/ - per Male student <br />
                Rs. 160/ - per Female student
              </li>
              <li className="bg-[#f9fafb] border border-gray-300 p-4">
                <h3 className="text-primary text-lg ">From 01 April 2026:</h3>{" "}
                Rs. 250/ - per Male student <br />
                Rs. 200/ - per Female student
              </li>
            </ul>
          </li>
          <li className="flex ">
            <FaCircle className=" shrink-0 text-secondary mt-2 text-xs mr-2" />
            <span>
              {" "}
              Each school must enroll a <b>minimum of 30 students</b> to
              participate in the Olympiad.
            </span>
          </li>
          <li className="flex ">
            <FaCircle className=" shrink-0 text-secondary mt-2 text-xs mr-2" />
            <span>
              {" "}
              Exams will be conducted <b>online</b> through secure software or
              LMS.
            </span>
          </li>
          {/* <li className="flex ">
            <FaCircle className=" shrink-0 text-secondary mt-2 text-xs mr-2" />
            <span>
              {" "}
              The Olympiad will be held in <b>three levels</b>:
            </span>
          </li> */}
        </ul>
      </motion.div>
    </section>
  );
}
