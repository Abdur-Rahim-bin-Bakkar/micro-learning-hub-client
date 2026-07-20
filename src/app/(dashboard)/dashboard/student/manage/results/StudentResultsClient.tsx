"use client";

import { useState, useEffect } from "react";
import { getUserToken } from "@/lib/sessions/token";
import { FileText, Loader2, Trash2 } from "lucide-react";
import { toast } from "sonner";

type Result = {
  _id: string;
  examId: string;
  examTitle?: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  submittedAt: string;
};

export default function StudentResultsClient() {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchResults = async () => {
    try {
      const token = await getUserToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/exams/student/my-results`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setResults(data.data || []);
    } catch {
      toast.error("Failed to fetch results");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const handleDelete = async (examId: string) => {
    if (!confirm("Delete this result?")) return;
    try {
      const token = await getUserToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/profile`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Account deleted");
    } catch {
      toast.error("Failed to delete");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-cyan-500" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">My Results</h1>
        <p className="mt-1 text-slate-400">View all your exam results and performance.</p>
      </div>

      {results.length === 0 ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-12 text-center">
          <FileText className="mx-auto h-12 w-12 text-slate-600" />
          <p className="mt-4 text-slate-400">No exam results yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/50">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="p-4 font-medium">Exam</th>
                <th className="p-4 font-medium">Score</th>
                <th className="p-4 font-medium">Correct</th>
                <th className="p-4 font-medium">Wrong</th>
                <th className="p-4 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r) => (
                <tr key={r._id} className="border-b border-slate-800/50 text-white hover:bg-slate-800/30">
                  <td className="p-4 font-medium">{r.examTitle || "Unknown"}</td>
                  <td className="p-4">
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
                  <td className="p-4 text-green-400">
                    {r.correctAnswers}/{r.totalQuestions}
                  </td>
                  <td className="p-4 text-red-400">{r.wrongAnswers}</td>
                  <td className="p-4 text-slate-400">
                    {r.submittedAt ? new Date(r.submittedAt).toLocaleDateString() : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
