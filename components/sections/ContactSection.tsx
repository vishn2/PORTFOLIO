"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contactMethods = [
  {
    label: "01 / DIRECT",
    title: "EMAIL",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    href: "mailto:hello@example.com",
    borderClass: "border-b md:border-b-0 md:border-r",
  },
  {
    label: "02 / NETWORK",
    title: "LINKEDIN",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    ),
    href: "#",
    borderClass: "border-b md:border-b-0 md:border-r",
  },
  {
    label: "03 / CODE",
    title: "GITHUB",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    href: "#",
    borderClass: "",
  },
];

export default function ContactSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });

  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

  return (
    <section id="contact" className="relative">
      {/* Hero */}
      <div
        ref={headerRef}
        className="flex flex-col items-center justify-center min-h-[50vh] px-6 md:px-margin-desktop py-32 relative"
      >
        {/* Dot pattern background */}
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

        <motion.span
          className="font-body text-mono-tech text-muted-grey mb-8 uppercase tracking-[0.3em]"
          initial={{ opacity: 0, y: 20 }}
          animate={
            headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6 }}
        >
          Initialization Sequence
        </motion.span>

        <motion.h2
          className="font-display text-display-xl text-white text-center leading-none uppercase relative"
          initial={{ opacity: 0, y: 40 }}
          animate={
            headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          GET IN TOUCH
        </motion.h2>
      </div>

      {/* Architectural divider */}
      <div className="w-full relative h-px bg-surface-border">
        <div className="absolute left-6 md:left-margin-desktop top-1/2 -translate-y-1/2">
          <div className="w-4 h-px bg-white" />
          <div className="w-px h-4 bg-white absolute top-1/2 left-0 -translate-y-1/2" />
        </div>
        <div className="absolute right-6 md:right-margin-desktop top-1/2 -translate-y-1/2">
          <div className="w-4 h-px bg-white" />
          <div className="w-px h-4 bg-white absolute top-1/2 right-0 -translate-y-1/2" />
        </div>
      </div>

      {/* Contact Grid */}
      <div
        ref={gridRef}
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-surface-border"
      >
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.title}
            href={method.href}
            className={`group relative flex flex-col items-center justify-center py-24 md:py-32 ${method.borderClass} border-surface-border hover:bg-white transition-all duration-500 ease-in-out overflow-hidden`}
            initial={{ opacity: 0, y: 40 }}
            animate={
              gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-surface-container opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

            <span className="font-body text-label-caps text-muted-grey group-hover:text-black mb-6 transition-colors duration-300 tracking-[0.2em]">
              {method.label}
            </span>

            <h3 className="font-display text-headline-lg text-white group-hover:text-black transition-colors duration-300">
              {method.title}
            </h3>

            {/* Icon that appears on hover */}
            <div className="absolute bottom-8 opacity-0 group-hover:opacity-100 text-black transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              {method.icon}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
