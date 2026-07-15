"use client";

import Link from "next/link";
import {
    GraduationCap,
    Mail,
    Send,
    User,
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

const newResources = [
    {
        title: "Contact",
        href: "/contact",
    },
    {
        title: "Help Desk",
        href: "/help-desk",
    },
    {
        title: "Apply",
        href: "/apply",
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-slate-800/80 bg-[#0F172A]">
            <div className="mx-auto max-w-7xl px-6 py-16">

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Logo Section */}
                    <div>
                        <Link href="/" className="flex items-center gap-3 active:scale-95 transition-transform w-fit">
                            <div className="rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-2.5 shadow-lg shadow-cyan-500/10">
                                <GraduationCap className="text-slate-950" size={22} strokeWidth={2.5} />
                            </div>

                            <div>
                                <h2 className="text-xl font-extrabold text-white tracking-wider">
                                    Micro<span className="text-cyan-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]">Learn</span>
                                </h2>
                                <p className="text-xs font-medium uppercase tracking-widest text-slate-500 mt-0.5">
                                    Learn • Grow • Achieve
                                </p>
                            </div>
                        </Link>

                        <p className="mt-6 text-sm leading-relaxed text-slate-400">
                            Empowering learners with quality courses, interactive lessons,
                            and a modern learning experience for everyone.
                        </p>

                        {/* Social Links & Portfolio */}
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href="https://www.facebook.com/share/p/17pLNNZQMK/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-xl border border-slate-800 bg-slate-900/50 p-3 text-slate-400 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500/5 hover:text-cyan-400 shadow-md"
                            >
                                <FaFacebookF size={16} />
                            </a>

                            <a
                                href="https://github.com/Abdur-Rahim-bin-Bakkar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-xl border border-slate-800 bg-slate-900/50 p-3 text-slate-400 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500/5 hover:text-cyan-400 shadow-md"
                            >
                                <FaGithub size={16} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/fswd-abdur-rahim-bin-bakkar/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-xl border border-slate-800 bg-slate-900/50 p-3 text-slate-400 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500/5 hover:text-cyan-400 shadow-md"
                            >
                                <FaLinkedinIn size={16} />
                            </a>

                            <a
                                href="https://portfolio-eight-pi-mc123cjc5o.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Developer Portfolio"
                                className="rounded-xl border border-slate-800 bg-slate-900/50 p-3 text-slate-400 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500/5 hover:text-cyan-400 shadow-md flex items-center gap-1.5"
                            >
                                <User size={16} />
                                <span className="text-xs font-semibold pr-0.5">Portfolio</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                            <span className="w-1 h-3 rounded bg-cyan-500"></span>
                            Quick Links
                        </h3>

                        <div className="space-y-3.5">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className="block text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-400"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Updated Resources Section */}
                    <div>
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                            <span className="w-1 h-3 rounded bg-cyan-500"></span>
                            Resources
                        </h3>

                        <div className="space-y-3.5">
                            {newResources.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className="block text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-400"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                            <span className="w-1 h-3 rounded bg-cyan-500"></span>
                            Newsletter
                        </h3>

                        <p className="mb-5 text-sm leading-relaxed text-slate-400">
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
                                className="w-full rounded-xl border border-slate-800 bg-slate-900/40 py-3 pl-11 pr-14 text-sm text-white placeholder-slate-500 outline-none transition duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
                            />

                            <button className="absolute right-2 top-2 rounded-lg bg-cyan-500 p-1.5 text-slate-950 transition hover:bg-cyan-600 active:scale-95">
                                <Send size={16} />
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800/60 pt-8 md:flex-row">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} MicroLearn. All Rights Reserved.
                    </p>

                    <div className="flex gap-6 text-xs font-medium">
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