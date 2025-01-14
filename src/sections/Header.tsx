"use client"; // This makes the component a Client Component

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-20">
        <div className="flex justify-center items-center relative p-3">
          <div className="absolute left-3">
            {/* <motion.div
              className="relative left-3 z-10 top-1"
              animate={{
                rotateY: [0, 180, 360],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            > */}
              <Image
                className="rounded-full"
                src="/assets/images/myLogo.jpg"
                alt="Logo"
                width={55}
                height={50}
              />
            {/* </motion.div> */}
          </div>

          <button
            className="block sm:hidden text-xl ml-auto mr-2 z-10"
            onClick={toggleMenu}
          >
            <GiHamburgerMenu />
          </button>

          {/* Desktop nav */}
          <nav className="hidden sm:flex border-white/15 rounded-full bg-white/10 ml-5">
            <a href="#" className="nav-items">
              Home
            </a>
            <a href="#" className="nav-items">
              About Me
            </a>
            <a href="#" className="nav-items">
              Projects
            </a>
            <a href="#" className="nav-items">
              Contact Me
            </a>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute left-0 right-0 top-0 bg-[rgb(0_0_0_/_0.32)] text-white p-6 shadow-lg h-screen w-screen backdrop-blur-sm "
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <nav className="mt-20 flex flex-col items-center space-y-6">
                <a
                  href="#"
                  className="nav-items .nav-items-mobile block py-3 px-6 text-2xl hover:text-[#ff6347] transition-all duration-300"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="nav-items .nav-items-mobile block py-3 px-6 text-2xl hover:text-[#ff6347] transition-all duration-300"
                >
                  About Me
                </a>
                <a
                  href="#"
                  className="nav-items .nav-items-mobile block py-3 px-6 text-2xl hover:text-[#ff6347] transition-all duration-300"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="nav-items .nav-items-mobile block py-3 px-6 text-2xl hover:text-[#ff6347] transition-all duration-300"
                >
                  Contact Me
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
