"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard3D from "@/components/three/ProjectCard3D";
import GlowCard from "@/components/ui/GlowCard";

const projects = [
  {
    index: "01",
    category: "ARCHITECTURE",
    title: "Database Optimization",
    role: "Lead Architect",
    stack: "PostgreSQL, Redis",
    duration: "6 Months",
    description:
      "Restructured a legacy monolithic database into a distributed architecture, reducing query latency by 74% and ensuring high availability across multi-region deployments.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBF0c-1VSrvrqZA_b2m2v43m2hmAx3yckX5wyUjzYOR5Uxxe0dhzuCCVZeYXPP8g0QSL7C1CUCiw3g__KAiWVbluNSYHJ7ZPMoigtHg2vZefHksPxNq_GBkBUWgd1F73QDSIoYWtV9K9l-XVSpP48QF9T2UGn5EEwVEQG2BCgrjr61EN45Iy0ZLt-KvM2icCKGYs611Q6-slwvxaUXPmVRQx7Oub9zkfUjfKQbC7wFaZYpYCD18FNBen5UeTOo3xSXpzZX6JbkLT9n9",
    aspect: "aspect-video",
    span: "md:col-span-7",
  },
  {
    index: "02",
    category: "SECURITY",
    title: "Cybersecurity Audit",
    role: "Security Analyst",
    stack: "Splunk, Wireshark",
    duration: "3 Months",
    description:
      "Conducted a comprehensive penetration test and vulnerability assessment across entire corporate network, identifying and mitigating critical zero-day exploits.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRkOJ-iwWDQrhl0_C6QiAJKmhoCulC2BU7JM7rx7_g2YMFKsBrlvattCLy8GQHNMTXSYzdIzKUpgSSPk75cH-N-j5HqT3EMqeILIgQJksPF8BXpOkIwPXMwauFXznAWhk3Pricbzea0WESVuGerVzZWQ9zfcTr_UWwqHCh0YRSX8YZQrOc-qAfUJZxwb9x40fXyFzaDoZpHuzHM3Gvm9ro_C9q1pOfRp3MiAFc_LawGczZF5MaWPINjgJFLeYMizxGShW9AEkq9nSs",
    aspect: "aspect-[3/4]",
    span: "md:col-span-5",
  },
  {
    index: "03",
    category: "SYSTEMS",
    title: "Enterprise Solutions",
    role: "Full Stack Engineer",
    stack: "Java, React, AWS",
    duration: "1.5 Years",
    description:
      "Engineered a unified internal tool suite serving 5,000+ employees globally, replacing fragmented legacy systems with a cohesive, scalable microservices architecture.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD15VAyLNHfutUQKrl23ZsF5FpVTWf6zEm_W1V2AuT4ivZ6OlPPw5qOzQ92ej1VxveSvFLbfvilW8A0awD1XQzrGh3Q6XIjt6Y6RO8EOjygRm2mpkWMgJLCvcuJkJUbaeup870Y_-g_7IbYhJaAGqgNefthhnHSwry88pcn_pnhxTekHanBiZ9SjitFa52RI4MSYDBh6wjFrikbY1G5uo4ZJW4ogTaGEwRtPQe2UygMOpAtDPYUOLTo9YBfvsMigeZ1Xlp-jOGKaDMO",
    aspect: "aspect-[21/9]",
    span: "md:col-span-12",
  },
];

export default function WorkSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section
      id="work"
      className="py-32 md:py-section-gap px-6 md:px-margin-desktop relative"
    >
      {/* Section Header */}
      <div ref={headerRef} className="max-w-[1600px] mx-auto">
        <div className="flex justify-between items-end mb-16 md:mb-24 border-b border-surface-border pb-8">
          <motion.h2
            className="font-display text-display-lg uppercase leading-none text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={
              headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7 }}
          >
            SELECTION
          </motion.h2>
          <motion.span
            className="font-body text-label-caps text-muted-grey uppercase tracking-[0.2em] hidden md:inline-block"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            2021 — 2024
          </motion.span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter">
          {projects.map((project, index) => (
            <div
              key={project.index}
              className={`col-span-1 ${project.span} ${
                index === 1 ? "md:mt-24" : ""
              } ${index === 2 ? "md:mt-16" : ""}`}
            >
              <GlowCard
                delay={index * 0.15}
                className="glass p-0 overflow-hidden group"
              >
                <ProjectCard3D>
                  {/* Image */}
                  <div
                    className={`${project.aspect} overflow-hidden bg-surface-container relative`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-hover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s]"
                    />
                    {/* Number overlay */}
                    <div className="absolute top-4 right-4 font-body text-mono-tech text-white/30 text-6xl font-bold select-none">
                      {project.index}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="font-body text-label-caps text-muted-grey uppercase tracking-[0.2em] block mb-2">
                          {project.index} — {project.category}
                        </span>
                        <h3 className="font-display text-headline-lg uppercase text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Tech details */}
                    <div className="flex flex-col gap-3 mt-6 mb-6">
                      {[
                        { label: "ROLE", value: project.role },
                        { label: "STACK", value: project.stack },
                        { label: "DURATION", value: project.duration },
                      ].map((detail) => (
                        <div
                          key={detail.label}
                          className="flex justify-between border-b border-surface-border pb-2"
                        >
                          <span className="font-body text-mono-tech text-muted-grey">
                            {detail.label}
                          </span>
                          <span className="font-body text-mono-tech text-white">
                            {detail.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="font-body text-body-md text-muted-grey mb-6">
                      {project.description}
                    </p>

                    <a
                      href="#"
                      className="inline-flex items-center gap-2 font-body text-label-caps uppercase tracking-[0.2em] text-white border border-surface-border px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 group/btn"
                    >
                      View Case Study
                      <svg
                        className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </ProjectCard3D>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
