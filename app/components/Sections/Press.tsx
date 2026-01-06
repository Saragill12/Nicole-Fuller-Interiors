"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import assets11 from "../../../public/assest/assets11.jpg";  
import assets12 from "../../../public/assest/assets12.jpg";  
import assets13 from "../../../public/assest/assets13.jpg";  

export default function PressSection() {
  return (
    <section className="w-full bg-white flex justify-center pt-10 pb-20 px-4 md:px-0">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-start justify-between relative">

        {/* LEFT TEXT */}
        <div className="w-full md:w-[34%] text-black text-[13px] leading-relaxed pt-5 md:pt-24 text-center md:text-left order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Recognized in her industry as a tastemaker, Nicole Fuller cultivates long standing and mutually beneficial collaborations with leading product companies, including the Rug Company, Savoir Beds, Dempsey & Carroll and Fromental.


          </motion.div>
          
          <motion.div 
            className="mt-4 font-serif tracking-wide text-xl text-gray-600"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Browse
          </motion.div>
        </div>

        {/* CENTER IMAGES */}
        <div className="flex flex-col items-center gap-12 mt-10 md:ml-50 md:-mt-10 order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}  
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ amount: 0.4, once: false }}
            className="w-[120px] md:w-[120px] h-[130px] md:h-[130px]"
          >
            <Image src={assets11} alt="Top" className="w-full h-auto object-cover object-bottom" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -25 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ amount: 0.4, once: false }}
            className="relative mt-1 w-[250px] md:w-[210px]"
          >
            <Image src={assets12} alt="Center" className="w-full h-auto object-cover" />
            <motion.h2 
              className="absolute top-1/2 left-[-80px] md:left-[-90px] -translate-y-1/2 -rotate-90 text-5xl md:text-7xl font-serif text-black leading-none"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Press
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -40 }}  
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ amount: 0.4, once: false }}
            className="w-[100px] -mt-10 md:w-[130px]"
          >
            <Image src={assets13} alt="Bottom" className="w-full h-auto object-cover" />
          </motion.div>
        </div>

        {/* RIGHT TEXT */}
        <div className="w-full md:w-[37%] text-black text-[15px] ml-0 md:ml-10 leading-relaxed pt-10 md:pt-24 text-center md:text-left order-3 md:order-3">
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
            className="mt-2  font-serif tracking-wide text-xl"
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
