"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { BookOpen } from "lucide-react";
import CourseCard, { Course } from "./CourseCard";
import Link from "next/link";

export default function CourseCardContainer() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/courses?${searchParams.toString()}`
                );
                const result = await response.json();
                setCourses(result.data || []);
            } catch (error) {
                console.error("Failed to fetch courses:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, [searchParams]);

    // সব ফিল্টার রিসেট করার ফাংশন
    const handleClearFilters = () => {
        router.push("/courses");
    };

    // ১. প্রিমিয়াম কঙ্কাল (Skeleton) লোডার স্ক্রিন
    if (loading) {
        return (
            <section className="pb-20">
                <div className="container mx-auto grid gap-7 px-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            className="h-[380px] w-full rounded-3xl border border-white/5 bg-white/[0.02] p-5 space-y-5 overflow-hidden relative before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent"
                        >
                            <div className="h-48 w-full rounded-2xl bg-white/5" />
                            <div className="space-y-3">
                                <div className="h-5 w-2/3 rounded bg-white/5" />
                                <div className="h-4 w-full rounded bg-white/5" />
                                <div className="h-4 w-5/6 rounded bg-white/5" />
                            </div>
                            <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                <div className="h-5 w-16 rounded bg-white/5" />
                                <div className="h-9 w-24 rounded-xl bg-white/5" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    // ২. কোর্স খুঁজে না পাওয়া গেলে মডার্ন নো ডাটা অ্যালার্ট
    if (courses.length === 0) {
        return (
            <section className="flex min-h-[450px] items-center justify-center px-6 pb-20">
                <div className="flex max-w-md flex-col items-center rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center backdrop-blur-xl shadow-2xl relative overflow-hidden">
                    {/* গ্লো ইফেক্ট কার্ডের ভেতর */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                        <BookOpen size={28} />
                    </div>

                    <h2 className="text-2xl font-bold text-white tracking-tight">
                        No Courses Found
                    </h2>

                    <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                        We couldnt find any premium courses matching your active filters or search terms. Try modifying your criteria.
                    </p>
                    <Link href={'/course'}>

                        <button
                            onClick={handleClearFilters}
                            className="mt-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 active:scale-[0.98] shadow-lg shadow-cyan-500/20"
                        >
                            Explore All Courses
                        </button>
                    </Link>
                </div>
            </section>
        );
    }

    // ৩. ফাইনাল সাকসেস গ্রিড লেআউট
    return (
        <section className="pb-20 relative z-10">
            <div className="container mx-auto grid gap-7 px-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
                {courses.map((course) => (
                    <CourseCard
                        key={course._id }
                        course={course}
                    />
                ))}
            </div>
        </section>
    );
}