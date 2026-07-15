// import getAllExams from "@/lib/api/exam/getAllExams";
import getAllExams from "@/lib/api/exam/getAllExams";
import Link from "next/link";

const StudentExamPage = async () => {
    const exams = await getAllExams();

    return (
        <div className="space-y-8 p-6 min-h-screen bg-slate-950 text-slate-100">
            {/* Header Section */}
            <div className="relative pb-4 border-b border-slate-800">
                <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Available Exams
                </h1>
                <p className="text-slate-400 mt-2 text-sm">
                    Challenge your skills and select an examination to begin.
                </p>
                <div className="absolute bottom-0 left-0 w-20 h-[2px] bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exams.map((exam: any) => (
                    <div
                        key={exam._id}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-slate-900 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                    >
                        {/* Top decorative glow */}
                        <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl transition-all duration-300 group-hover:bg-cyan-500/20"></div>

                        <div>
                            {/* Course Badge */}
                            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-cyan-400 uppercase rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                                {exam.courseName}
                            </span>

                            {/* Exam Title */}
                            <h2 className="text-xl font-bold text-slate-100 tracking-tight group-hover:text-cyan-400 transition-colors duration-200">
                                {exam.title}
                            </h2>

                            {/* Info Badges/Metadata */}
                            <div className="mt-5 space-y-2.5 text-sm text-slate-400">
                                <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
                                    <span className="text-slate-500">Level</span>
                                    <span className="font-medium text-slate-300 bg-slate-800 px-2 py-0.5 rounded text-xs">
                                        {exam.level}
                                    </span>
                                </div>
                                
                                <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
                                    <span className="text-slate-500">Duration</span>
                                    <span className="font-medium text-cyan-400">
                                        {exam.duration} Mins
                                    </span>
                                </div>

                                <div className="flex items-center justify-between pb-1">
                                    <span className="text-slate-500">Questions</span>
                                    <span className="font-medium text-slate-300">
                                        {exam.totalQuestions} Items
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link
                            href={`/dashboard/student/exam/${exam._id}`}
                            className="relative mt-6 flex items-center justify-center w-full px-5 py-3 overflow-hidden font-medium text-center text-slate-950 bg-cyan-500 rounded-xl transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] focus:outline-none"
                        >
                            <span className="font-semibold tracking-wide">Start Exam</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentExamPage;