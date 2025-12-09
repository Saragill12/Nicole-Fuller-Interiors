"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import assets02 from "../../../public/assest/assets02.jpg";

export default function Intro() {
  return (
    <section className="relative flex flex-col md:flex-row items-start justify-between overflow-hidden h-auto md:h-[100vh]">

      <div className="z-20 px-6 md:ml-24 md:mt-28 md:max-w-[50%] w-full">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="text-5xl md:text-[6rem] leading-snug md:leading-[5.5rem] -mt-4 font-light text-[#252525]"

          style={{ fontFamily: "meno-display, serif" }}
        >
          Synonymous <br />
          with <em>sophisticated</em>, <br />
          & nuanced <br />
          <em>luxury</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
          className="-mt-[10rem] text-[20px] md:w-[25rem] md:ml-[43.5rem]   leading-[33px] text-[#333]"

        >
          Nicole Fuller Interiors is a multi-faceted interior design firm based in
          New York City and Los Angeles, specializing in high-end residential and
          commercial design projects in the US and abroad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="flex items-center gap-2 -mt-33 text-[#B43934]  text-2xl font-bold cursor-pointer mt-5"
        >
          <span className="text-4xl -mt-5 ">Scroll</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10" fill="none" viewBox="0 0 24 24" stroke="#B43934" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </div>

      <div className="relative w-full md:w-[50%] h-[100vh] md:h-[100vh] mt-10 md:mt-0">
        <div className="absolute -left-50 -top-4 w-[100%] h-full  opacity-10 z-40 hidden md:block">
          <svg viewBox="0 0 359 478" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <g transform="translate(-16, -171)" fill="#3D3D3D">
                <path d="M193.5,648.9C97.1,650.2 16,601.3 16,508.6C16,423.2 87.9,374.9 155.2,368.2C102.4,354.3 68.7,321.9 68.7,272.2C68.7,210.7 116.9,171 192.2,171C243,171 280.6,192.8 280.6,225.2C280.6,238.5 269.4,250.4 256.8,251.7C247.6,212.7 226.5,185.5 189.5,185.5C143.3,185.5 117.6,220.6 117.6,266.9C117.6,332.5 155.2,358.3 217.9,362.3L223.8,376.2C146.6,374.9 74.0,412.6 74.0,505.9C74.0,586.7 118.9,633.7 194.1,633.7C274.6,633.7 333.4,575.4 333.4,502.0C333.4,462.2 316.9,417.9 272.0,417.9C243.6,417.9 229.1,439.1 229.1,463.6C229.1,484.1 236.4,502.6 249.6,513.2C244.3,516.5 236.4,517.8 230.4,517.8C210.6,517.8 192.2,505.3 192.2,475.5C192.2,429.1 235.7,406.0 258.8,389.4L264.1,385.6C292.4,365.6 327.4,339.6 327.4,306.7C327.4,290.8 318.9,279.5 304.3,274.9C308.3,268.9 318.2,261.6 331.4,261.6C356.5,261.6 369.0,279.5 369.0,302.7C369.0,323.7 356.1,342.7 336.6,357.2L336.0,357.6C318.2,370.9 291.1,385.4 261.4,405.3C335.4,394.7 375,443.0 375,500.6C375,591.3 295.8,647.6 193.5,648.9Z" />
              </g>
            </g>
          </svg>
        </div>

        {/* <Image
          src={assets02}
          alt="hero"
          fill
          className="object-cover "
        /> */}
      </div>
    </section>
  );
}
