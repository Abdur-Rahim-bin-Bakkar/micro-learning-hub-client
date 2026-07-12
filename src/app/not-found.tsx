import Link from "next/link";
import {
  Home,
  Search,
  ArrowLeft,
  Ghost,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative py-10 flex min-h-screen items-center justify-center overflow-hidden bg-[#0B0F14] px-6">

      {/* Background Glow */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[180px]" />
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:38px_38px]" />

      {/* Decorative Blur */}
      <div className="absolute left-20 top-32 h-4 w-4 rounded-full bg-cyan-400 blur-sm" />
      <div className="absolute right-24 bottom-24 h-5 w-5 rounded-full bg-violet-400 blur-sm" />
      <div className="absolute right-1/4 top-20 h-3 w-3 rounded-full bg-blue-400 blur-sm" />

      <section className="relative z-10 w-full max-w-3xl">

        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-10 shadow-[0_0_80px_rgba(59,130,246,.18)] backdrop-blur-2xl">

          {/* Icon */}
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_50px_rgba(59,130,246,.45)]">

            <Ghost
              size={56}
              className="text-white"
            />

          </div>

          {/* Badge */}

          <div className="mt-8 flex justify-center">

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">

              Oops! Page Not Found

            </span>

          </div>

          {/* 404 */}

          <h1 className="mt-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-center text-8xl font-black tracking-tight text-transparent">

            404

          </h1>

          {/* Title */}

          <h2 className="mt-4 text-center text-4xl font-bold text-white">

            Lost in MicroLearn?

          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-8 text-slate-400">

            The page you are looking for doesn't exist,
            may have been moved, or the URL might be incorrect.

            <br />

            Let's get you back to learning.

          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(59,130,246,.5)]"
            >
              <Home size={20} />
              Back to Home
            </Link>

            <Link
              href="/courses"
              className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition duration-300 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <Search size={20} />
              Explore Courses
            </Link>

          </div>

          {/* Divider */}

          <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Bottom */}

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">

            <span>

              © 2026 MicroLearn. Continue your learning journey.

            </span>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-cyan-400 transition hover:text-cyan-300"
            >
              <ArrowLeft size={16} />
              Return Home
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}