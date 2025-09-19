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
          <div className="flex items-center mb-4 gap-2">
            <IoAirplane className="text-2xl" />
            <div className="font-semibold text-lg">
              National Aviation Olympiad
            </div>
          </div>
          <div className="text-sm mb-4 text-justify">
            India's premier aviation education competition inspiring the next
            generation of aviation professionals through comprehensive knowledge
            assessment and skill development.
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
            <FaEnvelope className="mt-1" /> info@nationalaviationolympiad.com{" "}
            <br /> support@nationalaviationolympiad.com
          </div>

          <div className="flex gap-2 text-sm mb-4">
            <FaPhoneAlt className="mt-1" /> +91-11-2345-6789 <br />{" "}
            +91-11-2345-6790
          </div>

          <div className="flex gap-2 text-sm mb-2">
            <FaMapMarkerAlt className="mt-1" />
            National Aviation Olympiad Headquarters <br />
            New Delhi, India 110001
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
