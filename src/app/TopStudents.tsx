"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Award,
    BookOpen,
    Trophy,
    Flame,
    Star,
} from "lucide-react";
type Student = {
  id: number;
  name: string;
  role: string;
  image: string;
  courses: number;
  completed: string;
  points: string;
  rating: number;
  description: string;
};

const students : Student[] = [

    {
        id: 1,
        name: "Rahim Ahmed",
        role: "Frontend Developer Learner",
        image: "https://i.pravatar.cc/500?img=11",
        courses: 32,
        completed: "98%",
        points: "9,850",
        rating: 5,
        description:
            "Completed multiple programming courses and actively participates in learning activities."
    },


    {
        id: 2,
        name: "Nusrat Jahan",
        role: "UI/UX Design Student",
        image: "https://i.pravatar.cc/500?img=23",
        courses: 27,
        completed: "95%",
        points: "8,900",
        rating: 4.9,
        description:
            "Creative learner focusing on modern design and user experience."
    },


    {
        id: 3,
        name: "Sakib Hasan",
        role: "Full Stack Learner",
        image: "https://i.pravatar.cc/500?img=15",
        courses: 40,
        completed: "93%",
        points: "8,200",
        rating: 4.8,
        description:
            "Passionate student learning backend and frontend technologies."
    },


    {
        id: 4,
        name: "Mim Akter",
        role: "English Learning Student",
        image: "https://i.pravatar.cc/500?img=44",
        courses: 20,
        completed: "90%",
        points: "7,500",
        rating: 4.7,
        description:
            "Improving communication skills through daily practice."
    },

];



export default function TopStudents() {

    const [active, setActive] = useState(0);

    const student = students[active];


    return (

        <section className="bg-[#0B0F14] py-20 text-white">


            <div className="container mx-auto px-6">


                {/* Heading */}

                <div className="mb-12 text-center">

                    <h2 className="text-4xl font-bold">
                        Top Students
                    </h2>

                    <p className="mt-3 text-gray-400">
                        Our highest performing learners
                    </p>

                </div>




                <div className="grid gap-10 lg:grid-cols-[250px_1fr]">



                    {/* LEFT BUTTON */}


                    <div>


                        <div className="space-y-4">


                            {
                                students.map((item, index) => (

                                    <button

                                        key={item.id}

                                        onClick={() => setActive(index)}

                                        className={`relative flex w-full items-center gap-3 rounded-xl px-5 py-4 transition-all

${active === index
                                                ?
                                                "bg-white/10 text-white"
                                                :
                                                "text-gray-400 hover:bg-white/5"
                                            }

`}

                                    >


                                        {
                                            active === index && (

                                                <motion.span

                                                    layoutId="studentActiveBorder"

                                                    className="absolute left-0 top-0 h-full w-1 rounded-full bg-blue-500"

                                                />

                                            )
                                        }



                                        <Award size={20} />


                                        <span className="font-semibold">
                                            Top {item.id}
                                        </span>


                                    </button>


                                ))

                            }


                        </div>





                        {/* Progress Underline */}


                        <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-gray-700">


                            <motion.div

                                animate={{

                                    width:
                                        active === 0
                                            ?
                                            "25%"
                                            :
                                            active === 1 || active === 2
                                                ?
                                                "50%"
                                                :
                                                "100%"

                                }}

                                transition={{
                                    duration: .4
                                }}

                                className="h-full bg-blue-500"

                            />


                        </div>



                    </div>









                    {/* RIGHT CONTENT */}


                    <div>


                        <AnimatePresence mode="wait">


                            <motion.div


                                key={student.id}


                                initial={{
                                    opacity: 0,
                                    x: 40
                                }}


                                animate={{
                                    opacity: 1,
                                    x: 0
                                }}


                                exit={{
                                    opacity: 0,
                                    x: -40
                                }}


                                transition={{
                                    duration: .4
                                }}


                                className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:grid-cols-2"



                            >



                                {/* IMAGE */}


                                <div className="flex justify-center">


                                    <img

                                        src={student.image}

                                        alt={student.name}

                                        className="h-72 w-72 rounded-3xl object-cover"

                                    />


                                </div>







                                {/* DETAILS */}


                                <div>


                                    <h3 className="text-3xl font-bold">

                                        {student.name}

                                    </h3>


                                    <p className="mt-2 text-blue-400">

                                        {student.role}

                                    </p>




                                    <p className="mt-5 text-gray-300">

                                        {student.description}

                                    </p>





                                    <div className="mt-8 grid grid-cols-3 gap-4">



                                        <div className="rounded-xl bg-black/20 p-4">


                                            <BookOpen
                                                className="mb-2 text-blue-400"
                                            />


                                            <h4 className="font-bold">
                                                {student.courses}
                                            </h4>


                                            <p className="text-sm text-gray-400">
                                                Courses
                                            </p>


                                        </div>







                                        <div className="rounded-xl bg-black/20 p-4">


                                            <Flame

                                                className="mb-2 text-orange-400"

                                            />


                                            <h4 className="font-bold">
                                                {student.completed}
                                            </h4>


                                            <p className="text-sm text-gray-400">
                                                Completed
                                            </p>


                                        </div>








                                        <div className="rounded-xl bg-black/20 p-4">


                                            <Trophy

                                                className="mb-2 text-yellow-400"

                                            />


                                            <h4 className="font-bold">
                                                {student.points}
                                            </h4>


                                            <p className="text-sm text-gray-400">
                                                Points
                                            </p>


                                        </div>




                                    </div>





                                    <button className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">

                                        View Profile

                                    </button>



                                </div>



                            </motion.div>


                        </AnimatePresence>


                    </div>





                </div>


            </div>


        </section>

    )

}