"use client";

import { HelpDeskProps } from "./types";
import CreatePostCard from "./CreatePostCard";
import PostList from "./PostList";

const HelpDesk = ({ PostData }: HelpDeskProps) => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-[#0B0F14] via-[#111827] to-[#1E293B] dark:bg-[#0B1120] py-10">
            <div className="mx-auto max-w-7xl px-5">

                {/* Header */}
                <CreatePostCard />


                <details className="mx-auto mb-8 max-w-3xl overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl group">

                    <summary className="flex cursor-pointer items-center justify-between p-5 sm:p-6 md:p-7 text-white list-none">
                        <div>
                            <h2 className="text-xl font-bold sm:text-2xl">
                                About Help Desk
                            </h2>
                            <p className="mt-1 text-sm text-blue-100">
                                Click to learn more about the Help Desk.
                            </p>
                        </div>

                        <span className="text-2xl transition-transform duration-300 group-open:rotate-180">
                            ▼
                        </span>
                    </summary>

                    <div className="border-t border-white/20 p-5 sm:p-6 md:p-7 text-white">

                        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                            <div className="space-y-3">

                                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 backdrop-blur-sm">
                                    <span className="text-base sm:text-lg">💡</span>

                                    <span className="text-[11px] font-semibold uppercase tracking-widest sm:text-xs">
                                        Community Support
                                    </span>
                                </div>

                                <h1 className="text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
                                    Help Desk
                                </h1>

                                <p className="max-w-xl text-xs leading-6 text-blue-100 sm:text-sm">
                                    Ask your questions, solve problems together, and help fellow
                                    students, teachers, and administrators in one collaborative
                                    community.
                                </p>

                            </div>

                            <div className="hidden h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md lg:flex">
                                <span className="text-4xl">🚀</span>
                            </div>

                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">

                            <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
                                <h3 className="text-lg font-bold sm:text-xl">
                                    Students
                                </h3>

                                <p className="mt-1 text-xs text-blue-100 sm:text-sm">
                                    Ask & Learn
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
                                <h3 className="text-lg font-bold sm:text-xl">
                                    Teachers
                                </h3>

                                <p className="mt-1 text-xs text-blue-100 sm:text-sm">
                                    Guide & Support
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
                                <h3 className="text-lg font-bold sm:text-xl">
                                    Admins
                                </h3>

                                <p className="mt-1 text-xs text-blue-100 sm:text-sm">
                                    Announcements
                                </p>
                            </div>

                        </div>

                    </div>

                </details>

                {/* Create Post */}


                {/* Posts */}

                <PostList PostData={PostData} />

            </div>
        </section>
    );
};

export default HelpDesk;