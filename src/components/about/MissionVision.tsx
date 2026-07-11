"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";


type Item = {
title:string;
description:string;
icon:React.ElementType;
};



const data:Item[]=[

{
title:"Our Mission",
description:
"Make quality education accessible through simple, affordable and practical micro lessons.",
icon:Target
},

{
title:"Our Vision",
description:
"Create a global learning ecosystem where everyone can learn and grow.",
icon:Eye
}

];



export default function MissionVision(){


return (

<section className="bg-[#0B0F14] py-20 text-white">


<div className="container mx-auto grid gap-8 px-6 md:grid-cols-2">


{
data.map((item,index)=>{


const Icon=item.icon;


return (

<motion.div

key={index}

whileHover={{
y:-8
}}

className="rounded-3xl border border-white/10 bg-white/5 p-8"


>


<div className="mb-5 text-blue-400">

<Icon size={40}/>

</div>


<h2 className="text-3xl font-bold">

{item.title}

</h2>


<p className="mt-4 text-gray-400">

{item.description}

</p>


</motion.div>

)

})

}


</div>


</section>

);

}