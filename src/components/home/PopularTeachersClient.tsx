"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, BookOpen, Users, Star } from "lucide-react";
import Image from "next/image";

type Props = {
  teachers: any[];
};

const PopularTeachersClient = ({ teachers }: Props) => {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Hydration Error এড়াতে মাউন্ট স্টেট চেক
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const teacher = teachers[active];

  if (!teacher) {
    return null;
  }

  return (
    <section className="bg-[#0F172A] py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Popular <span className="text-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">Teachers</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-md mx-auto">
            Learn from our top rated instructors
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          
          {/* LEFT: Navigation Buttons */}
          <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none snap-x">
            {teachers.map((item: any, index: number) => (
              <button
                key={item._id || index}
                onClick={() => setActive(index)}
                className={`relative flex items-center gap-3 rounded-xl px-5 py-4 transition-all duration-300 min-w-[150px] lg:w-full snap-start border ${
                  active === index
                    ? "bg-slate-800/60 border-cyan-500/30 text-white shadow-lg shadow-cyan-500/5"
                    : "bg-slate-900/40 border-slate-800 text-slate-400 hover:bg-slate-800/30 hover:text-slate-200"
                }`}
              >
                {active === index && (
                  <motion.span
                    layoutId="teacherActiveBorder"
                    className="absolute left-0 top-0 lg:h-full lg:w-1 w-full h-1 bottom-0 lg:bottom-auto rounded-full bg-cyan-500"
                  />
                )}
                <Award size={18} className={active === index ? "text-cyan-400" : "text-slate-500"} />
                <span className="font-bold text-sm tracking-wide">Instructor {index + 1}</span>
              </button>
            ))}
          </div>

          {/* RIGHT: Detail View with Card Motion */}
          <div className="relative min-h-[400px] lg:min-h-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={teacher._id || active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid gap-8 rounded-2xl border border-slate-800 bg-[#1E293B]/40 p-6 sm:p-8 backdrop-blur-xl md:grid-cols-2 relative shadow-2xl"
              >
                {/* Neon Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

                {/* Teacher Image */}
                <div className="flex justify-center items-center">
                  <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-slate-800 via-cyan-500/20 to-slate-800 group">
                    <Image
                      width={400}
                      height={400}
                      src={teacher.image || "/avatar.png"}
                      alt={teacher.name}
                      className="h-64 w-64 sm:h-72 sm:w-72 rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      priority
                    />
                  </div>
                </div>

                {/* Details and Stats */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                      {teacher.name}
                    </h3>
                    <p className="mt-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400">
                      {teacher.role || "Instructor"}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-slate-300">
                      {teacher.description}
                    </p>

                    {/* Stats Section */}
                    <div className="mt-8 grid grid-cols-3 gap-3.5">
                      
                      {/* Courses */}
                      <div className="rounded-xl bg-slate-950/40 border border-slate-800/60 p-3.5 flex flex-col items-center text-center shadow-inner">
                        <BookOpen size={18} className="mb-2 text-cyan-400" />
                        <h4 className="font-black text-white text-base sm:text-lg">{teacher.courses}</h4>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mt-0.5">Courses</p>
                      </div>

                      {/* Students */}
                      <div className="rounded-xl bg-slate-950/40 border border-slate-800/60 p-3.5 flex flex-col items-center text-center shadow-inner">
                        <Users size={18} className="mb-2 text-cyan-400" />
                        <h4 className="font-black text-white text-base sm:text-lg">{teacher.students}</h4>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mt-0.5">Students</p>
                      </div>

                      {/* Rating */}
                      <div className="rounded-xl bg-slate-950/40 border border-slate-800/60 p-3.5 flex flex-col items-center text-center shadow-inner">
                        <Star size={18} className="mb-2 text-yellow-500 fill-yellow-500/10" />
                        <h4 className="font-black text-white text-base sm:text-lg">{teacher.rating}</h4>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mt-0.5">Rating</p>
                      </div>

                    </div>
                  </div>

                  {/* Profile Action Button */}
                  <button className="mt-8 w-full sm:w-fit rounded-xl bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-6 py-3 transition-all duration-200 shadow-md shadow-cyan-500/10 active:scale-95 text-sm tracking-wide">
                    View Profile
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PopularTeachersClient;