"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import assets05 from "../../../public/assest/assets05.jpg";

export default function ArtAdvisory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className="w-full py-16 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-1 h-auto md:h-[70vh]">

        {/* LEFT TEXT (unchanged for desktop) */}
        <div className="space-y-4 md:space-y-6 flex flex-col justify-center text-center md:text-left">
          <motion.p
            className="text-[15px] md:text-[21px] w-full md:w-[330px] md:mt-20 md:-ml-20 text-[#333] leading-relaxed mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            The Nicole Fuller Interiors studio is based in NYC, with a sister office
            in Los Angeles, and a satellite office in London.
          </motion.p>

          <motion.a
            href="#"
            className="inline-block text-xl md:text-3xl mt-1 md:mt-0 font-semibold text-black pb-1 md:-ml-20"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact Us
          </motion.a>
        </div>

        {/* RIGHT IMAGE SECTION (desktop untouched, mobile fixed) */}
        <div className="w-full h-auto md:h-full relative md:-mt-20">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="
              w-full md:w-[95%] 
              h-[260px] sm:h-[300px] md:h-full 
              relative 
              mx-auto 
              md:-mt-10 md:-ml-10 
            "
          >
            <Image
              src={assets05}
              alt="Art Advisory"
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="
              absolute 
              -bottom-10 md:-bottom-2 
              left-1/2 -translate-x-1/2 
              text-[38px] sm:text-[52px] md:text-[96px] 
              font-serif font-light 
              text-black 
              z-20 
              whitespace-nowrap
            "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Art Advisory
          </motion.h2>

          {/* Lower text */}
          <div className="mt-10 md:mt-5 text-center max-w-[500px] mx-auto px-4 md:px-0">
            <motion.p
              className="text-[14px] md:text-[16px] text-[#333] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Having grown up in a creative environment with an artist mother, Nicole finds sustenance in art; she has spent her career cultivating relationships with top tier artists, gallerists, and nascent talent. She has a keen understanding of the art market and exclusive access.
            </motion.p>

            <motion.a
              href="#"
              className="inline-block text-lg md:text-2xl mt-3 font-semibold text-black pb-1"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Open Your Eyes
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}
