"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";


export default function CourseHero() {


    const benefits:string[] = [
        "Expert instructors and practical lessons",
        "Real-world projects and assignments",
        "Career-focused learning roadmap",
        "Lifetime learning support",
    ];


    return (


        <section className="bg-[#0B0F14] py-20 text-white">


            <div className="container mx-auto px-6 text-center">


                <motion.h1

                    initial={{
                        opacity:0,
                        y:30
                    }}

                    animate={{
                        opacity:1,
                        y:0
                    }}

                    transition={{
                        duration:0.6
                    }}

                    className="text-4xl md:text-5xl font-bold"

                >

                    Explore Our 
                    
                    <span className="text-cyan-500">
                        {" "}Premium Courses
                    </span>

                </motion.h1>




                <motion.p

                    initial={{
                        opacity:0
                    }}

                    animate={{
                        opacity:1
                    }}

                    transition={{
                        delay:0.3
                    }}

                    className="mx-auto mt-5 max-w-2xl text-gray-400 text-lg"

                >

                    Choose from practical courses designed by industry
                    experts. Learn new skills, build real projects,
                    and prepare yourself for your dream career.

                </motion.p>




                {/* Benefits */}


                <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mt-10 text-left">


                    {
                        benefits.map((item,index)=>(


                            <motion.div

                                key={index}

                                initial={{
                                    opacity:0,
                                    x:-20
                                }}

                                animate={{
                                    opacity:1,
                                    x:0
                                }}

                                transition={{
                                    delay:index * 0.1
                                }}

                                className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl"

                            >


                                <CheckCircle 
                                    className="text-cyan-500"
                                    size={22}
                                />


                                <p className="text-gray-300">
                                    {item}
                                </p>



                            </motion.div>


                        ))
                    }


                </div>





                {/* Apply Button */}


                <motion.div

                    initial={{
                        opacity:0,
                        scale:0.9
                    }}

                    animate={{
                        opacity:1,
                        scale:1
                    }}

                    transition={{
                        delay:0.6
                    }}

                    className="mt-10"

                >


                    <Link

                        href="/apply"

                        className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"

                    >

                        Apply For A Course

                        <ArrowRight size={20}/>


                    </Link>



                </motion.div>



            </div>


        </section>


    );

}