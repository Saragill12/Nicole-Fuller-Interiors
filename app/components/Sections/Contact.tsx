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
    "Wanderlust x The Rug",
  ];

  const links = ["#", "#", "#"];

  return (
    <section className="relative w-screen h-auto md:h-screen flex flex-col items-center justify-start bg-white overflow-visible px-4 sm:px-6 md:px-8 mt-20 md:mt-0">
      {/* ROTATED TEXT */}
      <div className="absolute md:left-[-170px] left-12 top-14 md:top-1/2 md:-translate-y-1/2 md:-rotate-90 rotate-0 z-10">
        <motion.span
          className="block text-3xl sm:text-4xl md:text-6xl font-serif font-light text-neutral-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          Trending at
        </motion.span>

        <motion.span
          className="block font-serif text-4xl sm:text-5xl md:text-6xl relative z-10"
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        >
          Nicole Fuller
        </motion.span>

        <motion.span
          className="block text-3xl sm:text-4xl md:text-6xl font-serif font-light text-neutral-900 opacity-80"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Interiors
        </motion.span>
      </div>

      {/* CARDS GRID (WIDTH REDUCED & CENTERED) */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-10
          w-full
          max-w-6xl
          mx-auto
          mt-[12rem] md:mt-28
          mb-20
        "
      >
        {[assets06, assets07, assets08].map((asset, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center w-full"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {/* IMAGE */}
            <div className="w-full  h-[260px] md:h-[300px] relative overflow-hidden">
              <Image
                src={asset}
                alt={titles[i]}
                fill
                className="object-cover"
              />
            </div>

            {/* TITLE */}
            <p className="mt-4 text-lg md:text-xl text-gray-500 text-center uppercase">
              {titles[i]}
            </p>

            {/* LINK */}
            <a
              href={links[i]}
              className="mt-1 text-xl md:text-2xl text-gray-800 hover:underline"
            >
              Read More
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
