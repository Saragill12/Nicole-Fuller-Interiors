"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";

const menuItems = [
  { label: "Spaces", href: "/spaces" },
  { label: "Art Advisory", href: "/art-advisory" },
  { label: "Product", href: "/product" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const splitLetters = (text: string) => text.split("");

// LETTER ANIMATION (Subtle dance)
const letterVariants: Variants = {
  initial: { y: 0, color: "#000000" },
  animate: { y: 0, color: "#000000", transition: { duration: 0.45, ease: "easeOut" } },
  hover: {
    y: [0, -6, 3, -3, 0], // subtle movement
    color: "#B43934",
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

// WORD STAGGER (letters)
const wordVariants: Variants = {
  animate: { transition: { staggerChildren: 0.05 } },
  hover: { transition: { staggerChildren: 0.08 } }, // letters dance one by one
};

// PANEL SLIDE
const panelVariants: Variants = {
  initial: { x: "100%" },
  animate: { x: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { x: "100%", transition: { duration: 0.45, ease: "easeInOut" } },
};

// WORDS WRAPPER STAGGER (all words)
const containerVariants: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.15 } },
  hover: { transition: { staggerChildren: 0.15 } }, // word wave
};

export default function LuxuryMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* OPEN BUTTON */}
      <button
        className="fixed top-6 right-6 z-50 px-3 py-2 border border-gray-500 bg-white tracking-wider"
        onClick={() => setIsOpen(true)}
      >
        MENU
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* RIGHT SLIDE PANEL */}
            <motion.div
              variants={panelVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-[600px] h-full bg-[#E7E1D8] border-l border-[#d7d1c8] p-14 relative"
            >
              {/* CLOSE BUTTON */}
              <div
                onClick={() => setIsOpen(false)}
                className="absolute top-10 right-10 text-[11px] tracking-[0.35em] cursor-pointer"
              >
                CLOSE
              </div>

              {/* MENU ITEMS */}
              <motion.div
                className="mt-24 flex flex-col space-y-8"
                variants={containerVariants}
                initial="initial"
                animate="animate"
              >
                {menuItems.map((item, idx) => (
                  <Link key={idx} href={item.href} onClick={() => setIsOpen(false)}>
                    <motion.div
                      variants={wordVariants}
                      className="font-serif text-[2.5rem] leading-none cursor-pointer flex relative"
                      whileHover="hover"
                    >
                      {splitLetters(item.label).map((letter, i) => (
                        <motion.span
                          key={i}
                          className="relative inline-block"
                          variants={letterVariants}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            </motion.div>

            {/* CLICK OUTSIDE */}
            <div className="flex-1" onClick={() => setIsOpen(false)}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
