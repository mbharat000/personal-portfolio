"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 transition-all duration-300">
      {/* Brand Monogram */}
      <a
        href="#"
        className="group flex items-center gap-2.5 text-sm font-mono tracking-widest text-white uppercase select-none"
      >
        <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-cyan-500 flex items-center justify-center font-bold text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
          BM
        </span>
        <span className="font-semibold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
          Bharat Mishra
        </span>
        <span className="hidden sm:inline text-xs text-slate-500 font-mono">
          {"// Senior Software Engineer"}
        </span>
      </a>

      {/* Floating Glass Navigation Pill */}
      <nav
        className={`hidden md:flex items-center gap-8 px-6 py-2.5 rounded-full transition-all duration-300 ${scrolled
            ? "glass-panel shadow-2xl shadow-black/80"
            : "bg-white/[0.03] border border-white/5"
          }`}
      >
        <a
          href="#hero-scroll"
          className="text-xs font-mono tracking-wider text-slate-300 hover:text-orange-400 transition-colors"
        >
          00. Overview
        </a>
        <a
          href="#work"
          className="text-xs font-mono tracking-wider text-slate-300 hover:text-cyan-400 transition-colors"
        >
          01. Work
        </a>
        <a
          href="#philosophy"
          className="text-xs font-mono tracking-wider text-slate-300 hover:text-orange-400 transition-colors"
        >
          02. Philosophy
        </a>
        <a
          href="#stack"
          className="text-xs font-mono tracking-wider text-slate-300 hover:text-cyan-400 transition-colors"
        >
          03. Stack
        </a>
        <a
          href="#contact"
          className="text-xs font-mono tracking-wider text-slate-300 hover:text-orange-400 transition-colors"
        >
          04. Contact
        </a>
      </nav>

      {/* Right Availability CTA */}
      <div className="hidden sm:flex items-center gap-3">
        <a
          href="#contact"
          className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-orange-500/40 text-slate-200 transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Let&apos;s Talk</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white"
        aria-label="Toggle Navigation Menu"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 p-6 rounded-2xl glass-panel flex flex-col gap-4 text-center z-50">
          <a
            href="#hero-scroll"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono text-slate-200 hover:text-orange-400 py-2"
          >
            00. Overview
          </a>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono text-slate-200 hover:text-cyan-400 py-2"
          >
            01. Work
          </a>
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono text-slate-200 hover:text-orange-400 py-2"
          >
            02. Philosophy
          </a>
          <a
            href="#stack"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono text-slate-200 hover:text-cyan-400 py-2"
          >
            03. Stack
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono text-slate-200 hover:text-orange-400 py-2"
          >
            04. Contact
          </a>
        </div>
      )}
    </header>
  );
}
