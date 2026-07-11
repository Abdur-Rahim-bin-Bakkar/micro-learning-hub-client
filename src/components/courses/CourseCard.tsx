"use client";

import { motion } from "framer-motion";
import {
Clock,
Star,
Users
} from "lucide-react";


type Course = {

id:number;
title:string;
category:string;
instructor:string;
image:string;
level:string;
duration:string;
students:string;
rating:number;
price:number;

};



const courses:Course[]=[


{
id:1,
title:"Complete React & Next.js",
category:"Programming",
instructor:"Rahim Ahmed",
image:"https://images.unsplash.com/photo-1633356122544-f134324a6cee",
level:"Intermediate",
duration:"12 Hours",
students:"2.5K",
rating:4.9,
price:49
},


{
id:2,
title:"UI/UX Design Mastery",
category:"Design",
instructor:"Sarah",
image:"https://images.unsplash.com/photo-1561070791-2526d30994b5",
level:"Beginner",
duration:"8 Hours",
students:"1.8K",
rating:4.8,
price:35
},


{
id:3,
title:"Artificial Intelligence Basics",
category:"AI",
instructor:"Michael",
image:"https://images.unsplash.com/photo-1677442136019-21780ecad995",
level:"Advanced",
duration:"15 Hours",
students:"3K",
rating:5,
price:59
}


];





export default function CourseCard(){


return (

<section className="pb-20">


<div className="container mx-auto grid gap-7 px-6 md:grid-cols-2 lg:grid-cols-3">


{
courses.map((course,index)=>(


<motion.div

key={course.id}

whileHover={{
y:-8
}}

className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"

>


<img

src={course.image}

alt={course.title}

className="h-52 w-full object-cover"

/>


<div className="p-6">


<p className="text-blue-400">

{course.category}

</p>


<h2 className="mt-2 text-xl font-bold">

{course.title}

</h2>


<p className="mt-2 text-gray-400">

By {course.instructor}

</p>




<div className="mt-5 space-y-3 text-sm text-gray-300">


<div className="flex gap-2">

<Clock size={18}/>

{course.duration}

</div>


<div className="flex gap-2">

<Users size={18}/>

{course.students}

</div>



<div className="flex gap-2 text-yellow-400">

<Star size={18}/>

{course.rating}

</div>



</div>




<div className="mt-5 flex justify-between">


<span className="text-xl font-bold">

${course.price}

</span>


<button className="rounded-xl bg-blue-600 px-5 py-2">

Enroll

</button>


</div>



</div>


</motion.div>


))

}



</div>


</section>

);

}