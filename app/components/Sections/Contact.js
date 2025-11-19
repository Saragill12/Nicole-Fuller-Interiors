"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import assets06 from "../../../public/assest/assets06.png";
import assets07 from "../../../public/assest/assets07.jpg";
import assets08 from "../../../public/assest/assets08.jpg";

export default function TrendingSection() {
  return (
    <section className="relative w-screen h-screen flex flex-col items-center justify-center bg-white overflow-hidden px-8">

      <div className="absolute mt-60 -ml-[570px] -rotate-90 origin-left">
        <motion.span
          className="block text-4xl md:text-6xl font-serif font-light text-neutral-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          Trending at
        </motion.span>

        <motion.span
          className="block font-serif font-semibold md:text-6xl text-5xl relative z-10"
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.1 }}
        >
          Nicole Fuller
        </motion.span>

        <motion.span
          className="block text-4xl md:text-6xl font-serif font-light text-neutral-900 opacity-80"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
        >
          Interiors
        </motion.span>
      </div>

      <div className="flex flex-wrap justify-center gap-8 max-w-[calc(100vw-5rem)] mt-16">

        <motion.div
          className="flex flex-col items-center w-64"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-full ml-30 h-80 relative">
            <Image src={assets06}
             alt="Descriptive text about the image" 
            className="object-cover w-full h-full" />
          </div>
          <p className="mt-4 text-sm uppercase text-gray-500 text-center">Luxe Magazine Gold List</p>
          <a className="mt-1 text-gray-800 hover:underline">Read More</a>
        </motion.div>

        <motion.div
          className="flex flex-col items-center w-64"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-80 ml-30 relative">
            <Image src={assets07}
                         alt="Descriptive text about the image" 

            className="object-cover w-full h-full" />
          </div>
          <p className="mt-4 text-sm uppercase text-gray-500 text-center">Elle Decor A-List 2022</p>
          <a className="mt-1 text-gray-800 hover:underline">Read More</a>
        </motion.div>

        <motion.div
          className="flex flex-col items-center w-64"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-80 ml-30 relative">
            <Image src={assets08} 
                         alt="Descriptive text about the image" 

            className="object-cover w-full h-full" />
          </div>
          <p className="mt-4 text-sm uppercase text-gray-500 text-center">Wanderlust x The Rug Company</p>
          <a className="mt-1 text-gray-800 hover:underline">Read More</a>
        </motion.div>

      </div>
    </section>
  );
}
