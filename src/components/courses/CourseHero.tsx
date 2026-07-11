"use client";

import { motion } from "framer-motion";


export default function CourseHero() {

    return (

        <section className="bg-[#0B0F14] py-20 text-white">


            <div className="container mx-auto px-6 text-center">


                <motion.h1

                    initial={{
                        opacity: 0,
                        y: 30
                    }}

                    animate={{
                        opacity: 1,
                        y: 0
                    }}

                    className="text-5xl font-bold"

                >

                    Explore Our Courses

                </motion.h1>



                <p className="mx-auto mt-5 max-w-2xl text-gray-400">

                    Choose from hundreds of practical courses
                    and build your skills step by step.

                </p>


            </div>


        </section>

    );

}