"use client";

import Link from "next/link";
import {
    GraduationCap,
    LayoutDashboard,
    Users,
    UserCheck,
    UserRound,
    BookOpen,
    Megaphone,
    BarChart3,
    Settings,
} from "lucide-react";

import SidebarItem from "./SidebarItem";
import { useUserSession } from "@/lib/sessions/session";

type SidebarProps = {
    onLinkClick?: () => void;
};

const adminLinks: unknown = [
    {
        title: "Overview",
        href: "/dashboard/admin",
        icon: BarChart3,
    },
    {
        title: "Users",
        href: "/dashboard/admin/users",
        icon: Users,
    },
    // {
    //     title: "Teachers",
    //     href: "/dashboard/admin/teachers",
    //     icon: UserCheck,
    // },
    // {
    //     title: "Students",
    //     href: "/dashboard/admin/students",
    //     icon: UserRound,
    // },
    // {
    //     title: "Courses",
    //     href: "/dashboard/admin/courses",
    //     icon: BookOpen,
    // },
    {
        title: "Announcements",
        href: "/dashboard/admin/announcements",
        icon: Megaphone,
    }
];
const studentLinks: unknown = [
    {
        title: "Overview",
        href: "/dashboard/student",
        icon: BarChart3,
    },
    {
        title: "Exam",
        href: "/dashboard/student/exam",
        icon: BarChart3,
    },
]

export default function Sidebar({
    onLinkClick,
}: SidebarProps) {
    let links: unknown = []
    const session = useUserSession()
    if (session?.user?.role === 'admin') {
        links = adminLinks
    }
    if (session?.user?.role === 'student') {
        links = studentLinks
    }
    return (
        <aside className="flex h-full w-72 flex-col border-r border-white/10 bg-[#0B0F14]/95 backdrop-blur-xl">

            {/* Logo */}
            <div className="border-b border-white/10 p-6">

                <Link
                    href="/"
                    className="flex items-center gap-3"
                >
                    <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-3 shadow-lg shadow-cyan-500/30">
                        <GraduationCap
                            size={28}
                            className="text-white"
                        />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white">
                            MicroLearn
                        </h2>

                        <p className="text-xs text-slate-400">
                            Admin Dashboard
                        </p>
                    </div>
                </Link>

            </div>

            {/* Navigation */}

            <div className="flex-1 overflow-y-auto p-5">

                <p className="mb-4 px-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Navigation
                </p>

                <nav className="space-y-2">

                    {links.map((link) => (
                        <SidebarItem
                            key={link.href}
                            href={link.href}
                            title={link.title}
                            icon={link.icon}
                            onClick={onLinkClick}
                        />
                    ))}

                </nav>

            </div>

            {/* Footer */}

            <div className="border-t border-white/10 p-5">

                <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-4">

                    <p className="text-sm font-semibold text-white">
                        Admin Panel
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                        Manage users, teachers, students,
                        courses and announcements from one place.
                    </p>

                </div>

            </div>

        </aside>
    );
}