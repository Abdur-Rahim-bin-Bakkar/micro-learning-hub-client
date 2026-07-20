import { checkRole } from "@/lib/checkAuth/checkRole";
import { getTeacherOverview } from "@/lib/api/dashboard/overview";
import TeacherOverviewClient from "./TeacherOverviewClient";

const TeacherDashboard = async () => {
  await checkRole("teacher");
  let data;
  try {
    data = await getTeacherOverview();
  } catch {
    data = null;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Teacher Overview</h1>
        <p className="mt-1 text-slate-400">Track your exams and student performance.</p>
      </div>
      <TeacherOverviewClient data={data} />
    </div>
  );
};

export default TeacherDashboard;
