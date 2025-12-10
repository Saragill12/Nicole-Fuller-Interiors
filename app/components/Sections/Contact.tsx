"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import assets06 from "../../../public/assest/assets06.png";
import assets07 from "../../../public/assest/assets07.jpg";
import assets08 from "../../../public/assest/assets08.jpg";

export default function TrendingSection() {
  const titles = [
    "Luxe Magazine Gold List",
    "Elle Decor A-List 2022",
    "Wanderlust x The Rug"
  ];

  const links = ["#", "#", "#"];

  return (
    <section className="relative w-screen h-auto md:h-screen flex flex-col items-center justify-center bg-white overflow-hidden px-6 md:px-8">

      {/* ROTATED TEXT */}
      <div className="absolute mt-20 md:mt-120 -rotate-90 origin-left md:-ml-[1010px] left-0 md:left-auto">
        <motion.span
          className="block text-4xl sm:text-3xl md:text-7xl mt-80 font-serif font-light text-neutral-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          Trending at
        </motion.span>

        <motion.span
          className="block font-serif text-5xl sm:text-3xl md:text-7xl relative z-10"
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.1 }}
        >
          Nicole Fuller
        </motion.span>

        <motion.span
          className="block text-4xl sm:text-3xl md:text-7xl font-serif font-light text-neutral-900 opacity-80"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
        >
          Interiors
        </motion.span>
      </div>

      {/* CARDS */}
      <div className="flex flex-wrap justify-center gap-6 mt-32 md:mt-16 ml-0 md:ml-58">
        {[assets06, assets07, assets08].map((asset, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center w-full sm:w-[90%] md:w-[30%]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-[220px] sm:h-60 md:h-[300px] relative">
              <Image
                src={asset}
                alt={titles[i]}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-4 text-xl sm:text-lg md:text-1xl text-gray-500 text-center uppercase whitespace-normal">
              {titles[i]}
            </p>
            <a href={links[i]} className="mt-1 text-xl sm:text-lg md:text-2xl text-gray-800 hover:underline">
              Read More
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
