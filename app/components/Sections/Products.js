// components/CollaborationSection.js
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import assests09 from "../../../public/assest/assets09.jpg";
import assets10 from "../../../public/assest/assets10.jpg";

export default function CollaborationSection() {
  
  // Shared animation for both side texts
  const slide = {
    hidden: { opacity: 0, x: -120 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="w-screen h-screen flex overflow-hidden">

      {/* LEFT IMAGE */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="relative w-1/3 h-full overflow-visible"
      >
        <Image
          src={assests09}
          alt="Left"
          fill
          className="object-cover"
        />

        {/* ⭐ PRODUCTS — LEFT side half-in half-out */}
        <motion.h2
          variants={slide}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.4 }}
          className="
            absolute 
            top-1/2 
            left-[-7rem] 
            -translate-y-1/2 
            -rotate-90 
            text-7xl 
            font-serif 
            text-black 
            whitespace-nowrap 
            z-10
          "
        >
          Products
        </motion.h2>
      </motion.div>

      {/* CENTER TEXT - WITH POPUP ANIMATION */}
      <div className="w-1/3 h-full flex flex-col justify-center items-start px-8 bg-white">
        <motion.p 
          className="text-black text-base leading-[26px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Having spent her career designing bespoke interiors for discerning clientele,
          Nicole Fuller's furniture and object collection puts her exacting eye towards
          a series of one-of-a-kind pieces.
        </motion.p>

        <motion.span 
          className="mt-4 text-lg font-serif relative cursor-pointer
            after:block after:h-[2px] after:w-[95px] after:bg-[#B43934] after:mt-1"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Discover
        </motion.span>
      </div>

      {/* RIGHT IMAGE - KEEPS VISIBLE (NO ANIMATION) */}
      <div className="relative w-1/3 h-full overflow-visible">
        <Image
          src={assets10}
          alt="Right"
          fill
          className="object-cover"
        />

        {/* ⭐ COLLABORATIONS — RIGHT side half-in half-out */}
        <motion.h2
          variants={slide}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.4 }}
          className="
            absolute 
            top-1/2 
            right-[17rem] 
            -translate-y-1/2 
            -rotate-90 
            text-6xl 
            font-serif 
            text-black 
            whitespace-nowrap 
            z-10
          "
        >
          Collaborations
        </motion.h2>
      </div>

    </div>
  );
}