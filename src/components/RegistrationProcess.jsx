import {
  FaSchool,
  FaUserGraduate,
  FaCalendarAlt,
  FaRupeeSign,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";

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
          Simple and streamlined registration process for schools and individual
          students to participate in India's premier aviation education
          competition.
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
                  Principal or authorized teacher registers the school as an
                  examination center with official documentation.
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
                  Schools enroll eligible students from Classes 8–12 with
                  required documentation and consent forms.
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-primary text-white  px-6 py-3 flex items-center justify-center gap-2 hover:bg-blue-900 transition-all duration-300 cursor-pointer mt-auto"
          >
            Register School <FaSchool />
          </motion.button>
        </motion.div>
        {/* Individual Registration */}
        <motion.div
          className="bg-[#f9fafb]  border border-gray-300 p-6 flex flex-col"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className=" text-xl mb-5 text-primary">
            Individual Registration
          </div>
          <div className="space-y-5 mb-7">
            <div className="flex gap-3">
              <span className="bg-primary text-white  w-8 h-8 shrink-0 flex items-center justify-center  text-base">
                1
              </span>
              <div>
                <div className="text-lg text-primary">Student Details</div>
                <div className="text-gray-700 ">
                  Students provide personal information, current class, school
                  details, and contact information.
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="bg-primary text-white  w-8 h-8 shrink-0 flex items-center justify-center  text-base">
                2
              </span>
              <div>
                <div className="text-lg text-primary">Document Upload</div>
                <div className="text-gray-700 ">
                  Upload school ID card, class certificate, and parental consent
                  form for verification.
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="bg-primary text-white  w-8 h-8 shrink-0 flex items-center justify-center  text-base">
                3
              </span>
              <div>
                <div className="text-lg text-primary">Confirmation</div>
                <div className="text-gray-700 ">
                  Receive registration confirmation and examination center
                  allocation for Stage 1 participation.
                </div>
              </div>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-secondary text-primary  px-6 py-3 flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all duration-300 cursor-pointer mt-auto"
          >
            Register Student <FaUserGraduate />
          </motion.button>
        </motion.div>

        {/* Important Registration Information */}
        <motion.div
          className="bg-[#f9fafb]  border border-gray-300 p-6  md:col-span-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className=" text-xl mb-6 text-primary text-center">
            Important Registration Information
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <FaCalendarAlt className="text-primary text-2xl mb-2" />
              <div className="text-lg text-primary">Registration Deadline</div>
              <div className="text-gray-700">December 15, 2025</div>
            </div>
            <div className="flex flex-col items-center">
              <FaRupeeSign className="text-primary text-2xl mb-2" />
              <div className="text-lg text-primary">Registration Fee</div>
              <div className="text-gray-700 ">₹500 per student</div>
            </div>
            <div className="flex flex-col items-center">
              <FaUsers className="text-primary text-2xl mb-2" />
              <div className="text-lg text-primary">Eligibility</div>
              <div className="text-gray-700 ">Classes 8–12 students</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
