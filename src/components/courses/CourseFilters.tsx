"use client";

import { Search } from "lucide-react";


export default function CourseFilters(){


return (

<section className="bg-[#0B0F14] pb-10">


<div className="container mx-auto flex flex-col gap-5 px-6 md:flex-row">



<div className="relative flex-1">


<Search

className="absolute left-3 top-3 text-gray-400"

/>


<input

placeholder="Search courses..."

className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 text-white outline-none focus:border-blue-500"

/>


</div>





<select

className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white"

>


<option className="bg-[#0B0F14]">
All Categories
</option>


<option className="bg-[#0B0F14]">
Programming
</option>


<option className="bg-[#0B0F14]">
Design
</option>


<option className="bg-[#0B0F14]">
AI
</option>


</select>





<select

className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white"

>


<option className="bg-[#0B0F14]">
All Levels
</option>


<option className="bg-[#0B0F14]">
Beginner
</option>


<option className="bg-[#0B0F14]">
Intermediate
</option>


<option className="bg-[#0B0F14]">
Advanced
</option>


</select>



</div>


</section>

);

}