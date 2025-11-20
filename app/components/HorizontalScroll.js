"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import Hero from "../components/Sections/Hero";
import Distinctive from "./Sections/Distinctive";
import Services from "../components/Sections/Services";
import Portfolio from "../components/Sections/Portfolio";
import Contact from "../components/Sections/Contact";
import Product from "@/app/components/Sections/Products";
import Press from "@/app/components/Sections/Press";
import ComingSoon from "../components/Sections/ComingSoon";
import Footer from "../components/Sections/Footer";

export default function HorizontalScroll() {
  const scrollContainerRef = useRef(null);
  const [showRed, setShowRed] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen width
  useEffect(() => {
    const updateScreen = () => setIsDesktop(window.innerWidth >= 768);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  // Splash screen timeout
  useEffect(() => {
    const timer = setTimeout(() => setShowRed(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Horizontal scroll for desktop
  const handleWheel = (e) => {
    if (!scrollContainerRef.current) return;
    if (isDesktop && e.deltaY !== 0) {
      e.preventDefault();
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {showRed && (
        <motion.div
          className="absolute top-0 left-0 w-screen h-screen z-50 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#B43934" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <motion.div
            className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-end pr-8"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 1, delay: 1.5, ease: [0.87, 0, 0.13, 1] }}
          >
            <motion.div
              className="text-white text-5xl md:text-7xl font-bold text-right"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Nicole Fuller
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-start pl-8"
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 1, delay: 1.5, ease: [0.87, 0, 0.13, 1] }}
          >
            <motion.div
              className="text-white text-5xl md:text-7xl font-bold text-left"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Interiors
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-px bg-white"
            initial={{ width: 0 }}
            animate={{ width: "80vw" }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      )}

      <div
        ref={scrollContainerRef}
        className={`flex h-screen ${
          isDesktop
            ? "flex-row overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            : "flex-col overflow-y-auto"
        }`}
        onWheel={handleWheel}
        style={{ scrollBehavior: "smooth" }}
      >
        <section className="min-w-[100vw] md:min-w-[120vw] h-screen snap-start overflow-hidden">
          <Hero />
        </section>
        <section className="min-w-[100vw] md:min-w-[120vw] h-screen snap-start">
          <Distinctive />
        </section>
        <section className="min-w-[100vw] md:min-w-[85vw] h-screen snap-start -ml-0 md:-ml-20">
          <Services />
        </section>
        <section className="min-w-[100vw] md:min-w-[85vw] h-screen snap-start ml-0 md:ml-10">
          <Portfolio />
        </section>
        <section className="min-w-[100vw] md:min-w-[90vw] h-screen snap-start">
          <Contact />
        </section>
        <section className="min-w-[100vw] md:min-w-[90vw] h-screen snap-start ml-0 md:ml-20">
          <Product />
        </section>
        <section className="min-w-[100vw] md:min-w-[80vw] h-screen snap-start">
          <Press />
        </section>
        <section className="min-w-[100vw] md:min-w-[100vw] h-screen snap-start ml-0 md:ml-20">
          <ComingSoon />
        </section>
        <section className="min-w-[100vw] md:min-w-[50vw] h-screen snap-start">
          <Footer />
        </section>
      </div>
    </div>
  );
}
