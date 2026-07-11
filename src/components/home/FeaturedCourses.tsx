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


type Course = {
    id: number;
    title: string;
    category: string;
    instructor: string;
    image: string;
    level: string;
    duration: string;
    students: string;
    rating: number;
    price: number;
};



const courses: Course[] = [

    {
        id: 1,
        title: "Complete React & Next.js Mastery",
        category: "Programming",
        instructor: "Rahim Ahmed",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
        level: "Intermediate",
        duration: "12 Hours",
        students: "2.5K",
        rating: 4.9,
        price: 49,
    },


    {
        id: 2,
        title: "Modern UI/UX Design Course",
        category: "Design",
        instructor: "Sarah Johnson",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
        level: "Beginner",
        duration: "8 Hours",
        students: "1.8K",
        rating: 4.8,
        price: 35,
    },


    {
        id: 3,
        title: "Artificial Intelligence Basics",
        category: "AI Technology",
        instructor: "Michael Smith",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        level: "Advanced",
        duration: "15 Hours",
        students: "3K",
        rating: 5,
        price: 59,
    },


    {
        id: 4,
        title: "Digital Marketing Complete Guide",
        category: "Marketing",
        instructor: "Emma Watson",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        level: "Beginner",
        duration: "10 Hours",
        students: "1.2K",
        rating: 4.7,
        price: 29,
    },

];





export default function FeaturedCourses() {


    return (

        <section className="bg-[#0B0F14] py-20 text-white">


            <div className="container mx-auto px-6">



                {/* Heading */}


                <div className="mb-12 flex items-end justify-between">


                    <div>

                        <h2 className="text-4xl font-bold">

                            Featured Courses

                        </h2>


                        <p className="mt-3 text-gray-400">

                            Explore our most popular and trending courses

                        </p>


                    </div>



                    <Link

                        href="/courses"

                        className="hidden items-center gap-2 text-blue-400 hover:text-blue-300 sm:flex"

                    >

                        View All

                        <ArrowRight size={18} />

                    </Link>



                </div>








                {/* Course Cards */}


                <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">



                    {
                        courses.map((course, index) => (


                            <motion.div


                                key={course.id}


                                initial={{
                                    opacity: 0,
                                    y: 30
                                }}


                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}


                                transition={{
                                    duration: .4,
                                    delay: index * 0.1
                                }}


                                viewport={{
                                    once: true
                                }}


                                whileHover={{
                                    y: -8
                                }}



                                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"



                            >



                                {/* Image */}


                                <div className="relative">


                                    <Image
                                    width={500}
                                    height={400}

                                        src={course.image}

                                        alt={course.title}

                                        className="h-48 w-full object-cover"

                                    />



                                    <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold">

                                        Featured

                                    </span>



                                </div>








                                <div className="p-5">



                                    <p className="text-sm text-blue-400">

                                        {course.category}

                                    </p>



                                    <h3 className="mt-2 line-clamp-2 text-xl font-bold">

                                        {course.title}

                                    </h3>



                                    <p className="mt-2 text-sm text-gray-400">

                                        By {course.instructor}

                                    </p>






                                    <div className="mt-5 space-y-3 text-sm text-gray-300">



                                        <div className="flex items-center gap-2">

                                            <BookOpen size={16} />

                                            {course.level}

                                        </div>



                                        <div className="flex items-center gap-2">

                                            <Clock size={16} />

                                            {course.duration}

                                        </div>




                                        <div className="flex items-center gap-2">

                                            <Users size={16} />

                                            {course.students} Students

                                        </div>



                                    </div>








                                    <div className="mt-5 flex items-center justify-between">


                                        <div className="flex items-center gap-1 text-yellow-400">

                                            <Star size={17} fill="currentColor" />

                                            {course.rating}

                                        </div>


                                        <p className="text-xl font-bold">

                                            ${course.price}

                                        </p>


                                    </div>






                                    <button className="mt-5 w-full rounded-xl bg-blue-600 py-3 font-semibold transition hover:bg-blue-700">

                                        Enroll Now

                                    </button>



                                </div>



                            </motion.div>


                        ))

                    }



                </div>




            </div>


        </section>

    );

}