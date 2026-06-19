"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  "SYSTEM ARCHITECTURE",
  "IT MANAGEMENT",
  "PROBLEM SOLVING",
];

const methodItems = [
  { number: "01", label: "Architecture" },
  { number: "02", label: "Implementation" },
  { number: "03", label: "Optimization" },
];

export default function CapabilitiesSection() {
  const capRef = useRef(null);
  const capInView = useInView(capRef, { once: true, margin: "-50px" });

  const methodRef = useRef(null);
  const methodInView = useInView(methodRef, { once: true, margin: "-50px" });

  return (
    <>
      {/* Capabilities — White on Black inversion */}
      <section
        ref={capRef}
        className="py-32 md:py-section-gap px-6 md:px-margin-desktop bg-white text-black relative overflow-hidden"
      >
        {/* Decorative markers */}
        <motion.div
          className="max-w-[1200px] mx-auto flex justify-between items-center mb-16 md:mb-24"
          initial={{ opacity: 0 }}
          animate={capInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-black text-2xl">+</span>
          <p className="font-body text-label-caps text-black tracking-[0.3em] text-center uppercase">
            CORE CAPABILITIES
          </p>
          <span className="text-black text-2xl">+</span>
        </motion.div>

        {/* Capability Items */}
        <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap}
              className="group cursor-pointer relative py-4 md:py-6 flex items-center justify-center w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={
                capInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <h3 className="font-display text-display-lg text-black text-center relative z-10 transition-transform duration-500 group-hover:scale-105">
                {cap}
              </h3>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </motion.div>
          ))}
        </div>

        {/* Bottom markers */}
        <motion.div
          className="max-w-[1200px] mx-auto flex justify-between items-center mt-16 md:mt-24"
          initial={{ opacity: 0 }}
          animate={capInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span className="text-black text-2xl">+</span>
          <span className="text-black text-2xl">+</span>
        </motion.div>
      </section>

      {/* Method Section */}
      <section
        ref={methodRef}
        className="py-32 md:py-section-gap px-6 md:px-margin-desktop bg-surface-container-low border-y border-surface-border"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-section-gap max-w-[1600px] mx-auto">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -40 }}
            animate={
              methodInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -40 }
            }
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-display-lg uppercase mb-8 text-white">
              METHOD
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant max-w-md">
              True engineering exists in the negative space—the bugs not
              written, the latency not experienced, the downtime avoided. We
              build systems that are felt through their seamless execution
              rather than seen through their complexity.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 md:gap-8">
            {methodItems.map((item, index) => (
              <motion.div
                key={item.number}
                className="border-b border-surface-border pb-6 md:pb-8 group cursor-pointer"
                initial={{ opacity: 0, x: 40 }}
                animate={
                  methodInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: 40 }
                }
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <span className="font-body text-label-caps text-muted-grey uppercase tracking-[0.2em] block mb-2">
                  {item.number}
                </span>
                <h3 className="font-display text-headline-lg uppercase text-white group-hover:translate-x-4 transition-transform duration-300">
                  {item.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
