"use client";

import { useState, useEffect } from "react";
import { getUserToken } from "@/lib/sessions/token";
import {
  MessageSquare,
  Edit,
  Trash2,
  Loader2,
  X,
  Save,
  FileText,
  Eye,
} from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import ConfirmModal from "@/app/(dashboard)/dashboard/components/ConfirmModal";

type MyPost = {
  _id: string;
  userId: string;
  name: string;
  uimage: string;
  issue: string;
  description: string;
  image: string;
  reactions: { like: string[]; love: string[]; necessary: string[] };
  comments: any[];
  createdAt: string;
};

type Tab = "all" | "draft";

export default function MyPostsClient() {
  const [posts, setPosts] = useState<MyPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ issue: "", description: "" });
  const [saving, setSaving] = useState(false);
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; id: string }>({
    open: false,
    id: "",
  });

  const fetchPosts = async () => {
    try {
      const token = await getUserToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/helpdesk/my-posts`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setPosts(data.data || []);
    } catch {
      toast.error("Failed to fetch your posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleEdit = (post: MyPost) => {
    setEditId(post._id);
    setEditForm({ issue: post.issue, description: post.description });
  };

  const handleSave = async () => {
    if (!editId || !editForm.issue.trim() || !editForm.description.trim()) {
      toast.error("Issue and description are required");
      return;
    }
    setSaving(true);
    try {
      const token = await getUserToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/helpdesk/${editId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editForm),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message);
      toast.success("Post updated");
      setEditId(null);
      fetchPosts();
    } catch (e: any) {
      toast.error(e.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteConfirm = async () => {
    const id = deleteModal.id;
    try {
      const token = await getUserToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/helpdesk/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message);
      toast.success("Post deleted");
      setDeleteModal({ open: false, id: "" });
      fetchPosts();
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  if (loading) {
    return (
      <div className="relative flex min-h-[60vh] items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F14] via-[#111827] to-[#1E293B]" />
        <div className="relative flex flex-col items-center gap-4">
          <div className="relative">
            <div className="h-16 w-16 animate-spin rounded-full border-2 border-slate-800 border-t-cyan-500" />
            <div className="absolute inset-0 h-16 w-16 animate-ping rounded-full border border-cyan-500/20" />
          </div>
          <p className="text-sm font-medium text-slate-500">Loading your posts...</p>
        </div>
      </div>
    );
  }

  const totalEngagement = posts.reduce(
    (acc, p) => acc + p.reactions.like.length + p.reactions.love.length + p.reactions.necessary.length + p.comments.length,
    0,
  );
  const recentCount = posts.filter((p) => Date.now() - new Date(p.createdAt).getTime() < 7 * 24 * 60 * 60 * 1000).length;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0B0F14] via-[#111827] to-[#1E293B]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.06),transparent_50%)]" />

      <div className="relative mx-auto max-w-5xl px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-3 ring-1 ring-cyan-500/20">
              <MessageSquare className="h-7 w-7 text-cyan-400" />
            </div>
            <div>
              <h1 className="bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-4xl font-extrabold text-transparent">
                My Posts
              </h1>
              <p className="mt-1 text-slate-500">Manage all your help desk activity</p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-slate-800/60 bg-slate-900/30 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-white">{posts.length}</p>
              <p className="text-xs text-slate-500">Total Posts</p>
            </div>
            <div className="rounded-xl border border-slate-800/60 bg-slate-900/30 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-cyan-400">{totalEngagement}</p>
              <p className="text-xs text-slate-500">Total Engagements</p>
            </div>
            <div className="rounded-xl border border-slate-800/60 bg-slate-900/30 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-amber-400">{recentCount}</p>
              <p className="text-xs text-slate-500">This Week</p>
            </div>
          </div>
        </div>

        <ConfirmModal
          open={deleteModal.open}
          title="Delete Post"
          message="Are you sure you want to delete this post? This cannot be undone."
          confirmLabel="Delete"
          variant="danger"
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeleteModal({ open: false, id: "" })}
        />

        {posts.length === 0 ? (
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/30 p-16 text-center backdrop-blur-sm">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-blue-600/5 blur-3xl" />
            <MessageSquare className="mx-auto h-16 w-16 text-slate-700" />
            <h3 className="mt-4 text-xl font-semibold text-slate-300">No posts yet</h3>
            <p className="mt-2 text-sm text-slate-500">
              Create a post on the Help Desk to see it here.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {posts.map((post) => (
              <div
                key={post._id}
                className="group relative overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)]"
              >
                {/* Glow on hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-blue-600/0 opacity-0 transition-opacity duration-300 group-hover:from-cyan-500/5 group-hover:via-cyan-500/0 group-hover:to-blue-600/5" />

                <div className="relative">
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {post.uimage ? (
                        <div className="relative shrink-0">
                          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-60 blur-sm" />
                          <Image
                            src={post.uimage}
                            alt={post.name}
                            width={44}
                            height={44}
                            className="relative h-11 w-11 rounded-full border border-slate-800 object-cover"
                            unoptimized
                          />
                        </div>
                      ) : (
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-800 text-sm font-bold text-cyan-400">
                          {post.name?.charAt(0) || "U"}
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-semibold text-white">{post.name}</p>
                        <p className="text-xs text-slate-500">
                          {new Date(post.createdAt).toLocaleDateString(undefined, {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="flex shrink-0 gap-2">
                      <button
                        onClick={() => handleEdit(post)}
                        className="rounded-lg border border-slate-700/60 bg-slate-800/50 p-2 text-slate-500 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400"
                        title="Edit"
                      >
                        <Edit size={15} />
                      </button>
                      <button
                        onClick={() => setDeleteModal({ open: true, id: post._id })}
                        className="rounded-lg border border-slate-700/60 bg-slate-800/50 p-2 text-slate-500 transition-all hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400"
                        title="Delete"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>

                  {/* Edit mode */}
                  {editId === post._id ? (
                    <div className="mt-5 space-y-4">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Issue
                        </label>
                        <input
                          type="text"
                          value={editForm.issue}
                          onChange={(e) => setEditForm({ ...editForm, issue: e.target.value })}
                          className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-sm text-white outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
                          placeholder="Post issue"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Description
                        </label>
                        <textarea
                          value={editForm.description}
                          onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                          rows={3}
                          className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-sm text-white outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
                          placeholder="Post description"
                        />
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={handleSave}
                          disabled={saving}
                          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:opacity-90 disabled:opacity-50"
                        >
                          {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                          Save Changes
                        </button>
                        <button
                          onClick={() => setEditId(null)}
                          className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-400 transition-all hover:bg-slate-800 hover:text-white"
                        >
                          <X size={16} /> Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3 className="mt-4 text-lg font-bold text-white">{post.issue}</h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400">
                        {post.description}
                      </p>

                      {/* Footer stats */}
                      <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-slate-800/60 pt-4 text-xs text-slate-600">
                        <span className="flex items-center gap-1.5">
                          <Eye size={14} className="text-cyan-500" />
                          {post.reactions.like.length + post.reactions.love.length + post.reactions.necessary.length} reactions
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MessageSquare size={14} className="text-blue-400" />
                          {post.comments.length} comments
                        </span>
                        {post.image && (
                          <span className="flex items-center gap-1.5">
                            <FileText size={14} className="text-amber-400" />
                            Has image
                          </span>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
