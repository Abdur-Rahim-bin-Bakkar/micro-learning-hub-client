"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    CalendarDays,
    User,
    ArrowRight,
    Megaphone,
} from "lucide-react";


export type Announcement = {

    _id: string;

    title: string;

    slug: string;

    description: string;

    image: string;

    type: string;

    priority: string;


    author: {

        id: string;

        name: string;

        role: string;

        photo: string;

    };


    publishedAt: string;

};



type Props = {

    announcement: Announcement;

};



export default function AnnouncementCard({
    announcement,
}: Props) {


    return (

        <motion.div

            initial={{
                opacity:0,
                y:30
            }}

            whileInView={{
                opacity:1,
                y:0
            }}

            viewport={{
                once:true
            }}

            whileHover={{
                y:-8
            }}


            className="
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur
            shadow-xl
            "

        >


            {/* Image */}

            <div className="
            relative
            h-56
            w-full
            ">


                <Image

                    src={
                        announcement.image ||
                        "/placeholder.png"
                    }

                    unoptimized

                    fill

                    alt={
                        announcement.title
                    }

                    className="
                    object-cover
                    "

                />



                <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                to-transparent
                " />


                <span className="
                absolute
                left-5
                top-5
                flex
                items-center
                gap-2
                rounded-full
                bg-blue-600
                px-4
                py-2
                text-xs
                font-semibold
                text-white
                ">

                    <Megaphone size={14}/>

                    {
                        announcement.type
                    }

                </span>


            </div>





            {/* Content */}


            <div className="p-6">



                <h2 className="
                line-clamp-2
                text-xl
                font-bold
                text-white
                ">

                    {
                        announcement.title
                    }

                </h2>




                <p className="
                mt-3
                line-clamp-3
                text-sm
                leading-6
                text-gray-400
                ">

                    {
                        announcement.description
                    }

                </p>






                <div className="
                mt-5
                space-y-3
                text-sm
                text-gray-300
                ">


                    <div className="
                    flex
                    items-center
                    gap-2
                    ">

                        <User size={16}/>


                        {
                            announcement.author.name
                        }


                    </div>





                    <div className="
                    flex
                    items-center
                    gap-2
                    ">


                        <CalendarDays size={16}/>


                        {
                            new Date(
                                announcement.publishedAt
                            ).toLocaleDateString()
                        }


                    </div>


                </div>






                <Link

                    href={
                        `/announcements/${announcement._id}`
                    }


                    className="
                    mt-6
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-700
                    "

                >

                    View Details

                    <ArrowRight size={18}/>


                </Link>



            </div>



        </motion.div>

    );

}