"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";

export default function HeroSection() {
  return (
    <header
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-surface-container-lowest" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Cinematic background image */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
      >
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeuYyn-x71UROiBKrP5UdfZn8fl-PgxK6jddRbEkrZozcczA361GvSJIj3cM27OggmAMq4msa4KFXP0v6GH2EDRkAuVVYNMvoQrDsdF4kfPv6DKxxeAWZeXeFZ_Ut0UT603NGSF3Pcdoozujx3x6QV3t3p25XSpfrqZgS4CyMHiyPiIKVtKpT3Cz7CH69LFv_-4eR2OF6fN74HzFsm1T4DZvtbLyagrsQ9U-mUtb9kcz7jKVg9TtvknUBmEpTgV-MHJQ28xmsv-8hw"
          alt="Server room background"
          className="w-full h-full object-cover grayscale"
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Pre-title label */}
        <motion.span
          className="font-body text-mono-tech text-muted-grey uppercase tracking-[0.3em] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Portfolio — 2026
        </motion.span>

        {/* Main Name */}
        <h1 className="font-display text-display-xl uppercase text-white leading-none mb-6">
          <TextReveal text="VISHNU" delay={0.5} />
          <br />
          <TextReveal text="VARDHAN" delay={0.8} />
        </h1>

        {/* Subtitle */}
        <motion.p
          className="font-body text-label-caps text-muted-grey uppercase tracking-[0.3em] mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          INFORMATION TECHNOLOGY PROFESSIONAL
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="mt-8 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="w-12 h-px bg-surface-border" />
          <span className="font-body text-mono-tech text-muted-grey text-[10px] uppercase tracking-widest">
            Est. 2023
          </span>
          <div className="w-12 h-px bg-surface-border" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-grey">
          Scroll
        </span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white/60"
            animate={{
              scaleY: [0, 1, 1, 0],
              transformOrigin: ["top", "top", "bottom", "bottom"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 md:left-margin-desktop">
        <motion.div
          className="flex gap-2 items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="w-4 h-px bg-white" />
          <div className="w-px h-4 bg-white -ml-2 -mt-2" />
        </motion.div>
      </div>

      <div className="absolute top-24 right-6 md:right-margin-desktop">
        <motion.div
          className="flex gap-2 items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="w-px h-4 bg-white -mr-2 -mt-2" />
          <div className="w-4 h-px bg-white" />
        </motion.div>
      </div>
    </header>
  );
}
