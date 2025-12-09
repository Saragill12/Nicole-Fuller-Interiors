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
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const [showRed, setShowRed] = useState<boolean>(true);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  // Detect desktop
  useEffect(() => {
    const updateScreen = () => setIsDesktop(window.innerWidth >= 768);
    updateScreen();

    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  // Red intro timer
  useEffect(() => {
    const timer = setTimeout(() => setShowRed(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Horizontal scroll logic (desktop only)
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const wheelHandler = (e: WheelEvent) => {
      if (isDesktop && e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", wheelHandler, { passive: false });
    return () => el.removeEventListener("wheel", wheelHandler);
  }, [isDesktop]);

  return (
    <div className="relative h-screen overflow-hidden">

      {/* RED INTRO */}
      {showRed && (
        <motion.div
          className="absolute top-0 left-0 w-screen h-screen z-50 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#B43934" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          {/* Red intro animation content */}
        </motion.div>
      )}

      {/* HORIZONTAL SCROLL CONTAINER */}
      <div
        ref={scrollContainerRef}
        className={`scrollbar-none flex h-screen w-screen ${
          isDesktop
            ? "flex-row overflow-x-auto snap-x snap-mandatory"
            : "flex-col overflow-y-auto"
        }`}
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Each section takes exactly h-screen and min-w-full */}
        <section className="min-w-full h-screen snap-start overflow-hidden">
          <Hero />
        </section>

        <section className="min-w-full h-screen snap-start overflow-hidden">
          <Distinctive />
        </section>

        <section className="min-w-full h-screen snap-start overflow-hidden">
          <Services />
        </section>

        <section className="min-w-full h-screen snap-start overflow-hidden">
          <Portfolio />
        </section>

        <section className="min-w-full h-screen snap-start overflow-hidden">
          <Contact />
        </section>

        <section className="min-w-full h-screen snap-start overflow-hidden">
          <Product />
        </section>

        <section className="min-w-full h-screen snap-start overflow-hidden">
          <Press />
        </section>

        <section className="min-w-full h-screen snap-start overflow-hidden">
          <ComingSoon />
        </section>

        <section className="min-w-full h-screen snap-start overflow-hidden">
          <Footer />
        </section>
      </div>
    </div>
  );
}
