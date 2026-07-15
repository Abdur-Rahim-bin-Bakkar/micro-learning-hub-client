"use client";

import { motion } from "framer-motion";
import {
    Clock,
    Star,
    Users,
    BookOpen,
    ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type Course = {
    _id: string;
    title: string;
    slug: string;
    description: string;
    thumbnail: string;
    category: string;
    level: string;
    language: string;
    price: number;
    duration: string;
    totalLessons: number;
    rating: number;
    totalStudents: number;

    instructor: {
        id: string;
        name: string;
        email: string;
        photo: string;
    };
};

type Props = {
    course: Course;
    featured?: boolean;
};

export default function CourseCard({
    course,
    featured = false,
}: Props) {

    return (
        <motion.div
            whileHover={{
                y: -10,
                borderColor: "rgba(6, 182, 212, 0.3)",
                boxShadow: "0 20px 40px -15px rgba(6, 182, 212, 0.15)"
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}
            className="group overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-md transition-all duration-300"
        >
            {/* Image Section */}
            <div className="relative overflow-hidden aspect-video w-full">
                <Image
                    src={course.thumbnail}
                    unoptimized
                    width={500}
                    height={400}
                    alt={course.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Featured Badge */}
               

                {/* Category Badge */}
                <span className="absolute bottom-4 left-4 rounded-lg bg-slate-950/60 border border-slate-800/60 px-2.5 py-1 text-2xs font-semibold text-cyan-400 backdrop-blur-sm tracking-wide">
                    {course.category}
                </span>
            </div>

            {/* Content Section */}
            <div className="p-5 md:p-6">
                {/* Title */}
                <h2 className="line-clamp-2 text-lg font-bold text-white tracking-wide transition-colors duration-300 group-hover:text-cyan-400">
                    {course.title}
                </h2>

                {/* Instructor Name */}
                <p className="mt-1.5 text-xs font-medium text-slate-400">
                    By <span className="text-slate-300 group-hover:text-slate-200 transition-colors">{course.instructor.name}</span>
                </p>

                {/* Course Info Grid */}
                <div className="mt-5 space-y-2.5 border-y border-slate-800/60 py-4 text-xs font-medium text-slate-300">
                    <div className="flex items-center gap-2.5">
                        <BookOpen size={15} className="text-cyan-400/80" />
                        <span>{course.level}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                        <Clock size={15} className="text-cyan-400/80" />
                        <span>{course.duration}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                        <Users size={15} className="text-cyan-400/80" />
                        <span>{course.totalStudents} Students</span>
                    </div>
                </div>

                {/* Rating + Price Row */}
                <div className="mt-5 flex items-center justify-between">
                    {/* Rating */}
                    <div className="flex items-center gap-1 rounded-lg bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 text-xs font-bold text-amber-400 shadow-sm">
                        <Star size={14} fill="currentColor" />
                        <span>{course.rating}</span>
                    </div>

                    {/* Price */}
                    <p className="text-2xl font-black text-white tracking-tight">
                        ${course.price}
                    </p>
                </div>

                {/* View Details CTA Button */}
                <Link href={`/courses/${course._id}`} className="block mt-5">
                    <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 border border-slate-800 py-3 text-xs font-bold uppercase tracking-widest text-slate-200 transition-all duration-300 group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-slate-950 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.35)]">
                        View Details
                        <ArrowRight
                            size={14}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </div>
                </Link>
            </div>
        </motion.div>
    );
}