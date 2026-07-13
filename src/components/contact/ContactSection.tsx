"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
    FaEnvelope,
    FaUserGraduate,
    FaChalkboardTeacher,
} from "react-icons/fa";
const ContactSection = () => {

    const [loading, setLoading] = useState(false);
    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {

        e.preventDefault();

        setLoading(true);

        const form = e.currentTarget;

        const formData = new FormData(form);

        formData.append("_captcha", "false");

        formData.append("_template", "table");

        formData.append(
            "_subject",
            "Micro Learning Hub Contact Form"
        );

        try {

            const response = await fetch(
                "https://formsubmit.co/ajax/webdesignrahim4061@gmail.com",
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (response.ok) {

                toast.success(
                    "Message sent successfully."
                );

                form.reset();

            } else {

                toast.error(
                    "Failed to send message."
                );

            }

        } catch {

            toast.error(
                "Something went wrong."
            );

        } finally {

            setLoading(false);

        }

    };

    return (
        <section className="mx-auto max-w-7xl px-4">
            {/* ================= HERO SECTION ================= */}

            <div className="relative mb-12 overflow-hidden rounded-[32px] border border-cyan-500/20 bg-[#07111F] shadow-[0_0_80px_rgba(6,182,212,.15)]">

                {/* Blur Background */}

                <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="relative z-10 p-8 md:p-12"
                >

                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">

                        💬 Community Support

                    </div>

                    <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">

                        Contact Our
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            {" "}Help Desk
                        </span>

                    </h1>

                    <p className="mt-6 max-w-3xl text-[16px] leading-8 text-slate-300">

                        Welcome to the Micro Learning Hub Help Desk.

                        This platform is designed to create a collaborative learning
                        environment where Students, Teachers, and Administrators work
                        together.

                        Students and Teachers must first submit an application through
                        the website. Once an Administrator reviews and approves the
                        application, the user can access the Help Desk to ask questions,
                        solve problems, participate in discussions, and support other
                        members of the community.

                        If your account is still pending approval, posting in the Help
                        Desk will remain unavailable.

                        If you have any questions regarding your application,
                        account approval, technical issues, or any other concerns,
                        please contact our support team using the form below.

                    </p>

                </motion.div>

            </div>

            {/* ================= FEATURE CARDS ================= */}

            <div className="mb-14 grid gap-6 lg:grid-cols-3">

                {/* Student */}

                <motion.div
                    whileHover={{ y: -8 }}
                    className="group rounded-[28px] border border-cyan-500/20 bg-[#0C1625] p-8 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,.15)]"
                >

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/15 text-4xl">

                        🎓

                    </div>

                    <h2 className="text-2xl font-bold text-white">

                        Students

                    </h2>

                    <p className="mt-4 leading-7 text-slate-400">

                        Approved students can create Help Desk posts,
                        ask academic questions, share knowledge,
                        and receive support from teachers and
                        other learners.

                    </p>

                </motion.div>

                {/* Teacher */}

                <motion.div
                    whileHover={{ y: -8 }}
                    className="group rounded-[28px] border border-blue-500/20 bg-[#0C1625] p-8 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,.15)]"
                >

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/15 text-4xl">

                        👨‍🏫

                    </div>

                    <h2 className="text-2xl font-bold text-white">

                        Teachers

                    </h2>

                    <p className="mt-4 leading-7 text-slate-400">

                        Teachers can guide students,
                        answer questions,
                        provide valuable learning resources,
                        and help build a stronger learning community.

                    </p>

                </motion.div>

                {/* Contact */}

                <motion.div
                    whileHover={{ y: -8 }}
                    className="group rounded-[28px] border border-orange-500/20 bg-[#0C1625] p-8 transition-all duration-300 hover:border-orange-400 hover:shadow-[0_0_40px_rgba(249,115,22,.15)]"
                >

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/15 text-4xl">

                        📩

                    </div>

                    <h2 className="text-2xl font-bold text-white">

                        Contact Support

                    </h2>

                    <p className="mt-4 leading-7 text-slate-400">

                        Having trouble with your account,
                        approval process,
                        or facing any technical issue?

                        Our support team is always ready
                        to help you.

                    </p>

                </motion.div>

            </div>

            <div className="relative  max-w-3xl mx-auto  overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#020617] p-6 shadow-[0_20px_80px_rgba(6,182,212,0.12)] lg:p-10">

                {/* Background Blur */}
                <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="relative">

                    {/* Header */}

                    <div className="mb-10">

                        <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-md">
                            Contact Support
                        </div>

                        <h2 className="text-4xl font-extrabold text-white">
                            Send us a Message
                        </h2>

                        <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                            If you have any questions regarding your account, Help Desk access,
                            approval process, or technical issues, simply fill out the form below.
                            Our support team will carefully review your request and respond as soon
                            as possible.
                        </p>

                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-7"
                    >

                        {/* Name */}

                        <div>

                            <label className="mb-3 block font-semibold">
                                Full Name
                            </label>

                            <div className="group relative">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition group-focus-within:text-cyan-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>

                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Enter your full name"
                                    className="
w-full
rounded-2xl
border
border-white/10
bg-white/5
py-4
pl-14
pr-5
text-white
placeholder:text-gray-500
backdrop-blur-md
outline-none
transition-all
duration-300
focus:border-cyan-400
focus:bg-white/10
focus:ring-4
focus:ring-cyan-500/20
"
                                />

                            </div>

                        </div>

                        {/* Subject */}

                        <div>

                            <label className="mb-3 block font-semibold">
                                Subject
                            </label>

                            <div className="group relative">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition group-focus-within:text-cyan-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 8h10M7 12h7m-7 4h10"
                                    />
                                </svg>

                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    placeholder="Enter subject"
                                    className="
w-full
rounded-2xl
border
border-white/10
bg-white/5
py-4
pl-14
pr-5
text-white
placeholder:text-gray-500
backdrop-blur-md
outline-none
transition-all
duration-300
focus:border-cyan-400
focus:bg-white/10
focus:ring-4
focus:ring-cyan-500/20
"
                                />

                            </div>

                        </div>

                        {/* Email */}

                        <div>

                            <label className="mb-3 block font-semibold">
                                Email Address
                            </label>

                            <div className="group relative">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition group-focus-within:text-cyan-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 12H8m8 0L12 8m4 4l-4 4"
                                    />
                                </svg>

                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="example@gmail.com"
                                    className="
w-full
rounded-2xl
border
border-white/10
bg-white/5
py-4
pl-14
pr-5
text-white
placeholder:text-gray-500
backdrop-blur-md
outline-none
transition-all
duration-300
focus:border-cyan-400
focus:bg-white/10
focus:ring-4
focus:ring-cyan-500/20
"
                                />

                            </div>

                        </div>

                        {/* Message */}

                        <div>

                            <label className="mb-3 block font-semibold">
                                Message
                            </label>

                            <div className="group relative">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute left-5 top-6 h-5 w-5 text-gray-400 transition group-focus-within:text-cyan-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 10h8M8 14h5M5 5h14v14H5z"
                                    />
                                </svg>

                                <textarea
                                    name="message"
                                    rows={6}
                                    required
                                    placeholder="Write your message..."
                                    className="
w-full
resize-none
rounded-2xl
border
border-white/10
bg-white/5
py-4
pl-14
pr-5
text-white
placeholder:text-gray-500
backdrop-blur-md
outline-none
transition-all
duration-300
focus:border-cyan-400
focus:bg-white/10
focus:ring-4
focus:ring-cyan-500/20
"
                                />

                            </div>

                        </div>

                        {/* Button */}

                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-70"
                        >

                            <span className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />

                            <span className="relative flex items-center justify-center gap-3">

                                {loading ? (

                                    <>
                                        <svg
                                            className="h-5 w-5 animate-spin"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                opacity=".25"
                                            />

                                            <path
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                            />
                                        </svg>

                                        Sending...

                                    </>

                                ) : (

                                    <>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M22 2L11 13"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M22 2L15 22l-4-9-9-4 20-7z"
                                            />
                                        </svg>

                                        Send Message

                                    </>

                                )}

                            </span>

                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
};

export default ContactSection;