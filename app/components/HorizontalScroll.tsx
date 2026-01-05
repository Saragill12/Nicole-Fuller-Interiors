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

  // Detect screen
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Red intro
  useEffect(() => {
    const t = setTimeout(() => setShowRed(false), 2500);
    return () => clearTimeout(t);
  }, []);

  // 🟢 REAL FIX — wheel on container (NOT window)
  useEffect(() => {
    if (!isDesktop) return;

    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY * 1.2;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [isDesktop]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      
      {/* RED INTRO */}
      {showRed && (
        <motion.div
          className="absolute inset-0 z-50"
          style={{ background: "#B43934" }}
        />
      )}

      {/* SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        className={`
          h-screen w-screen flex
          ${isDesktop
            ? "flex-row overflow-x-scroll overflow-y-hidden"
            : "flex-col overflow-y-scroll overflow-x-hidden"
          }
        `}
        style={{
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* SECTIONS */}
        {[
          Hero,
          Distinctive,
          Services,
          Portfolio,
          Contact,
          Product,
          Press,
          ComingSoon,
          Footer,
        ].map((Comp, i) => (
          <section
            key={i}
            className={`
              min-w-full flex-shrink-0
              ${isDesktop ? "h-screen" : "min-h-screen"}
            `}
          >
            <Comp />
          </section>
        ))}
      </div>
    </div>
  );
}
