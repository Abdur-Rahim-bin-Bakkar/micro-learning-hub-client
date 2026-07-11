"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function CourseFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

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

    router.push(`/courses?${params.toString()}`);
  };

  return (
    <section className="bg-[#0B0F14] pb-10">
      <div className="container mx-auto flex flex-col gap-5 px-6 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-gray-400" />

          <input
            type="text"
            placeholder="Search courses..."
            defaultValue={searchParams.get("search") || ""}
            onChange={(e) => updateQuery("search", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 text-white outline-none focus:border-blue-500"
          />
        </div>

        <select
          defaultValue={searchParams.get("category") || "All Categories"}
          onChange={(e) => updateQuery("category", e.target.value)}
          className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white"
        >
          <option value="All Categories" className="bg-[#0B0F14]">
            All Categories
          </option>

          <option value="Programming" className="bg-[#0B0F14]">
            Programming
          </option>

          <option value="Frontend" className="bg-[#0B0F14]">
            Frontend
          </option>

          <option value="Backend" className="bg-[#0B0F14]">
            Backend
          </option>

          <option value="Database" className="bg-[#0B0F14]">
            Database
          </option>
        </select>

        <select
          defaultValue={searchParams.get("level") || "All Levels"}
          onChange={(e) => updateQuery("level", e.target.value)}
          className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white"
        >
          <option value="All Levels" className="bg-[#0B0F14]">
            All Levels
          </option>

          <option value="Beginner" className="bg-[#0B0F14]">
            Beginner
          </option>

          <option value="Intermediate" className="bg-[#0B0F14]">
            Intermediate
          </option>

          <option value="Advanced" className="bg-[#0B0F14]">
            Advanced
          </option>
        </select>
      </div>
    </section>
  );
}