"use client";

import submitExam from "@/lib/api/exam/submitExam";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
    exam: any;
    token: string;
};

const ExamClient = ({ exam, token }: Props) => {
    const router = useRouter();

    const [answers, setAnswers] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSelect = (
        questionId: string,
        selectedAnswer: string
    ) => {
        // ১. প্রথমেই চেক করা হচ্ছে এই প্রশ্নের উত্তর আগে দেওয়া হয়েছে কিনা
        const isAlreadyAnswered = answers.some(
            (item) => item.questionId === questionId
        );

        // ২. যদি উত্তর অলরেডি থেকে থাকে, তবে অ্যালার্ট দেখাবে এবং ফাংশনটি এখানেই থেমে যাবে
        if (isAlreadyAnswered) {
            alert("Already Answered!");
            return;
        }

        // ৩. উত্তর না দেওয়া থাকলে নতুন উত্তরটি যুক্ত হবে
        setAnswers((prev) => [
            ...prev,
            {
                questionId,
                selectedAnswer,
            },
        ]);
    };

    const handleSubmit = async () => {
        try {
            if (answers.length !== exam.questions.length) {
                return alert("Please answer all questions.");
            }

            setLoading(true);

            await submitExam(
                exam._id,
                answers,
                token
            );

            router.push(
                `/dashboard/student/exam/${exam._id}/result`
            );
        } catch (error: any) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6 text-white">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    {exam.title}
                </h1>

                <div className="flex flex-wrap gap-6 mt-3 text-sm text-gray-400">
                    <p>Course: {exam.courseName}</p>
                    <p>Level: {exam.level}</p>
                    <p>Duration: {exam.duration} Minutes</p>
                    <p>Questions: {exam.totalQuestions}</p>
                </div>
            </div>

            <div className="space-y-8">
                {exam.questions.map(
                    (question: any, index: number) => (
                        <div
                            key={question._id}
                            className="border rounded-xl p-5"
                        >
                            <h2 className="text-lg font-semibold mb-5">
                                {index + 1}. {question.question}
                            </h2>

                            <div className="space-y-3">
                                {question.options.map(
                                    (option: string) => (
                                        <label
                                            key={option}
                                            className="flex items-center gap-3 cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name={question._id}
                                                value={option}
                                                checked={
                                                    answers.find(
                                                        (item) =>
                                                            item.questionId ===
                                                                question._id &&
                                                            item.selectedAnswer ===
                                                                option
                                                    ) !== undefined
                                                }
                                                onChange={() =>
                                                    handleSelect(
                                                        question._id,
                                                        option
                                                    )
                                                }
                                            />

                                            <span>{option}</span>
                                        </label>
                                    )
                                )}
                            </div>
                        </div>
                    )
                )}
            </div>

            <div className="mt-10">
                <button
                    disabled={loading}
                    onClick={handleSubmit}
                    className="px-6 py-3 rounded-lg bg-blue-600 text-white disabled:opacity-50"
                >
                    {loading ? "Submitting..." : "Submit Exam"}
                </button>
            </div>
        </div>
    );
};

export default ExamClient;