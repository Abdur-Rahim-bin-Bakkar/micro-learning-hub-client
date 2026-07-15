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
      className="bg-base-100 border rounded-2xl shadow-lg p-8 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Title */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">
              Exam Title
            </span>
          </label>

          <input
            type="text"
            name="title"
            placeholder="Node.js Backend Assessment"
            className="input input-bordered w-full"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Course */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">
              Course Name
            </span>
          </label>

          <input
            type="text"
            name="courseName"
            placeholder="Node.js"
            className="input input-bordered w-full"
            value={formData.courseName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Level */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">
              Level
            </span>
          </label>

          <select
            name="level"
            className="select select-bordered w-full"
            value={formData.level}
            onChange={handleChange}
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">
              Duration (Minutes)
            </span>
          </label>

          <input
            type="number"
            name="duration"
            placeholder="15"
            className="input input-bordered w-full"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="btn btn-primary px-8"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Exam"}
        </button>
      </div>
    </form>
  );
};

export default CreateExamForm;