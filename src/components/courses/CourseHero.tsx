"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function CourseHero() {
    const benefits: string[] = [
        "Expert instructors and practical lessons",
        "Real-world projects and assignments",
        "Career-focused learning roadmap",
        "Lifetime learning support",
    ];

    return (
        <section className="relative overflow-hidden bg-[#070a0e] py-24 text-white">
            {/* Background Ambient Cyber Lights */}
            <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none"></div>
            <div className="absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none"></div>

            <div className="container relative z-10 mx-auto px-6 text-center">
                
                {/* Heading with Elegant Gradient */}
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 30
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut"
                    }}
                    className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
                >
                    Explore Our 
                    <span className="relative inline-block ml-3">
                        <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                            Premium Courses
                        </span>
                    </span>
                </motion.h1>

                {/* Subtitle description */}
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 15
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.6
                    }}
                    className="mx-auto mt-6 max-w-2xl text-slate-400 text-base md:text-lg leading-relaxed font-medium"
                >
                    Choose from practical courses designed by industry
                    experts. Learn new skills, build real projects,
                    and prepare yourself for your dream career.
                </motion.p>

                {/* Benefits Grid with Glassmorphism and Hover Effects */}
                <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mt-12 text-left">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                delay: 0.3 + index * 0.1,
                                duration: 0.5
                            }}
                            whileHover={{ 
                                scale: 1.02,
                                borderColor: "rgba(6, 182, 212, 0.3)",
                                backgroundColor: "rgba(255, 255, 255, 0.04)"
                            }}
                            className="flex items-center gap-4 bg-slate-900/40 border border-slate-800/80 p-4 rounded-2xl backdrop-blur-sm transition-all duration-300 shadow-lg"
                        >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                <CheckCircle size={18} />
                            </div>

                            <p className="text-sm font-semibold tracking-wide text-slate-300">
                                {item}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Cyber Style CTA Button */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.9
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        delay: 0.7,
                        duration: 0.5
                    }}
                    className="mt-12"
                >
                    <Link href="/apply" className="inline-block group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 text-sm font-black uppercase tracking-widest text-slate-950 transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                        >
                            Apply For A Course
                            <ArrowRight 
                                size={16} 
                                className="transition-transform duration-300 group-hover:translate-x-1.5" 
                            />
                        </motion.div>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}