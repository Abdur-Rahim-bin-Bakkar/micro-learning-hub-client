"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
// // import CourseCard from "../courses/CourseCard";

// import CourseCard, {
//     Course,
// } from "./CourseCard";
import CourseCard, { Course } from "../courses/CourseCard";


export default function FeaturedCourses() {


    const [courses, setCourses] = useState<Course[]>([]);

    const [loading, setLoading] = useState(true);



    useEffect(() => {


        const fetchFeaturedCourses = async () => {


            try {


                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/courses/featured`
                );


                const result = await response.json();


                setCourses(result.data || []);



            } catch (error) {


                console.error(
                    "Failed to fetch featured courses:",
                    error
                );


            } finally {


                setLoading(false);


            }


        };



        fetchFeaturedCourses();



    }, []);





    if (loading) {


        return (

            <section className="
                bg-[#0B0F14]
                py-20
                text-white
            ">


                <div className="
                    container
                    mx-auto
                    px-6
                    text-center
                ">


                    <h2 className="
                        text-xl
                        font-semibold
                    ">

                        Loading Featured Courses...

                    </h2>


                </div>


            </section>

        );


    }





    if (courses.length === 0) {


        return (

            <section className="
                bg-[#0B0F14]
                py-20
                text-white
            ">


                <div className="
                    container
                    mx-auto
                    px-6
                    text-center
                ">


                    <h2 className="
                        text-2xl
                        font-bold
                    ">

                        No Featured Courses Available

                    </h2>


                    <p className="
                        mt-3
                        text-gray-400
                    ">

                        Check back later for exciting courses.

                    </p>


                </div>


            </section>

        );


    }





    return (

        <section className="
            bg-[#0B0F14]
            py-20
            text-white
        ">


            <div className="
                container
                mx-auto
                px-6
            ">



                {/* Heading */}

                <div className="
                    mb-12
                    flex
                    items-end
                    justify-between
                ">



                    <div>


                        <h2 className="
                            text-4xl
                            font-bold
                        ">

                            Featured Courses

                        </h2>



                        <p className="
                            mt-3
                            text-gray-400
                        ">

                            Explore our most popular and trending courses

                        </p>



                    </div>





                    <Link

                        href="/courses"

                        className="
                            hidden
                            items-center
                            gap-2
                            text-blue-400
                            transition
                            hover:text-blue-300
                            sm:flex
                        "

                    >

                        View All

                        <ArrowRight size={18} />

                    </Link>



                </div>





                {/* Cards */}


                <div className="
                    grid
                    gap-7
                    md:grid-cols-2
                    lg:grid-cols-4
                ">


                    {
                        courses.map((course) => (


                            <CourseCard

                                key={course._id}

                                course={course}

                                featured

                            />


                        ))
                    }


                </div>




            </div>


        </section>


    );

}