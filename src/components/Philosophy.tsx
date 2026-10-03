"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gauge, Sparkles, Layers, Sliders, Zap, Eye } from "lucide-react";

const PILLARS = [
  {
    num: "01",
    title: "Performance First",
    desc: "Optimizing critical APIs with pagination, query tuning, and Redis caching to deliver up to 50% faster responses and lower server load at scale.",
    icon: Gauge,
    color: "from-orange-500 to-amber-500",
  },
  {
    num: "02",
    title: "Production Reliability",
    desc: "Tracing and resolving critical production issues quickly, so enterprise platforms stay stable and customers see uninterrupted service.",
    icon: Eye,
    color: "from-cyan-400 to-sky-500",
  },
  {
    num: "03",
    title: "Clean Architecture",
    desc: "Event-driven microservices with Kafka, sound design patterns, and clean code principles that keep systems scalable, fault-tolerant, and easy to maintain.",
    icon: Sparkles,
    color: "from-amber-400 to-orange-500",
  },
  {
    num: "04",
    title: "Full-Stack Delivery",
    desc: "From Spring Boot REST APIs and AWS deployments to Angular enterprise UIs, owning features end to end with TDD and automated CI/CD pipelines.",
    icon: Layers,
    color: "from-sky-400 to-indigo-500",
  },
];

const METRICS = [
  { label: "Core Stack", value: "Java/Spring" },
  { label: "Cloud Platform", value: "AWS / EKS" },
  { label: "API Speedup", value: "Up to 50%" },
  { label: "Architecture", value: "Event-Driven" },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative w-full py-32 px-6 sm:px-10 lg:px-16 bg-[#030f14] overflow-hidden">
      {/* Background glow lines */}
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-white/10 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-orange-400 mb-4">
              <Sliders className="w-3.5 h-3.5" />
              <span>ENGINEERING PHILOSOPHY</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Code With Purpose.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            I don&apos;t just ship features; I build systems that scale and hold up
            in production. Here is how clean design and reliable engineering come together.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
                      {pillar.num} {"//"}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 group-hover:border-white/20 transition-all">
                      <Icon className="w-4 h-4 text-slate-300 group-hover:text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="group-hover:text-orange-400 transition-colors">
                    ENGINEERED
                  </span>
                  <Zap className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Metrics Ribbon */}
        <div className="p-8 sm:p-10 rounded-2xl glass-panel border border-white/10 bg-gradient-to-r from-orange-950/20 via-slate-900/40 to-cyan-950/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {METRICS.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${idx !== 0 ? "pt-6 md:pt-0 md:pl-8" : ""}`}
              >
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-1">
                  {m.label}
                </span>
                <span className="text-2xl sm:text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-300">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}