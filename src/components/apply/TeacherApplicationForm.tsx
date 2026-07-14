"use client";

import { useUserSession } from "@/lib/sessions/session";
import UserInfoCard from "./UserInfoCard";
import { createTeacherApplication } from "@/lib/api/application/teacher";

export default function TeacherApplicationForm() {
    // পরে এখানে better auth session থেকে আসবে
    const { session } = useUserSession();
    console.log(session?.user, 'us');

    const user = session?.user;

    const handleTeacherSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        const form = e.currentTarget;

        const formData = new FormData(e.currentTarget);

        const teacherData = {
            name: user?.name ?? "",
            email: user?.email ?? "",
            image: user?.image ?? "",
            userId: user?.id ?? "",

            subject: formData.get("subject"),
            experience: formData.get("experience"),
            qualification: formData.get("qualification"),
        };

        const result = await createTeacherApplication(teacherData);

        if (result.success) {
            console.log("Teacher Application Added");
            console.log(result.data);

            form.reset();
        } else {
            console.log(result.message);
        }
    };

    return (
        <div className="relative overflow-hidden rounded-2xl border border-slate-900 bg-slate-950 p-6 md:p-8 shadow-2xl transition-all duration-300">
            {/* Background Light Ambient Glow */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none"></div>
            
            {/* User Info Section Container */}
            <div className="relative z-10 mb-8 rounded-xl   p-1 backdrop-blur-sm">
                <UserInfoCard />
            </div>

            {/* Application Form */}
            <form
                onSubmit={handleTeacherSubmit}
                className="relative z-10 space-y-5"
            >
                <div className="space-y-1">
                    <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase ml-1">
                        Teaching Subject
                    </label>
                    <input
                        type="text"
                        name="subject"
                        placeholder="e.g. Mathematics, Physics"
                        required
                        className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all duration-300 focus:border-cyan-500/50 focus:bg-slate-900 focus:ring-2 focus:ring-cyan-500/10"
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase ml-1">
                        Teaching Experience
                    </label>
                    <input
                        type="text"
                        name="experience"
                        placeholder="e.g. 3 Years, 5+ Years"
                        required
                        className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all duration-300 focus:border-cyan-500/50 focus:bg-slate-900 focus:ring-2 focus:ring-cyan-500/10"
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase ml-1">
                        Qualification
                    </label>
                    <input
                        type="text"
                        name="qualification"
                        placeholder="e.g. BSc in Computer Science"
                        required
                        className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all duration-300 focus:border-cyan-500/50 focus:bg-slate-900 focus:ring-2 focus:ring-cyan-500/10"
                    />
                </div>

                {/* Submit Button with Custom Cyber Glow */}
                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full relative group cursor-pointer overflow-hidden rounded-xl bg-cyan-500 px-6 py-4 text-xs font-extrabold uppercase tracking-widest text-slate-950 transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.45)] active:scale-[0.98]"
                    >
                        <span className="relative z-10">Submit Teacher Application</span>
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    </button>
                </div>
            </form>
        </div>
    );
}