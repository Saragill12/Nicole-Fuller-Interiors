"use client";
import { motion } from "framer-motion";

export default function NicolePage() {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-10 pt-10 relative">
      
      {/* NAME - MOBILE CENTER | DESKTOP SAME */}
      <motion.div
        className="
          absolute
          top-5
          left-1/2 -translate-x-1/2
          sm:left-auto sm:-translate-x-0 sm:right-1
          text-center sm:text-left
        "
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h1 className="text-[#B43934] text-3xl sm:text-5xl md:text-7xl leading-none font-serif hover:text-red-700 transition-colors duration-300">
          Nicole
        </h1>
        <h1 className="text-red-700 text-3xl sm:text-5xl md:text-7xl leading-none font-serif -mt-1 sm:-mt-2 md:-mt-4 hover:text-[#B43934] transition-colors duration-300">
          Fuller
        </h1>
      </motion.div>

      {/* BIO */}
      <div
        className="
          w-full max-w-sm sm:w-[300px] md:w-[350px]
          mt-20 sm:mt-24 md:mt-28
          mx-auto sm:mx-0 sm:ml-20
          px-2 sm:px-0
          text-center sm:text-left
        "
      >
        <motion.p
          className="text-sm sm:text-[15px] md:text-base leading-relaxed text-neutral-800"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Nicole Fuller, founder and principle of Nicole Fuller Interiors, is an internationally acclaimed interior designer renowned for her artfully appointed, one of a kind residential and commercial spaces. A member of ELLE Decor magazine’s coveted A-List and Luxe magazine’s Gold List, Nicole’s work is synonymous with sophisticated, nuanced luxury, where attention to detail, savoir faire, and a cultivated eye culminate in spaces that are as singular as her clients.


        </motion.p>

        <motion.h2
          className="mt-4 sm:mt-5 text-lg sm:text-xl md:text-2xl tracking-widest font-light text-neutral-900"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
          Meet Nicole
        </motion.h2>
      </div>

      {/* SOCIAL LINKS */}
      <div
        className="
          absolute 
          top-3/4 sm:right-10 sm:top-1/3
          left-1/2 sm:left-auto
          -translate-x-1/2 sm:translate-x-0
          flex flex-col items-center
          space-y-6 sm:space-y-8 md:space-y-14
          w-28 sm:w-auto md:gap-12 
          text-black 
        "
      >
        <motion.span className="text-xs sm:text-sm tracking-[0.12em]  text-center rotate-0 sm:rotate-90 whitespace-nowrap">
          INSTAGRAM
        </motion.span>
        <motion.span className="text-xs sm:text-sm tracking-[0.12em] text-center rotate-0 sm:rotate-90 whitespace-nowrap">
          PINTEREST
        </motion.span>
      </div>

      {/* FOOTER */}
      <motion.div
        className="
          absolute 
          bottom-4 sm:bottom-4 left-1/2 sm:bottom-3 sm:right-10 sm:left-auto
          -translate-x-1/2 sm:translate-x-0
          text-center
          text-neutral-600 text-sm sm:text-lg md:text-xl
        "
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <p>Site by</p>
        <p className="tracking-[0.1em] mt-2 sm:mt-3">© 2 0 2 5</p>
      </motion.div>
    </div>
  );
}
