"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  PlayCircle,
} from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-[#070a0e] py-24 text-white md:py-32">
      
      {/* Background Ambient Cyber Lights */}
      <div className="absolute right-0 top-0 h-[400px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 h-[400px] w-[500px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Top Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
              <GraduationCap size={16} />
              Learn Smarter, Grow Faster
            </div>

            {/* Main Heading with Cyan Gradient */}
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl tracking-tight">
              Master Skills with
              <span className="block bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent mt-1">
                Micro Learning
              </span>
            </h1>

            {/* Description Text */}
            <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-slate-400 font-medium">
              Short, focused and practical lessons designed to help students,
              teachers and professionals build real-world skills faster.
            </p>

            {/* Interactive Call to Action Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/courses" className="group cursor-pointer">
                <div className="flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 text-sm font-black uppercase tracking-widest text-slate-950 transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-[0.98]">
                  Explore Courses
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </div>
              </Link>

              <Link href="/about" className="cursor-pointer">
                <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/40 px-7 py-4 text-sm font-bold uppercase tracking-widest text-slate-300 transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900 hover:text-cyan-400 active:scale-[0.98]">
                  <PlayCircle size={16} />
                  Learn More
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Right Illustration Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Outer Mesh Card */}
            <div className="relative rounded-3xl border border-slate-800/80 bg-slate-900/20 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-cyan-500/20">
              
              {/* Inner Showcase Box */}
              <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-8 border border-slate-800/40">
                <div className="flex h-72 items-center justify-center rounded-2xl bg-[#030712] border border-slate-900 shadow-inner">
                  <div className="text-center">
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/60 text-cyan-400 shadow-lg">
                      <GraduationCap size={44} />
                    </div>
                    <h3 className="mt-6 text-2xl font-extrabold tracking-wide text-white">
                      Start Learning Today
                    </h3>
                    <p className="mt-2 text-sm text-slate-400 font-medium">
                      Knowledge in small steps
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Top Card (TypeScript Mastery) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -right-4 top-10 rounded-xl border border-slate-800 bg-[#090d16]/90 px-5 py-4 shadow-2xl backdrop-blur-sm"
              >
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  New Course Added
                </p>
                <h4 className="font-extrabold text-sm text-white mt-0.5">
                  TypeScript Mastery 🚀
                </h4>
              </motion.div>

              {/* Floating Bottom Card (Online Count) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 rounded-xl border border-slate-800 bg-[#090d16]/90 px-5 py-4 shadow-2xl backdrop-blur-sm"
              >
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Students Online
                </p>
                <h4 className="font-black text-base text-emerald-400 mt-0.5 tracking-wide">
                  2,540+
                </h4>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}