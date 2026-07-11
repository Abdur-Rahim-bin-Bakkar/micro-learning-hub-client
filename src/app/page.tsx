import HeroBanner from "@/components/home/HeroBanner";
import PopularTeachers from "@/components/home/PopularTeachers";
import { Button } from "@heroui/react";
import TopStudents from "./TopStudents";

export default function Home() {
  return (
    <div className="">
      <main>
        <HeroBanner />
        <PopularTeachers />
        <TopStudents />
      </main>
    </div>
  );
}
