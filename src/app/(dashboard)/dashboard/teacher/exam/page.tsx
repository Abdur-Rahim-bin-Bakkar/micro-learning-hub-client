import { checkRole } from "@/lib/checkAuth/checkRole";
import { getUserSessionServer } from "@/lib/sessions/sesionServer";
import { redirect } from "next/navigation";

const TeacherExamPage = async () => {
  await checkRole("teacher");
  redirect("/dashboard/teacher/manage/exams");
  return null;
};

export default TeacherExamPage;