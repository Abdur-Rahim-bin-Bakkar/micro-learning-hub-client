"use client";

import QuestionForm from "../components/QuestionForm";
import QuestionList from "../components/QuestionList";
import addQuestions from "@/lib/api/exam/addQuestions";
import { useParams } from "next/navigation";
import { useState } from "react";

const ExamDetailsPage = () => {
  const { examId } = useParams<{ examId: string }>();

  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAddQuestion = (question: any) => {
    setQuestions((prev) => [...prev, question]);
  };

  const handleSaveQuestions = async () => {
    if (questions.length === 0) {
      return alert("Please add at least one question.");
    }

    try {
      setLoading(true);

      const result = await addQuestions(examId, questions);

      console.log(result);

      alert("Questions added successfully.");

      setQuestions([]);
    } catch (error) {
      console.error(error);
      alert("Failed to save questions.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="border-b border-slate-800 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Add <span className="text-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">Questions</span>
          </h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Create MCQ questions for this exam.
          </p>
        </div>

        {/* Question Form Wrapper */}
        <div className="bg-[#1E293B] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <QuestionForm
            examId={examId}
            onAddQuestion={handleAddQuestion}
          />
        </div>

        {/* Question List Section */}
        {questions.length > 0 && (
          <div className="bg-[#1E293B]/50 rounded-2xl border border-slate-800/80 p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              Added Questions ({questions.length})
            </h2>
            <QuestionList questions={questions} />
          </div>
        )}

        {/* Action Button */}
        <div className="flex justify-end pt-4">
          <button
            onClick={handleSaveQuestions}
            disabled={loading}
            className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                Saving...
              </div>
            ) : (
              "Save Questions"
            )}
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default ExamDetailsPage;