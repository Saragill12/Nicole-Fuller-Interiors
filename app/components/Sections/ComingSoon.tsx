"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import assets14 from "../../../public/assest/assets14.jpg";
import assets15 from "../../../public/assest/assets15.jpg";

export default function HomeSection() {
  return (
    <div className="w-full min-h-screen bg-white relative flex flex-col lg:flex-row gap-10 lg:gap-0 px-4 lg:ml-30">

      {/* LEFT TEXT/IMAGE */}
      <div className="w-full lg:w-1/2 flex flex-col items-center">

        <img
          src={assets14.src}
          className="w-[750px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[400px] object-cover sm:-ml-0 md:-ml-0 lg:-ml-50"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="mt-6 lg:-mt-10"
        >
          <h1 className="text-center text-gray-800 text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl font-serif">
            Coming soon
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="text-center text-sm sm:text-base md:text-lg lg:text-xs opacity-70 w-full sm:w-[90%] md:w-[80%] lg:w-[58%] mx-auto mt-8 leading-relaxed"
        >
          A sneak peek into the projects that the studio has currently on our boards,
          from New York City hotels, to the Los Angeles art district.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="text-center mt-6 tracking-wide text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer"
        >
          View Projects
        </motion.p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full lg:w-1/2 relative flex justify-center items-center mt-10 lg:mt-0">

        <img
          src={assets15.src}
          className="w-full sm:w-[350px] md:w-[450px] lg:w-[650px] -mt-10 sm:-mt-5 md:-mt-10 lg:-mt-40 h-auto object-cover relative z-10"
        />

        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="
            absolute z-20 font-serif
            text-4xl sm:text-5xl md:text-7xl lg:text-8xl
            top-[85%] sm:top-[80%] md:top-1/2 lg:top-1/2
            left-1/2 sm:left-[50%] md:-left-[80px] lg:-left-[90px]
            -translate-x-1/2 sm:-translate-x-1/2 md:-translate-x-0 lg:-translate-x-0
            -translate-y-0 sm:-translate-y-0 md:-translate-y-1/2 lg:-translate-y-1/2
            sm:-rotate-0 md:-rotate-90 lg:-rotate-90
          "
        >
          Nicole
        </motion.div>

      </div>

    </div>
  );
}
