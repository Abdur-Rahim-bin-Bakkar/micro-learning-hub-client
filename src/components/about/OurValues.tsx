"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Rocket,
  ShieldCheck
} from "lucide-react";

const values = [
  {
    title: "Quality Learning",
    icon: BookOpen,
    text: "Practical and structured learning content."
  },
  {
    title: "Community",
    icon: Users,
    text: "Connect learners and teachers together."
  },
  {
    title: "Innovation",
    icon: Rocket,
    text: "Modern technology based education."
  },
  {
    title: "Trust",
    icon: ShieldCheck,
    text: "Safe and reliable learning environment."
  }
];

export default function OurValues() {
  return (
    <section className="relative overflow-hidden bg-[#070a0e] py-24 text-white">
      {/* Background Soft Glow to lift up the dark mode */}
      <div className="absolute left-1/2 top-1/2 h-[350px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-6">
        
        {/* Section Heading with Subtle Gradient */}
        <h2 className="mb-14 text-center text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
            Our Values
          </span>
        </h2>

        {/* 4-Column Responsive Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -10,
                  borderColor: "rgba(6, 182, 212, 0.4)",
                  backgroundColor: "rgba(9, 13, 20, 0.7)",
                  boxShadow: "0 15px 30px -10px rgba(6, 182, 212, 0.15)"
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6 text-center backdrop-blur-sm transition-all duration-300"
              >
                {/* Micro Ambient Glow on Top of Each Card on Hover */}
                <div className="absolute -top-12 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-cyan-500/0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:bg-cyan-500/10 group-hover:opacity-100 pointer-events-none"></div>

                {/* Glowing Hexagonal/Square Profile for Icon */}
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-cyan-400 shadow-inner transition-colors duration-300 group-hover:border-cyan-500/30 group-hover:text-cyan-300">
                  <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Card Title */}
                <h3 className="font-bold text-base text-slate-100 tracking-wide transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>

                {/* Card Text Description */}
                <p className="mt-2.5 text-xs font-medium leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                  {item.text}
                </p>

                {/* Top Border Line Highlight */}
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}