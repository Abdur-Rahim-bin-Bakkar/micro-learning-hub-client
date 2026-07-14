"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CourseFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // সার্চ ভ্যালু লোকাল স্টেটে রাখা হয়েছে Debounce করার জন্য
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");

  // ইউআরএল স্টেট আপডেট করার মেইন ফাংশন
  const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (
      value === "" ||
      value === "All Categories" ||
      value === "All Levels"
    ) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    router.push(`/courses?${params.toString()}`, { scroll: false });
  };

  // সার্চের জন্য Debounce ইফেক্ট (টাইপ করা থামানোর ৩০০ মিলিগ্রাম পর হিট করবে)
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      // শুধু যদি আগের ইউআরএল ভ্যালুর সাথে অমিল থাকে তবেই আপডেট করবে
      if ((searchParams.get("search") || "") !== searchTerm) {
        updateQuery("search", searchTerm);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <section className="bg-[#0B0F14] pb-12 relative z-20">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* গ্লাসমোরফিজম কন্টেইনার প্যানেল */}
        <div className="flex flex-col gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl md:flex-row items-center justify-between">
          
          {/* সার্চ ইনপুট বক্স */}
          <div className="relative w-full md:flex-1 group">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 transition-colors group-focus-within:text-cyan-400" />
            
            <input
              type="text"
              placeholder="Search premium courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-white/5 bg-white/[0.03] py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-cyan-500/50 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(34,211,238,0.1)]"
            />
          </div>

          {/* ফিল্টার ড্রপডাউন গ্রুপ */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            
            {/* ক্যাটাগরি ফিল্টার */}
            <div className="relative w-full sm:w-48">
              <select
                value={searchParams.get("category") || "All Categories"}
                onChange={(e) => updateQuery("category", e.target.value)}
                className="w-full appearance-none rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3.5 pr-10 text-sm text-gray-300 outline-none transition-all duration-300 cursor-pointer focus:border-cyan-500/50 focus:bg-white/[0.05]"
              >
                <option value="All Categories" className="bg-[#0F141C] text-white">All Categories</option>
                <option value="Programming" className="bg-[#0F141C] text-white">Programming</option>
                <option value="Frontend" className="bg-[#0F141C] text-white">Frontend</option>
                <option value="Backend" className="bg-[#0F141C] text-white">Backend</option>
                <option value="Database" className="bg-[#0F141C] text-white">Database</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                <SlidersHorizontal size={14} className="opacity-60" />
              </div>
            </div>

            {/* লেভেল ফিল্টার */}
            <div className="relative w-full sm:w-44">
              <select
                value={searchParams.get("level") || "All Levels"}
                onChange={(e) => updateQuery("level", e.target.value)}
                className="w-full appearance-none rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3.5 pr-10 text-sm text-gray-300 outline-none transition-all duration-300 cursor-pointer focus:border-cyan-500/50 focus:bg-white/[0.05]"
              >
                <option value="All Levels" className="bg-[#0F141C] text-white">All Levels</option>
                <option value="Beginner" className="bg-[#0F141C] text-white">Beginner</option>
                <option value="Intermediate" className="bg-[#0F141C] text-white">Intermediate</option>
                <option value="Advanced" className="bg-[#0F141C] text-white">Advanced</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                <SlidersHorizontal size={14} className="opacity-60" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}