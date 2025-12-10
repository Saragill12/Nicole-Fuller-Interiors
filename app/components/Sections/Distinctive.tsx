"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import assets03 from "../../../public/assest/assets03.png";

export default function DistinctiveSection() {
  const slideVariant = {
    hidden: { opacity: 0, x: -120 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-24 relative z-50"
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >

      <motion.div
        className="w-full md:w-1/2 text-black leading-tight mt-10 md:mt-0"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h1 className="text-4xl md:text-[5rem] md:-ml-[6rem]  font-blod tracking-wide text-center md:text-left">
          the distinctive,<br />
          personal &<br />
          cultivated, coalesce<br />
          in a Nicole Fuller<br />
          designed space
        </h1>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 h-[60vh] md:h-[100vh] flex items-center justify-center relative mt-10 md:mt-0"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="relative w-full h-full">
          <Image
            src={assets03}
            alt="Section Image"
            fill
            className="object-cover"
          />

          <motion.div
            variants={slideVariant}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="absolute top-1/2 md:top-[50%] right-[-2rem] md:right-[-11rem] -translate-y-1/2 -rotate-90"
          >
            <span className="text-[50px] md:text-[90px] font-serif tracking-wide text-black">
              Portfolio
            </span>
          </motion.div>
        </div>
      </motion.div>

    </motion.div>
  );
}
