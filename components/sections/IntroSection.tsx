"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 md:py-section-gap px-6 md:px-margin-desktop bg-surface-container-lowest relative">
      {/* Section divider top */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter max-w-[1600px] mx-auto"
      >
        {/* Label */}
        <motion.div
          className="md:col-span-4 md:col-start-2"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body text-label-caps text-muted-grey uppercase tracking-[0.2em]">
            / INTRODUCTION
          </span>
        </motion.div>

        {/* Content */}
        <motion.div
          className="md:col-span-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-display text-headline-lg text-white leading-tight">
            Architecting resilient systems and crafting precise code. A
            disciplined approach to modern IT infrastructure and software
            development, focusing on performance, security, and elegant
            structural design.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
