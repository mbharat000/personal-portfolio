"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Sparkles,
  Terminal,
} from "lucide-react";

interface TechCategory {
  title: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  skills: { name: string; level: string; desc: string }[];
}

const CATEGORIES: TechCategory[] = [
  {
    title: "Backend & Architecture",
    badge: "01 // BACKEND",
    icon: Sparkles,
    description: "Scalable, fault-tolerant distributed systems built with clean code and sound design patterns.",
    skills: [
      { name: "Java", level: "Expert", desc: "Core Java, design patterns, and clean, maintainable code" },
      { name: "Spring Boot", level: "Expert", desc: "Production-grade REST services, Spring MVC, and Hibernate ORM" },
      { name: "Microservices", level: "Expert", desc: "Event-driven architecture with Kafka, HLD/LLD, and system design" },
      { name: "REST APIs & Security", level: "Advanced", desc: "API design and integrations secured with OAuth2 / JWT" },
      { name: "Performance Tuning", level: "Advanced", desc: "Pagination, query optimization, and API speedups of up to 50%" },
    ],
  },
  {
    title: "Cloud & DevOps",
    badge: "02 // CLOUD",
    icon: Code2,
    description: "Cloud-native deployments with automated pipelines and reliable, repeatable infrastructure.",
    skills: [
      { name: "AWS", level: "Expert", desc: "Lambda, S3, IAM, KMS, CloudFormation, SQS, SNS, and DynamoDB" },
      { name: "Kubernetes (EKS)", level: "Advanced", desc: "Container orchestration and cloud-native deployment strategies" },
      { name: "Docker", level: "Advanced", desc: "Containerized builds and consistent environments across stages" },
      { name: "CI/CD & Jenkins", level: "Advanced", desc: "Automated build, test, and release pipelines" },
    ],
  },
  {
    title: "Data, Frontend & Quality",
    badge: "03 // DATA & UI",
    icon: Cpu,
    description: "Reliable data layers, enterprise UIs, and test-driven delivery from design to production.",
    skills: [
      { name: "SQL & NoSQL Databases", level: "Advanced", desc: "MySQL, PostgreSQL, MongoDB, DynamoDB, and DocumentDB" },
      { name: "Redis Caching", level: "Advanced", desc: "Caching strategies for high-throughput applications" },
      { name: "Angular & TypeScript", level: "Advanced", desc: "Enterprise UIs with AG Grid, NGX Graph, and API integration" },
      { name: "Testing & TDD", level: "Expert", desc: "JUnit, Mockito, Cypress, and Playwright for solid coverage" },
      { name: "DevSecOps", level: "Intermediate", desc: "Black Duck and Aikido vulnerability scanning in the pipeline" },
    ],
  },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section id="stack" className="relative w-full py-32 px-6 sm:px-10 lg:px-16 bg-[#030f14]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-white/10 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan-400 mb-4">
              <Terminal className="w-3.5 h-3.5" />
              <span>THE ARSENAL</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Tech Stack.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            A battle-tested suite of technologies chosen for raw performance,
            architectural rigor, and uncompromised creative liberty.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            const isActive = activeCategory === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveCategory(idx)}
                className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-mono transition-all duration-300 ${isActive
                    ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                    : "glass-panel text-slate-300 hover:text-white hover:border-white/20"
                  }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-orange-600" : "text-cyan-400"}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="p-8 sm:p-12 rounded-2xl glass-panel border border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-8 border-b border-white/10 gap-4">
            <div>
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
                {CATEGORIES[activeCategory].badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {CATEGORIES[activeCategory].title}
              </h3>
            </div>
            <p className="max-w-lg text-sm text-slate-400 font-light">
              {CATEGORIES[activeCategory].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CATEGORIES[activeCategory].skills.map((skill, sIdx) => (
              <motion.div
                key={sIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: sIdx * 0.05 }}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-semibold text-white tracking-tight">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}