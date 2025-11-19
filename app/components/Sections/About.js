"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import assests03 from "../../../public/assest/assets03.png";

export default function DistinctiveSection() {
  const slideVariant = {
    hidden: { opacity: 0, x: -120 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="w-full h-full flex items-center -mt-25 -ml-40 justify-between px-24 relative z-50"
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >

      {/* LEFT TEXT */}
      <motion.div
        className="w-1/2 text-black leading-tight"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h1 className="text-7xl font-light tracking-wide">
          the distinctive,<br />
          personal &<br />
          cultivated, coalesce<br />
          in a Nicole Fuller<br />
          designed space
        </h1>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="w-1/2 h-full ml-60 flex items-center justify-center relative"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="w-[50rem] h-[40rem] relative">
          <Image
            src={assests03}
            alt="Section Image"
            fill
            className="object-cover"
            priority
          />

          {/* Portfolio Text (Now SAME animation as Studio + proper margin fix) */}
          <motion.div
            variants={slideVariant}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="absolute top-[30%] right-[-5rem] -translate-y-1/2 -rotate-90"
          >
            <span className="text-[90px] -ml-45 top-25 font-serif tracking-wide text-black">
              Portfolio
            </span>
          </motion.div>
        </div>
      </motion.div>

    </motion.div>
  );
}
