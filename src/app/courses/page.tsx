import CourseHero from "@/components/courses/CourseHero";
import CourseFilters from "@/components/courses/CourseFilters";
import CourseCard from "@/components/courses/CourseCard";


export default function CoursesPage(){

return (

<main className="bg-[#0B0F14] text-white">

<CourseHero/>

<CourseFilters/>

<CourseCard/>

</main>

);

}