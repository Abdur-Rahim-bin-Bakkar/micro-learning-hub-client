"use client";

import submitExam from "@/lib/api/exam/submitExam";
import { useParams, useRouter } from "next/navigation";
// import { useState } from "react";
import { useEffect, useState } from "react";
import getExamResult from "@/lib/api/exam/getExamResult";
import ExamResult from "@/components/exam/ExamResult";

type Props = {
    exam: any;
    token: string;
};

const ExamClient = ({ exam, token }: Props) => {
    const router = useRouter();
    const { examId } = useParams()
    console.log(examId, 'para')

    const [answers, setAnswers] = useState<any[]>([]);
    // const [loading, setLoading] = useState(false);
    const [loading, setLoading] = useState(false);

    const [checkingResult, setCheckingResult] = useState(true);

    const [result, setResult] = useState<any>(null);
    useEffect(() => {
        const checkResult = async () => {
            try {
                const data = await getExamResult(
                    exam._id,
                    token
                );

                setResult(data);
            } catch (error) {
                // Result না থাকলে কিছু করবে না
            } finally {
                setCheckingResult(false);
            }
        };

        checkResult();
    }, [exam._id, token]);

    const handleSelect = (
        questionId: string,
        selectedAnswer: string
    ) => {
        setAnswers((prev) => {
            const exists = prev.find(
                (item) => item.questionId === questionId
            );

            if (exists) {
                return prev.map((item) =>
                    item.questionId === questionId
                        ? { ...item, selectedAnswer }
                        : item
                );
            }

            return [
                ...prev,
                {
                    questionId,
                    selectedAnswer,
                },
            ];
        });
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
    if (checkingResult) {
        return (
            <div className="min-h-screen flex justify-center items-center text-white">
                Checking Exam...
            </div>
        );
    }
    if (result) {
        return (
            <ExamResult
                result={result}
                alreadySubmitted
            />
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-slate-950 text-slate-100 min-h-screen">
            {/* Header Section */}
            <div className="relative mb-10 p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
                <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {exam.title}
                </h1>

                <div className="flex flex-wrap gap-y-2 gap-x-6 mt-4 text-xs font-medium tracking-wide text-slate-400">
                    <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/50">
                        Course: <span className="text-slate-200">{exam.courseName}</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/50">
                        Level: <span className="text-cyan-400">{exam.level}</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/50">
                        Duration: <span className="text-slate-200">{exam.duration} Mins</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/50">
                        Questions: <span className="text-slate-200">{exam.totalQuestions}</span>
                    </span>
                </div>
            </div>

            {/* Questions List */}
            <div className="space-y-6">
                {exam.questions.map(
                    (question: any, index: number) => {
                        // চেক করা হচ্ছে এই প্রশ্নের কোনো অপশন সিলেক্টেড আছে কি না
                        const currentAnswer = answers.find(
                            (item) => item.questionId === question._id
                        );

                        return (
                            <div
                                key={index}
                                className={`relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 bg-slate-900/30 ${currentAnswer
                                    ? "border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.05)]"
                                    : "border-slate-850 hover:border-slate-800 bg-slate-900/20"
                                    }`}
                            >
                                <h2 className="text-base font-semibold mb-6 flex items-start gap-3 text-slate-200">
                                    <span className="flex items-center justify-center min-w-[28px] h-[28px] text-xs font-bold rounded-lg bg-slate-800 text-cyan-400 border border-slate-700">
                                        {index + 1}
                                    </span>
                                    <span className="pt-0.5">{question.question}</span>
                                </h2>

                                <div className="grid grid-cols-1 gap-3">
                                    {question.options.map(
                                        (option: string) => {
                                            const isChecked = currentAnswer?.selectedAnswer === option;

                                            return (
                                                <label
                                                    key={option}
                                                    className={`group flex items-center gap-4 p-4 rounded-xl border text-sm font-medium transition-all duration-200 cursor-pointer ${isChecked
                                                        ? "bg-cyan-950/40 border-cyan-500 text-cyan-400 shadow-[inset_0_0_12px_rgba(6,182,212,0.05)]"
                                                        : "bg-slate-900/40 border-slate-800/80 text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 hover:border-slate-700"
                                                        }`}
                                                >
                                                    <div className="relative flex items-center justify-center">
                                                        <input
                                                            type="radio"
                                                            name={question._id}
                                                            value={option}
                                                            checked={isChecked}
                                                            onChange={() =>
                                                                handleSelect(
                                                                    question._id,
                                                                    option
                                                                )
                                                            }
                                                            className="sr-only" // ডিফল্ট গোল রেডিও বাটনটি হাইড করে কাস্টম লুক দেওয়া হয়েছে
                                                        />
                                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 ${isChecked
                                                            ? "border-cyan-500 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]"
                                                            : "border-slate-700 group-hover:border-slate-500"
                                                            }`}>
                                                            {isChecked && (
                                                                <div className="w-2 h-2 rounded-full bg-slate-950"></div>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <span className="flex-1">{option}</span>
                                                </label>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        );
                    }
                )}
            </div>

            {/* Submit Section */}
            <div className="mt-12 flex justify-end">
                <button
                    disabled={loading}
                    onClick={handleSubmit}
                    className="relative px-8 py-3.5 rounded-xl font-semibold tracking-wide text-slate-950 bg-cyan-500 transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] disabled:opacity-40 disabled:hover:shadow-none focus:outline-none w-full sm:w-auto"
                >
                    {loading ? "Submitting..." : "Submit Exam"}
                </button>
            </div>
        </div>
    );
};

export default ExamClient;