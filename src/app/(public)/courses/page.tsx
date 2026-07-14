import CourseFilters from "@/components/courses/CourseFilters";
import CourseCardContainer from "@/components/courses/CourseCardContainer";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function CoursesPage() {
    return (
        <main className="bg-[#0B0F14] text-white min-h-screen relative overflow-hidden">
            {/* ড্যাশবোর্ডের লুক ও প্রিমিয়াম ফিল দেওয়ার জন্য ব্যাকগ্রাউন্ড গ্লো */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 border-b border-white/5 bg-gradient-to-b from-[#0B0F14] via-[#0E141B]/50 to-[#0B0F14]">
                <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
                    
                    {/* ছোট কাস্টম ব্যাজ */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium tracking-wide uppercase mb-6 backdrop-blur-sm animate-pulse">
                        <Sparkles size={12} />
                        Next-Gen Learning Platform
                    </div>

                    {/* মেইন হেডিং উইথ প্রিমিয়াম গ্রেডিয়েন্ট */}
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                        Explore Our{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                            Premium Courses
                        </span>
                    </h1>

                    {/* সাবটেক্সট (লেআউটের ব্যালেন্স সুন্দর করার জন্য) */}
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                       Join our advanced tracks to take your skills to the next level. A top-tier curriculum designed under the guidance of industry experts.
                    </p>

                    {/* ইন্টারঅ্যাক্টিভ অ্যানিমেটেড বাটন */}
                    <div className="mt-10">
                        <Link
                            href="/apply"
                            className="group inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-cyan-600 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-[0.98]"
                        >
                            Apply Now
                            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>

                </div>
            </section>

            {/* ফিল্টার এবং কোর্স লিস্ট সেকশন */}
            <div className="container mx-auto px-6 py-12 relative z-10 space-y-12 max-w-7xl">
                <CourseFilters />
                <CourseCardContainer />
            </div>
        </main>
    );
}