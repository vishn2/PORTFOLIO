"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3">
      <span className="font-mono text-[10px] text-muted-grey uppercase tracking-widest rotate-180"
        style={{ writingMode: "vertical-rl" }}
      >
        Scroll
      </span>
      <div className="w-px h-24 bg-surface-border relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full bg-white origin-top"
          style={{ scaleY, height: "100%" }}
        />
      </div>
    </div>
  );
}
