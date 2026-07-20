"use client";

import { useState, useEffect } from "react";
import { getUserToken } from "@/lib/sessions/token";
import {
  Users,
  Search,
  Trash2,
  Eye,
  X,
  Loader2,
  FileText,
  Award,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import ConfirmModal from "../../../components/ConfirmModal";

type User = {
  _id: string;
  name?: string;
  email?: string;
  role?: string;
  image?: string;
  createdAt?: string;
};

type UserDetails = {
  user: User;
  exams?: any[];
  results?: any[];
};

export default function UsersManagementClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; id: string; name: string }>({
    open: false, id: "", name: "",
  });
  const [details, setDetails] = useState<UserDetails | null>(null);
  const [detailsLoading, setDetailsLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      const token = await getUserToken();
      const params = new URLSearchParams();
      if (search) params.set("search", search);
      if (roleFilter !== "all") params.set("role", roleFilter);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/admin/all?${params.toString()}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const data = await res.json();
      setUsers(data.data || []);
    } catch {
      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [roleFilter]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchUsers();
  };

  const handleDeleteUser = async () => {
    const { id } = deleteModal;
    try {
      const token = await getUserToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/admin/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message);
      toast.success("User deleted successfully");
      setDeleteModal({ ...deleteModal, open: false });
      setDetails(null);
      fetchUsers();
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const handleViewDetails = async (userId: string) => {
    setDetailsLoading(true);
    try {
      const token = await getUserToken();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/admin/${userId}/details`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const data = await res.json();
      setDetails(data.data || null);
    } catch {
      toast.error("Failed to fetch user details");
    } finally {
      setDetailsLoading(false);
    }
  };

  const roleColor = (role?: string) => {
    switch (role) {
      case "admin": return "bg-purple-500/20 text-purple-400 border-purple-700";
      case "teacher": return "bg-blue-500/20 text-blue-400 border-blue-700";
      case "student": return "bg-green-500/20 text-green-400 border-green-700";
      default: return "bg-slate-500/20 text-slate-400 border-slate-700";
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
        <h1 className="text-3xl font-bold text-white">User Management</h1>
        <p className="mt-1 text-slate-400">View, search, filter, and manage all users.</p>
      </div>

      <ConfirmModal
        open={deleteModal.open}
        title="Delete User"
        message={`Are you sure you want to delete "${deleteModal.name}"? This will permanently remove the user and all associated data (exams, results, sessions).`}
        confirmLabel="Delete User"
        variant="danger"
        onConfirm={handleDeleteUser}
        onCancel={() => setDeleteModal({ ...deleteModal, open: false })}
      />

      {/* Search & Filter Bar */}
      <form onSubmit={handleSearch} className="flex flex-wrap items-center gap-4">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800/50 py-3 pl-10 pr-4 text-white placeholder-slate-500 outline-none focus:border-cyan-500"
          />
        </div>
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white outline-none focus:border-cyan-500"
        >
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
          <option value="user">User</option>
        </select>
        <button
          type="submit"
          className="cursor-pointer rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:opacity-90"
        >
          Search
        </button>
      </form>

      {users.length === 0 ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-12 text-center">
          <Users className="mx-auto h-12 w-12 text-slate-600" />
          <p className="mt-4 text-slate-400">No users found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {users.map((u) => (
            <div
              key={u._id}
              className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition hover:border-slate-700"
            >
              <div className="flex items-center gap-4">
                {u.image ? (
                  <Image src={u.image} alt="" width={40} height={40} className="h-10 w-10 rounded-full border border-slate-700 object-cover" unoptimized />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-bold text-slate-400">
                    {u.name?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                )}
                <div>
                  <h3 className="text-base font-semibold text-white">{u.name || "Unknown"}</h3>
                  <p className="text-xs text-slate-500">{u.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className={`rounded-full border px-3 py-0.5 text-xs font-medium ${roleColor(u.role)}`}>
                  {u.role}
                </span>
                <button
                  onClick={() => handleViewDetails(u._id)}
                  className="cursor-pointer rounded-lg border border-slate-700 p-2 text-slate-400 transition hover:border-cyan-500 hover:text-cyan-500"
                >
                  <Eye size={16} />
                </button>
                <button
                  onClick={() => setDeleteModal({ open: true, id: u._id, name: u.name || u.email || "this user" })}
                  className="cursor-pointer rounded-lg border border-slate-700 p-2 text-slate-400 transition hover:border-red-500 hover:text-red-500"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* User Details Modal */}
      {details && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setDetails(null)} />
          <div className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
            <button
              onClick={() => setDetails(null)}
              className="cursor-pointer absolute right-4 top-4 rounded-lg border border-slate-700 p-1.5 text-slate-400 transition hover:border-slate-500 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
              {details.user.image ? (
                <Image src={details.user.image} alt="" width={56} height={56} className="h-14 w-14 rounded-full border border-slate-700 object-cover" unoptimized />
              ) : (
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 text-lg font-bold text-slate-400">
                  {details.user.name?.charAt(0)?.toUpperCase() || "U"}
                </div>
              )}
              <div>
                <h2 className="text-xl font-bold text-white">{details.user.name || "Unknown"}</h2>
                <p className="text-sm text-slate-400">{details.user.email}</p>
                <span className={`mt-1 inline-block rounded-full border px-3 py-0.5 text-xs font-medium ${roleColor(details.user.role)}`}>
                  {details.user.role}
                </span>
              </div>
            </div>

            {/* Teacher: Show exams */}
            {details.user.role === "teacher" && details.exams && (
              <div className="mt-6">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
                  <BookOpen size={18} className="text-blue-400" />
                  Exams Created ({details.exams.length})
                </h3>
                {details.exams.length === 0 ? (
                  <p className="text-sm text-slate-500">No exams created.</p>
                ) : (
                  <div className="space-y-2">
                    {details.exams.map((exam: any) => (
                      <div key={exam._id} className="rounded-xl border border-slate-800 bg-slate-800/30 p-4">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-white">{exam.title}</p>
                          <span className={`rounded-full px-2 py-0.5 text-xs ${
                            exam.status === "published"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}>
                            {exam.status}
                          </span>
                        </div>
                        <div className="mt-2 flex gap-4 text-xs text-slate-500">
                          <span>{exam.courseName || "No course"}</span>
                          <span>{exam.duration || 0} min</span>
                          <span>{exam.totalQuestions || 0} questions</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Student: Show results */}
            {details.user.role === "student" && details.results && (
              <div className="mt-6">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
                  <Award size={18} className="text-green-400" />
                  Exam Results ({details.results.length})
                </h3>
                {details.results.length === 0 ? (
                  <p className="text-sm text-slate-500">No exams taken yet.</p>
                ) : (
                  <div className="space-y-2">
                    {details.results.map((r: any, i: number) => (
                      <div key={i} className="rounded-xl border border-slate-800 bg-slate-800/30 p-4">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-white">{r.examTitle}</p>
                          <span className={`rounded-full px-2 py-0.5 text-xs ${
                            r.score >= 70
                              ? "bg-green-500/20 text-green-400"
                              : r.score >= 40
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-red-500/20 text-red-400"
                          }`}>
                            {r.score}%
                          </span>
                        </div>
                        <div className="mt-2 flex gap-4 text-xs text-slate-500">
                          <span>Correct: {r.correctAnswers}/{r.totalQuestions}</span>
                          <span>Wrong: {r.wrongAnswers}</span>
                          <span>{r.submittedAt ? new Date(r.submittedAt).toLocaleDateString() : ""}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Admin / User: No extra data */}
            {(details.user.role === "admin" || details.user.role === "user") && (
              <div className="mt-6">
                <p className="text-sm text-slate-500">No additional data available for this role.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {detailsLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <Loader2 className="h-8 w-8 animate-spin text-cyan-500" />
        </div>
      )}
    </div>
  );
}
