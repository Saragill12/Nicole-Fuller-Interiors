// components/PressSection.js
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import assets11 from "../../../public/assest/assets11.jpg";  
import assets12 from "../../../public/assest/assets12.jpg";  
import assets13 from "../../../public/assest/assets13.jpg";  

export default function PressSection() {
  return (
    <section className="w-full bg-white ml-40 flex justify-center pt-10 pb-20">

      <div className="w-full max-w-7xl flex justify-between px-10 relative">

        {/* LEFT SIDE TEXT */}
        <div className="w-[28%] text-black text-sm leading-relaxed pt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Recognized in her industry as a tastemaker, Nicole Fuller cultivates  
            long standing and mutually beneficial collaborations with leading 
            product companies.
          </motion.div>
          
          <motion.div 
            className="mt-4 font-serif tracking-wide text-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Browse
          </motion.div>
        </div>

        {/* CENTER IMAGES COLUMN */}
        <div className="flex flex-col items-center gap-12">

          {/* TOP SMALL IMAGE — slight down */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}   // ⬇ Slightly downward
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ amount: 0.4, once: false }}
            className="w-[120px] -mt-1 h-[120px]"
          >
            <Image
              src={assets11}
              alt="Top"
              className="w-full h-auto object-cover object-bottom"
            />
          </motion.div>

          {/* CENTER BIG IMAGE — slight up */}
          <motion.div
            initial={{ opacity: 0, y: -25 }}   // ⬆ Slight upward
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ amount: 0.4, once: false }}
            className="relative mt-2 w-[240px]"
          >
            <Image
              src={assets12}
              alt="Center"
              className="w-full h-auto object-cover"
            />

            <motion.h2 
              className="absolute top-1/2 left-[-80px] -translate-y-1/2 -rotate-90 
                text-6xl font-serif text-black leading-none"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Press
            </motion.h2>
          </motion.div>

          {/* BOTTOM SMALL IMAGE — more up */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}   // ⬆ More upward
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ amount: 0.4, once: false }}
            className="w-[100px] -mt-10"
          >
            <Image
              src={assets13}
              alt="Bottom"
              className="w-full h-auto object-cover"
            />
          </motion.div>

        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="w-[28%] text-black text-sm leading-relaxed text-left pt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            The latest press coverage on the studio,  
            our projects and our collaborations.
          </motion.div>
          
          <motion.div 
            className="mt-4 font-serif tracking-wide text-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Discover
          </motion.div>
        </div>

      </div>
    </section>
  );
}