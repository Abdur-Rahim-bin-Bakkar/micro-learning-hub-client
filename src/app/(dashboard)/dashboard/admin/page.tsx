import { checkRole } from "@/lib/checkAuth/checkRole";
import { getAdminOverview } from "@/lib/api/dashboard/overview";
import AdminOverviewClient from "./AdminOverviewClient";

const AdminDashboard = async () => {
  await checkRole("admin");
  let data;
  try {
    data = await getAdminOverview();
  } catch {
    data = null;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Admin Overview</h1>
        <p className="mt-1 text-slate-400">Monitor your platform at a glance.</p>
      </div>
      <AdminOverviewClient data={data} />
    </div>
  );
};

export default AdminDashboard;
