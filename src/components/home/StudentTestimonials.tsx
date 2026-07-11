"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";


type Testimonial = {
    id: number;
    name: string;
    role: string;
    image: string;
    rating: number;
    review: string;
};



const testimonials: Testimonial[] = [

    {
        id: 1,
        name: "Rahim Ahmed",
        role: "Frontend Developer",
        image: "https://i.pravatar.cc/500?img=12",
        rating: 5,
        review:
            "Micro Learning Hub helped me learn React and Next.js with short and practical lessons. The learning process is very effective."
    },


    {
        id: 2,
        name: "Nusrat Jahan",
        role: "UI/UX Designer",
        image: "https://i.pravatar.cc/500?img=32",
        rating: 5,
        review:
            "The courses are well structured and the instructors explain every topic clearly. I improved my design skills a lot."
    },


    {
        id: 3,
        name: "Sakib Hasan",
        role: "Full Stack Learner",
        image: "https://i.pravatar.cc/500?img=15",
        rating: 4,
        review:
            "Small lessons with practical examples made learning easier. I completed multiple courses successfully."
    },


];





export default function StudentTestimonials() {


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

                        What Our Students Say

                    </h2>


                    <p className="mt-4 text-gray-400">

                        Real feedback from our successful learners.

                    </p>


                </motion.div>








                {/* Cards */}


                <div className="grid gap-7 md:grid-cols-3">



                    {
                        testimonials.map((item, index) => (


                            <motion.div


                                key={item.id}


                                initial={{
                                    opacity: 0,
                                    y: 40
                                }}


                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}


                                transition={{
                                    duration: .4,
                                    delay: index * 0.15
                                }}


                                viewport={{
                                    once: true
                                }}


                                whileHover={{
                                    y: -8
                                }}


                                className="relative rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"


                            >


                                {/* Quote Icon */}


                                <Quote

                                    className="absolute right-6 top-6 text-blue-500/30"

                                    size={45}

                                />





                                {/* Profile */}


                                <div className="flex items-center gap-4">


                                    <img

                                        src={item.image}

                                        alt={item.name}

                                        className="h-14 w-14 rounded-full object-cover"

                                    />



                                    <div>


                                        <h3 className="font-bold">

                                            {item.name}

                                        </h3>


                                        <p className="text-sm text-blue-400">

                                            {item.role}

                                        </p>


                                    </div>


                                </div>








                                {/* Rating */}


                                <div className="mt-5 flex gap-1">


                                    {
                                        Array.from({
                                            length: item.rating
                                        }).map((_, index) => (


                                            <Star

                                                key={index}

                                                size={18}

                                                fill="currentColor"

                                                className="text-yellow-400"

                                            />


                                        ))

                                    }


                                </div>







                                {/* Review */}


                                <p className="mt-5 leading-relaxed text-gray-300">

                                    {item.review}

                                </p>



                            </motion.div>


                        ))

                    }



                </div>



            </div>


        </section>

    );

}