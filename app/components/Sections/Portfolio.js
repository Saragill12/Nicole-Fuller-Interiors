"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import assets05 from "../../../public/assest/assets05.jpg";

export default function ArtAdvisory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className="w-full py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 h-auto md:h-[70vh]">

        <div className="space-y-6 flex flex-col justify-center">
          <motion.p
            className="text-[18px] md:text-[21px] w-full md:w-[350px] mt-10 md:mt-40 md:-ml-40 text-[#333] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            The Nicole Fuller Interiors studio is based in NYC, with a sister office
            in Los Angeles, and a satellite office in London.
          </motion.p>

          <motion.a
            href="#"
            className="inline-block text-2xl md:text-3xl mt-2 md:mt-0 font-semibold text-black pb-1 md:-ml-40"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact Us
          </motion.a>
        </div>

        <div className="w-full h-full relative -mt-10 md:-mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="w-[120%] md:w-[120%] h-[250px] md:h-full relative -mt-0 md:-mt-10 -ml-6 md:-ml-10 overflow-hidden mx-auto"
          >
            <Image
              src={assets05}
              alt="Art Advisory"
              className="w-full h-full object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </motion.div>

          <motion.h2
            className="absolute bottom-2 md:-bottom-2 left-1/2 transform -translate-x-1/2 text-1xl md:text-[96px]  font-serif font-light text-black z-20 whitespace-nowrap"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Art Advisory
          </motion.h2>

          <div className="mt-6 md:mt-1 text-center max-w-[500px] mx-auto px-4 md:px-0">
            <motion.p
              className="text-[13px] text-[#333] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Having grown up in a creative environment with an artist mother, Nicole finds sustenance in art; she has spent her career cultivating relationships with top tier artists, gallerists, and nascent talent. She has a keen understanding of the art market and exclusive access.
            </motion.p>

            <motion.a
              href="#"
              className="inline-block text-xl md:text-2xl mt-1 font-semibold text-black pb-1"
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
