"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Clock, Star, Users } from "lucide-react";
import Image from "next/image";

type Course = {
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

export default function CourseCardContainer() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    console.log(courses, 'cs')
    const searchParams = useSearchParams();

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/courses?${searchParams.toString()}`
                );

                const result = await response.json();

                setCourses(result.data);
            } catch (error) {
                console.error("Failed to fetch courses:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, [searchParams]);

    if (loading) {
        return (
            <section className="py-20 text-center">
                <h2 className="text-xl font-semibold">Loading Courses...</h2>
            </section>
        );
    }

    return (
        <section className="pb-20">
            <div className="container mx-auto grid gap-7 px-6 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                    <motion.div
                        key={course._id}
                        whileHover={{ y: -8 }}
                        className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                    >


                        {
                            course.thumbnail &&
                            <Image
                                width={500}
                                height={400}

                                src={course.thumbnail}

                                alt={course.title}

                                className="h-48 w-full object-cover"

                            />
                        }

                        <div className="p-6">
                            <p className="text-blue-400">{course.category}</p>

                            <h2 className="mt-2 text-xl font-bold">
                                {course.title}
                            </h2>

                            <p className="mt-2 text-gray-400">
                                By {course.instructor.name}
                            </p>

                            <div className="mt-5 space-y-3 text-sm text-gray-300">
                                <div className="flex items-center gap-2">
                                    <Clock size={18} />
                                    <span>{course.duration}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Users size={18} />
                                    <span>{course.totalStudents} Students</span>
                                </div>

                                <div className="flex items-center gap-2 text-yellow-400">
                                    <Star size={18} />
                                    <span>{course.rating}</span>
                                </div>
                            </div>

                            <div className="mt-5 flex items-center justify-between">
                                <span className="text-xl font-bold">
                                    ${course.price}
                                </span>

                                <button className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
                                    Enroll
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}