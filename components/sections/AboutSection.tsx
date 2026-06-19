"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, { once: true, margin: "-50px" });

  return (
    <section
      id="about"
      className="py-32 md:py-section-gap relative overflow-hidden"
    >
      {/* Cinematic Image Strip */}
      <div
        ref={imgRef}
        className="w-full flex overflow-hidden border-y border-surface-border bg-surface-container-lowest mb-32 md:mb-section-gap"
      >
        {[
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCzDU6i8pbJzwPoLxI4wyzLtLJEOE5ljtyMDiKQhFekg6JkPE9qjCWmxmvhEAIF5GPp20B6I_hbpFKJbbBtksLfPfeSno2ctBeODDcMy9kRsMbdoECbHzp6fKvJ4vL4UHAzZ95RXyh2gN9HvFgBrl9KiBi21agJkp0a7HC57O6hH_5XlMmH4dGWOt2O9fBiUl8un_a2vE6UlWpHge74i5EikoEix_7LL6zR8gFo1h6pJfCtVtHBgOTmLBy9mNDCgez8kBg-a4Cx06LA",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDPAoOaC9duhp2uq8yIJdGaCH56_7znOXCXc_i6tvUgIvmZ0J9SiaFD_BeWilnskCok8kcrpqSHRmF4G9bZFo8RJS1AjXUYZjqhTyXgrhNRYzk0En5OQHStwLreod6UzD6KPMB1OdYG8Dz79-xg7tr2IsYnkQODP0L6RbvAPTBBB6T5bQOCleEkgv7IuNRgNRRNwjEogJ7w2sNhMEAI7Lz_9vQstsSoRf5dW6oaKF4nGfveWncKdIr88q1k_D4myA0uuGExa-NElMLF",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCm6rYjftdWfteUsX9OSCjoTyDVNeLItvvlOc_whGjsZd_uxKgCvjc5w18Yr3Lls8cbhMEe-IMSzj3imd6OzEmU2xOGmVsCqPi4kGwb4zzAlWzfNc1B_pTgTRrV2d9pjBZjHXxbopYxuD66OuZFAHaM72_Ni0H-kT95A6DaKfvdOxqWpe5j40wk55_TZd7MPjshroebxk2o1C_jJcsOa0KBfJ-w8ULhnDX8jEf2YPXYx6RbLpicKaF2e9CM037QoVlF_YCu2-dpbzqo",
        ].map((src, i) => (
          <motion.div
            key={i}
            className={`flex-1 ${
              i < 2 ? "border-r border-surface-border" : ""
            } p-3 md:p-4 group cursor-pointer ${
              i === 1 ? "hidden md:block" : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={
              imgInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7, delay: i * 0.15 }}
          >
            <div className="overflow-hidden h-32 md:h-64">
              <img
                src={src}
                alt={`Tech imagery ${i + 1}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 group-hover:scale-105"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* About Content */}
      <div
        ref={ref}
        className="px-6 md:px-margin-desktop max-w-[1600px] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter">
          {/* Label */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={
              isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
            }
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-label-caps text-muted-grey uppercase tracking-[0.2em]">
              / ABOUT
            </span>
          </motion.div>

          {/* Content */}
          <div className="md:col-span-8 md:col-start-5">
            <motion.h2
              className="font-display text-headline-lg text-white mb-8 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Architecting digital infrastructure with meticulous precision.
            </motion.h2>
            <motion.p
              className="font-body text-body-lg text-on-surface-variant max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              I am an Information Technology professional dedicated to designing
              robust systems and solving complex technical challenges. My
              approach marries technical rigor with strategic foresight, ensuring
              that infrastructure not only supports current operations but scales
              elegantly for future demands. Viewing code and systems as a craft,
              I strive for minimalist, efficient, and highly secure
              architectures.
            </motion.p>

            {/* Experience callout */}
            <motion.div
              className="mt-16 pt-8 border-t border-surface-border"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <p className="font-body text-label-caps text-muted-grey uppercase tracking-[0.2em] max-w-xl">
                PREVIOUS ENGAGEMENTS INCLUDE ENTERPRISE SCALE INFRASTRUCTURE,
                CLOUD MIGRATIONS, AND ZERO-TRUST SECURITY DEPLOYMENTS.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
