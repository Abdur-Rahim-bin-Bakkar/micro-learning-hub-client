"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    HiXCircle,
    HiArrowPath,
    HiHome,
    HiExclamationTriangle,
} from "react-icons/hi2";

export default function PaymentCancelPage() {

    return (

        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B0F14] px-6 py-16">

            {/* ================= BACKGROUND ================= */}

            <div className="absolute inset-0">

                <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-red-500/15 blur-[120px]" />

                <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:45px_45px]" />

            </div>

            {/* ================= CARD ================= */}

            <motion.div

                initial={{
                    opacity: 0,
                    y: 40,
                    scale: .95,
                }}

                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}

                transition={{
                    duration: .6,
                }}

                className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-xl"

            >

                {/* Top Glow */}

                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 via-cyan-500 to-red-500" />

                {/* Icon */}

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

                    className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-red-500/15 ring-8 ring-red-500/10"

                >

                    <HiXCircle

                        size={72}

                        className="text-red-400"

                    />

                </motion.div>

                {/* Badge */}

                <motion.div

                    initial={{
                        opacity: 0,
                    }}

                    animate={{
                        opacity: 1,
                    }}

                    transition={{
                        delay: .35,
                    }}

                    className="mt-8 flex justify-center"

                >

                    <div className="flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-medium text-red-300">

                        <HiExclamationTriangle />

                        Payment Cancelled

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

                    Payment was

                    <span className="mt-2 block text-red-400">

                        Cancelled

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

                    Your payment process was cancelled before it
                    could be completed.

                    <br />

                    Don't worry — your information is still safe.

                    You can return anytime and complete your
                    student registration.

                </motion.p>

                {/* Divider */}

                <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Info Card */}

                <div className="grid gap-5 md:grid-cols-2">

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                        <p className="text-sm text-slate-500">

                            Payment Status

                        </p>

                        <h3 className="mt-2 text-xl font-bold text-red-400">

                            Cancelled

                        </h3>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                        <p className="text-sm text-slate-500">

                            Registration

                        </p>

                        <h3 className="mt-2 text-xl font-bold text-cyan-400">

                            Not Completed

                        </h3>

                    </div>

                </div>
                                {/* Bottom Notice */}

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

                    className="mt-10 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5"

                >

                    <p className="text-center text-sm leading-7 text-slate-400">

                        Your registration has not been completed because
                        the payment was cancelled.

                        <br />

                        Once payment is successfully completed,
                        your student account will be activated automatically.

                    </p>

                </motion.div>

                {/* Buttons */}

                <motion.div

                    initial={{
                        opacity: 0,
                        y: 20,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        delay: .9,
                    }}

                    className="mt-10 grid gap-4 md:grid-cols-2"

                >

                    {/* Retry */}

                    <Link

                        href="/apply"

                        className="group flex items-center justify-center gap-3 rounded-2xl bg-cyan-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,.45)]"

                    >

                        <HiArrowPath

                            size={22}

                            className="transition-transform duration-300 group-hover:rotate-180"

                        />

                        Try Again

                    </Link>

                    {/* Home */}

                    <Link

                        href="/"

                        className="group flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500/10"

                    >

                        <HiHome

                            size={22}

                            className="transition-transform duration-300 group-hover:scale-110"

                        />

                        Back Home

                    </Link>

                </motion.div>

                {/* Footer */}

                <motion.div

                    initial={{
                        opacity: 0,
                    }}

                    animate={{
                        opacity: 1,
                    }}

                    transition={{
                        delay: 1.1,
                    }}

                    className="mt-12 border-t border-white/10 pt-8"

                >

                    <p className="text-center text-sm leading-7 text-slate-500">

                        Need help completing your payment?

                        <br />

                        Contact the Micro Learning Hub support team.
                        We,re always here to help you.

                    </p>

                </motion.div>

            </motion.div>

        </main>

    );

}