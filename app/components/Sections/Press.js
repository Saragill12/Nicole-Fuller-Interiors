"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import assets11 from "../../../public/assest/assets11.jpg";  
import assets12 from "../../../public/assest/assets12.jpg";  
import assets13 from "../../../public/assest/assets13.jpg";  

export default function PressSection() {
  return (
    <section
      className="
        w-full bg-white ml-40 flex justify-center pt-10 pb-20
        max-[768px]:ml-0 max-[768px]:px-4
      "
    >
      <div
        className="
          w-full max-w-7xl flex justify-between px-10 relative
          max-[768px]:flex-col max-[768px]:items-center max-[768px]:px-4
        "
      >

        <div
          className="
            w-[30%] text-black text-2xl leading-relaxed pt-24
            max-[768px]:w-full max-[768px]:text-center max-[768px]:pt-5
          "
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="-ml-35 mt-30 max-[768px]:ml-0 max-[768px]:mt-3"
          >
            Recognized in her industry as a tastemaker, Nicole Fuller cultivates  
            long standing and mutually beneficial collaborations with leading 
            product companies.
          </motion.div>
          
          <motion.div 
            className="mt-4 font-serif -ml-36 tracking-wide text-2xl 
            max-[768px]:ml-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Browse
          </motion.div>
        </div>

        <div
          className="
            flex flex-col items-center gap-12 ml-50
            max-[768px]:ml-0 max-[768px]:gap-8 max-[768px]:mt-10
          "
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}  
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ amount: 0.4, once: false }}
            className="w-[120px] -mt-1 h-[130px] max-[768px]:w-[90px] max-[768px]:h-[100px]"
          >
            <Image src={assets11} alt="Top" className="w-full h-auto object-cover object-bottom" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -25 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ amount: 0.4, once: false }}
            className="relative mt-2 w-[340px] max-[768px]:w-[250px]"
          >
            <Image src={assets12} alt="Center" className="w-full h-auto object-cover" />

            <motion.h2 
              className="
                absolute top-1/2 left-[-120px] -translate-y-1/2 -rotate-90 
                text-8xl font-serif text-black leading-none
                max-[768px]:text-5xl max-[768px]:left-[-80px]
              "
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
            className="w-[130px] -mt-10 max-[768px]:w-[100px]"
          >
            <Image src={assets13} alt="Bottom" className="w-full h-auto object-cover" />
          </motion.div>
        </div>

        <div
          className="
            w-[46%] text-black text-2xl leading-relaxed pt-24
            max-[768px]:w-full max-[768px]:text-center max-[768px]:pt-10
          "
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="ml-20 mt-10 max-[768px]:ml-0 max-[768px]:mt-3"
          >
            The latest press coverage on the studio,  
            our projects and our collaborations.
          </motion.div>
          
          <motion.div 
            className="mt-4 font-serif tracking-wide text-2xl ml-20 max-[768px]:ml-0"
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
