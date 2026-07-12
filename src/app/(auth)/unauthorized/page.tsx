import Link from "next/link";
import {
    ShieldAlert,
    Home,
    BookOpen,
    LockKeyhole,
} from "lucide-react";

export default function UnauthorizedPage() {
    return (
        <main className="relative  flex min-h-screen items-center justify-center overflow-hidden bg-[#0B0F14] px-6">

            {/* Background Glow */}
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[160px]" />
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <section className="relative my-10 z-10 w-full max-w-3xl">

                <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-[0_0_80px_rgba(59,130,246,.15)]">

                    {/* Icon */}
                    <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 ring-1 ring-blue-500/30">

                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-xl shadow-cyan-500/30">
                            <ShieldAlert
                                size={42}
                                className="text-white"
                            />
                        </div>
                    </div>

                    {/* Badge */}
                    <div className="mt-8 flex justify-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-300">
                            <LockKeyhole size={16} />
                            Protected Route
                        </span>
                    </div>

                    {/* 401 */}
                    <h1 className="mt-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-center text-8xl font-black text-transparent">
                        401
                    </h1>

                    {/* Title */}
                    <h2 className="mt-3 text-center text-4xl font-bold text-white">
                        Unauthorized Access
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-5 max-w-xl text-center text-lg leading-8 text-slate-400">
                        Sorry! You don't have permission to access this page.
                        <br />
                        Please sign in with an authorized account or return to the homepage.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">

                        <Link
                            href="/"
                            className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,.45)]"
                        >
                            <Home size={20} />
                            Go Home
                        </Link>

                        <Link
                            href="/courses"
                            className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-lg font-semibold text-white transition duration-300 hover:border-cyan-400/50 hover:bg-white/10"
                        >
                            <BookOpen size={20} />
                            Browse Courses
                        </Link>

                    </div>
                </div>
            </section>
        </main>
    );
}