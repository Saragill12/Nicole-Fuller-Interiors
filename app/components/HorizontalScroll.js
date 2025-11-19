"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import Hero from "../components/Sections/Hero";
import About from "../components/Sections/About";
import Services from "../components/Sections/Services";
import Portfolio from "../components/Sections/Portfolio";
import Contact from "../components/Sections/Contact";
import Product from "@/app/components/Sections/Products";
import Press from "@/app/components/Sections/Press";
import ComingSoon from "../components/Sections/ComingSoon";
import Footer from "../components/Sections/Footer";
import Navbar from "../components/Sections/Navbar";

export default function HorizontalScroll() {
  const scrollContainerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [showRed, setShowRed] = useState(true);

  // Hide red container after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowRed(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Track horizontal progress
  const { scrollXProgress } = useScroll({
    container: scrollContainerRef,
  });

  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Horizontal scroll with mouse wheel
  const handleWheel = (e) => {
    if (!scrollContainerRef.current) return;
    if (e.deltaY !== 0) {
      e.preventDefault();
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  // Update active nav dot
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const sectionWidth = window.innerWidth * 1.3; // 130vw width
      const newActive = Math.round(container.scrollLeft / sectionWidth);
      setActiveSection(newActive);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (index) => {
    if (!scrollContainerRef.current) return;

    scrollContainerRef.current.scrollTo({
      left: index * window.innerWidth * 1.3, // 130vw width
      behavior: "smooth",
    });
  };

  return (
    <div className="relative h-screen overflow-hidden">

      {/* RED INTRO OVERLAY */}
      {showRed && (
        <motion.div
          className="absolute top-0 left-0 w-screen h-screen z-50 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: '#B43934' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          {/* Left Half - Nicole Fuller */}
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

          {/* Right Half - Interiors */}
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

          {/* Horizontal Line */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-px bg-white"
            initial={{ width: 0 }}
            animate={{ width: "80vw" }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      )}

      {/* HORIZONTAL SCROLL CONTAINER */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto h-230 snap-x snap-mandatory scrollbar-hide"
        onWheel={handleWheel}
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex h-full">

          {/* Hero Section */}
          <section className="min-w-[120vw] h-screen snap-start overflow-hidden">
            <Hero />
          </section>

          <section className="min-w-[120vw] h-full snap-start">
            <About />
          </section>

          <section className="min-w-[85vw] -ml-20 h-full snap-start">
            <Services />
          </section>

          <section className="min-w-[65vw] h-full ml-10 snap-start">
            <Portfolio />
          </section>

          <section className="min-w-[90vw] h-full snap-start">
            <Contact />
          </section>

          <section className="min-w-[90vw] ml-20 h-full snap-start">
            <Product />
          </section>

          <section className="min-w-[80vw] h-full snap-start">
            <Press />
          </section>

          <section className="min-w-[100vw] ml-20 h-full snap-start">
            <ComingSoon />
          </section>

          <section className="min-w-[50vw] h-full snap-start">
            <Footer />
          </section>

        </div>
      </div>
    </div>
  );
}
