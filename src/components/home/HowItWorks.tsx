"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  Search,
  PlayCircle,
  Award,
  ArrowRight,
} from "lucide-react";


type Step = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
};



const steps: Step[] = [

  {
    id: 1,
    title: "Create Account",
    description:
      "Register your account and create your learning profile.",
    icon: UserPlus,
  },


  {
    id: 2,
    title: "Choose Course",
    description:
      "Find the perfect course based on your interests.",
    icon: Search,
  },


  {
    id: 3,
    title: "Start Learning",
    description:
      "Watch micro lessons and improve your skills step by step.",
    icon: PlayCircle,
  },


  {
    id: 4,
    title: "Get Certificate",
    description:
      "Complete courses and earn certificates.",
    icon: Award,
  },

];




export default function HowItWorks() {


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

          className="mx-auto mb-14 max-w-2xl text-center"

        >

          <h2 className="text-4xl font-bold">

            How It Works

          </h2>


          <p className="mt-4 text-gray-400">

            Start your learning journey in four simple steps.

          </p>


        </motion.div>






        {/* Steps */}


        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">



          {
            steps.map((step,index)=>{


              const Icon = step.icon;


              return (

                <motion.div


                  key={step.id}


                  initial={{
                    opacity:0,
                    y:40
                  }}


                  whileInView={{
                    opacity:1,
                    y:0
                  }}


                  transition={{
                    duration:.4,
                    delay:index*0.15
                  }}


                  viewport={{
                    once:true
                  }}


                  className="relative rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur"



                >



                  {/* Number */}


                  <div className="absolute right-5 top-5 text-5xl font-bold text-white/10">

                    0{step.id}

                  </div>





                  {/* Icon */}


                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">


                    <Icon size={32}/>


                  </div>






                  <h3 className="text-xl font-bold">

                    {step.title}

                  </h3>




                  <p className="mt-3 text-sm leading-relaxed text-gray-400">

                    {step.description}

                  </p>






                  {
                    index !== steps.length - 1 && (

                      <ArrowRight

                        size={22}

                        className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-blue-500 lg:block"

                      />

                    )
                  }



                </motion.div>

              );

            })
          }



        </div>


      </div>


    </section>

  );

}