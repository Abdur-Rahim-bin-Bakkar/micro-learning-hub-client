import HeroBanner from "@/components/home/HeroBanner";
import PopularTeachers from "@/components/home/PopularTeachers";
import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="">
      <main>
        <HeroBanner />
        <PopularTeachers />
      </main>
    </div>
  );
}
