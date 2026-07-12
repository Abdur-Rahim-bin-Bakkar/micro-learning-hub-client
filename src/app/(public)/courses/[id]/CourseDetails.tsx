"use client";

import Image from "next/image";
import {
    Clock,
    Star,
    Users,
    BookOpen,
    CheckCircle,
    Globe,
    Tag,
} from "lucide-react";


type Props = {
    course?: any;
};



export default function CourseDetails({
    course,
}: Props) {



    if (!course) {

        return (

            <section
                className="
                min-h-screen
                flex
                items-center
                justify-center
                bg-[#0B0F14]
                px-6
                text-white
                "
            >

                <div
                    className="
                    max-w-md
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-10
                    text-center
                    backdrop-blur-xl
                    shadow-2xl
                    "
                >

                    <div
                        className="
                        mx-auto
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-full
                        bg-red-500/10
                        text-4xl
                        "
                    >

                        🔍

                    </div>



                    <h1
                        className="
                        mt-6
                        text-3xl
                        font-bold
                        "
                    >

                        Course Not Found

                    </h1>



                    <p
                        className="
                        mt-3
                        text-gray-400
                        "
                    >

                        Sorry, the course you are looking for does not exist
                        or may have been removed.

                    </p>



                    <button
                        className="
                        mt-6
                        rounded-xl
                        bg-blue-600
                        px-6
                        py-3
                        font-semibold
                        transition
                        hover:bg-blue-700
                        "
                    >

                        Back To Courses

                    </button>


                </div>


            </section>

        );

    }





    return (

        <section
            className="
            min-h-screen
            bg-[#0B0F14]
            py-20
            text-white
            "
        >


            <div
                className="
                container
                mx-auto
                px-6
                "
            >



                {/* Hero Section */}


                <div
                    className="
                    grid
                    gap-10
                    lg:grid-cols-2
                    "
                >




                    {/* Thumbnail */}


                    <div
                        className="
                        group
                        relative
                        overflow-hidden
                        rounded-3xl
                        border
                        border-white/10
                        "
                    >


                        <Image

                            src={
                                course?.thumbnail ??
                                "/placeholder.png"
                            }

                            unoptimized

                            width={800}

                            height={600}

                            alt={
                                course?.title ??
                                "Course Image"
                            }

                            className="
                            h-full
                            min-h-[450px]
                            w-full
                            object-cover
                            transition
                            duration-700
                            group-hover:scale-110
                            "

                        />



                        <div
                            className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/80
                            via-black/20
                            to-transparent
                            "
                        />





                        <div
                            className="
                            absolute
                            bottom-6
                            left-6
                            "
                        >

                            <span
                                className="
                                rounded-full
                                bg-blue-600
                                px-5
                                py-2
                                text-sm
                                font-semibold
                                "
                            >

                                {course?.category ?? "Category"}

                            </span>


                        </div>


                    </div>









                    {/* Course Info */}


                    <div
                        className="
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/5
                        p-8
                        backdrop-blur-xl
                        "
                    >



                        <h1
                            className="
                            text-4xl
                            font-bold
                            leading-tight
                            "
                        >

                            {course?.title ?? "Course Title"}

                        </h1>




                        <p
                            className="
                            mt-5
                            leading-relaxed
                            text-gray-400
                            "
                        >

                            {course?.description ??
                            "No description available"}

                        </p>







                        {/* Stats */}


                        <div
                            className="
                            mt-8
                            grid
                            grid-cols-2
                            gap-4
                            "
                        >



                            <div
                                className="
                                rounded-2xl
                                bg-white/5
                                p-4
                                "
                            >

                                <Clock
                                    className="text-blue-400"
                                />

                                <p
                                    className="
                                    mt-2
                                    text-sm
                                    text-gray-400
                                    "
                                >

                                    Duration

                                </p>


                                <h3 className="font-semibold">

                                    {course?.duration ?? "N/A"}

                                </h3>


                            </div>






                            <div
                                className="
                                rounded-2xl
                                bg-white/5
                                p-4
                                "
                            >

                                <Users
                                    className="text-blue-400"
                                />

                                <p
                                    className="
                                    mt-2
                                    text-sm
                                    text-gray-400
                                    "
                                >

                                    Students

                                </p>


                                <h3 className="font-semibold">

                                    {course?.totalStudents ?? 0}

                                </h3>


                            </div>






                            <div
                                className="
                                rounded-2xl
                                bg-white/5
                                p-4
                                "
                            >

                                <BookOpen
                                    className="text-blue-400"
                                />


                                <p
                                    className="
                                    mt-2
                                    text-sm
                                    text-gray-400
                                    "
                                >

                                    Lessons

                                </p>


                                <h3 className="font-semibold">

                                    {course?.totalLessons ?? 0}

                                </h3>


                            </div>







                            <div
                                className="
                                rounded-2xl
                                bg-yellow-500/10
                                p-4
                                "
                            >

                                <Star
                                    className="text-yellow-400"
                                    fill="currentColor"
                                />


                                <p
                                    className="
                                    mt-2
                                    text-sm
                                    text-gray-400
                                    "
                                >

                                    Rating

                                </p>


                                <h3
                                    className="
                                    font-semibold
                                    text-yellow-400
                                    "
                                >

                                    {course?.rating ?? 0}

                                </h3>


                            </div>



                        </div>









                        {/* Instructor */}


                        <div
                            className="
                            mt-8
                            flex
                            items-center
                            gap-4
                            rounded-2xl
                            bg-white/5
                            p-4
                            "
                        >



                            <Image

                                src={
                                    course?.instructor?.photo ??
                                    "/avatar.png"
                                }

                                unoptimized

                                width={60}

                                height={60}

                                alt={
                                    course?.instructor?.name ??
                                    "Instructor"
                                }


                                className="
                                h-14
                                w-14
                                rounded-full
                                object-cover
                                "

                            />



                            <div>


                                <p
                                    className="
                                    text-sm
                                    text-gray-400
                                    "
                                >

                                    Instructor

                                </p>


                                <h3 className="font-semibold">

                                    {
                                    course?.instructor?.name ??
                                    "Unknown"
                                    }

                                </h3>


                            </div>



                        </div>






                    </div>



                </div>










                {/* Requirements */}


                <div
                    className="
                    mt-12
                    grid
                    gap-8
                    lg:grid-cols-2
                    "
                >



                    <div
                        className="
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/5
                        p-8
                        "
                    >

                        <h2 className="
                        mb-5
                        text-2xl
                        font-bold
                        "
                        >

                            Requirements

                        </h2>


                        <div className="space-y-3">


                            {
                                course?.requirements?.map(
                                    (item:string,index:number)=>(
                                    
                                    <div
                                    key={index}
                                    className="
                                    flex
                                    gap-3
                                    text-gray-300
                                    "
                                    >

                                        <CheckCircle
                                        className="text-green-400"
                                        size={20}
                                        />

                                        {item}

                                    </div>

                                ))
                            }


                        </div>


                    </div>






                    <div
                        className="
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/5
                        p-8
                        "
                    >

                        <h2 className="
                        mb-5
                        text-2xl
                        font-bold
                        "
                        >

                            What You'll Learn

                        </h2>


                        <div className="space-y-3">


                            {
                                course?.learningOutcomes?.map(
                                    (item:string,index:number)=>(
                                    
                                    <div
                                    key={index}
                                    className="
                                    flex
                                    gap-3
                                    text-gray-300
                                    "
                                    >

                                        <CheckCircle
                                        className="text-blue-400"
                                        size={20}
                                        />

                                        {item}

                                    </div>

                                ))
                            }


                        </div>


                    </div>



                </div>







                {/* Tags */}


                <div
                    className="
                    mt-10
                    flex
                    flex-wrap
                    gap-3
                    "
                >


                    {
                        course?.tags?.map(
                            (tag:string,index:number)=>(

                            <span
                            key={index}
                            className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            bg-blue-600/20
                            px-4
                            py-2
                            text-sm
                            "
                            >

                                <Tag size={15}/>

                                {tag}

                            </span>

                        ))
                    }


                </div>




            </div>


        </section>

    );

}