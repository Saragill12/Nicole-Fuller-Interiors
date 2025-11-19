"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import assets14 from "../../../public/assest/assets14.jpg";
import assets15 from "../../../public/assest/assets15.jpg";

export default function HomeSection() {
  return (
    <div className="w-full min-h-screen flex ml-30 relative bg-white">

      {/* LEFT SECTION */}
      <div className="w-1/2 relative flex flex-col items-center">

        {/* IMAGE */}
        <img 
          src={assets14.src}
          className="w-full h-[400px] object-cover"
        />

        {/* ✨ COMING SOON ANIMATION ✨ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="-mt-20 ml-30"
        >
          <h1 className="text-center text-7xl font-serif mt-10">
            Coming soon
          </h1>
        </motion.div>

        {/* SMALL PARAGRAPH */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="text-center text-xs w-[53%] mx-auto mt-4 opacity-70 leading-relaxed"
        >
          A sneak peek into the projects that the studio has currently on our boards, 
          from New York City hotels, to the Los Angeles art district.
        </motion.p>

        {/* LINK */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="text-center mt-4 tracking-wide text-sm underline cursor-pointer"
        >
          View Projects
        </motion.p>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-1/2 relative flex justify-center items-center">

        {/* RIGHT IMAGE */}
        <img 
          src={assets15.src}
          className="w-[450px] h-[600px] object-cover relative z-10"
        />

        {/* ✨ ROTATED “NICOLE” TEXT — HALF INSIDE HALF OUTSIDE ✨ */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="absolute left-[15px] top-1/2 -translate-y-1/2 
                     -rotate-90 font-serif text-7xl z-20"
        >
          Nicole
        </motion.div>

      </div>

    </div>
  );
}
