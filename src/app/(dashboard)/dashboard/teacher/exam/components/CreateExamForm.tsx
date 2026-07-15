"use client";
import { useRouter } from "next/navigation";
import createExam from "@/lib/api/exam/createExam";
import { useState } from "react";

const CreateExamForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    courseName: "",
    level: "Beginner",
    duration: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const examData = {
      title: formData.title,
      courseName: formData.courseName,
      duration: Number(formData.duration),
      level: formData.level,
      totalQuestions: 0,
      status: "published",
    };

    try {
      setLoading(true);

      const result = await createExam(examData);

      router.push(
        `/dashboard/teacher/exam/${result.data._id}`
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Title */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-slate-300">
            Exam Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Node.js Backend Assessment"
            className="w-full bg-[#0F172A] border border-slate-700 text-slate-100 placeholder-slate-500 rounded-xl px-4 py-3 outline-none transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Course */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-slate-300">
            Course Name
          </label>
          <input
            type="text"
            name="courseName"
            placeholder="Node.js"
            className="w-full bg-[#0F172A] border border-slate-700 text-slate-100 placeholder-slate-500 rounded-xl px-4 py-3 outline-none transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            value={formData.courseName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Level */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-slate-300">
            Level
          </label>
          <select
            name="level"
            className="w-full bg-[#0F172A] border border-slate-700 text-slate-100 rounded-xl px-4 py-3 outline-none transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            value={formData.level}
            onChange={handleChange}
          >
            <option className="bg-[#1E293B]">Beginner</option>
            <option className="bg-[#1E293B]">Intermediate</option>
            <option className="bg-[#1E293B]">Advanced</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-slate-300">
            Duration (Minutes)
          </label>
          <input
            type="number"
            name="duration"
            placeholder="15"
            className="w-full bg-[#0F172A] border border-slate-700 text-slate-100 placeholder-slate-500 rounded-xl px-4 py-3 outline-none transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
              Creating...
            </div>
          ) : (
            "Create Exam"
          )}
        </button>
      </div>
    </form>
  );
};

export default CreateExamForm;