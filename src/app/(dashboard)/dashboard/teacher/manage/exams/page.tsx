import { checkRole } from "@/lib/checkAuth/checkRole";
import TeacherExamManagementClient from "./TeacherExamManagementClient";

const TeacherExamManagementPage = async () => {
  await checkRole("teacher");
  return <TeacherExamManagementClient />;
};

export default TeacherExamManagementPage;
