"use client";

import {
  Users,
  UserCheck,
  GraduationCap,
  BookOpen,
  FileText,
  Megaphone,
  ClipboardList,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import StatCard from "../components/StatCard";
import DashboardChart from "../components/DashboardChart";

type OverviewData = {
  totalUsers: number;
  totalStudents: number;
  totalTeachers: number;
  totalAdmins: number;
  totalCourses: number;
  totalExams: number;
  totalAnnouncements: number;
  totalTeacherApplications: number;
  totalStudentApplications: number;
  totalHelpPosts: number;
  totalExamResults: number;
  registrationsByDate: Record<string, number>;
};

export default function AdminOverviewClient({
  data,
}: {
  data: OverviewData | null;
}) {
  if (!data) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-12 text-center">
        <p className="text-slate-400">Failed to load overview data.</p>
      </div>
    );
  }

  const chartData = Object.entries(data.registrationsByDate || {}).map(
    ([date, count]) => ({
      name: date.slice(5),
      value: count,
    })
  );

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <StatCard title="Total Users" value={data.totalUsers} icon={Users} color="cyan" />
        <StatCard title="Students" value={data.totalStudents} icon={GraduationCap} color="blue" />
        <StatCard title="Teachers" value={data.totalTeachers} icon={UserCheck} color="purple" />
        <StatCard title="Courses" value={data.totalCourses} icon={BookOpen} color="green" />
        <StatCard title="Exams" value={data.totalExams} icon={FileText} color="orange" />
        <StatCard title="Announcements" value={data.totalAnnouncements} icon={Megaphone} color="yellow" />
        <StatCard title="Teacher Applications" value={data.totalTeacherApplications} icon={ClipboardList} color="purple" />
        <StatCard title="Student Applications" value={data.totalStudentApplications} icon={ClipboardList} color="cyan" />
        <StatCard title="Help Posts" value={data.totalHelpPosts} icon={MessageSquare} color="blue" />
        <StatCard title="Exam Submissions" value={data.totalExamResults} icon={BarChart3} color="green" />
      </div>

      {/* Chart */}
      {chartData.length > 0 && (
        <DashboardChart
          data={chartData}
          title="User Registrations (Last 7 Days)"
          type="bar"
          color="#06b6d4"
        />
      )}

      {chartData.length === 0 && (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">User Registrations</h3>
          <p className="text-slate-400">No registrations in the last 7 days.</p>
        </div>
      )}
    </div>
  );
}
