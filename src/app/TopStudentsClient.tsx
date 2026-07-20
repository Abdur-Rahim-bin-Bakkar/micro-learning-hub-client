"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, BookOpen, Trophy, Flame } from "lucide-react";
import Image from "next/image";
import { StudentType } from "./TopStudents";

type Props = {
  students: StudentType[];
};

const TopStudentsClient = ({ students }: Props) => {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Hydration Error ফিক্স করার জন্য ইউফেক্ট মাউন্টিং ট্র্যাক করা হলো
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !students || students.length === 0) {
    return null;
  }

  const student = students[active];

  return (
    <section className="bg-[#0F172A] py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Top <span className="text-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">Students</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-md mx-auto">
            Our highest performing learners who set milestones every single day.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          
          {/* LEFT: Student Navigation Tabs */}
          <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none snap-x">
            {students.map((item, index) => (
              <button
                key={item._id || index}
                onClick={() => setActive(index)}
                className={`relative flex items-center gap-3 rounded-xl px-5 py-4 transition-all duration-300 min-w-[140px] lg:w-full snap-start border ${
                  active === index
                    ? "bg-slate-800/60 border-cyan-500/30 text-white shadow-lg shadow-cyan-500/5"
                    : "bg-slate-900/40 border-slate-800 text-slate-400 hover:bg-slate-800/30 hover:text-slate-200"
                }`}
              >
                {active === index && (
                  <motion.span
                    layoutId="studentActiveBorder"
                    className="absolute left-0 top-0 lg:h-full lg:w-1 w-full h-1 bottom-0 lg:bottom-auto rounded-full bg-cyan-500"
                  />
                )}
                <Award size={18} className={active === index ? "text-cyan-400" : "text-slate-500"} />
                <span className="font-bold text-sm tracking-wide">Top {index + 1}</span>
              </button>
            ))}
          </div>

          {/* RIGHT: Detail Display Card with Animation */}
          <div className="relative min-h-[400px] lg:min-h-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={student._id || active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid gap-8 rounded-2xl border border-slate-800 bg-[#1E293B]/40 p-6 sm:p-8 backdrop-blur-xl md:grid-cols-2 relative shadow-2xl"
              >
                {/* Visual Glow Top Line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

                {/* Profile Image Wrapper */}
                <div className="flex justify-center items-center">
                  <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-slate-800 via-cyan-500/20 to-slate-800 group">
                    <Image
                      width={400}
                      height={400}
                      src={student.image || "/avatar.png"}
                      alt={student.name}
                      className="h-64 w-64 sm:h-72 sm:w-72 rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      unoptimized
                      priority
                    />
                  </div>
                </div>

                {/* Info and Statistics Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                      {student.name}
                    </h3>
                    <p className="mt-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400">
                      {student.role || "Student"}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-slate-300">
                      {student.description}
                    </p>

                    {/* Dynamic Analytics Grid */}
                    <div className="mt-8 grid grid-cols-3 gap-3.5">
                      {/* Courses Counter Card */}
                      <div className="rounded-xl bg-slate-950/40 border border-slate-800/60 p-3.5 flex flex-col items-center text-center shadow-inner">
                        <BookOpen size={18} className="mb-2 text-cyan-400" />
                        <h4 className="font-black text-white text-base sm:text-lg">{student.courses}</h4>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mt-0.5">Courses</p>
                      </div>

                      {/* Completed Percentage Card */}
                      <div className="rounded-xl bg-slate-950/40 border border-slate-800/60 p-3.5 flex flex-col items-center text-center shadow-inner">
                        <Flame size={18} className="mb-2 text-orange-400 animate-pulse" />
                        <h4 className="font-black text-white text-base sm:text-lg">{student.completed}</h4>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mt-0.5">Progress</p>
                      </div>

                      {/* Points Reward Card */}
                      <div className="rounded-xl bg-slate-950/40 border border-slate-800/60 p-3.5 flex flex-col items-center text-center shadow-inner">
                        <Trophy size={18} className="mb-2 text-yellow-500" />
                        <h4 className="font-black text-white text-base sm:text-lg">{student.points}</h4>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mt-0.5">Points</p>
                      </div>
                    </div>
                  </div>

                  {/* Profile Action Button */}
                 
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TopStudentsClient;