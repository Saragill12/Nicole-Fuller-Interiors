"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import assests04 from "../../../public/assest/assets04.png";

export default function Services() {
  return (
    <div className="h-screen flex overflow-hidden">

      <div className="relative flex-1 flex flex-col -ml-60 justify-center px-16">

        

        <div className="mt-[2] ml-60">
          <motion.p 
            className="text-[12px] w-[300px] leading-[28px] text-[#333]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
          >
            Nicole's residential projects span from coast to coast,
            major European cities and the rural English countryside,
            and her commercial spaces are as diverse. Recent and current
            projects include the Art District Hotel in Downtown Los Angeles,
            the Baccarat residences, The Bryant Park Hotel, and 54 Macdougal,
            which she designed and oversaw from the ground up.
          </motion.p>

          <motion.div 
            className="mt-4 text-black font-serif text-[16px] tracking-wide relative cursor-pointer
                after:block  after:w-[95px] after:bg-[#B43934] after:mt-1"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            View Portfolio
          </motion.div>
        </div>
      </div>

      <div className="w-[40%] h-full relative">

        <div className="w-full h-full -ml-10 relative">
          <Image
            src={assests04}
            alt="Studio Image"
            fill
            className="object-cover"
          />
        </div>

        <motion.div
          className="absolute top-70 left-[-39%] -rotate-90"
          initial={{ opacity: 0, x: -100 }}   
          whileInView={{ opacity: 1, x: 0 }}  
          exit={{ opacity: 0, x: -100 }}     
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <span className="text-[90px] font-serif tracking-wide text-black">
            Studio
          </span>
        </motion.div>

      </div>

    </div>
  );
}