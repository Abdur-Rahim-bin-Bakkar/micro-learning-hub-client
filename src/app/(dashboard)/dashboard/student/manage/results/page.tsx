import { checkRole } from "@/lib/checkAuth/checkRole";
import StudentResultsClient from "./StudentResultsClient";

const StudentResultsPage = async () => {
  await checkRole("student");
  return <StudentResultsClient />;
};

export default StudentResultsPage;
