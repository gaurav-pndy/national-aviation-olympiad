import {
  FaSchool,
  FaUserGraduate,
  FaCalendarAlt,
  FaRupeeSign,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { GrUserExpert } from "react-icons/gr";

export default function RegistrationProcess() {
  return (
    <section id="registration" className="py-16 bg-white overflow-x-hidden">
      {/* Heading and subtitle */}
      <motion.div
        className="max-w-4xl  px-4 md:px-6 mx-auto text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-[2.75rem]  mb-4 text-primary">
          Registration Process
        </h2>
        <p className="text-gray-700 max-w-3xl text-lg md:text-xl text-justify mx-auto">
          Simple and streamlined registration process for schools and
          individuals students to participate in India’s premier aviation
          education competition
        </p>
      </motion.div>

      {/* Registration Cards */}
      <div className="max-w-7xl  px-4 md:px-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* School Registration */}
        <motion.div
          className="bg-[#f9fafb]  border border-gray-300 p-6 flex flex-col"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className=" text-xl mb-5 text-primary">School Registration</div>
          <div className="space-y-5 mb-7">
            <div className="flex gap-3">
              <span className="bg-primary text-white shrink-0 w-8 h-8 flex items-center justify-center  text-base">
                1
              </span>
              <div>
                <div className=" text-primary text-lg">
                  School Authorization
                </div>
                <div className="text-gray-700 ">
                  Principal or authorized teacher register the school as an
                  Examination center with official documentation.
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="bg-primary text-white w-8 h-8 shrink-0 flex items-center justify-center  text-base">
                2
              </span>
              <div>
                <div className="text-lg text-primary">Student Enrollment</div>
                <div className="text-gray-700 ">
                  Schools enroll eligible students from Classes 8-12 with
                  required Documentation and consent forms.
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="bg-primary text-white w-8 h-8 shrink-0 flex items-center justify-center text-base">
                3
              </span>
              <div>
                <div className="text-lg text-primary">Examination Setup</div>
                <div className="text-gray-700 ">
                  Schools receive examination materials and guidelines for
                  conducting Stage 1 examinations.
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://zfrmz.in/nvuK30qA6ivVvwe2YfG7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-white  px-6 py-3 flex items-center justify-center gap-2 hover:bg-blue-900 transition-all duration-300 cursor-pointer mt-auto w-full"
            >
              Register School <FaSchool />
            </motion.button>
          </a>
        </motion.div>

        <motion.div
          className="bg-[#f9fafb]  border border-gray-300 p-6 flex flex-col"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className=" text-xl mb-5 text-primary">Expert Registration</div>
          <div className="space-y-5 mb-7">
            <div className="flex gap-3">
              <span className="bg-primary text-white  w-8 h-8 shrink-0 flex items-center justify-center  text-base">
                1
              </span>
              <div>
                <div className="text-lg text-primary">
                  Eligibility & Profile Submission
                </div>
                <div className="text-gray-700 ">
                  Professionals from academia, industry, or policy/regulatory
                  sectors can apply. <br />
                  Submit a brief profile highlighting expertise in aviation,
                  aerospace, STEM education, or policy.
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="bg-primary text-white  w-8 h-8 shrink-0 flex items-center justify-center  text-base">
                2
              </span>
              <div>
                <div className="text-lg text-primary">Review & Invitation</div>
                <div className="text-gray-700 ">
                  Applications will be carefully reviewed by the NAO team.{" "}
                  <br />
                  Selected experts will be warmly invited to participate in the
                  committee.
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="bg-primary text-white  w-8 h-8 shrink-0 flex items-center justify-center  text-base">
                3
              </span>
              <div>
                <div className="text-lg text-primary">
                  Committee Involvement
                </div>
                <div className="text-gray-700 ">
                  Collaborate on curriculum planning, examination design, and
                  evaluation guidelines. <br />
                  Contribute ideas in planning discussions and review sessions
                  to help make NAO a valuable experience for students.
                </div>
              </div>
            </div>
          </div>
          <a
            className="w-full"
            href="https://zfrmz.in/aaJiXotostGRiyitai9U"
            target="_blank"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-secondary text-primary  px-6 py-3 flex items-center justify-center w-full gap-2 hover:bg-yellow-400 transition-all duration-300 cursor-pointer mt-auto"
            >
              Register as an Expert <GrUserExpert />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
