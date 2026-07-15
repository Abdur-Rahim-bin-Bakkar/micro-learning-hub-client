"use client";

import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    // আপনি চাইলে এখানে Sentry বা অন্য কোনো লগিং সিস্টেমে এরর ট্র্যাক করতে পারেন
    console.error(error);
  }, [error]);

  return (
    <div className="w-full mx-auto py-20 px-4 bg-slate-950 text-slate-100 min-h-[85vh] flex items-center justify-center">
      <div className="relative w-full overflow-hidden border border-slate-800/80 bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 sm:p-12 text-center shadow-[0_0_50px_rgba(6,182,212,0.03)]">
        
        {/* Futuristic Background Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full bg-rose-500/10 blur-3xl"></div>

        {/* Warning Glow Badge */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rose-500/10 border border-rose-500/30 shadow-[0_0_20px_rgba(244,63,94,0.1)] text-3xl animate-pulse">
          ⚠️
        </div>

        {/* Gradient Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-rose-400 via-pink-500 to-amber-400 bg-clip-text text-transparent">
          Something Went Wrong
        </h1>

        <p className="mt-4 text-sm text-slate-400 max-w-sm mx-auto tracking-wide leading-relaxed">
          An unexpected error occurred while processing your request. Don't worry, our team has been notified.
        </p>

        {/* Technical Error Insight (Optional/Subtle) */}
        {error.message && (
          <div className="mt-6 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-left max-w-md mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Error Digest</p>
            <p className="text-xs font-mono text-rose-400/90 break-all">
              {error.digest || error.message}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Reset / Try Again Button - Main Cyan Theme */}
          <button
            onClick={() => reset()}
            className="relative w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold tracking-wide text-slate-950 bg-cyan-500 transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] active:scale-95 focus:outline-none"
          >
            Try Again
          </button>

          {/* Go Home Button */}
          <a
            href="/dashboard"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold tracking-wide text-slate-300 border border-slate-800 bg-slate-900/50 transition-all duration-300 hover:bg-slate-800 hover:text-slate-100 hover:border-slate-700 active:scale-95 text-center text-sm"
          >
            Go to Dashboard
          </a>
        </div>

      </div>
    </div>
  );
};