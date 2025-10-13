import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqs = [
  {
    q: "Who can participate in the National Aviation Olympiad?",
    a: "The National Aviation Olympiad is open to all students currently enrolled in Classes 8 through 12 in any recognized school across India. Students must be registered through their school or individually with proper documentation.",
  },
  {
    q: "What is the registration fee and process?",
    a: "The registration fee is as defined here: <a class='text-blue-500' href='#school-instructions'>Registration Fees</a>",
  },
  {
    q: "How are the examination centers selected?",
    a: "Stage 1 examinations are conducted at registered schools. For Stage 2 and 3, examination centers are selected based on geographical distribution and infrastructure availability to ensure fair access for all participants.",
  },
  {
    q: "What study materials are provided?",
    a: "Registered participants receive comprehensive study guides, question banks, video tutorials, and practice materials. All materials are class-specific and aligned with the competition syllabus.",
  },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <section id="contact" className="py-16 overflow-x-hidden bg-white">
      {/* Heading and Description */}
      <motion.div
        className="max-w-4xl px-4 md:px-6 mx-auto text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-[2.4rem] mb-4 text-primary">
          Contact Information
        </h2>
        <p className="text-gray-700 max-w-3xl text-lg md:text-xl text-justify mx-auto">
          Get in touch with our team for any queries regarding registration,
          examination process, or general information about the National
          Aviation Olympiad.
        </p>
      </motion.div>

      {/* Top Info Cards */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-7xl px-4 md:px-6 mx-auto mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-[#f9fafb] border border-gray-300  p-5 flex flex-col items-center">
          <FaEnvelope className="text-primary text-3xl mb-2" />
          <div className="text-primary text-lg mb-1">Email</div>
          <div className="text-sm  text-gray-700 text-center break-all">
            nao@thecso.in
            <br />
            hello@thecso.in
          </div>
        </div>
        <div className="bg-[#f9fafb] border border-gray-300  p-5 flex flex-col items-center">
          <FaPhoneAlt className="text-primary text-3xl mb-2" />
          <div className="text-primary text-lg mb-1">Phone</div>
          <div className="text-sm  text-gray-700 text-center break-all">
            +91 9211229927 <br />
            +91 9773987836
          </div>
        </div>
        <div className="bg-[#f9fafb] border border-gray-300  p-5 flex flex-col items-center">
          <FaMapMarkerAlt className="text-primary text-3xl mb-2" />
          <div className="text-primary text-lg mb-1">Address</div>
          <div className="text-sm text-gray-700 text-center">
            CSOE Research Foundation <br />
            B-1, Third Floor, Greater Kailash Enclave – II, New Delhi – 110048,
            India.
          </div>
        </div>
        <div className="bg-[#f9fafb] border border-gray-300  p-5 flex flex-col items-center">
          <FaClock className="text-primary text-3xl mb-2" />
          <div className="text-primary text-lg mb-1">Office Hours</div>
          <div className="text-sm text-gray-700 text-center">
            Monday - Friday
            <br />
            9:00 AM - 6:00 PM IST
          </div>
        </div>
      </motion.div>

      {/* Form + FAQ */}
      <div className="max-w-7xl px-4 md:px-6 mx-auto ">
        {/* Contact Form */}
        <iframe
          aria-label="Contact Us"
          frameborder="0"
          className="!max-w-7xl w-full h-[56rem] "
          src="https://forms.zohopublic.in/aviakul/form/ContactUsFormNAOWebsite/formperma/uw90C5-NF8r8_15plo7Zr2LqEp6tEKQtfz3FA0SPrGo"
        ></iframe>
        {/* FAQ Section */}
        <motion.div
          className="bg-white border border-gray-300 rounded p-6 mt-10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-primary text-2xl mb-4">
            Frequently Asked Questions
          </div>
          <div className="space-y-2">
            {faqs.map((item, i) => (
              <div key={i} className="border border-gray-300  bg-[#f9fafb] p-4">
                <button
                  type="button"
                  onClick={() => setOpenFaq(i === openFaq ? -1 : i)}
                  className="w-full flex cursor-pointer items-center justify-between  text-left "
                >
                  <span>{item.q}</span>
                  <span
                    className={`text-primary  ml-3 text-xl transition-transform ${
                      i === openFaq ? "rotate-180" : ""
                    }`}
                  >
                    <IoIosArrowDown />
                  </span>
                </button>
                {i === openFaq && (
                  <div
                    className="py-3 text-gray-700 "
                    dangerouslySetInnerHTML={{ __html: item.a }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
