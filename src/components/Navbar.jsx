import React, { useState } from "react";
import { IoAirplane } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Expert Committee", href: "#expert-committee" },
    { name: "National Olympiad Exam", href: "#olympiad" },
    { name: "Contact", href: "#contact" },
  ];

  const location = useParams();
  const navigate = useNavigate();

  const handleScroll = (e, href) => {
    e.preventDefault();
    if (location.pathname === "/") {
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
    } else {
      navigate("/");

      setTimeout(() => {
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
      }, 500);
    }
  };
  return (
    <nav className="w-full z-20 fixed bg-white shadow-sm border-b border-gray-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-4 md:px-6">
        <div className="flex text-primary items-center">
          <img src="/logo.png" alt="Logo" className="h-10 md:h-14" />
        </div>
        <div className="hidden lg:flex space-x-8 text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="hover:text-primary transition-all duration-300 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
        <button
          className="lg:hidden focus:outline-none text-primary"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <FiX className="text-2xl" />
          ) : (
            <FiMenu className="text-2xl" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden absolute w-full bg-white shadow-md px-4 pb-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="flex flex-col text-lg space-y-6 py-4 text-gray-700">
              {navLinks.map((link) => (
                <span
                  key={link.name}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="hover:text-primary transition-all duration-300 cursor-pointer"
                >
                  {link.name}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
