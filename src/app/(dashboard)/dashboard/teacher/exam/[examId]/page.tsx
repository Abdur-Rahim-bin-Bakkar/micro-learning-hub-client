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
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Add Questions
        </h1>

        <p className="text-base-content/70">
          Create MCQ questions for this exam.
        </p>
      </div>

      <QuestionForm

        examId={examId}

        onAddQuestion={handleAddQuestion}

      />

      <QuestionList
        questions={questions}
      />

      <div className="flex justify-end">
        <button
          onClick={handleSaveQuestions}
          disabled={loading}
          className="btn btn-primary"
        >
          {loading
            ? "Saving..."
            : "Save Questions"}
        </button>
      </div>
    </div>
  );
};

export default ExamDetailsPage;