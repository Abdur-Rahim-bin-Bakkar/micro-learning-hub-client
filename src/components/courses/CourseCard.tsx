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
                y: -10
            }}

            transition={{
                duration: 0.3
            }}


            className="
            group
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            shadow-lg
            "

        >



            {/* Image */}

            <div className="
                relative
                overflow-hidden
            ">


                <Image

                    src={course.thumbnail}

                    unoptimized

                    width={500}

                    height={400}

                    alt={course.title}

                    className="
                    h-52
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-110
                    "

                />



                {/* Image Overlay */}

                <div className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-transparent
                    to-transparent
                " />





                {
                    featured &&

                    <span
                        className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        bg-blue-600
                        px-4
                        py-1
                        text-xs
                        font-semibold
                        text-white
                        shadow-md
                        "
                    >

                        Featured

                    </span>

                }





                <span
                    className="
                    absolute
                    bottom-4
                    left-4
                    rounded-full
                    bg-black/40
                    px-3
                    py-1
                    text-xs
                    text-white
                    backdrop-blur
                    "
                >

                    {course.category}

                </span>



            </div>







            {/* Content */}


            <div className="p-6">



                <h2
                    className="
                    line-clamp-2
                    text-xl
                    font-bold
                    text-white
                    transition
                    group-hover:text-blue-400
                    "
                >

                    {course.title}

                </h2>




                <p className="
                    mt-2
                    text-sm
                    text-gray-400
                ">

                    By {course.instructor.name}

                </p>






                {/* Course Info */}


                <div
                    className="
                    mt-5
                    space-y-3
                    text-sm
                    text-gray-300
                    "
                >



                    <div className="
                        flex
                        items-center
                        gap-2
                    ">

                        <BookOpen
                            size={17}
                            className="text-blue-400"
                        />

                        {course.level}


                    </div>





                    <div className="
                        flex
                        items-center
                        gap-2
                    ">

                        <Clock
                            size={17}
                            className="text-blue-400"
                        />

                        {course.duration}


                    </div>





                    <div className="
                        flex
                        items-center
                        gap-2
                    ">


                        <Users
                            size={17}
                            className="text-blue-400"
                        />

                        {course.totalStudents} Students


                    </div>



                </div>







                {/* Rating + Price */}


                <div className="
                    mt-6
                    flex
                    items-center
                    justify-between
                ">


                    <div className="
                        flex
                        items-center
                        gap-1
                        rounded-lg
                        bg-yellow-400/10
                        px-3
                        py-1
                        text-yellow-400
                    ">


                        <Star

                            size={16}

                            fill="currentColor"

                        />


                        {course.rating}


                    </div>





                    <p className="
                        text-2xl
                        font-bold
                        text-white
                    ">

                        ${course.price}

                    </p>



                </div>








                {/* View Details Button */}


                <Link

                    href={`/courses/${course._id}`}

                    className="
                    mt-6
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-700
                    "

                >

                    View Details


                    <ArrowRight

                        size={18}

                        className="
                        transition
                        group-hover:translate-x-1
                        "

                    />


                </Link>



            </div>



        </motion.div>

    );

}