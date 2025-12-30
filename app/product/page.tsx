"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import Hero from "@/app/components/Sections/Hero";
import Distinctive from "@/app/components/Sections/Distinctive";

export default function HorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen size
  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1024);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // 🟢 Mouse wheel horizontal scroll - DESKTOP ONLY
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !isDesktop) return;

    const wheel = (e: WheelEvent) => {
      if (!isDesktop) return;
      
      e.preventDefault();
      el.scrollLeft += e.deltaY * 1.5;
    };

    el.addEventListener("wheel", wheel, { passive: false });
    return () => el.removeEventListener("wheel", wheel);
  }, [isDesktop]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* MAIN HORIZONTAL WRAPPER - NO RED INTRO */}
      <div
        ref={scrollRef}
        className={`w-screen h-screen 
          ${isDesktop 
            ? "flex flex-row overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide" 
            : "flex flex-col overflow-y-auto overflow-x-hidden snap-y snap-mandatory"
          }
        `}
        style={{ scrollBehavior: "smooth" }}
      >
        {/* HERO */}
        <section className={`w-full snap-start flex-shrink-0 ${
          isDesktop ? "h-screen flex items-center justify-center" : "min-h-screen pt-20 pb-20"
        }`}>
          <Hero />
        </section>

        {/* DISTINCTIVE */}
        <section className={`w-full snap-start flex-shrink-0 ${
          isDesktop ? "h-screen flex items-center justify-center" : "min-h-screen pt-20 pb-20"
        }`}>
          <Distinctive />
        </section>

        {/* SERVICES */}
       
      </div>

      {/* Custom Scrollbar Hide */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
