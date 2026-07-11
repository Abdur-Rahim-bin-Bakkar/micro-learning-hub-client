import HeroBanner from "@/components/home/HeroBanner";
import PopularTeachers from "@/components/home/PopularTeachers";
import { Button } from "@heroui/react";
import TopStudents from "./TopStudents";
import LearningCategories from "./LearningCategories";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import HowItWorks from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <div className="">
      <main>
        <HeroBanner />
        <LearningCategories />
        <FeaturedCourses/>
        <HowItWorks/>
        <PopularTeachers />
        <TopStudents />
      </main>
    </div>
  );
}
