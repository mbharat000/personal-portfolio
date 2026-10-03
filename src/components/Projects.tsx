"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Award } from "lucide-react";
import { GithubIcon } from "./Icons";

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  role: string;
  award?: string;
  stats: { label: string; value: string }[];
  tags: string[];
  gradient: string;
  accentColor: string;
  liveUrl: string;
  githubUrl: string;
}

const PROJECTS: Project[] = [
  {
    id: "bkm-neon",
    title: "BKM-NEON",
    category: "Automotive Supply Chain",
    year: "2025",
    description:
      "A large-scale enterprise platform managing automobile parts demand, supply, inventory planning, and procurement across manufacturing plants and suppliers, built on Java microservices and AWS with an Angular frontend.",
    role: "Software Engineer, Volkswagen Group",
    award: "Instapat Award",
    stats: [
      { label: "API Speedup", value: "50% Faster" },
      { label: "Architecture", value: "Microservices" },
      { label: "Frontend", value: "Angular" },
    ],
    tags: ["Java", "Spring Boot", "Angular", "AWS Lambda", "DocumentDB", "MySQL"],
    gradient: "from-orange-600/30 via-amber-600/15 to-transparent",
    accentColor: "border-orange-500/40 text-orange-400 group-hover:bg-orange-500/10",
    liveUrl: "#",
    githubUrl: "https://github.com/mbharat000",
  },
  {
    id: "nice-cxone",
    title: "NICE CXone",
    category: "Customer Experience Platform",
    year: "2026",
    description:
      "A cloud-native omnichannel platform for voice, chat, email, and digital customer interactions. Built and enhanced Spring Boot microservices, optimized APIs with pagination, and resolved critical production issues.",
    role: "Senior Software Engineer, R Systems",
    stats: [
      { label: "Response Time", value: "20% Faster" },
      { label: "Backend", value: "Spring Boot" },
      { label: "Deployment", value: "Cloud-Native" },
    ],
    tags: ["Java", "Spring Boot", "Microservices", "REST APIs", "Kubernetes", "Kafka"],
    gradient: "from-cyan-600/30 via-sky-600/15 to-transparent",
    accentColor: "border-cyan-500/40 text-cyan-400 group-hover:bg-cyan-500/10",
    liveUrl: "https://www.nice.com/products/cxone",
    githubUrl: "https://github.com/mbharat000",
  },
  {
    id: "react-ops-dashboard",
    title: "Realtime Ops Dashboard",
    category: "React Frontend",
    year: "2025",
    description:
      "A responsive React dashboard that visualizes live service health, metrics, and alerts from backend microservices, with reusable components and typed API integration.",
    role: "Full-Stack Developer",
    stats: [
      { label: "Frontend", value: "React + TS" },
      { label: "Data", value: "REST / WS" },
      { label: "Testing", value: "Cypress" },
    ],
    tags: ["React", "TypeScript", "REST APIs", "Tailwind CSS", "Cypress"],
    gradient: "from-indigo-600/30 via-cyan-600/15 to-transparent",
    accentColor: "border-sky-500/40 text-sky-400 group-hover:bg-sky-500/10",
    liveUrl: "#",
    githubUrl: "https://github.com/mbharat000",
  },
  {
    id: "event-driven-orders",
    title: "Event-Driven Order Service",
    category: "Java Microservices",
    year: "2024",
    description:
      "A fault-tolerant microservices backend where independent Spring Boot services communicate through Kafka events, secured with OAuth2/JWT and deployed on AWS with automated CI/CD.",
    role: "Backend Engineer",
    stats: [
      { label: "Messaging", value: "Kafka" },
      { label: "Security", value: "OAuth2 / JWT" },
      { label: "Pipeline", value: "Jenkins CI/CD" },
    ],
    tags: ["Java", "Spring Boot", "Kafka", "Docker", "AWS", "JUnit"],
    gradient: "from-amber-600/30 via-orange-600/15 to-transparent",
    accentColor: "border-amber-500/40 text-amber-400 group-hover:bg-amber-500/10",
    liveUrl: "#",
    githubUrl: "https://github.com/mbharat000",
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative w-full py-32 px-6 sm:px-10 lg:px-16 bg-[#030f14]">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-white/10 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED CASE STUDIES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Engineered Works.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            A curated index of creative development projects, web experiments, and
            production-grade interaction design architectures.
          </p>
        </div>

        {/* 2x2 Glassmorphism Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group relative rounded-2xl overflow-hidden glass-panel glass-panel-hover flex flex-col justify-between"
            >
              {/* Card top gradient shimmer */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
              />

              {/* Card Header Content */}
              <div className="relative p-8 sm:p-10 z-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                      {project.category}
                    </span>
                    <span className="text-slate-600 font-mono">•</span>
                    <span className="text-xs font-mono text-slate-400">{project.year}</span>
                  </div>

                  {project.award && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-[11px] font-mono text-orange-300">
                      <Award className="w-3 h-3 text-orange-400" />
                      <span>{project.award}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300/85 font-light mt-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Metrics / Highlights */}
                <div className="grid grid-cols-3 gap-3 my-8 p-4 rounded-xl bg-black/40 border border-white/5">
                  {project.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="flex flex-col">
                      <span className="text-xs font-mono text-slate-400">{stat.label}</span>
                      <span className="text-sm sm:text-base font-mono font-semibold text-white mt-0.5">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/10 text-slate-300 group-hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="relative px-8 sm:px-10 py-5 border-t border-white/5 bg-white/[0.01] flex items-center justify-between z-10">
                <span className="text-xs font-mono text-slate-400 tracking-wider">
                  ROLE // {project.role}
                </span>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label={`View ${project.title} source code`}
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all group-hover:border-cyan-400/40"
                  >
                    <span>Launch</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}