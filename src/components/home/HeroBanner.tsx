"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  PlayCircle,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: BookOpen,
    value: "500+",
    label: "Micro Courses",
  },
  {
    icon: Users,
    value: "10K+",
    label: "Active Learners",
  },
  {
    icon: GraduationCap,
    value: "200+",
    label: "Expert Mentors",
  },
];

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B0F14] via-[#111827] to-[#1E293B] text-white">
      
      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="container mx-auto px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              <GraduationCap size={18} />
              Learn Smarter, Grow Faster
            </div>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Master Skills with
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Micro Learning
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
              Short, focused and practical lessons designed to help students,
              teachers and professionals build real-world skills faster.
            </p>


            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/courses"
                className="group flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
              >
                Explore Courses

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>


              <Link
                href="/about"
                className="flex items-center gap-2 rounded-xl border border-gray-600 px-6 py-3 font-semibold transition hover:bg-white/10"
              >
                <PlayCircle size={18}/>
                Learn More
              </Link>

            </div>


            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4">

              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity:0,
                      y:20
                    }}
                    animate={{
                      opacity:1,
                      y:0
                    }}
                    transition={{
                      delay:index * 0.2
                    }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                  >

                    <Icon
                      className="mb-3 text-blue-400"
                      size={25}
                    />

                    <h3 className="text-xl font-bold">
                      {item.value}
                    </h3>

                    <p className="text-sm text-gray-400">
                      {item.label}
                    </p>

                  </motion.div>
                );
              })}

            </div>


          </motion.div>



          {/* Right Illustration */}
          <motion.div
            initial={{
              opacity:0,
              scale:0.8
            }}
            animate={{
              opacity:1,
              scale:1
            }}
            transition={{
              duration:0.8
            }}
            className="relative"
          >

            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">

              <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8">

                <div className="flex h-72 items-center justify-center rounded-2xl bg-[#0B0F14]">

                  <div className="text-center">

                    <GraduationCap
                      size={80}
                      className="mx-auto text-blue-400"
                    />

                    <h3 className="mt-5 text-2xl font-bold">
                      Start Learning Today
                    </h3>

                    <p className="mt-2 text-gray-400">
                      Knowledge in small steps
                    </p>

                  </div>

                </div>

              </div>


              {/* Floating Card */}

              <motion.div
                animate={{
                  y:[0,-10,0]
                }}
                transition={{
                  repeat:Infinity,
                  duration:3
                }}
                className="absolute -right-5 top-10 rounded-xl border border-white/10 bg-[#111827] px-5 py-4 shadow-xl"
              >

                <p className="text-sm text-gray-400">
                  New Course Added
                </p>

                <h4 className="font-bold">
                  TypeScript Mastery 🚀
                </h4>

              </motion.div>


              <motion.div
                animate={{
                  y:[0,10,0]
                }}
                transition={{
                  repeat:Infinity,
                  duration:4
                }}
                className="absolute -bottom-5 -left-5 rounded-xl border border-white/10 bg-[#111827] px-5 py-4 shadow-xl"
              >

                <p className="text-sm text-gray-400">
                  Students Online
                </p>

                <h4 className="font-bold text-green-400">
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