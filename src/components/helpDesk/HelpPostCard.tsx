"use client";

import { Avatar, Chip } from "@heroui/react";
import { HelpPost } from "./types";
import {
  HiOutlineHandThumbUp,
  HiOutlineChatBubbleLeft,
  HiOutlineHeart,
} from "react-icons/hi2";
import Image from "next/image";

interface Props {
  post: HelpPost;
}

const roleColor = {
  student: "primary",
  teacher: "success",
  admin: "danger",
} as const;

const HelpPostCard = ({ post }: Props) => {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">

      {/* Header */}

      <div className="flex items-center justify-between p-5">

        <div className="flex items-center gap-3">

          <Image
            height={100}
            width={300}
            alt="image logo"
            src={post.user.photo}
            unoptimized
            className="w-15 h-15 rounded-full"
          />

          <div>

            <h2 className="font-semibold text-lg">
              {post.user.name}
            </h2>

            <div className="mt-1 flex items-center gap-2">

              <Chip
                size="sm"
                color={roleColor[post.user.role]}
                variant="flat"
              >
                {post.user.role}
              </Chip>

              <span className="text-xs text-gray-500">
                {new Date(post.createdAt).toLocaleDateString()}
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Image */}

      {post.image && (
        <img
          src={post.image}
          alt={post.issue}
          className="h-[350px] w-full object-cover"
        />
      )}

      {/* Body */}

      <div className="p-5">

        <h3 className="text-2xl font-bold">
          {post.issue}
        </h3>

        <p className="mt-3 whitespace-pre-line text-gray-600 dark:text-gray-300">
          {post.description}
        </p>

      </div>

      {/* Footer */}

      <div className="border-t border-slate-200 p-5 dark:border-slate-700">

        <div className="mb-4 flex items-center justify-between text-sm text-gray-500">

          <span>
            👍 {post.reactions.like.length} Likes
          </span>

          <span>
            💬 {post.comments.length} Comments
          </span>

        </div>

        <div className="grid grid-cols-4 gap-3">

          <button className="flex items-center justify-center gap-2 rounded-xl py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800">

            <HiOutlineHandThumbUp size={20} />

            Like

          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800">

            <HiOutlineHeart size={20} />

            Love

          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800">

            🙏

            Necessary

          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800">

            <HiOutlineChatBubbleLeft size={20} />

            Comment

          </button>

        </div>

      </div>

    </article>
  );
};

export default HelpPostCard;