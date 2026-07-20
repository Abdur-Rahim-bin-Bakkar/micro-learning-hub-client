import { checkRole } from "@/lib/checkAuth/checkRole";
import { getStudentOverview } from "@/lib/api/dashboard/overview";
import StudentOverviewClient from "./StudentOverviewClient";

const StudentDashboard = async () => {
  await checkRole("student");
  let data;
  try {
    data = await getStudentOverview();
  } catch {
    data = null;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Student Overview</h1>
        <p className="mt-1 text-slate-400">Track your learning progress and exam results.</p>
      </div>
      <StudentOverviewClient data={data} />
    </div>
  );
};

export default StudentDashboard;
