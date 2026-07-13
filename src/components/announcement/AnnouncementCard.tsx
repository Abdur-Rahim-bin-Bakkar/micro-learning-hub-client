"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Megaphone,
  Flag,
  GraduationCap,
} from "lucide-react";

export type Announcement = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  type: string;
  priority: string;

  author: {
    id: string;
    name: string;
    role: string;
    photo: string;
  };

  publishedAt: string;
};

type Props = {
  announcement: Announcement;
};

export default function AnnouncementCard({
  announcement,
}: Props) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
      className="
        mx-auto
        max-w-2xl
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#0B1120]
        shadow-2xl
      "
    >
      {/* Cover Image */}
      <div className="relative h-[450px] w-full">
        <Image
          src={announcement.image || "/placeholder.png"}
          alt={announcement.title}
          fill
          unoptimized
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B112090] to-transparent" />
      </div>

      {/* Content */}
      <div className="px-8 py-10 md:px-14">
        {/* Logo */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="flex items-center gap-3 transition hover:scale-105"
          >
            <div className="rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-3 shadow-lg">
              <GraduationCap
                className="text-white"
                size={28}
              />
            </div>

            <h2 className="text-3xl font-bold text-white">
              Micro
              <span className="text-cyan-400">
                Learn
              </span>
            </h2>
          </Link>
        </div>

        {/* Date */}
        <div className="mt-6 flex justify-center">
          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-2
              text-sm
              text-gray-300
            "
          >
            <CalendarDays size={16} />

            {new Date(
              announcement.publishedAt
            ).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
        </div>

        {/* Title */}
        <h1
          className="
            mx-auto
            mt-8
            max-w-4xl
            text-center
            text-3xl
            font-bold
            leading-tight
            text-white
            md:text-5xl
          "
        >
          {announcement.title}
        </h1>

        {/* Badges */}
        <div
          className="
            mt-8
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >
          <span
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-cyan-600
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
            "
          >
            <Megaphone size={16} />

            {announcement.type}
          </span>

          <span
            className={`
              flex
              items-center
              gap-2
              rounded-full
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white

              ${
                announcement.priority === "high"
                  ? "bg-red-600"
                  : announcement.priority === "medium"
                  ? "bg-yellow-500"
                  : "bg-green-600"
              }
            `}
          >
            <Flag size={16} />

            {announcement?.priority?.toUpperCase()}
          </span>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Description */}
        <div className="mx-auto max-w-4xl">
          <p
            className="
              whitespace-pre-line
              text-lg
              leading-9
              text-gray-300
            "
          >
            {announcement.description}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-5">
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div className="rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-3">
                <GraduationCap
                  className="text-white"
                  size={24}
                />
              </div>

              <h2 className="text-2xl font-bold text-white">
                Micro
                <span className="text-cyan-400">
                  Learn
                </span>
              </h2>
            </Link>

            <p className="text-center text-gray-400">
              Official Announcement • Micro Learning Hub
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}