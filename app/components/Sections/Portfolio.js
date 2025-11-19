"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import assets05 from "../../../public/assest/assets05.jpg";

export default function ArtAdvisory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className="flex w-[totalWidth] py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <motion.p 
              className="text-[12px] w-[230px] text-[#333] leading-relaxed mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              The Nicole Fuller Interiors studio is based in NYC, with a sister office in Los Angeles, and a satellite office in London. With a large team specializing in a number of fields, we look forward to hearing from you.
            </motion.p>
            
            <motion.a 
              href="#" 
              className="inline-block text-sm font-semibold text-red-600 hover:text-red-700 transition border-b-2 border-red-600 pb-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            >
              Contact Us
            </motion.a>
          </div>

          <div className="relative w-[600px] -ml-50 -mt-30">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image 
                src={assets05} 
                alt="Art advisory" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.h2 
              className="absolute w-full top-100 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                         text-4xl md:text-8xl font-serif font-light text-black"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            >
              Art Advisory
            </motion.h2>
          </div>

          <div>
            <motion.p 
              className="ml-70 text-[12px] w-[230px] text-[#333] leading-relaxed mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            >
              The Nicole Fuller Interiors studio is based in NYC, with a sister office in Los Angeles, and a satellite office in London. With a large team specializing in a number of fields, we look forward to hearing from you.
            </motion.p>
            
            <motion.a 
              href="#" 
              className="inline-block text-sm ml-70 font-semibold text-red-600 hover:text-red-700 transition border-b-2 border-red-600 pb-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            >
              Open Your Eyes 
            </motion.a>
          </div>
          
        </div>
      </div>
    </section>
  );
}