"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    HiCheckCircle,
    HiArrowRight,
    HiSparkles,
} from "react-icons/hi2";

export default function PaymentSuccessPage() {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B0F14] px-6 py-16">

            {/* Background Blur */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:42px_42px]" />

            <motion.div
                initial={{
                    opacity: 0,
                    y: 40,
                    scale: 0.96,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-[0_20px_80px_rgba(6,182,212,0.15)]"
            >
                {/* Success Icon */}

                <motion.div
                    initial={{
                        scale: 0,
                        rotate: -180,
                    }}
                    animate={{
                        scale: 1,
                        rotate: 0,
                    }}
                    transition={{
                        delay: .2,
                        type: "spring",
                        stiffness: 120,
                    }}
                    className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-cyan-500/15 ring-8 ring-cyan-500/10"
                >
                    <HiCheckCircle
                        className="text-cyan-400"
                        size={70}
                    />
                </motion.div>

                {/* Badge */}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .35 }}
                    className="mt-8 flex justify-center"
                >
                    <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">

                        <HiSparkles />

                        Payment Successful

                    </div>
                </motion.div>

                {/* Title */}

                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 15,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: .45,
                    }}
                    className="mt-8 text-center text-4xl font-extrabold leading-tight text-white"
                >
                    Welcome to
                    <span className="block text-cyan-400">
                        Micro Learning Hub
                    </span>
                </motion.h1>

                {/* Description */}

                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: .55,
                    }}
                    className="mx-auto mt-6 max-w-xl text-center text-lg leading-8 text-slate-400"
                >
                    Your payment has been received successfully.

                    <br />

                    We are securely verifying your payment and
                    activating your student account.

                    Please wait a few moments.
                </motion.p>

                {/* Loading */}

                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: .7,
                    }}
                    className="mt-10 flex justify-center"
                >
                    <div className="flex items-center gap-4">

                        <div className="h-4 w-4 animate-ping rounded-full bg-cyan-400" />

                        <p className="text-sm tracking-wide text-cyan-300">

                            Verifying Payment...

                        </p>

                    </div>
                </motion.div>

                {/* Divider */}

                <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Info Cards */}

                <div className="grid gap-4 md:grid-cols-2">

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                        <p className="text-sm text-slate-500">

                            Account Status

                        </p>

                        <h3 className="mt-2 text-xl font-bold text-cyan-400">

                            Payment Received

                        </h3>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                        <p className="text-sm text-slate-500">

                            Next Step

                        </p>

                        <h3 className="mt-2 text-xl font-bold text-white">

                            Role Verification

                        </h3>

                    </div>

                </div>

                {/* Button */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 15,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: .9,
                    }}
                    className="mt-10"
                >
                    <Link
                        href="/"
                        className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,.45)]"
                    >
                        Go To Homepage

                        <HiArrowRight
                            className="transition-transform group-hover:translate-x-1"
                            size={22}
                        />

                    </Link>
                </motion.div>

            </motion.div>

        </main>
    );
}