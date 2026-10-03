"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Philosophy from "@/components/Philosophy";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030f14] text-slate-100 selection:bg-orange-500/30 selection:text-white">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Hero Scrollytelling Sequence (500vh sticky scroll scrubbing) */}
      <ScrollyCanvas />

      {/* Selected Case Studies & Projects */}
      <Projects />

      {/* Creative Engineering Ethos & Live Metrics */}
      <Philosophy />

      {/* Comprehensive Tech Stack & Capabilities */}
      <TechStack />

      {/* Editorial Contact Footer */}
      <Footer />
    </main>
  );
}
