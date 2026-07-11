"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import CourseCard, {
    Course,
} from "./CourseCard";


export default function CourseCardContainer() {

    const [courses, setCourses] = useState<Course[]>([]);

    const [loading, setLoading] = useState(true);

    const searchParams = useSearchParams();



    useEffect(() => {


        const fetchCourses = async () => {


            try {


                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/courses?${searchParams.toString()}`
                );


                const result = await response.json();



                setCourses(result.data || []);



            } catch (error) {


                console.error(
                    "Failed to fetch courses:",
                    error
                );


            } finally {


                setLoading(false);


            }


        };



        fetchCourses();



    }, [searchParams]);





    if (loading) {


        return (

            <section className="py-20 text-center">


                <h2 className="text-xl font-semibold text-white">

                    Loading Courses...

                </h2>


            </section>

        );


    }





    if (courses.length === 0) {


        return (

            <section className="
    flex
    min-h-[400px]
    items-center
    justify-center
    px-6
">
                <div className="
        flex
        max-w-md
        flex-col
        items-center
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-10
        text-center
        backdrop-blur
    ">

                    <div className="
            mb-5
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-blue-500/10
            text-4xl
        ">
                        📚
                    </div>


                    <h2 className="
            text-2xl
            font-bold
            text-white
        ">
                        No Courses Found
                    </h2>


                    <p className="
            mt-3
            text-gray-400
        ">
                        We couldn't find any courses matching your search.
                        Try changing your filters or explore all courses.
                    </p>


                    <button
                        className="
                mt-6
                rounded-xl
                bg-blue-600
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-blue-700
            "
                    >
                        Explore All Courses
                    </button>


                </div>
            </section>

        );


    }





    return (


        <section className="pb-20">


            <div
                className="
                container
                mx-auto
                grid
                gap-7
                px-6
                md:grid-cols-2
                lg:grid-cols-3
                "
            >


                {
                    courses.map((course) => (


                        <CourseCard

                            key={course._id}

                            course={course}

                        />


                    ))
                }



            </div>


        </section>


    );


}