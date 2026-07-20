"use client";

import {
  FileText,
  Award,
  TrendingUp,
  TrendingDown,
  BarChart3,
} from "lucide-react";
import StatCard from "../components/StatCard";
import DashboardChart from "../components/DashboardChart";

type ResultDetail = {
  examId: string;
  examTitle: string;
  courseName?: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  submittedAt: string;
};

type StudentData = {
  totalExamsTaken: number;
  averageScore: number;
  highestScore: number;
  lowestScore: number;
  coursesEnrolled: number;
  scoresByDate: Record<string, number>;
  recentResults: ResultDetail[];
};

export default function StudentOverviewClient({
  data,
}: {
  data: StudentData | null;
}) {
  if (!data) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-12 text-center">
        <p className="text-slate-400">Failed to load overview data.</p>
      </div>
    );
  }

  const chartData = Object.entries(data.scoresByDate || {}).map(
    ([date, score]) => ({
      name: date.slice(5),
      value: score,
    })
  );

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Exams Taken"
          value={data.totalExamsTaken}
          icon={FileText}
          color="cyan"
        />
        <StatCard
          title="Average Score"
          value={`${data.averageScore}%`}
          icon={Award}
          color="purple"
        />
        <StatCard
          title="Highest Score"
          value={`${data.highestScore}%`}
          icon={TrendingUp}
          color="green"
        />
        <StatCard
          title="Lowest Score"
          value={`${data.lowestScore}%`}
          icon={TrendingDown}
          color="orange"
        />
      </div>

      {/* Score Trend Chart */}
      {chartData.length > 0 ? (
        <DashboardChart
          data={chartData}
          title="Score Trend"
          type="line"
          color="#06b6d4"
        />
      ) : (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">Score Trend</h3>
          <p className="text-slate-400">No exam results yet. Take an exam to see your progress!</p>
        </div>
      )}

      {/* Recent Results */}
      {data.recentResults && data.recentResults.length > 0 && (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">Recent Results</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="pb-3 font-medium">Exam</th>
                  <th className="pb-3 font-medium">Course</th>
                  <th className="pb-3 font-medium">Score</th>
                  <th className="pb-3 font-medium">Correct</th>
                  <th className="pb-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {data.recentResults.map((r, i) => (
                  <tr key={i} className="border-b border-slate-800/50 text-white">
                    <td className="py-3">{r.examTitle}</td>
                    <td className="py-3 text-slate-400">{r.courseName || "-"}</td>
                    <td className="py-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          r.score >= 70
                            ? "bg-green-500/20 text-green-400"
                            : r.score >= 40
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {r.score}%
                      </span>
                    </td>
                    <td className="py-3 text-slate-400">
                      {r.correctAnswers}/{r.totalQuestions}
                    </td>
                    <td className="py-3 text-slate-400">
                      {r.submittedAt
                        ? new Date(r.submittedAt).toLocaleDateString()
                        : "-"}
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
