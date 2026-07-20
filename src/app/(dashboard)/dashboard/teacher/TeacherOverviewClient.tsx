"use client";

import {
  FileText,
  CheckCircle,
  Clock,
  HelpCircle,
  Users,
  BarChart3,
  Award,
} from "lucide-react";
import StatCard from "../components/StatCard";
import DashboardChart from "../components/DashboardChart";

type ExamStat = {
  examId: string;
  examTitle: string;
  submissions: number;
  averageScore: number;
};

type TeacherData = {
  totalExams: number;
  publishedExams: number;
  draftExams: number;
  totalQuestions: number;
  totalStudents: number;
  totalSubmissions: number;
  averageScore: number;
  submissionsByDate: Record<string, number>;
  examStats: ExamStat[];
};

export default function TeacherOverviewClient({
  data,
}: {
  data: TeacherData | null;
}) {
  if (!data) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-12 text-center">
        <p className="text-slate-400">Failed to load overview data.</p>
      </div>
    );
  }

  const chartData = Object.entries(data.submissionsByDate || {}).map(
    ([date, count]) => ({
      name: date.slice(5),
      value: count,
    })
  );

  const examChartData = (data.examStats || []).map((e) => ({
    name: e.examTitle.length > 15 ? e.examTitle.slice(0, 15) + "..." : e.examTitle,
    value: e.submissions,
  }));

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Exams" value={data.totalExams} icon={FileText} color="cyan" />
        <StatCard title="Published" value={data.publishedExams} icon={CheckCircle} color="green" />
        <StatCard title="Drafts" value={data.draftExams} icon={Clock} color="orange" />
        <StatCard title="Total Questions" value={data.totalQuestions} icon={HelpCircle} color="purple" />
        <StatCard title="Students" value={data.totalStudents} icon={Users} color="blue" />
        <StatCard title="Submissions" value={data.totalSubmissions} icon={BarChart3} color="yellow" />
        <StatCard title="Avg Score" value={`${data.averageScore}%`} icon={Award} color="green" />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {chartData.length > 0 ? (
          <DashboardChart
            data={chartData}
            title="Submissions (Last 7 Days)"
            type="line"
            color="#06b6d4"
          />
        ) : (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Submissions (Last 7 Days)</h3>
            <p className="text-slate-400">No submissions in the last 7 days.</p>
          </div>
        )}

        {examChartData.length > 0 ? (
          <DashboardChart
            data={examChartData}
            title="Submissions per Exam"
            type="bar"
            color="#8b5cf6"
          />
        ) : (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Submissions per Exam</h3>
            <p className="text-slate-400">No exam submissions yet.</p>
          </div>
        )}
      </div>

      {/* Exam Stats Table */}
      {data.examStats && data.examStats.length > 0 && (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">Exam Performance</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="pb-3 font-medium">Exam Title</th>
                  <th className="pb-3 font-medium">Submissions</th>
                  <th className="pb-3 font-medium">Avg Score</th>
                </tr>
              </thead>
              <tbody>
                {data.examStats.map((exam) => (
                  <tr key={exam.examId} className="border-b border-slate-800/50 text-white">
                    <td className="py-3">{exam.examTitle}</td>
                    <td className="py-3 text-slate-400">{exam.submissions}</td>
                    <td className="py-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          exam.averageScore >= 70
                            ? "bg-green-500/20 text-green-400"
                            : exam.averageScore >= 40
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {exam.averageScore}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
