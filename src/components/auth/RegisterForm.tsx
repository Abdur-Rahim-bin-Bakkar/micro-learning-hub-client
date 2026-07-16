"use client";

import { useState } from "react";
import { Upload, Loader2 } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

type RegisterData = {
    name: string;
    email: string;
    password: string;
    image: string;
};

export default function RegisterForm() {
    let router = useRouter();

    const [imageFile, setImageFile] = useState<File | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [formData, setFormData] = useState<RegisterData>({
        name: "",
        email: "",
        password: "",
        image: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError("");
    };

    const uploadImage = async (): Promise<string> => {
        if (!imageFile) {
            throw new Error("Profile image is required");
        }

        const imageData = new FormData();
        imageData.append("image", imageFile);

        const response = await fetch(
            `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
            {
                method: "POST",
                body: imageData,
            }
        );

        const result = await response.json();

        if (!result.success) {
            throw new Error("Image upload failed");
        }

        return result.data.url;
    };

    const validateForm = () => {
        if (!formData.name.trim()) return "Please enter your name";
        if (!formData.email.trim()) return "Please enter your email";
        if (!formData.password) return "Please enter your password";
        if (formData.password.length < 6) return "Password must be at least 6 characters";
        if (!imageFile) return "Profile image is required";
        return "";
    };

    const handleGoogleLogin = () => {
        alert("Google Login function called");
    };

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationError = validateForm();

        if (validationError) {
            setError(validationError);
            return;
        }

        try {
            setLoading(true);
            setError("");

            const imageUrl = await uploadImage();

            const { data, error } = await authClient.signUp.email({
                name: formData.name,
                email: formData.email,
                password: formData.password,
                image: imageUrl,
                callbackURL: "/dashboard",
            });

            if (error) {
                setError(error.message ?? "Registration failed");
                return;
            }
            if (data) {
                router.push('/');
            }
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-[#1E293B]/40 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden my-10">
            {/* Top Glow Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

            <div className="text-center">
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                    Create <span className="text-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">Account</span>
                </h1>
                <p className="mt-2 text-sm text-slate-400">
                    Join Micro Learning Hub
                </p>
            </div>

            <form onSubmit={handleRegister} className="mt-8 space-y-5">
                {/* Name Input */}
                <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                        Name
                    </label>
                    <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-slate-800 bg-[#0F172A]/80 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
                    />
                </div>

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
                    <input
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="w-full rounded-xl border border-slate-800 bg-[#0F172A]/80 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
                    />
                </div>

                {/* Profile Image Input */}
                <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                        Profile Image
                    </label>
                    <label className="group flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-slate-700 bg-[#0F172A]/40 px-4 py-3 text-sm text-slate-400 transition duration-200 hover:border-cyan-500/50 hover:bg-[#0F172A]/60">
                        <Upload size={18} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                        <span className="truncate group-hover:text-slate-300 transition-colors">
                            {imageFile ? imageFile.name : "Choose profile picture"}
                        </span>
                        <input
                            type="file"
                            hidden
                            accept="image/*"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setImageFile(e.target.files[0]);
                                }
                            }}
                        />
                    </label>
                </div>

                {/* Error Box */}
                {error && (
                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-xs font-medium text-red-400 animate-fadeIn">
                        {error}
                    </div>
                )}

                {/* Submit Button */}
                <button
                    disabled={loading}
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-bold text-slate-950 transition-all duration-200 hover:bg-cyan-600 shadow-lg shadow-cyan-500/10 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none mt-2"
                >
                    {loading && <Loader2 className="animate-spin" size={18} />}
                    {loading ? "Creating Account..." : "Register"}
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
                    onClick={handleGoogleLogin}
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

            {/* Already Have an Account Link */}
            <div className="mt-6 text-center text-sm">
                <span className="text-slate-400">Already have an account? </span>
                <Link
                    href="/login"
                    className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors underline-offset-4 hover:underline"
                >
                    Login
                </Link>
            </div>
        </div>
    );
}