import CourseHero from "@/components/courses/CourseHero";
import CourseFilters from "@/components/courses/CourseFilters";
// import CourseCard from "@/components/courses/CourseCardContainer";
import CourseCardContainer from "@/components/courses/CourseCardContainer";
import Link from "next/link";


export default function CoursesPage() {

    return (

        <main className="bg-[#0B0F14] text-white">

            <section className="bg-[#0B0F14] py-20 text-white">

                <div className="container mx-auto px-6 text-center">


                    <h1

                

                        className="text-4xl md:text-5xl font-bold"

                    >

                        Explore Our
                        <span className="text-cyan-500">
                            {" "}Premium Courses
                        </span>

                    </h1>

                    <Link

                        href="/apply"

                        className="mt-10 inline-flex items-center rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-600"

                    >

                        Apply Now

                    </Link>



                </div>


            </section>

            <CourseFilters />

            <CourseCardContainer />

        </main>

    );

}