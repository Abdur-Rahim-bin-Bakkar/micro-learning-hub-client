"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Clock,
    Star,
    Users,
    BookOpen,
    CheckCircle,
    Tag,
    ShieldAlert,
    GraduationCap,
    UserCheck,
    ArrowLeft,
    ArrowRight
} from "lucide-react";
import { useUserSession } from "@/lib/sessions/session";

// টাইপ ডেফিনিশন আরও মজবুত করা হয়েছে
interface Instructor {
    name?: string;
    photo?: string;
}

interface Course {
    thumbnail?: string;
    title?: string;
    category?: string;
    description?: string;
    duration?: string;
    totalStudents?: number;
    totalLessons?: number;
    rating?: number;
    instructor?: Instructor;
    requirements?: string[];
    learningOutcomes?: string[];
    tags?: string[];
}

type Props = {
    course?: Course;
};

export default function CourseDetails({ course }: Props) {
    const session = useUserSession();
    const role = session?.user?.role?.toLowerCase(); // কেস সেন্সিটিভিটি এড়ানোর জন্য

    // কোর্স না পাওয়া গেলে যে ভিউ দেখাবে
    if (!course) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-[#0B0F14] px-6 text-white">
                <div className="max-w-md w-full rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-4xl shadow-[0_0_20px_rgba(239,68,68,0.1)]">
                        🔍
                    </div>
                    <h1 className="mt-6 text-3xl font-bold tracking-tight">Course Not Found</h1>
                    <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                        Sorry, the course you are looking for does not exist or may have been removed.
                    </p>
                    <Link href="/courses" className="mt-6 inline-flex items-center gap-2 justify-center w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98]">
                        <ArrowLeft size={18} /> Back To Courses
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-[#0b0f17] py-20 text-white relative overflow-hidden">
            {/* Background Glows for Premium Look */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                
                {/* Hero Section */}
                <div className="grid gap-10 lg:grid-cols-12 items-start">
                    
                    {/* Left: Thumbnail Column */}
                    <div className="lg:col-span-5 group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                            <Image
                                src={course?.thumbnail ?? "/placeholder.png"}
                                unoptimized
                                width={800}
                                height={600}
                                alt={course?.title ?? "Course Image"}
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            <div className="absolute bottom-4 left-4">
                                <span className="rounded-full bg-blue-600/90 backdrop-blur-md px-4 py-1.5 text-xs font-semibold tracking-wider uppercase border border-blue-400/30 shadow-lg">
                                    {course?.category ?? "Category"}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Course Info & Dashboard Panel */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                            
                            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                                {course?.title ?? "Course Title"}
                            </h1>

                            <p className="mt-4 leading-relaxed text-gray-400 text-sm md:text-base">
                                {course?.description ?? "No description available"}
                            </p>

                            {/* Stats Grid */}
                            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-4 transition-all hover:bg-white/[0.05]">
                                    <Clock className="text-blue-400" size={20} />
                                    <p className="mt-2 text-xs text-gray-400">Duration</p>
                                    <h3 className="font-bold text-sm mt-0.5">{course?.duration ?? "N/A"}</h3>
                                </div>

                                <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-4 transition-all hover:bg-white/[0.05]">
                                    <Users className="text-emerald-400" size={20} />
                                    <p className="mt-2 text-xs text-gray-400">Students</p>
                                    <h3 className="font-bold text-sm mt-0.5">{course?.totalStudents ?? 0}</h3>
                                </div>

                                <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-4 transition-all hover:bg-white/[0.05]">
                                    <BookOpen className="text-indigo-400" size={20} />
                                    <p className="mt-2 text-xs text-gray-400">Lessons</p>
                                    <h3 className="font-bold text-sm mt-0.5">{course?.totalLessons ?? 0}</h3>
                                </div>

                                <div className="rounded-2xl bg-yellow-500/5 border border-yellow-500/10 p-4 transition-all hover:bg-yellow-500/10">
                                    <div className="flex items-center gap-1 text-yellow-400">
                                        <Star size={18} fill="currentColor" />
                                    </div>
                                    <p className="mt-2 text-xs text-gray-400">Rating</p>
                                    <h3 className="font-bold text-sm mt-0.5 text-yellow-400">{course?.rating ?? 0}</h3>
                                </div>
                            </div>

                            {/* Instructor Card */}
                            <div className="mt-6 flex items-center gap-4 rounded-2xl bg-white/[0.02] border border-white/5 p-4">
                                <Image
                                    src={course?.instructor?.photo ?? "/avatar.png"}
                                    unoptimized
                                    width={60}
                                    height={60}
                                    alt={course?.instructor?.name ?? "Instructor"}
                                    className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-500/20"
                                />
                                <div>
                                    <p className="text-xs text-gray-400">Instructor</p>
                                    <h3 className="font-semibold text-sm text-gray-200">
                                        {course?.instructor?.name ?? "Unknown"}
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* কন্ডিশনাল রোল ম্যানেজমেন্ট সেকশন (চাহিদা ২, ৩ ও ৪ অনুযায়ী) */}
                        {role && (
                            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.01] p-6 backdrop-blur-xl shadow-xl relative overflow-hidden">
                                {role === 'admin' && (
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="flex items-start gap-3">
                                            <div className="p-3 bg-red-500/10 text-red-400 rounded-xl border border-red-500/20 mt-0.5">
                                                <ShieldAlert size={22} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-white">Administrative Access</h4>
                                                <p className="text-sm text-gray-400 mt-0.5">You are already logged in as an Admin with overall management privileges.</p>
                                            </div>
                                        </div>
                                        <Link href="/help-desk" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-sm font-semibold transition-all whitespace-nowrap border border-white/10">
                                            Go to Helpdesk <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                )}

                                {role === 'teacher' && (
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="flex items-start gap-3">
                                            <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 mt-0.5">
                                                <GraduationCap size={22} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-white">Instructor Panel Active</h4>
                                                <p className="text-sm text-gray-400 mt-0.5">You are currently logged in as a Teacher. Need any technical support with your content?</p>
                                            </div>
                                        </div>
                                        <Link href="/help-desk" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-sm font-semibold transition-all whitespace-nowrap border border-amber-500/30">
                                            Teacher Helpdesk <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                )}

                                {role === 'student' && (
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="flex items-start gap-3">
                                            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20 mt-0.5">
                                                <UserCheck size={22} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-white">Student Portal</h4>
                                                <p className="text-sm text-gray-400 mt-0.5">Enrolled as a Student. Facing issues with enrollment or playback? Contact us.</p>
                                            </div>
                                        </div>
                                        <Link href="/help-desk" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all whitespace-nowrap shadow-lg shadow-blue-600/20">
                                            Get Support <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Requirements & Learning Outcomes Section */}
                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                    {/* Requirements */}
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl transition-all hover:border-white/20">
                        <h2 className="mb-6 text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Requirements
                        </h2>
                        <div className="space-y-4">
                            {course?.requirements && course.requirements.length > 0 ? (
                                course.requirements.map((item: string, index: number) => (
                                    <div key={index} className="flex gap-3 text-gray-300 items-start text-sm md:text-base">
                                        <CheckCircle className="text-emerald-400 shrink-0 mt-0.5" size={18} />
                                        <span>{item}</span>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-sm">No specific requirements for this course.</p>
                            )}
                        </div>
                    </div>

                    {/* Learning Outcomes */}
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl transition-all hover:border-white/20">
                        <h2 className="mb-6 text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            What You'll Learn
                        </h2>
                        <div className="space-y-4">
                            {course?.learningOutcomes && course.learningOutcomes.length > 0 ? (
                                course.learningOutcomes.map((item: string, index: number) => (
                                    <div key={index} className="flex gap-3 text-gray-300 items-start text-sm md:text-base">
                                        <CheckCircle className="text-blue-400 shrink-0 mt-0.5" size={18} />
                                        <span>{item}</span>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-sm">No specific learning outcomes declared yet.</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Tags Section */}
                {course?.tags && course.tags.length > 0 && (
                    <div className="mt-10 flex flex-wrap gap-2.5">
                        {course.tags.map((tag: string, index: number) => (
                            <span
                                key={index}
                                className="flex items-center gap-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 text-xs font-medium text-blue-300 transition-all hover:bg-blue-500/20"
                            >
                                <Tag size={13} />
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}