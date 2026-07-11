"use client";

import { motion } from "framer-motion";
import { GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";


export default function AboutHero(){

return (

<section className="bg-[#0B0F14] py-24 text-white">


<div className="container mx-auto px-6">


<div className="grid items-center gap-12 lg:grid-cols-2">


<motion.div

initial={{
opacity:0,
x:-50
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:.6
}}

>


<div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-blue-400">

<GraduationCap size={20}/>

Smart Learning Platform

</div>



<h1 className="text-5xl font-bold leading-tight">

Empowering People Through

<span className="block text-blue-500">

Micro Learning

</span>

</h1>



<p className="mt-6 text-lg text-gray-400">

Micro Learning Hub helps students, teachers and
organizations learn and share knowledge through
short, practical and effective lessons.

</p>





<Link

href="/courses"

className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"

>

Explore Courses

<ArrowRight size={18}/>

</Link>


</motion.div>









<motion.div

initial={{
opacity:0,
scale:.8
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:.6
}}

className="rounded-3xl border border-white/10 bg-white/5 p-10"

>


<div className="flex h-80 items-center justify-center rounded-3xl bg-blue-500/10">


<GraduationCap

size={100}

className="text-blue-400"

/>


</div>


</motion.div>




</div>


</div>


</section>

);

}