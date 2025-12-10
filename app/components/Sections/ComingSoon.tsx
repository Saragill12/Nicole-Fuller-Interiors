"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import assets14 from "../../../public/assest/assets14.jpg";
import assets15 from "../../../public/assest/assets15.jpg";

export default function HomeSection() {
  return (
    <div
      className="
        w-full min-h-screen bg-white relative
        flex flex-col lg:flex-row  /* mobile = column, desktop = row */
        gap-10 lg:gap-0
        px-4 lg:ml-30
      "
    >

      <div className="w-full lg:w-1/2 flex flex-col items-center">

        <img
          src={assets14.src}
          className="w-full h-[350px] sm:h-[450px] lg:h-[400px] object-cover"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="mt-6 lg:-mt-10"
        >
          <h1 className="text-center text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-serif">
            Coming soon
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="
            text-center text-base sm:text-lg lg:text-xl opacity-70
            w-full sm:w-[80%] lg:w-[58%] mx-auto mt-1 leading-relaxed
          "
        >
          A sneak peek into the projects that the studio has currently on our boards,
          from New York City hotels, to the Los Angeles art district.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="text-center -mt-1 tracking-wide text-lg lg:text-xl cursor-pointer"
        >
          View Projects
        </motion.p>
      </div>

      <div className="w-full lg:w-1/2 relative flex justify-center items-center">

        <img
          src={assets15.src}
          className="w-full sm:w-[450px] -mt-40  lg:w-[650px] h-auto object-cover relative z-10"
        />

        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="
            absolute z-20 font-serif
            text-5xl sm:text-7xl lg:text-8xl
            top-[85%] sm:top-1/2
            left-1/2 sm:left-[15px]
            -translate-x-1/2 sm:-translate-x-0
            -translate-y-0 sm:-translate-y-1/2

            sm:-rotate-90
          "
        >
          Nicole
        </motion.div>

      </div>

    </div>
  );
}
