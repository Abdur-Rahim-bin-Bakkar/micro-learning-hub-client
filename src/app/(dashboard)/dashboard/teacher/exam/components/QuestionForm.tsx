"use client";

import { useState } from "react";

type Props = {
  examId: string;
  onAddQuestion: (question: {
    question: string;
    options: string[];
    correctAnswer: string;
  }) => void;
};


const QuestionForm = ({  examId, onAddQuestion }: Props) => {
  const [question, setQuestion] = useState("");

  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");

  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newQuestion = {
      question,
      options: [option1, option2, option3, option4],
      correctAnswer,
    };

    console.log("New Question:", newQuestion);

    // Parent state এ পাঠাবে
    onAddQuestion(newQuestion);

    // Reset form
    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setCorrectAnswer("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#1E293B] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl"
    >
      <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
        <span className="w-1.5 h-5 rounded bg-cyan-500 inline-block"></span>
        Add New Question
      </h2>

      {/* Question */}
      <div>
        <label className="block mb-2 text-sm font-semibold text-slate-300">
          Question
        </label>
        <input
          type="text"
          className="w-full bg-[#0F172A] border border-slate-700 text-slate-100 placeholder-slate-500 rounded-xl px-4 py-3 outline-none transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
          placeholder="Enter question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
      </div>

      {/* Options */}
      <div>
        <label className="block mb-2 text-sm font-semibold text-slate-300">
          Options
        </label>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            className="w-full bg-[#0F172A] border border-slate-700 text-slate-100 placeholder-slate-500 rounded-xl px-4 py-3 outline-none transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            placeholder="Option 1"
            value={option1}
            onChange={(e) => setOption1(e.target.value)}
            required
          />

          <input
            type="text"
            className="w-full bg-[#0F172A] border border-slate-700 text-slate-100 placeholder-slate-500 rounded-xl px-4 py-3 outline-none transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            placeholder="Option 2"
            value={option2}
            onChange={(e) => setOption2(e.target.value)}
            required
          />

          <input
            type="text"
            className="w-full bg-[#0F172A] border border-slate-700 text-slate-100 placeholder-slate-500 rounded-xl px-4 py-3 outline-none transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            placeholder="Option 3"
            value={option3}
            onChange={(e) => setOption3(e.target.value)}
            required
          />

          <input
            type="text"
            className="w-full bg-[#0F172A] border border-slate-700 text-slate-100 placeholder-slate-500 rounded-xl px-4 py-3 outline-none transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            placeholder="Option 4"
            value={option4}
            onChange={(e) => setOption4(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Correct Answer */}
      <div>
        <label className="block mb-2 text-sm font-semibold text-slate-300">
          Correct Answer
        </label>
        <select
          className="w-full bg-[#0F172A] border border-slate-700 text-slate-100 rounded-xl px-4 py-3 outline-none transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          required
        >
          <option value="" className="bg-[#1E293B] text-slate-400">
            Select Correct Answer
          </option>
          <option value={option1} className="bg-[#1E293B]">
            {option1 || "Option 1"}
          </option>
          <option value={option2} className="bg-[#1E293B]">
            {option2 || "Option 2"}
          </option>
          <option value={option3} className="bg-[#1E293B]">
            {option3 || "Option 3"}
          </option>
          <option value={option4} className="bg-[#1E293B]">
            {option4 || "Option 4"}
          </option>
        </select>
      </div>

      {/* Action Button */}
      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="bg-transparent hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 font-bold px-6 py-2.5 rounded-xl border border-cyan-500/50 hover:border-cyan-500 transition-all duration-200 active:scale-95 shadow-md shadow-cyan-500/5 hover:shadow-cyan-500/20"
        >
          Add Question
        </button>
      </div>
    </form>
  );
};

export default QuestionForm;