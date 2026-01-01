"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import Hero from "./Sections/Hero";
import Distinctive from "./Sections/Distinctive";
import Services from "./Sections/Services";
import Portfolio from "./Sections/Portfolio";
import Contact from "./Sections/Contact";
import Product from "@/app/components/Sections/Products";
import Press from "@/app/components/Sections/Press";
import ComingSoon from "./Sections/ComingSoon";
import Footer from "./Sections/Footer";

export default function HorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showRed, setShowRed] = useState(true);

  // Detect screen size
  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1024);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Remove red intro
  useEffect(() => {
    const t = setTimeout(() => setShowRed(false), 2500);
    return () => clearTimeout(t);
  }, []);

  // 🟢 MOUSE WHEEL HORIZONTAL SCROLL - ENABLED!
 useEffect(() => {
  if (!isDesktop) return;

  const onWheel = (e: WheelEvent) => {
    const el = scrollRef.current;
    if (!el) return;

    e.preventDefault();
    el.scrollLeft += e.deltaY * 1.5;
  };

  window.addEventListener("wheel", onWheel, { passive: false });
  return () => window.removeEventListener("wheel", onWheel);
}, [isDesktop]);


  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* RED INTRO */}
      {showRed && (
        <motion.div
          className="absolute inset-0 z-50 flex items-center justify-center"
          style={{ background: "#B43934" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        />
      )}

      {/* MAIN WRAPPER */}
      <div
        ref={scrollRef}
        className={`w-screen h-screen 
          ${isDesktop 
            ? "flex flex-row overflow-x-auto overflow-y-hidden snap-x snap-mandatory" 
            : "flex flex-col overflow-y-auto overflow-x-hidden snap-y snap-mandatory"
          }
        `}
        style={{ scrollBehavior: "smooth" }}
      >
        {/* SECTIONS */}
        <section className={`w-full snap-start flex-shrink-0 ${
          isDesktop ? "h-screen" : "min-h-screen"
        }`}>
          <Hero />
        </section>
        
        <section className={`w-full snap-start flex-shrink-0 ${
          isDesktop ? "h-screen" : "min-h-screen"
        }`}>
          <Distinctive />
        </section>
        
        <section className={`w-full snap-start flex-shrink-0 ${
          isDesktop ? "h-screen" : "min-h-screen"
        }`}>
          <Services />
        </section>
        
        <section className={`w-full snap-start flex-shrink-0 ${
          isDesktop ? "h-screen" : "min-h-screen"
        }`}>
          <Portfolio />
        </section>
        
        <section className={`w-full snap-start flex-shrink-0 ${
          isDesktop ? "h-screen" : "min-h-screen"
        }`}>
          <Contact />
        </section>
        
        <section className={`w-full snap-start flex-shrink-0 ${
          isDesktop ? "h-screen" : "min-h-screen"
        }`}>
          <Product />
        </section>
        
        <section className={`w-full snap-start flex-shrink-0 ${
          isDesktop ? "h-screen" : "min-h-screen"
        }`}>
          <Press />
        </section>
        
        <section className={`w-full snap-start flex-shrink-0 ${
          isDesktop ? "h-screen" : "min-h-screen"
        }`}>
          <ComingSoon />
        </section>
        
        <section className={`w-full snap-start flex-shrink-0 ${
          isDesktop ? "h-screen pb-20" : "min-h-screen pb-20"
        }`}>
          <Footer />
        </section>
      </div>
    </div>
  );
}
