import getUsersByRole from "@/lib/api/user/getUsersByRole";
import PopularTeachersClient from "./PopularTeachersClient";

// টিচার ডেটার জন্য টাইপ ডিফাইন করা হলো
export type TeacherType = {
  _id: string;
  name: string;
  role: string;
  image?: string;
  description: string;
  courses: number;
  students: string;
  rating: number;
};

const PopularTeachers = async () => {
  const teachers = await getUsersByRole("teacher");

  const teacherData: TeacherType[] = teachers.map((teacher: any, index: number) => ({
    ...teacher,
    description: "Expert instructor helping students learn modern technology and practical skills through interactive courses.",
    courses: index === 0 ? 25 : index === 1 ? 18 : 30,
    students: index === 0 ? "5.2K" : index === 1 ? "4.8K" : "8K",
    rating: index === 0 ? 4.9 : index === 1 ? 4.8 : 5,
  }));

  return <PopularTeachersClient teachers={teacherData} />;
};

export default PopularTeachers;