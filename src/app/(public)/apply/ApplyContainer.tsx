"use client";

import { useEffect, useState } from "react";
import TeacherApplicationForm from "@/components/apply/TeacherApplicationForm";
import StudentApplicationForm from "@/components/apply/StudentApplicationForm";
import ApplicationStatusCard from "@/components/apply/ApplicationStatusCard";
import { getApplicationStatus } from "@/lib/api/application/status";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function ApplyPageContainer() {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    const user = session?.user;

    const [activeTab, setActiveTab] = useState<
        "teacher" | "student"
    >("teacher");

    const [loading, setLoading] = useState<boolean>(true);
    const [applicationStatus, setApplicationStatus] = useState<any>(null);

    useEffect(() => {
        if (isPending) return;

        if (!user?.id) {
            setLoading(false);
            return;
        }

        const loadStatus = async () => {
            const result = await getApplicationStatus(user.id);
            setApplicationStatus(result);
            setLoading(false);
        };

        loadStatus();
    }, [user, isPending]);

    return (
        <div className="min-h-screen bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black text-slate-100 py-16">
            <div className="mx-auto max-w-4xl px-5">
                
                {/* Section Title with Gradient */}
                <h1 className="mb-10 text-center text-4xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
                        Application Form
                    </span>
                </h1>

                {/* Already Applied Status */}
                {applicationStatus?.alreadyApplied ? (
                    <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-1 backdrop-blur-md shadow-[0_0_50px_rgba(6,182,212,0.05)]">
                        <ApplicationStatusCard
                            application={applicationStatus.application}
                            type={applicationStatus.type}
                        />
                    </div>
                ) : (
                    <>
                        {/* Custom Tab Switcher (Unique Neon Glow Design) */}
                        <div className="mb-10 flex justify-center">
                            <div className="flex gap-2 rounded-2xl border border-slate-800 bg-slate-950/80 p-1.5 backdrop-blur-md shadow-inner">
                                <button
                                    onClick={() => setActiveTab("teacher")}
                                    className={`relative rounded-xl px-8 py-3.5 text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                                        activeTab === "teacher"
                                            ? "bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-100"
                                            : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                                    }`}
                                >
                                    Teacher
                                </button>

                                <button
                                    onClick={() => setActiveTab("student")}
                                    className={`relative rounded-xl px-8 py-3.5 text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                                        activeTab === "student"
                                            ? "bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-100"
                                            : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                                    }`}
                                >
                                    Student
                                </button>
                            </div>
                        </div>

                        {/* Form Container with Border Glow */}
                        <div className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950 p-6 md:p-10 shadow-2xl backdrop-blur-lg transition-all duration-300 hover:border-cyan-500/20">
                            {/* Accent Glow Circle inside Container */}
                            <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none"></div>
                            <div className="absolute -left-40 -bottom-40 h-80 w-80 rounded-full bg-blue-600/5 blur-[100px] pointer-events-none"></div>

                            <div className="relative z-10">
                                {activeTab === "teacher" ? (
                                    <TeacherApplicationForm />
                                ) : (
                                    <StudentApplicationForm />
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}