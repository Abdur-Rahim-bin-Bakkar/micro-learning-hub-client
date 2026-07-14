"use client";

import Image from "next/image";
import {
  CheckCircle2,
  Clock3,
  XCircle,
  User,
  Mail,
  BookOpen,
  MessageSquare,
  GraduationCap,
  Sparkles,
  Target,
  Award,
} from "lucide-react";

interface ApplicationData {
  image: string;
  name: string;
  email: string;
  status?: string;
  feedback?: string;
  subject?: string;
  experience?: string;
  qualification?: string;
  education?: string;
  interest?: string;
  goal?: string;
}

interface Props {
  application: ApplicationData;
  type: "teacher" | "student";
}

export default function ApplicationStatusCard({ application, type }: Props) {
  const status = application?.status?.toLowerCase() || "pending";
  const feedback = application?.feedback || "No feedback updated yet.";

  const renderStatusBadge = () => {
    switch (status) {
      case "approved":
        return (
          <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-sm font-semibold tracking-wide text-emerald-400">
            <CheckCircle2 size={16} className="text-emerald-400" />
            Approved
          </div>
        );
      case "rejected":
        return (
          <div className="inline-flex items-center gap-2 rounded-xl bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 text-sm font-semibold tracking-wide text-rose-400">
            <XCircle size={16} className="text-rose-400" />
            Rejected
          </div>
        );
      default:
        return (
          <div className="inline-flex items-center gap-2 rounded-xl bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 text-sm font-semibold tracking-wide text-amber-400">
            <Clock3 size={16} className="text-amber-400" />
            Pending
          </div>
        );
    }
  };

  return (
    <div className="rounded-3xl border border-white/5 bg-[#0B0F14] p-6 md:p-8 shadow-2xl max-w-2xl mx-auto text-slate-100 my-6 backdrop-blur-md">
      {/* Header Profile Section */}
      <div className="flex flex-col items-center text-center">
        <div className="relative group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 blur-md opacity-30 group-hover:opacity-50 transition-opacity" />
          <Image
            src={application?.image || "/placeholder-avatar.png"}
            alt={application?.name || "User profile"}
            width={96}
            height={96}
            unoptimized
            className="relative rounded-full w-24 h-24 object-cover border-4 border-white/10 shadow-lg"
          />
        </div>

        <h2 className="mt-4 text-2xl font-black bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent tracking-tight">
          {application?.name}
        </h2>
        <p className="text-sm font-medium text-gray-500 mt-0.5">
          {application?.email}
        </p>

        <div className="mt-4">
          {renderStatusBadge()}
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-white/5" />

      {/* Dynamic Profile Metadata Info Grid */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.03]">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <User size={18} />
          </div>
          <div>
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Application Type</p>
            <p className="text-sm font-bold text-gray-300 capitalize mt-0.5">{type}</p>
          </div>
        </div>

        <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.03]">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Mail size={18} />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Email Address</p>
            <p className="text-sm font-bold text-gray-300 truncate mt-0.5">{application?.email}</p>
          </div>
        </div>

        {type === "teacher" ? (
          <>
            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.03]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <BookOpen size={18} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Subject</p>
                <p className="text-sm font-bold text-gray-300 mt-0.5">{application?.subject || "N/A"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.03]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Award size={18} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Experience</p>
                <p className="text-sm font-bold text-gray-300 mt-0.5">{application?.experience || "N/A"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.03] sm:col-span-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <GraduationCap size={18} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Qualification</p>
                <p className="text-sm font-bold text-gray-300 mt-0.5">{application?.qualification || "N/A"}</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.03]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <GraduationCap size={18} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Education</p>
                <p className="text-sm font-bold text-gray-300 mt-0.5">{application?.education || "N/A"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.03]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Interest</p>
                <p className="text-sm font-bold text-gray-300 mt-0.5">{application?.interest || "N/A"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.03] sm:col-span-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Target size={18} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Goal</p>
                <p className="text-sm font-bold text-gray-300 mt-0.5">{application?.goal || "N/A"}</p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Admin Feedback Container */}
      <div className="mt-6 rounded-2xl bg-white/[0.01] border border-white/5 p-5">
        <div className="mb-2 flex items-center gap-2">
          <MessageSquare className="text-cyan-400" size={16} />
          <h3 className="text-sm font-bold text-slate-300 tracking-wide">
            Admin Feedback
          </h3>
        </div>
        <p className="text-sm leading-relaxed font-medium text-slate-400">
          {feedback}
        </p>
      </div>
    </div>
  );
}