"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import assets09 from "../../../public/assest/assets09.jpg";
import assets10 from "../../../public/assest/assets10.jpg";

export default function CollaborationSection() {
  const slide = {
    hidden: { opacity: 0, x: -120 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="w-screen h-auto md:h-full flex flex-col md:flex-row overflow-hidden  md:mt-0">

      {/* LEFT IMAGE (Desktop Only) */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="relative w-full md:w-1/3 h-[380px] md:h-full hidden md:block"
      >
        <Image
          src={assets09}
          alt="Left"
          fill
          className="object-cover"
        />

        {/* DESKTOP ROTATED TEXT */}
        <motion.h2
          variants={slide}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.4 }}
          className="
            absolute
            top-1/2 
            left-[-10rem]
            -translate-y-1/2
            md:-rotate-90
            text-8xl
            font-serif
            text-black
            whitespace-nowrap
            z-10
          "
        >
          Products
        </motion.h2>
      </motion.div>

      {/* MOBILE IMAGE */}
      <div className="relative w-full h-[320px] md:hidden mb-10">
        <Image
          src={assets09}
          alt="Left Mobile"
          fill
          className="object-cover"
        />
      </div>

      {/* MOBILE HEADING */}
      <div className="md:hidden text-center mt-2 mb-6">
        <h2 className="text-5xl font-serif text-black">Products</h2>
      </div>

      {/* CENTER TEXT */}
      <div className="w-full md:w-1/4 h-auto md:h-full flex flex-col justify-center items-start px-6 md:px-8 bg-white mt-10 md:mt-0">
        <motion.p 
          className="text-black text-base   leading-[26px] md:text-base"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Having spent her career designing bespoke interiors for discerning clientele,
          Nicole Fuller&lsquo;s furniture and object collection puts her exacting eye towards
          a series of one-of-a-kind pieces.
        </motion.p>

        <motion.span 
          className="mt-4 text-lg md:text-lg font-serif relative cursor-pointer after:block after:h-[2px] after:w-[95px] after:mt-1"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Discover
        </motion.span>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-full md:w-1/3 h-[380px] md:h-full mt-10 md:mt-0">
        <Image
          src={assets10}
          alt="Right"
          fill
          className="object-cover"
        />

        {/* DESKTOP ROTATED TEXT */}
        <motion.h2
          variants={slide}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.4 }}
          className="
            absolute
            top-1/2
            right-4 md:right-[8rem]
            -translate-y-1/2
            md:-rotate-90
            text-4xl sm:text-5xl md:text-8xl
            font-serif
            text-black
            whitespace-nowrap
            z-10
            hidden md:block
          "
        >
          Collaborations
        </motion.h2>
      </div>

      {/* MOBILE HEADING */}
      <div className="md:hidden text-center mt-6 mb-10">
        <h2 className="text-5xl font-serif text-black">Collaborations</h2>
      </div>

    </div>
  );
}
