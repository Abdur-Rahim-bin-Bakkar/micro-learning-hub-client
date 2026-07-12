"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050816]">
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-sky-400/10 blur-[120px]" />

      <div className="relative flex flex-col items-center">
        {/* Animated Logo */}
        <motion.div
          animate={{
            rotate: [0, 8, -8, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          {/* Spinning Ring */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "linear",
            }}
            className="absolute inset-0 h-28 w-28 rounded-full border-[3px] border-cyan-400/20 border-t-cyan-400"
          />

          <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 shadow-[0_0_40px_rgba(6,182,212,.45)]">
            <GraduationCap
              size={52}
              className="text-white"
            />
          </div>
        </motion.div>

        {/* Brand */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mt-8 text-4xl font-extrabold tracking-wide text-white"
        >
          Micro
          <span className="text-cyan-400">Learn</span>
        </motion.h1>

        {/* Loading Text */}
        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="mt-3 text-gray-400"
        >
          Preparing your learning journey...
        </motion.p>

        {/* Animated Dots */}
        <div className="mt-8 flex gap-3">
          {[0, 1, 2].map((item) => (
            <motion.div
              key={item}
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                delay: item * 0.2,
              }}
              className="h-3 w-3 rounded-full bg-cyan-400"
            />
          ))}
        </div>
      </div>
    </div>
  );
}