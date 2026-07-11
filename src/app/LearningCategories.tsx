"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Languages,
  Brain,
  BookOpen,
  Briefcase,
  Megaphone,
  Cpu,
} from "lucide-react";



type Category = {
  id: number;
  title: string;
  description: string;
  courses: number;
  icon: React.ElementType;
};



const categories: Category[] = [

  {
    id: 1,
    title: "Programming",
    description: "Learn coding and software development skills",
    courses: 120,
    icon: Code2,
  },

  {
    id: 2,
    title: "Design",
    description: "Master UI/UX and creative design",
    courses: 80,
    icon: Palette,
  },

  {
    id: 3,
    title: "Language",
    description: "Improve communication and language skills",
    courses: 60,
    icon: Languages,
  },

  {
    id: 4,
    title: "Artificial Intelligence",
    description: "Explore AI, Machine Learning and automation",
    courses: 45,
    icon: Brain,
  },

  {
    id: 5,
    title: "Academic",
    description: "School and academic learning resources",
    courses: 150,
    icon: BookOpen,
  },

  {
    id: 6,
    title: "Business",
    description: "Learn entrepreneurship and business skills",
    courses: 70,
    icon: Briefcase,
  },

  {
    id: 7,
    title: "Marketing",
    description: "Digital marketing and growth strategies",
    courses: 55,
    icon: Megaphone,
  },

  {
    id: 8,
    title: "Technology",
    description: "Learn modern technology trends",
    courses: 90,
    icon: Cpu,
  },

];




export default function LearningCategories() {


  return (

    <section className="bg-[#0B0F14] py-20 text-white">


      <div className="container mx-auto px-6">


        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.5
          }}

          viewport={{
            once:true
          }}

          className="mx-auto mb-12 max-w-2xl text-center"

        >


          <h2 className="text-4xl font-bold">

            Explore Learning Categories

          </h2>


          <p className="mt-4 text-gray-400">

            Discover courses based on your interests and
            build skills step by step.

          </p>


        </motion.div>







        {/* Categories Grid */}


        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">



          {
            categories.map((category,index)=>{


              const Icon = category.icon;



              return (

                <motion.div


                  key={category.id}


                  initial={{
                    opacity:0,
                    y:30
                  }}


                  whileInView={{
                    opacity:1,
                    y:0
                  }}


                  transition={{
                    duration:.4,
                    delay:index * 0.08
                  }}


                  viewport={{
                    once:true
                  }}



                  whileHover={{
                    y:-8
                  }}



                  className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-blue-500/50"


                >



                  {/* Icon */}


                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">


                    <Icon size={28}/>


                  </div>






                  <h3 className="text-xl font-bold">


                    {category.title}


                  </h3>





                  <p className="mt-3 text-sm text-gray-400">


                    {category.description}


                  </p>







                  <div className="mt-5 flex items-center justify-between">


                    <span className="text-sm text-blue-400">


                      {category.courses}+ Courses


                    </span>



                    <span className="text-sm text-gray-500">


                      Explore →

                    </span>



                  </div>




                </motion.div>


              );

            })

          }



        </div>



      </div>


    </section>


  );

}