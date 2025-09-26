import {
  FaPlaneDeparture,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";

export default function Footer() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    const offset = 80; // change this value for desired margin from top
    if (targetElement) {
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    } else if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-primary text-white pt-10 pb-6 ">
      <div className="max-w-7xl px-4 md:px-6 mx-auto grid grid-cols-2 xl:grid-cols-4 gap-10">
        {/* Brand & Socials */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex  mb-2 gap-2">
            <img src="/logo-light.png" alt="" className="h-16 md:h-20" />
          </div>
          <div className="text-sm mb-4 text-justify">
            National Aviation Olympiad is India’s premier aviation education
            awareness movement conceived and organized by the Centre for
            Scientific Outreach (CSO) to inspire the next generation of aviation
            professionals.
          </div>
          <div className="flex gap-5 mt-2 text-lg">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Linkedin">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <span
                className="cursor-pointer"
                onClick={(e) => handleScroll(e, "#about")}
              >
                About Us
              </span>
            </li>
            <li>
              <span
                className="cursor-pointer"
                onClick={(e) => handleScroll(e, "#expert-committee")}
              >
                Expert Committee
              </span>{" "}
            </li>
            <li>
              <span
                className="cursor-pointer"
                onClick={(e) => handleScroll(e, "#olympiad")}
              >
                Olympiad Exam
              </span>{" "}
            </li>
            <li>
              <span
                className="cursor-pointer"
                onClick={(e) => handleScroll(e, "#registration")}
              >
                Registration
              </span>{" "}
            </li>
            <li>
              <span
                className="cursor-pointer"
                onClick={(e) => handleScroll(e, "#contact")}
              >
                Contact
              </span>{" "}
            </li>
          </ul>
        </div>
        {/* Resources */}
        <div>
          <div className="font-semibold mb-2">Resources</div>
          <ul className="text-sm space-y-2">
            <li>
              <span
                className="cursor-pointer"
                onClick={(e) => handleScroll(e, "#resources")}
              >
                Study Materials
              </span>{" "}
            </li>
            <li>
              <span
                className="cursor-pointer"
                onClick={(e) => handleScroll(e, "#resources")}
              >
                Question Banks
              </span>{" "}
            </li>
            <li>
              <span
                className="cursor-pointer"
                onClick={(e) => handleScroll(e, "#resources")}
              >
                Video Tutorials
              </span>{" "}
            </li>
            <li>
              <span
                className="cursor-pointer"
                onClick={(e) => handleScroll(e, "#resources")}
              >
                Practice Tests
              </span>{" "}
            </li>
            <li>
              <span
                className="cursor-pointer"
                onClick={(e) => handleScroll(e, "#syllabus")}
              >
                Syllabus
              </span>{" "}
            </li>
            <li>
              <span
                className="cursor-pointer"
                onClick={(e) => handleScroll(e, "#contact")}
              >
                FAQs
              </span>{" "}
            </li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className="col-span-2 md:col-span-1">
          <div className="font-semibold mb-2">Contact Info</div>
          <div className="flex  gap-2 text-sm mb-4">
            <FaEnvelope className="mt-1" />
            hello@thecso.in <br />
            nao@thecso.in
          </div>

          <div className="flex gap-2 text-sm mb-4">
            <FaPhoneAlt className="mt-1" /> +91- 9211229927 <br />
            +91- 9773987836
          </div>

          <div className="flex gap-2 text-sm mb-2">
            <FaMapMarkerAlt className="mt-1" />
            CSOE Research Foundation <br />
            B-1, Third Floor, Greater Kailash Enclave – II, New Delhi – 110048,
            India.
          </div>
        </div>
      </div>
      <hr className="border-blue-400 my-6" />
      <div className="max-w-7xl mx-auto flex px-4 md:px-6 flex-col md:flex-row items-center justify-between text-sm text-blue-200">
        <div>© 2025 National Aviation Olympiad. All rights reserved.</div>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
