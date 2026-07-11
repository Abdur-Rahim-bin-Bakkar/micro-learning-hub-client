"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";


type FAQItem = {
    id: number;
    question: string;
    answer: string;
};



const faqs: FAQItem[] = [

    {
        id: 1,
        question: "What is Micro Learning Hub?",
        answer:
            "Micro Learning Hub is an online learning platform where students can learn practical skills through short and focused lessons.",
    },


    {
        id: 2,
        question: "Who can use this platform?",
        answer:
            "Students, teachers, and educational organizations can use Micro Learning Hub for learning and teaching purposes.",
    },


    {
        id: 3,
        question: "Are the courses beginner friendly?",
        answer:
            "Yes. Our courses are designed for beginners as well as advanced learners with structured learning paths.",
    },


    {
        id: 4,
        question: "Can teachers create their own courses?",
        answer:
            "Yes. Verified teachers can create courses, upload lessons, and manage their students.",
    },


    {
        id: 5,
        question: "Will I get a certificate after completing a course?",
        answer:
            "Yes. Students can receive certificates after successfully completing eligible courses.",
    },


    {
        id: 6,
        question: "Can I learn from mobile devices?",
        answer:
            "Yes. The platform is fully responsive and accessible from mobile, tablet, and desktop devices.",
    },

];




export default function FAQ() {


    const [active, setActive] = useState<number | null>(null);



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

                        Frequently Asked Questions

                    </h2>


                    <p className="mt-4 text-gray-400">

                        Everything you need to know about Micro Learning Hub.

                    </p>


                </motion.div>







                {/* FAQ List */}


                <div className="mx-auto max-w-3xl space-y-4">



                    {
                        faqs.map((faq, index) => (


                            <motion.div

                                key={faq.id}

                                initial={{
                                    opacity: 0,
                                    y: 20
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}

                                transition={{
                                    duration: .3,
                                    delay: index * 0.05
                                }}

                                viewport={{
                                    once: true
                                }}

                                className={`rounded-2xl border p-5 transition

${active === faq.id
                                        ?
                                        "border-blue-500 bg-white/10"
                                        :
                                        "border-white/10 bg-white/5"
                                    }

`}


                            >


                                <button

                                    onClick={() => setActive(
                                        active === faq.id ? null : faq.id
                                    )}

                                    className="flex w-full items-center justify-between text-left cursor-pointer hover:scale-101 duration-300 shadow"


                                >


                                    <h3 className="font-semibold ">

                                        {faq.question}

                                    </h3>


                                    <ChevronDown

                                        size={22}

                                        className={`transition-transform

${active === faq.id
                                                ?
                                                "rotate-180 text-blue-400"
                                                :
                                                ""
                                            }

`}

                                    />


                                </button>







                                <AnimatePresence>


                                    {
                                        active === faq.id && (

                                            <motion.div

                                                initial={{
                                                    height: 0,
                                                    opacity: 0
                                                }}

                                                animate={{
                                                    height: "auto",
                                                    opacity: 1
                                                }}

                                                exit={{
                                                    height: 0,
                                                    opacity: 0
                                                }}

                                                transition={{
                                                    duration: .3
                                                }}

                                                className="overflow-hidden"


                                            >


                                                <p className="pt-4 text-sm leading-relaxed text-gray-400">

                                                    {faq.answer}

                                                </p>


                                            </motion.div>

                                        )

                                    }


                                </AnimatePresence>



                            </motion.div>


                        ))

                    }



                </div>



            </div>


        </section>

    );

}