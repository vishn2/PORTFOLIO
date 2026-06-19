"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.footer
      ref={ref}
      className="relative w-full border-t border-surface-border bg-black"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Large name watermark */}
      <div className="px-6 md:px-margin-desktop pt-24 pb-8">
        <motion.h2
          className="font-display text-display-xl uppercase text-white opacity-[0.03] leading-none select-none"
          initial={{ x: -100 }}
          animate={isInView ? { x: 0 } : { x: -100 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          VISHNU
        </motion.h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-6 md:px-margin-desktop py-8 border-t border-surface-border">
        {/* Brand */}
        <div className="font-display text-xl md:text-2xl text-white uppercase tracking-tighter mb-6 md:mb-0">
          VISHNU VARDHAN
        </div>

        {/* Social Links */}
        <div className="flex gap-8 mb-6 md:mb-0">
          <MagneticButton
            href="#"
            className="font-body text-label-caps uppercase tracking-[0.2em] text-muted-grey hover:text-white transition-colors duration-300"
          >
            LINKEDIN
          </MagneticButton>
          <MagneticButton
            href="#"
            className="font-body text-label-caps uppercase tracking-[0.2em] text-muted-grey hover:text-white transition-colors duration-300"
          >
            GITHUB
          </MagneticButton>
          <MagneticButton
            href="#"
            className="font-body text-label-caps uppercase tracking-[0.2em] text-muted-grey hover:text-white transition-colors duration-300"
          >
            EMAIL
          </MagneticButton>
        </div>

        {/* Copyright */}
        <div className="font-body text-label-caps uppercase tracking-[0.2em] text-muted-grey">
          © 2024 VISHNU VARDHAN
        </div>
      </div>
    </motion.footer>
  );
}
