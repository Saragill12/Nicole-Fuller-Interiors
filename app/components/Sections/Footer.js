"use client";
import { motion } from "framer-motion";

export default function NicolePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-start justify-start px-10 pt-10 relative">

      <motion.div 
        className="absolute top-5 right-10 text-right"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="text-[#B43934] text-7xl leading-none font-serif hover:text-red-700 transition-colors duration-300">
  Nicole
</h1>
<h1 className="text-red-700 text-7xl leading-none font-serif -mt-4 hover:text-[#B43934] transition-colors duration-300">
  Fuller
</h1>

      </motion.div>

    
      <div className="w-[280] mt-28">
        <motion.p 
          className="text-[13px] leading-relaxed text-neutral-800"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Nicole Fuller, founder and principle of Nicole Fuller Interiors, is an internationally acclaimed interior designer renowned for her artfully appointed, one of a kind residential and commercial spaces. A member of ELLE Decor magazine's coveted A-List and Luxe magazine's Gold List, Nicole's work is synonymous with sophisticated, nuanced luxury, where attention to detail, savoir faire, and a cultivated eye culminate in spaces that are as singular as her clients.
        </motion.p>

        <motion.h2 
          className="mt-5 text-2xl tracking-widest font-light text-neutral-900"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Meet Nicole
        </motion.h2>
      </div>

      <div className="absolute right-10 top-1/3 flex flex-col items-center space-y-10">
        <motion.span 
          className="rotate-90 tracking-[0.2em] mt-4 text-xs"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          INSTAGRAM
        </motion.span>
        <motion.span 
          className="rotate-90 tracking-[0.2em] mt-25 text-xs"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          PINTEREST
        </motion.span>
      </div>

      <motion.div 
        className="absolute bottom-10 right-10 text-right text-neutral-600 text-xs"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <p>Site by</p>
        <p className="tracking-[0.1em] mt-3">© 2 0 2 5</p>
      </motion.div>

    </div>
  );
}