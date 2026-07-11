"use client";

import { motion } from "framer-motion";
import {
    Zap,
    Users,
    Award,
    MonitorSmartphone,
    ShieldCheck,
    TrendingUp,
} from "lucide-react";


type Feature = {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
};



const features: Feature[] = [

    {
        id: 1,
        title: "Micro Learning Approach",
        description:
            "Learn complex topics through short, focused and easy lessons.",
        icon: Zap,
    },


    {
        id: 2,
        title: "Expert Instructors",
        description:
            "Learn from experienced teachers and industry professionals.",
        icon: Users,
    },


    {
        id: 3,
        title: "Certificate After Completion",
        description:
            "Earn certificates after successfully completing courses.",
        icon: Award,
    },


    {
        id: 4,
        title: "Learn Anywhere",
        description:
            "Access courses from mobile, tablet or desktop anytime.",
        icon: MonitorSmartphone,
    },


    {
        id: 5,
        title: "Secure Learning Platform",
        description:
            "Your learning data and progress are protected.",
        icon: ShieldCheck,
    },


    {
        id: 6,
        title: "Track Your Progress",
        description:
            "Monitor your growth and improve your skills continuously.",
        icon: TrendingUp,
    },

];





export default function WhyChooseUs() {


    return (

        <section className="bg-[#0B0F14] py-20 text-white">


            <div className="container mx-auto px-6">



                {/* Heading */}


                <motion.div

                    initial={{
                        opacity: 0,
                        y: 30
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: .5
                    }}

                    viewport={{
                        once: true
                    }}

                    className="mx-auto mb-12 max-w-2xl text-center"

                >


                    <h2 className="text-4xl font-bold">

                        Why Choose Micro Learning Hub?

                    </h2>


                    <p className="mt-4 text-gray-400">

                        Everything you need to build skills faster and smarter.

                    </p>


                </motion.div>








                {/* Cards */}


                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">



                    {
                        features.map((feature, index) => {


                            const Icon = feature.icon;



                            return (

                                <motion.div


                                    key={feature.id}


                                    initial={{
                                        opacity: 0,
                                        y: 30
                                    }}


                                    whileInView={{
                                        opacity: 1,
                                        y: 0
                                    }}


                                    transition={{
                                        duration: .4,
                                        delay: index * 0.1
                                    }}


                                    viewport={{
                                        once: true
                                    }}



                                    whileHover={{
                                        y: -8
                                    }}


                                    className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:border-blue-500/50"


                                >



                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">


                                        <Icon size={28} />


                                    </div>





                                    <h3 className="text-xl font-bold">

                                        {feature.title}

                                    </h3>




                                    <p className="mt-3 text-sm leading-relaxed text-gray-400">

                                        {feature.description}

                                    </p>



                                </motion.div>


                            )


                        })

                    }



                </div>



            </div>


        </section>

    );

}