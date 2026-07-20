"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

type LoginData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { data, error } = await authClient.signIn.email({
      ...formData,
      rememberMe: true,
      callbackURL: "/",
    });
    if (error) {
      setError(error.message || "Invalid email or password");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-[#1E293B]/40 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden my-10">
      {/* Top Glow Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Welcome <span className="text-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">Back</span>
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Login to continue learning
        </p>
      </div>

      <form onSubmit={handleLogin} className="mt-8 space-y-5">
        {/* Email Input */}
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-slate-800 bg-[#0F172A]/80 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
            Password
          </label>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-800 bg-[#0F172A]/80 px-4 py-3 pr-12 text-sm text-white placeholder-slate-600 outline-none transition duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-cyan-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Error Box */}
        {error && (
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-xs font-medium text-red-400">
            {error}
          </div>
        )}

        {/* Demo Login Button */}
        <button
          type="button"
          onClick={() => { setFormData({ email: "demostudent@gmail.com", password: "Demodemo" }); setError(""); }}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/5 py-3 text-sm font-semibold text-amber-400 transition duration-200 hover:bg-amber-500/10 hover:border-amber-500/50 active:scale-[0.98]"
        >
          Demo Login (Student)
        </button>

        {/* Login Button */}
        <button
          disabled={loading}
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-bold text-slate-950 transition-all duration-200 hover:bg-cyan-600 shadow-lg shadow-cyan-500/10 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
        >
          {loading && <Loader2 className="animate-spin" size={18} />}
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-[1px] bg-slate-800"></div>
          <span className="px-3 text-xs text-slate-500 uppercase font-semibold tracking-wider">Or</span>
          <div className="flex-1 h-[1px] bg-slate-800"></div>
        </div>

        {/* Google Login Button */}
        <button
          type="button"
          onClick={() => authClient.signIn.social({ provider: "google", callbackURL: "/" })}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 py-3 text-sm font-semibold text-slate-200 transition duration-200 hover:bg-slate-900 hover:border-slate-700 active:scale-[0.98]"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="h-4 w-4"
          />
          Continue with Google
        </button>
      </form>

      {/* Register Link */}
      <div className="mt-6 text-center text-sm">
        <span className="text-slate-400">Don&apos;t have an account? </span>
        <Link
          href="/register"
          className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors underline-offset-4 hover:underline"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
