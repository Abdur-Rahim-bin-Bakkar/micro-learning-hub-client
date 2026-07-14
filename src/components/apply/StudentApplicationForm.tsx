"use client";

import { createCheckoutSession } from "@/lib/api/pament/createCheckoutSession";
import UserInfoCard from "./UserInfoCard";
import { useUserSession } from "@/lib/sessions/session";

export default function StudentApplicationForm() {
    const { session } = useUserSession();

    const user = session?.user;

    const handleStudentSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const form = e.currentTarget;

        const studentData = {
            name: user?.name ?? "",
            email: user?.email ?? "",
            image: user?.image ?? "",
            userId: user?.id ?? "",

            education: (
                form.elements.namedItem("education") as HTMLInputElement
            ).value,

            interest: (
                form.elements.namedItem("interest") as HTMLInputElement
            ).value,

            goal: (
                form.elements.namedItem("goal") as HTMLInputElement
            ).value,
        };

        const result = await createCheckoutSession(studentData);

        if (!result.success) {
            console.log(result.message);
            return;
        }

        if (result.data?.url) {
            window.location.href = result.data.url;
            return;
        }

        console.log("Checkout URL Not Found");
    };

    return (
        <div
            className="
                rounded-3xl
                border
                border-white/10
                bg-[#0B0F14]
                p-8
                shadow-[0_20px_60px_rgba(6,182,212,0.08)]
                backdrop-blur-xl
            "
        >
            <UserInfoCard />

            <div className="mb-8 mt-6">
                <h2 className="text-2xl font-bold text-white">
                    Student Application
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                    Complete the form below to continue to the payment process.
                </p>
            </div>

            <form
                onSubmit={handleStudentSubmit}
                className="space-y-6"
            >
                {/* Education */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                        Current Education
                    </label>

                    <input
                        name="education"
                        required
                        placeholder="e.g. Diploma in Computer Engineering"
                        className="
                            w-full
                            rounded-xl
                            border
                            border-slate-700
                            bg-[#111827]
                            px-4
                            py-3
                            text-white
                            placeholder:text-slate-500
                            outline-none
                            transition-all
                            duration-300
                            focus:border-cyan-500
                            focus:ring-4
                            focus:ring-cyan-500/20
                            focus:shadow-[0_0_25px_rgba(6,182,212,0.25)]
                        "
                    />
                </div>

                {/* Interest */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                        Learning Interest
                    </label>

                    <input
                        name="interest"
                        required
                        placeholder="e.g. Full Stack Web Development"
                        className="
                            w-full
                            rounded-xl
                            border
                            border-slate-700
                            bg-[#111827]
                            px-4
                            py-3
                            text-white
                            placeholder:text-slate-500
                            outline-none
                            transition-all
                            duration-300
                            focus:border-cyan-500
                            focus:ring-4
                            focus:ring-cyan-500/20
                            focus:shadow-[0_0_25px_rgba(6,182,212,0.25)]
                        "
                    />
                </div>

                {/* Goal */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                        Career Goal
                    </label>

                    <input
                        name="goal"
                        required
                        placeholder="e.g. Become a Full Stack Developer"
                        className="
                            w-full
                            rounded-xl
                            border
                            border-slate-700
                            bg-[#111827]
                            px-4
                            py-3
                            text-white
                            placeholder:text-slate-500
                            outline-none
                            transition-all
                            duration-300
                            focus:border-cyan-500
                            focus:ring-4
                            focus:ring-cyan-500/20
                            focus:shadow-[0_0_25px_rgba(6,182,212,0.25)]
                        "
                    />
                </div>

                <button
                    type="submit"
                    className="
                        group
                        relative
                        mt-2
                        flex
                        w-full
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-xl
                        bg-cyan-500
                        px-6
                        py-3.5
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-cyan-400
                        hover:shadow-[0_0_35px_rgba(6,182,212,0.45)]
                        active:scale-[0.98]
                    "
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />

                    <span className="relative cursor-pointer flex items-center gap-2">
                        Continue to Payment
                    </span>
                </button>
            </form>
        </div>
    );
}