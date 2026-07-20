import { checkRole } from "@/lib/checkAuth/checkRole";
import TeacherApplicationsClient from "./TeacherApplicationsClient";

const TeacherApplicationsPage = async () => {
  await checkRole("admin");
  return <TeacherApplicationsClient />;
};

export default TeacherApplicationsPage;
