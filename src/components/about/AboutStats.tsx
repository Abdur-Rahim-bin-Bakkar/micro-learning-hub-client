import {
Users,
BookOpen,
GraduationCap,
Building2
} from "lucide-react";


const stats=[

{
title:"10K+",
text:"Students",
icon:Users
},

{
title:"500+",
text:"Courses",
icon:BookOpen
},

{
title:"200+",
text:"Teachers",
icon:GraduationCap
},

{
title:"50+",
text:"Schools",
icon:Building2
}

];



export default function AboutStats(){


return (

<section className="bg-[#0B0F14] py-20 text-white">


<div className="container mx-auto grid grid-cols-2 gap-6 px-6 lg:grid-cols-4">


{
stats.map((item,index)=>{


const Icon=item.icon;


return (

<div

key={index}

className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"


>


<Icon

className="mx-auto mb-3 text-blue-400"

/>


<h3 className="text-3xl font-bold">

{item.title}

</h3>


<p className="text-gray-400">

{item.text}

</p>


</div>

)

})

}


</div>


</section>

);

}