"use client";

import { useState, useEffect } from "react";
import { getUserToken } from "@/lib/sessions/token";
import { ClipboardList, CheckCircle, XCircle, Trash2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import ConfirmModal from "../../../components/ConfirmModal";

type Application = {
  _id: string;
  userId: string;
  name?: string;
  email?: string;
  subject?: string;
  experience?: string;
  qualification?: string;
  image?: string;
  status?: string;
  createdAt?: string;
};

export default function TeacherApplicationsClient() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<{
    open: boolean;
    type: "approve" | "reject" | "delete";
    id: string;
    name: string;
  }>({ open: false, type: "delete", id: "", name: "" });

  const fetchApplications = async () => {
    try {
      const token = await getUserToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/applications/teacher/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setApplications(data.data || []);
    } catch {
      toast.error("Failed to fetch applications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleAction = async () => {
    const { type, id } = modal;
    try {
      const token = await getUserToken();
      let endpoint = "";
      let successMsg = "";

      if (type === "approve") {
        endpoint = `${process.env.NEXT_PUBLIC_API_URL}/api/applications/teacher/${id}/approve`;
        successMsg = "Application approved. User is now a teacher.";
      } else if (type === "reject") {
        endpoint = `${process.env.NEXT_PUBLIC_API_URL}/api/applications/teacher/${id}/reject`;
        successMsg = "Application rejected.";
      } else {
        endpoint = `${process.env.NEXT_PUBLIC_API_URL}/api/applications/teacher/${id}`;
        successMsg = "Application deleted.";
      }

      const res = await fetch(endpoint, {
        method: type === "delete" ? "DELETE" : "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message);
      toast.success(successMsg);
      setModal({ ...modal, open: false });
      fetchApplications();
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const openModal = (type: "approve" | "reject" | "delete", app: Application) => {
    setModal({ open: true, type, id: app._id, name: app.name || app.email || "this application" });
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
        <h1 className="text-3xl font-bold text-white">Teacher Applications</h1>
        <p className="mt-1 text-slate-400">Review, approve, reject, or delete teacher applications.</p>
      </div>

      <ConfirmModal
        open={modal.open}
        title={
          modal.type === "approve"
            ? "Approve Application"
            : modal.type === "reject"
            ? "Reject Application"
            : "Delete Application"
        }
        message={
          modal.type === "approve"
            ? `Are you sure you want to approve "${modal.name}"? Their role will become teacher.`
            : modal.type === "reject"
            ? `Are you sure you want to reject "${modal.name}"? Their role will become user.`
            : `Are you sure you want to delete the application from "${modal.name}"? This cannot be undone.`
        }
        confirmLabel={
          modal.type === "approve" ? "Approve" : modal.type === "reject" ? "Reject" : "Delete"
        }
        variant={modal.type === "approve" ? "warning" : "danger"}
        onConfirm={handleAction}
        onCancel={() => setModal({ ...modal, open: false })}
      />

      {applications.length === 0 ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-12 text-center">
          <ClipboardList className="mx-auto h-12 w-12 text-slate-600" />
          <p className="mt-4 text-slate-400">No teacher applications yet.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {applications.map((app) => (
            <div
              key={app._id}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-700"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  {app.image && (
                    <img
                      src={app.image}
                      alt=""
                      className="h-12 w-12 rounded-full border border-slate-700 object-cover"
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-white">{app.name || "Unknown"}</h3>
                    <p className="text-sm text-slate-400">{app.email}</p>
                  </div>
                </div>
                {app.status && (
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      app.status === "approved"
                        ? "bg-green-500/20 text-green-400"
                        : app.status === "rejected"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {app.status}
                  </span>
                )}
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {app.subject && (
                  <div className="rounded-xl bg-slate-800/50 p-3">
                    <p className="text-xs text-slate-500">Subject</p>
                    <p className="mt-1 text-sm text-slate-300">{app.subject}</p>
                  </div>
                )}
                {app.experience && (
                  <div className="rounded-xl bg-slate-800/50 p-3">
                    <p className="text-xs text-slate-500">Experience</p>
                    <p className="mt-1 text-sm text-slate-300">{app.experience}</p>
                  </div>
                )}
                {app.qualification && (
                  <div className="rounded-xl bg-slate-800/50 p-3">
                    <p className="text-xs text-slate-500">Qualification</p>
                    <p className="mt-1 text-sm text-slate-300">{app.qualification}</p>
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-slate-500">
                  {app.createdAt ? new Date(app.createdAt).toLocaleDateString() : ""}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => openModal("approve", app)}
                    className="cursor-pointer flex items-center gap-1.5 rounded-lg border border-green-700 px-3 py-1.5 text-xs font-medium text-green-400 transition hover:bg-green-500/20"
                  >
                    <CheckCircle size={14} /> Approve
                  </button>
                  <button
                    onClick={() => openModal("reject", app)}
                    className="cursor-pointer flex items-center gap-1.5 rounded-lg border border-yellow-700 px-3 py-1.5 text-xs font-medium text-yellow-400 transition hover:bg-yellow-500/20"
                  >
                    <XCircle size={14} /> Reject
                  </button>
                  <button
                    onClick={() => openModal("delete", app)}
                    className="cursor-pointer flex items-center gap-1.5 rounded-lg border border-red-700 px-3 py-1.5 text-xs font-medium text-red-400 transition hover:bg-red-500/20"
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
