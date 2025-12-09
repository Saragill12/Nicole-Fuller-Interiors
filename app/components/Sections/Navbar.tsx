"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = ["Spaces", "Art Advisory", "Product", "About", "Contact"];
const splitLetters = (text: string) => text.split("");

export default function LuxuryMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Letter animation variants
  const letterVariants = {
    initial: { y: 50, opacity: 0, color: "#1A1A1A" }, // start below
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }, // slide up
    hover: {
      y: [-5, 5, -3, 3, 0], // bounce effect
      color: "#3D3D3D",
      transition: { duration: 0.6, repeat: Infinity },
    },
  };

  // Word container: stagger letters
  const wordVariants = {
    animate: {
      transition: { staggerChildren: 0.05 }, // letters appear one by one
    },
  };

  return (
    <>
      {/* Menu Button */}
      <button
        className="fixed top-5 right-5 z-50 px-3 py-2 border border-gray-400 rounded bg-white text-gray-700 tracking-wider"
        onClick={() => setIsOpen(true)}
      >
        MENU
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* LEFT MENU BOX */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-full w-[600px] bg-[#E7E1D8] p-12 md:p-16 relative border-r border-[#d7d1c8] flex-shrink-0"
            >
              {/* CLOSE BUTTON */}
              <div
                onClick={() => setIsOpen(false)}
                className="text-[10px] tracking-[0.35em] absolute top-10 right-10 cursor-pointer text-gray-700"
              >
                CLOSE
              </div>

              {/* MENU LIST */}
              <div className="mt-20 flex flex-col space-y-7 text-[#1A1A1A]">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="font-serif text-[2.4rem] ml-14 leading-tight cursor-pointer flex"
                    variants={wordVariants}
                    initial="initial"
                    animate="animate"
                  >
                    {splitLetters(item).map((letter, i) => (
                      <motion.span
                        key={i}
                        variants={letterVariants}
                        whileHover="hover"
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT EMPTY SPACE */}
            <div className="flex-1 bg-transparent" onClick={() => setIsOpen(false)}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
