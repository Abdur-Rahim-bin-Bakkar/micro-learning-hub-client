"use client";

import Link from "next/link";
import {
    GraduationCap,
    Mail,
    Send,
} from "lucide-react";

import {
    FaFacebookF,
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa";

const quickLinks = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Courses",
        href: "/courses",
    },
    {
        title: "Announcement",
        href: "/announcement",
    },
    {
        title: "About",
        href: "/about",
    },
];

const resources = [
    {
        title: "Privacy Policy",
        href: "/privacy-policy",
    },
    {
        title: "Terms & Conditions",
        href: "/terms",
    },
    {
        title: "Support",
        href: "/support",
    },
    {
        title: "FAQ",
        href: "/faq",
    },
];

export default function Footer() {
    return (
        <footer className="mt-24 border-t border-white/10 bg-[#070B14]">
            <div className="mx-auto max-w-7xl px-6 py-16">

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Logo */}

                    <div>
                        <Link href="/" className="flex items-center gap-3">
                            <div className="rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-3">
                                <GraduationCap className="text-white" size={22} />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white">
                                    Micro
                                    <span className="text-cyan-400">Learn</span>
                                </h2>

                                <p className="text-sm text-slate-400">
                                    Learn • Grow • Achieve
                                </p>
                            </div>
                        </Link>

                        <p className="mt-6 leading-7 text-slate-400">
                            Empowering learners with quality courses, interactive lessons,
                            and a modern learning experience for everyone.
                        </p>

                        <div className="mt-6 flex gap-4">
                            <Link
                                href="#"
                                className="rounded-lg border border-white/10 p-3 text-slate-400 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
                            >
                                <FaFacebookF size={18} />
                            </Link>

                            <Link
                                href="#"
                                className="rounded-lg border border-white/10 p-3 text-slate-400 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
                            >
                                <FaGithub size={18} />
                            </Link>

                            <Link
                                href="#"
                                className="rounded-lg border border-white/10 p-3 text-slate-400 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
                            >
                                <FaLinkedinIn size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}

                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-white">
                            Quick Links
                        </h3>

                        <div className="space-y-4">

                            {quickLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className="block text-slate-400 transition hover:text-cyan-400"
                                >
                                    {link.title}
                                </Link>
                            ))}

                        </div>
                    </div>

                    {/* Resources */}

                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-white">
                            Resources
                        </h3>

                        <div className="space-y-4">

                            {resources.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className="block text-slate-400 transition hover:text-cyan-400"
                                >
                                    {link.title}
                                </Link>
                            ))}

                        </div>
                    </div>

                    {/* Newsletter */}

                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-white">
                            Newsletter
                        </h3>

                        <p className="mb-6 text-slate-400">
                            Subscribe to receive updates about new courses and announcements.
                        </p>

                        <div className="relative">

                            <Mail
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                            />

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-16 text-white outline-none transition focus:border-cyan-400"
                            />

                            <button className="absolute right-2 top-2 rounded-lg bg-cyan-500 p-2 text-white transition hover:bg-cyan-400">
                                <Send size={18} />
                            </button>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">

                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} MicroLearn. All Rights Reserved.
                    </p>

                    <div className="flex gap-6 text-sm">

                        <Link
                            href="/privacy-policy"
                            className="text-slate-500 transition hover:text-cyan-400"
                        >
                            Privacy
                        </Link>

                        <Link
                            href="/terms"
                            className="text-slate-500 transition hover:text-cyan-400"
                        >
                            Terms
                        </Link>

                        <Link
                            href="/contact"
                            className="text-slate-500 transition hover:text-cyan-400"
                        >
                            Contact
                        </Link>

                    </div>

                </div>

            </div>
        </footer>
    );
}