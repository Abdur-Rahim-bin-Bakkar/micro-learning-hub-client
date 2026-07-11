"use client";

import { motion } from "framer-motion";
import {
BookOpen,
Users,
Rocket,
ShieldCheck
} from "lucide-react";


const values=[

{
title:"Quality Learning",
icon:BookOpen,
text:"Practical and structured learning content."
},

{
title:"Community",
icon:Users,
text:"Connect learners and teachers together."
},

{
title:"Innovation",
icon:Rocket,
text:"Modern technology based education."
},

{
title:"Trust",
icon:ShieldCheck,
text:"Safe and reliable learning environment."
}

];



export default function OurValues(){


return (

<section className="bg-[#0B0F14] py-20 text-white">


<div className="container mx-auto px-6">


<h2 className="mb-12 text-center text-4xl font-bold">

Our Values

</h2>



<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


{
values.map((item,index)=>{


const Icon=item.icon;


return (

<motion.div

key={index}

whileHover={{
y:-8
}}

className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"

>


<Icon

className="mx-auto mb-4 text-blue-400"

/>


<h3 className="font-bold">

{item.title}

</h3>


<p className="mt-2 text-sm text-gray-400">

{item.text}

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