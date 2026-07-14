"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

type Item = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const data: Item[] = [
  {
    title: "Our Mission",
    description:
      "Make quality education accessible through simple, affordable and practical micro lessons.",
    icon: Target
  },
  {
    title: "Our Vision",
    description:
      "Create a global learning ecosystem where everyone can learn and grow.",
    icon: Eye
  }
];

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-[#070a0e] py-24 text-white">
      {/* Background Cyber Lights for Tech/Premium Vibe */}
      <div className="absolute left-1/4 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none"></div>

      <div className="container relative z-10 mx-auto grid gap-8 px-6 md:grid-cols-2 max-w-5xl">
        {data.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
              whileHover={{
                y: -10,
                borderColor: "rgba(6, 182, 212, 0.4)",
                backgroundColor: "rgba(9, 13, 20, 0.7)",
                boxShadow: "0 20px 40px -15px rgba(6, 182, 212, 0.15)"
              }}
              className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/30 p-8 md:p-10 backdrop-blur-md transition-all duration-300 group"
            >
              {/* Subtle Inner Glow on Hover */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/0 opacity-0 blur-3xl transition-opacity duration-500 group-hover:bg-cyan-500/10 group-hover:opacity-100 pointer-events-none"></div>

              {/* Glowing Icon Container */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950 text-cyan-400 shadow-inner transition-colors duration-300 group-hover:border-cyan-500/30 group-hover:text-cyan-300">
                <Icon size={26} className="transition-transform duration-500 group-hover:rotate-[12deg]" />
              </div>

              {/* Title with sleek font weight */}
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-400">
                {item.title}
              </h2>

              {/* Description */}
              <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                {item.description}
              </p>

              {/* Decorative Corner Accent Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 group-hover:w-1/3"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}