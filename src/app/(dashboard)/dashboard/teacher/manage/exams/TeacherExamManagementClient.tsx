"use client";

import { useState, useEffect } from "react";
import { getUserToken } from "@/lib/sessions/token";
import {
  FileText,
  Edit,
  Trash2,
  Eye,
  Loader2,
  CheckCircle,
  Clock,
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import ConfirmModal from "../../../components/ConfirmModal";

type Exam = {
  _id: string;
  title: string;
  courseName?: string;
  duration?: number;
  totalQuestions?: number;
  status: string;
  level?: string;
  createdAt: string;
};

export default function TeacherExamManagementClient() {
  const [exams, setExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; id: string }>({
    open: false, id: "",
  });

  const fetchExams = async () => {
    try {
      const token = await getUserToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/exams/teacher/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setExams(data.data || []);
    } catch {
      toast.error("Failed to fetch exams");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

  const handleDeleteConfirm = async () => {
    const id = deleteModal.id;
    try {
      const token = await getUserToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/exams/teacher/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message);
      toast.success("Exam deleted");
      setDeleteModal({ open: false, id: "" });
      fetchExams();
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const toggleStatus = async (exam: Exam) => {
    const newStatus = exam.status === "published" ? "draft" : "published";
    try {
      const token = await getUserToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/exams/teacher/${exam._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message);
      toast.success(`Exam ${newStatus === "published" ? "published" : "moved to draft"}`);
      fetchExams();
    } catch (e: any) {
      toast.error(e.message);
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
      <ConfirmModal
        open={deleteModal.open}
        title="Delete Exam"
        message="Are you sure you want to delete this exam and all its questions? This cannot be undone."
        confirmLabel="Delete Exam"
        variant="danger"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteModal({ open: false, id: "" })}
      />
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Manage Exams</h1>
          <p className="mt-1 text-slate-400">View, edit, delete, and manage your exams.</p>
        </div>
        <Link
          href="/dashboard/teacher/exam/create"
          className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:opacity-90"
        >
          + Create Exam
        </Link>
      </div>

      {exams.length === 0 ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-12 text-center">
          <FileText className="mx-auto h-12 w-12 text-slate-600" />
          <p className="mt-4 text-slate-400">No exams created yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/50">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="p-4 font-medium">Title</th>
                <th className="p-4 font-medium">Course</th>
                <th className="p-4 font-medium">Duration</th>
                <th className="p-4 font-medium">Questions</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {exams.map((exam) => (
                <tr key={exam._id} className="border-b border-slate-800/50 text-white hover:bg-slate-800/30">
                  <td className="p-4 font-medium">{exam.title}</td>
                  <td className="p-4 text-slate-400">{exam.courseName || "-"}</td>
                  <td className="p-4 text-slate-400">{exam.duration || "-"} min</td>
                  <td className="p-4 text-slate-400">{exam.totalQuestions || 0}</td>
                  <td className="p-4">
                    <button
                      onClick={() => toggleStatus(exam)}
                      className={`cursor-pointer flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition ${
                        exam.status === "published"
                          ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30"
                      }`}
                    >
                      {exam.status === "published" ? (
                        <CheckCircle size={12} />
                      ) : (
                        <Clock size={12} />
                      )}
                      {exam.status}
                    </button>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/dashboard/teacher/exam/${exam._id}`}
                        className="rounded-lg border border-slate-700 p-2 text-slate-400 transition hover:border-cyan-500 hover:text-cyan-500"
                      >
                        <Eye size={16} />
                      </Link>
                      <button
                        onClick={() => setDeleteModal({ open: true, id: exam._id })}
                        className="cursor-pointer rounded-lg border border-slate-700 p-2 text-slate-400 transition hover:border-red-500 hover:text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
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
