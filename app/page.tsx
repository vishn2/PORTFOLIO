"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import WorkSection from "@/components/sections/WorkSection";
import AboutSection from "@/components/sections/AboutSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollProgress from "@/components/ui/ScrollProgress";

// Dynamic import for Three.js components (no SSR)
const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false });
const FloatingGeometry = dynamic(
  () => import("@/components/three/FloatingGeometry"),
  { ssr: false }
);
const ParticleField = dynamic(
  () => import("@/components/three/ParticleField"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* 3D Background Layer — fixed behind everything */}
      <Scene>
        <ParticleField />
        <FloatingGeometry />
      </Scene>

      {/* UI Layer */}
      <div className="relative z-10">
        <Navbar />
        <ScrollProgress />

        <HeroSection />
        <IntroSection />
        <WorkSection />
        <AboutSection />
        <CapabilitiesSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
