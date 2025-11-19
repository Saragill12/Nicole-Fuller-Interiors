"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function LuxuryMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Interiors",
    "Nicole",
    "The Studio",
    "Art Advisory",
    "Trending",
    "Products",
    "Collaborations",
    "Press",
    "In Progress",
  ];

  const splitLetters = (text) => {
    if (text === "In Progress") {
      return ["I", "n", " ", "P", "r", "o", "g", "r", "e", "s", "s"];
    }
    return text.split("");
  };

  const letterVariants = {
    hover: {
      y: [0, -4, 0],
      transition: {
        duration: 0.2, 
        ease: "easeOut",
      },
      color: "#B43934",
    },
  };

  const spaceVariants = {
    hover: {
      transition: {
        duration: 0,
      },
    },
  };

  const underlineVariants = {
    hover: {
      width: "40px",
      transition: { duration: 0.2, ease: "easeOut" }, 
    },
    initial: { width: 0 },
  };

  return (
    <div>
      <motion.button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-8 right-10 flex items-center space-x-3 z-50 bg-white px-4 py-2 rounded-lg border border-gray-200"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="tracking-[0.1em] text-xs text-gray-600">MENU</span>
        <div className="w-6 h-6 flex flex-col items-center justify-center relative">

        </div>
      </motion.button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            // className="fixed inset-0 w-160 ml-90 bg-gray-300 z-40  flex items-center justify-center px-6"
                        className="fixed  inset-0 bg-gray-300/50 backdrop-blur-sm z-40 flex items-center justify-center px-6"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }} 
          >
            <div className="absolute inset-0" onClick={() => setIsMenuOpen(false)} />

            <motion.div className="relative w-full max-w-4xl -ml-1 mx-auto text-center">
          

              <div className="flex flex-col space-y-1 mb-12 items-center">
                {menuItems.map((item) => (
                  <motion.div
                    key={item}
                    className="relative cursor-pointer py-2"
                    initial="rest"
                    whileHover="hover"
                  >
                    <motion.div
                      className="flex justify-center space-x-1"
                      variants={{
                        hover: {
                          transition: {
                            staggerChildren: 0.01, 
                            delayChildren: 0,
                          },
                        },
                      }}
                    >
                      {splitLetters(item).map((letter, i) => (
                        <motion.span
                          key={i}
                          variants={letter === " " ? spaceVariants : letterVariants}
                          className={`text-4xl font-bold md:text-4xl  font-light ${
                            letter === " " ? "w-3" : "text-gray-700"
                          }`}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.div
                      className="absolute -left-12 top-1/2 h-px bg-[#B43934] -translate-y-1/2"
                      variants={underlineVariants}
                      initial="initial"
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div className="w-20 h-px bg-gray-300 mx-auto mb-8" />

           
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}