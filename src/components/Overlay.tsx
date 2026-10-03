"use client";

import React, { RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Terminal, Code2, Layers } from "lucide-react";

interface OverlayProps {
  containerRef: RefObject<HTMLDivElement>;
}

export default function Overlay({ containerRef }: OverlayProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: 0% scroll (Center)
  // Active from 0.00 to ~0.18
  const sec1Opacity = useTransform(scrollYProgress, [0.0, 0.12, 0.18], [1, 0.85, 0]);
  const sec1Y = useTransform(scrollYProgress, [0.0, 0.18], [0, -60]);
  const sec1Scale = useTransform(scrollYProgress, [0.0, 0.18], [1, 0.96]);

  // Section 2: 30% scroll (Left aligned)
  // Enters around 0.18, peaks at 0.28 - 0.36, exits by 0.46
  const sec2Opacity = useTransform(
    scrollYProgress,
    [0.18, 0.26, 0.35, 0.45],
    [0, 1, 1, 0]
  );
  const sec2Y = useTransform(scrollYProgress, [0.18, 0.26, 0.35, 0.45], [40, 0, 0, -40]);
  const sec2X = useTransform(scrollYProgress, [0.18, 0.26, 0.35, 0.45], [-30, 0, 0, -20]);

  // Section 3: 60% scroll (Right aligned)
  // Enters around 0.48, peaks at 0.58 - 0.68, exits by 0.78
  const sec3Opacity = useTransform(
    scrollYProgress,
    [0.48, 0.57, 0.67, 0.77],
    [0, 1, 1, 0]
  );
  const sec3Y = useTransform(scrollYProgress, [0.48, 0.57, 0.67, 0.77], [40, 0, 0, -40]);
  const sec3X = useTransform(scrollYProgress, [0.48, 0.57, 0.67, 0.77], [30, 0, 0, 20]);

  // Section 4: 85% scroll (Center callout to project grid)
  // Enters around 0.80, peaks at 0.88 - 0.96
  const sec4Opacity = useTransform(
    scrollYProgress,
    [0.78, 0.86, 0.94, 1.0],
    [0, 1, 1, 0.4]
  );
  const sec4Y = useTransform(scrollYProgress, [0.78, 0.88, 1.0], [50, 0, -20]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 md:p-12 lg:p-16">
      {/* =========================================================================
          SECTION 1: HERO (0% SCROLL - CENTERED)
      ========================================================================= */}
      <motion.div
        style={{
          opacity: sec1Opacity,
          y: sec1Y,
          scale: sec1Scale,
        }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/25 bg-orange-950/20 backdrop-blur-md mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
          </span>
          <span className="text-[11px] font-mono tracking-widest uppercase text-orange-200">
            5 YO Experience TILL Q4 2026 DECEMBER
          </span>
        </div>

        {/* Main Name & Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] text-white">
          Bharat Mishra.
        </h1>
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-cyan-300">
          Creative Full Stack Developer.
        </p>

        {/* Sub-tagline */}
        <p className="mt-6 max-w-xl text-sm sm:text-base text-slate-300/80 font-normal leading-relaxed">
          Crafting hyper-responsive web mechanics, cinematic scrollytelling, and
          high-performance digital architectures.
        </p>

        {/* Scroll Call to Action */}
        <div className="mt-12 flex flex-col items-center gap-2 text-slate-400">
          <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-slate-400">
            Scroll to scrub reality
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-orange-400"
            />
          </div>
        </div>
      </motion.div>

      {/* =========================================================================
          SECTION 2: LEFT ALIGNED (30% SCROLL)
      ========================================================================= */}
      <motion.div
        style={{
          opacity: sec2Opacity,
          y: sec2Y,
          x: sec2X,
        }}
        className="absolute inset-y-0 left-6 sm:left-12 md:left-20 lg:left-28 flex flex-col justify-center max-w-lg lg:max-w-xl text-left"
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase mb-4">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span>01 // The Philosophy</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
          I build digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-white">
            experiences.
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
          Where visual storytelling converges with high-performance code, transforming
          passive scrolling into an immersive cinematic journey.
        </p>

        <div className="mt-8 flex flex-wrap gap-2 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/10 text-cyan-300">
            Java & SpringBoot
          </span>
          <span className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/10 text-cyan-300">
            System Design
          </span>
          <span className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/10 text-cyan-300">
            AWS & DynamoDb, DocumentDb
          </span>
          <span className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/10 text-cyan-300">
            Kafka,Sns,Sqs
          </span>
          <span className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/10 text-cyan-300">
            Angular & React
          </span>
          <span className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/10 text-cyan-300">
            WebGL & Canvas 2D
          </span>
          <span className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/10 text-cyan-300">
            Next.js 14 App Router
          </span>
          <span className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/10 text-cyan-300">
            Sub-millisecond Scrubbing
          </span>
        </div>
      </motion.div>

      {/* =========================================================================
          SECTION 3: RIGHT ALIGNED (60% SCROLL)
      ========================================================================= */}
      <motion.div
        style={{
          opacity: sec3Opacity,
          y: sec3Y,
          x: sec3X,
        }}
        className="absolute inset-y-0 right-6 sm:right-12 md:right-20 lg:right-28 flex flex-col justify-center items-end max-w-lg lg:max-w-xl text-right ml-auto"
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-orange-400 uppercase mb-4">
          <span>02 // The Synergy</span>
          <Code2 className="w-4 h-4 text-orange-400" />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
          Bridging design <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-orange-400 via-amber-200 to-white">
            and engineering.
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
          Mastering real-time rendering, web physics, and tactile micro-interactions
          to craft memorable products that leave a lasting imprint on every visitor.
        </p>

        <div className="mt-8 flex flex-wrap justify-end gap-2 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/10 text-orange-300">
            Dynamic Dual-Tone Lighting
          </span>
          <span className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/10 text-orange-300">
            Awwwards Standards
          </span>
          <span className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/10 text-orange-300">
            Framer Motion Physics
          </span>
        </div>
      </motion.div>

      {/* =========================================================================
          SECTION 4: TRANSITION TO WORK GRID (85% SCROLL - CENTERED)
      ========================================================================= */}
      <motion.div
        style={{
          opacity: sec4Opacity,
          y: sec4Y,
        }}
        className="absolute inset-x-0 bottom-12 flex flex-col items-center justify-center text-center px-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 text-xs font-mono mb-3">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>CURATED PORTFOLIO</span>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
          Selected Works & Systems
        </h3>
        <p className="text-sm text-slate-400 mt-2 font-mono flex items-center gap-2">
          Continue scrolling to explore case studies
          <ArrowDown className="w-4 h-4 animate-bounce text-orange-400 inline" />
        </p>
      </motion.div>
    </div>
  );
}
