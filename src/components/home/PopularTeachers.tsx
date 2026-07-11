"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  BookOpen,
  Users,
  Star,
} from "lucide-react";


const teachers = [
  {
    id: 1,
    name: "Abdur Rahim",
    role: "Full Stack Developer",
    image:
      "https://i.pravatar.cc/500?img=12",
    courses: 25,
    students: "5.2K",
    rating: 4.9,
    description:
      "Expert in React, Next.js and modern web technologies.",
  },

  {
    id: 2,
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    image:
      "https://i.pravatar.cc/500?img=32",
    courses: 18,
    students: "4.8K",
    rating: 4.8,
    description:
      "Teaching creative design and user experience.",
  },


  {
    id: 3,
    name: "Michael Smith",
    role: "AI Instructor",
    image:
      "https://i.pravatar.cc/500?img=45",
    courses: 30,
    students: "8K",
    rating: 5,
    description:
      "Helping students learn Artificial Intelligence.",
  },


  {
    id: 4,
    name: "Emma Watson",
    role: "English Mentor",
    image:
      "https://i.pravatar.cc/500?img=47",
    courses: 15,
    students: "3.5K",
    rating: 4.7,
    description:
      "Improving communication skills worldwide.",
  },
];



export default function PopularTeachers() {

  const [active, setActive] = useState(0);


  const teacher = teachers[active];


  return (

    <section className="bg-[#0B0F14] py-20 text-white">


      <div className="container mx-auto px-6">


        {/* Heading */}

        <div className="mb-12 text-center">

          <h2 className="text-4xl font-bold">
            Popular Teachers
          </h2>

          <p className="mt-3 text-gray-400">
            Learn from our top rated instructors
          </p>

        </div>



        <div className="grid gap-10 lg:grid-cols-[250px_1fr]">


          {/* LEFT BUTTON AREA */}

          <div className="relative">


            <div className="space-y-4">


              {teachers.map((item,index)=>(


                <button

                  key={item.id}

                  onClick={()=>setActive(index)}

                  className={`relative flex w-full items-center gap-3 rounded-xl px-5 py-4 text-left transition-all

                  ${
                    active===index
                    ?
                    "bg-white/10 text-white"
                    :
                    "text-gray-400 hover:bg-white/5"
                  }

                  `}

                >


                  {/* Active Left Border */}

                  {
                    active===index && (

                      <motion.span

                        layoutId="activeBorder"

                        className="absolute left-0 top-0 h-full w-1 rounded-full bg-blue-500"

                      />

                    )
                  }


                  <Award size={20}/>


                  <span className="font-semibold">
                    Top {item.id}
                  </span>


                </button>


              ))}



            </div>




            {/* Dynamic Underline */}

            <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-gray-700">


              <motion.div

                animate={{
                  width:
                  active===0
                  ?
                  "25%"
                  :
                  active===1 || active===2
                  ?
                  "50%"
                  :
                  "100%"
                }}

                transition={{
                  duration:0.4
                }}

                className="h-full bg-blue-500"

              />


            </div>



          </div>






          {/* RIGHT CONTENT */}

          <div>


            <AnimatePresence mode="wait">


            <motion.div

              key={teacher.id}

              initial={{
                opacity:0,
                x:40
              }}

              animate={{
                opacity:1,
                x:0
              }}

              exit={{
                opacity:0,
                x:-40
              }}

              transition={{
                duration:0.4
              }}

              className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:grid-cols-2"

            >



              {/* Image */}

              <div className="flex justify-center">


                <img

                  src={teacher.image}

                  alt={teacher.name}

                  className="h-72 w-72 rounded-3xl object-cover"

                />


              </div>





              {/* Info */}

              <div>


                <h3 className="text-3xl font-bold">

                  {teacher.name}

                </h3>


                <p className="mt-2 text-blue-400">

                  {teacher.role}

                </p>



                <p className="mt-5 text-gray-300">

                  {teacher.description}

                </p>



                <div className="mt-8 grid grid-cols-3 gap-4">


                  <div className="rounded-xl bg-black/20 p-4">

                    <BookOpen
                    className="mb-2 text-blue-400"
                    />

                    <h4 className="font-bold">
                      {teacher.courses}
                    </h4>

                    <p className="text-sm text-gray-400">
                      Courses
                    </p>

                  </div>




                  <div className="rounded-xl bg-black/20 p-4">

                    <Users
                    className="mb-2 text-green-400"
                    />

                    <h4 className="font-bold">
                      {teacher.students}
                    </h4>

                    <p className="text-sm text-gray-400">
                      Students
                    </p>

                  </div>





                  <div className="rounded-xl bg-black/20 p-4">


                    <Star
                    className="mb-2 text-yellow-400"
                    />


                    <h4 className="font-bold">
                      {teacher.rating}
                    </h4>


                    <p className="text-sm text-gray-400">
                      Rating
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

  );
}