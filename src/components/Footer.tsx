"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  Copy,
  Check,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from "./Icons";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const email = "mishrabharat167@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // IST is UTC+5:30
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="relative w-full pt-32 pb-16 px-6 sm:px-10 lg:px-16 bg-[#030f14] border-t border-white/10">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-orange-500/10 via-cyan-500/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Main CTA Section */}
        <div className="flex flex-col items-start justify-between mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-orange-400 mb-6">
            <Mail className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white max-w-5xl leading-[0.95]">
            Let&apos;s build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-cyan-300">
              unforgettable.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            Whether you need a modern web application, cloud-native architecture,
            or enterprise software, let’s engineer scalable, high-performance solutions built for the future.
          </p>

          {/* Email Copy Box */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="group relative inline-flex items-center gap-3 px-6 py-4 rounded-xl glass-panel glass-panel-hover text-white font-mono text-sm sm:text-base border border-white/15"
            >
              <Mail className="w-4 h-4 text-orange-400" />
              <span>{email}</span>
              {copied ? (
                <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-semibold pl-2">
                  <Check className="w-3.5 h-3.5" /> Copied!
                </span>
              ) : (
                <Copy className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors ml-2" />
              )}
            </button>

            <a
              href={`mailto:${email}?subject=Project%20Inquiry%20-%20Creative%20Development`}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-semibold text-sm sm:text-base font-mono shadow-lg shadow-orange-500/20 transition-all hover:scale-105"
            >
              <span>Send Message</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </a>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12 border-y border-white/10 text-xs font-mono">
          {/* Location & Time */}
          <div className="flex flex-col gap-2">
            <span className="text-slate-500 uppercase tracking-widest">Base Coordinates</span>
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>New Delhi, India (Remote Available)</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 mt-1">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>{currentTime ? `${currentTime} IST` : "Syncing..."}</span>
            </div>
          </div>

          {/* Availability */}
          <div className="flex flex-col gap-2">
            <span className="text-slate-500 uppercase tracking-widest">Current Status</span>
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Senior Software Engineer @R-Systems</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed mt-1">
              Accepting high-impact creative engineering and design contracts.
            </p>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-2">
            <span className="text-slate-500 uppercase tracking-widest">Digital Channels</span>
            <div className="flex flex-col gap-1.5 text-slate-300">
              <a
                href="https://github.com/mbharat000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" /> GitHub
              </a>
              <a
                href="https://twitter.com/bharatmishradev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
              >
                <TwitterIcon className="w-3.5 h-3.5" /> X / Twitter
              </a>
              <a
                href="https://www.instagram.com/__shifter__72?stkn=dTZpb3JlZGRocjJt&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
              >
                <InstagramIcon className="w-3.5 h-3.5" /> In / Insta
              </a>
              <a
                href="https://linkedin.com/in/bharatmishra99"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
              >
                <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Back to top */}
          <div className="flex flex-col justify-between items-start md:items-end">
            <span className="text-slate-500 uppercase tracking-widest">Navigation</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel glass-panel-hover text-slate-300 hover:text-white"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-orange-400" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Bharat Mishra. Engineered with Next.js 14, Canvas & Framer Motion.</p>
          <div className="flex items-center gap-4">
            <span>60 FPS SCROLL-LINKED SEQUENCE</span>
            <span>•</span>
            <span className="text-slate-400">AWWWARDS STANDARD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
