"use client";
import { motion } from "framer-motion";

export default function NicolePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-start justify-start px-4 sm:px-10 pt-10 relative">

      {/* NAME */}
      <motion.div
        className="
          absolute 
          right-4 sm:right-10 
          top-5 
          text-center sm:text-right
        "
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-[#B43934] text-4xl sm:text-5xl md:text-7xl leading-none font-serif hover:text-red-700 transition-colors duration-300">
          Nicole
        </h1>
        <h1 className="text-red-700 text-4xl sm:text-5xl md:text-7xl leading-none font-serif -mt-1 sm:-mt-2 md:-mt-4 hover:text-[#B43934] transition-colors duration-300">
          Fuller
        </h1>
      </motion.div>

      {/* BIO */}
      <div className="w-full sm:w-[300px] md:w-[350px] mt-32 ml-20 sm:mt-24 md:mt-28 px-2 sm:px-0">
        <motion.p
          className="text-[14px] sm:text-[15px] md:text-base leading-relaxed text-neutral-800"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Nicole Fuller, founder and principle of Nicole Fuller Interiors, is an
          internationally acclaimed interior designer renowned for her artfully
          appointed, one of a kind residential and commercial spaces. A member of
          ELLE Decor magazine&lsquo;s coveted A-List and Luxe magazine&lsquo;s Gold List, Nicole&lsquo;s
          work is synonymous with sophisticated, nuanced luxury, where attention to
          detail, savoir faire, and a cultivated eye culminate in spaces that are as
          singular as her clients.
        </motion.p>

        <motion.h2
          className="mt-4 sm:mt-5 text-lg sm:text-xl md:text-2xl tracking-widest font-light text-neutral-900"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          Meet Nicole
        </motion.h2>
      </div>

      {/* SOCIAL LINKS */}
      <div
        className="
          absolute 
          right-4 sm:right-10  
          top-[45%] sm:top-1/3 
          flex flex-col items-center sm:items-center 
          space-y-4 sm:space-y-6
          gap-14
        "
      >
        <motion.span
          className="text-xs sm:text-sm tracking-[0.15em] rotate-0 sm:rotate-90"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        >
          INSTAGRAM
        </motion.span>

        <motion.span
          className="text-xs sm:text-sm tracking-[0.15em]   rotate-0 sm:rotate-90"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
        >
          PINTEREST
        </motion.span>
      </div>

      {/* FOOTER */}
      <motion.div
        className="
          absolute 
          bottom-4 sm:bottom-5
          right-1/2 sm:right-10 
          translate-x-1/2 sm:translate-x-0
          text-center sm:text-right
          text-neutral-600 text-base sm:text-lg md:text-xl
        "
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <p>Site by</p>
        <p className="tracking-[0.1em] mt-1 sm:mt-2">© 2 0 2 5</p>
      </motion.div>

    </div>
  );
}
