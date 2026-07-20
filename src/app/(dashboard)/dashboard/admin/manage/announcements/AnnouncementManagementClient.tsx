"use client";

import { useState, useEffect } from "react";
import { getUserToken } from "@/lib/sessions/token";
import {
  Megaphone,
  Edit,
  Trash2,
  Plus,
  X,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import ConfirmModal from "../../../components/ConfirmModal";

type Announcement = {
  _id: string;
  title: string;
  description: string;
  author?: string;
  image?: string;
  createdAt: string;
};

export default function AnnouncementManagementClient() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState({ title: "", description: "", author: "" });
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; id: string }>({
    open: false, id: "",
  });

  const fetchAnnouncements = async () => {
    try {
      const token = await getUserToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/announcements`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setAnnouncements(data.data || []);
    } catch {
      toast.error("Failed to fetch announcements");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleSubmit = async () => {
    if (!form.title || !form.description) {
      toast.error("Title and description are required");
      return;
    }
    try {
      const token = await getUserToken();
      if (editId) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/announcements/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify(form),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.message);
        toast.success("Announcement updated");
      } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/announcements`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify(form),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.message);
        toast.success("Announcement created");
      }
      setForm({ title: "", description: "", author: "" });
      setEditId(null);
      setShowForm(false);
      fetchAnnouncements();
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const handleEdit = (a: Announcement) => {
    setForm({ title: a.title, description: a.description, author: a.author || "" });
    setEditId(a._id);
    setShowForm(true);
  };

  const handleDeleteConfirm = async () => {
    const id = deleteModal.id;
    try {
      const token = await getUserToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/announcements/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message);
      toast.success("Announcement deleted");
      setDeleteModal({ open: false, id: "" });
      fetchAnnouncements();
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
        title="Delete Announcement"
        message="Are you sure you want to delete this announcement? This cannot be undone."
        confirmLabel="Delete"
        variant="danger"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteModal({ open: false, id: "" })}
      />
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Manage Announcements</h1>
          <p className="mt-1 text-slate-400">Create, edit, and delete announcements.</p>
        </div>
        <button
          onClick={() => {
            setForm({ title: "", description: "", author: "" });
            setEditId(null);
            setShowForm(!showForm);
          }}
          className="cursor-pointer flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:opacity-90"
        >
          {showForm ? <X size={18} /> : <Plus size={18} />}
          {showForm ? "Cancel" : "New Announcement"}
        </button>
      </div>

      {showForm && (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">
            {editId ? "Edit Announcement" : "Create Announcement"}
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-cyan-500"
            />
            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={4}
              className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-cyan-500"
            />
            <input
              type="text"
              placeholder="Author (optional)"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-cyan-500"
            />
            <button
              onClick={handleSubmit}
              className="cursor-pointer rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:opacity-90"
            >
              {editId ? "Update" : "Create"}
            </button>
          </div>
        </div>
      )}

      {announcements.length === 0 && !loading ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-12 text-center">
          <Megaphone className="mx-auto h-12 w-12 text-slate-600" />
          <p className="mt-4 text-slate-400">No announcements yet.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {announcements.map((a) => (
            <div
              key={a._id}
              className="flex items-start justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-700"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{a.description}</p>
                <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
                  {a.author && <span>By {a.author}</span>}
                  <span>{new Date(a.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="ml-4 flex gap-2">
                <button
                  onClick={() => handleEdit(a)}
                  className="cursor-pointer rounded-lg border border-slate-700 p-2 text-slate-400 transition hover:border-cyan-500 hover:text-cyan-500"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => setDeleteModal({ open: true, id: a._id })}
                  className="cursor-pointer rounded-lg border border-slate-700 p-2 text-slate-400 transition hover:border-red-500 hover:text-red-500"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
