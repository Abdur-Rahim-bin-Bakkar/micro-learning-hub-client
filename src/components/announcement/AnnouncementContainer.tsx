"use client";

import { useEffect, useState } from "react";

import AnnouncementCard, {
  Announcement,
} from "./AnnouncementCard";

export default function AnnouncementContainer() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/announcements`
        );

        const result = await response.json();

        setAnnouncements(result.data || []);
      } catch (error) {
        console.log("Announcement fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  if (loading) {
    return (
      <section
        className="
          min-h-screen
          bg-[#0B0F14]
          flex
          items-center
          justify-center
          px-6
        "
      >
        <h1
          className="
            text-2xl
            font-bold
            text-white
          "
        >
          Loading Announcements...
        </h1>
      </section>
    );
  }

  if (!announcements.length) {
    return (
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B0F14] px-6">
        {/* Background Blur */}
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-[120px]" />

        {/* Card */}
        <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">
          {/* Icon */}
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl shadow-cyan-500/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.4-1.4A2 2 0 0118 14.17V11a6 6 0 10-12 0v3.17a2 2 0 01-.6 1.43L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>

          {/* Title */}
          <h2 className="mt-8 text-4xl font-extrabold text-white">
            No Announcements Yet
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-slate-400">
            There are no announcements available at the moment.
            Check back later for the latest course updates,
            platform news, events, and important notifications.
          </p>

          {/* Divider */}
          <div className="mx-auto my-8 h-px w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

          {/* Status Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Waiting for New Updates
          </span>
        </div>
      </section>
    );
  }

  return (
    <section
      className="
        bg-[#0B0F14]
        py-20
      "
    >
      <div
        className="
          container
          mx-auto
          px-6
        "
      >
        {/* Page Heading */}
        <div
          className="
            mb-16
            text-center
          "
        >
          <h1
            className="
              text-4xl
              font-bold
              text-white
              md:text-5xl
            "
          >
            Latest Announcements
          </h1>

          <p
            className="
              mt-4
              text-lg
              text-gray-400
            "
          >
            Stay updated with our latest news, courses and platform updates.
          </p>
        </div>

        {/* Announcements */}
        <div
          className="
            flex
            flex-col
            gap-20
          "
        >
          {announcements.map((announcement) => (
            <AnnouncementCard
              key={announcement._id}
              announcement={announcement}
            />
          ))}
        </div>
      </div>
    </section>
  );
}