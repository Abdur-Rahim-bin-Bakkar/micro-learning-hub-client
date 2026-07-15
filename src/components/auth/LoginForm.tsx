"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { authClient } from "@/lib/auth-client";


type LoginData = {
  email: string;
  password: string;
};


export default function LoginForm() {


  const [showPassword, setShowPassword] =
    useState<boolean>(false);



  const [formData, setFormData] =
    useState<LoginData>({
      email: "",
      password: "",
    });
r



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {


    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });


  };





  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();



    console.log("Login Data:", formData);
    const { data, error } = await authClient.signIn.email({
      ...formData,
      rememberMe: true,
      callbackURL: "/",
    });
    // এখানে API call হবে

  };





  return (

    <div className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_0_60px_rgba(59,130,246,.15)] backdrop-blur-2xl">

      {/* Background Glow */}
      <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/10" />

      <div className="relative z-10">

        <h1 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-center text-4xl font-extrabold text-transparent">
          Welcome Back
        </h1>

        <p className="mt-3 text-center text-gray-400">
          Login to continue learning
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-6"
        >

          {/* Email */}
          <div>

            <label className="mb-2 block text-sm font-medium text-gray-300">
              Email
            </label>

            <div className="relative">

              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
              />

              <input
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-white/10 bg-black/30 py-3 pl-12 pr-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:bg-black/40 focus:shadow-[0_0_20px_rgba(34,211,238,.15)]"
              />

            </div>

          </div>

          {/* Password */}
          <div>

            <label className="mb-2 block text-sm font-medium text-gray-300">
              Password
            </label>

            <div className="relative">

              <Lock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
              />

              <input
                name="password"
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-2xl border border-white/10 bg-black/30 py-3 pl-12 pr-12 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:bg-black/40 focus:shadow-[0_0_20px_rgba(34,211,238,.15)]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-cyan-400"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(59,130,246,.45)] active:scale-100"
          >
            Login
          </button>

        </form>

      </div>

    </div>

  );


}