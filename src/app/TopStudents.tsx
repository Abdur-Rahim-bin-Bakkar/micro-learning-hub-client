import getUsersByRole from "@/lib/api/user/getUsersByRole";
import TopStudentsClient from "./TopStudentsClient";

// স্টুডেন্ট ডেটার জন্য ইন্টারফেস ডিফাইন করা হলো
export type StudentType = {
  _id: string;
  name: string;
  role: string;
  image?: string;
  description: string;
  courses: number;
  completed: string;
  points: string;
};

const TopStudents = async () => {
  const students = await getUsersByRole("student");

  // সার্ভার সাইড ম্যাপিংয়ে টাইপ ডিফাইন করা হলো
  const studentData: StudentType[] = students.map((student: any, index: number) => ({
    ...student,
    description: "Dedicated learner who actively participates in courses and improves skills through continuous practice.",
    courses: index === 0 ? 32 : index === 1 ? 27 : 40,
    completed: index === 0 ? "98%" : index === 1 ? "95%" : "93%",
    points: index === 0 ? "9,850" : index === 1 ? "8,900" : "8,200",
  }));

  return <TopStudentsClient students={studentData} />;
};

export default TopStudents;