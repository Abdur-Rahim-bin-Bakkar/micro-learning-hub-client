"use client";

import { TextArea } from "@heroui/react";
import { HelpPost } from "./types";
import {
  HiOutlineHandThumbUp,
  HiOutlineChatBubbleLeft,
  HiOutlineHeart,
} from "react-icons/hi2";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addComment } from "@/lib/api/helpDesk/addComment";
import { useUserSession } from "@/lib/sessions/session";
import { reactPost } from "@/lib/api/helpDesk/reactPost";

interface Props {
  post: HelpPost;
}

const HelpPostCard = ({ post }: Props) => {
  const session = useUserSession();
  const router = useRouter();

  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState("");

  const handleComment = async () => {
    if (!comment.trim()) return;
    if (!session?.user?.id) return;

    const body = {
      postId: post._id,
      userId: session.user.id,
      name: session.user.name ?? "",
      photo: session.user.image ?? "",
      comment,
    };

    const res = await addComment(body);

    if (res.success) {
      setComment("");
      setShowComment(false);
      router.refresh();
    }
  };

  const handleReaction = async (reaction: "like" | "love" | "necessary") => {
    if (!session?.user) return;
    try {
      const res = await reactPost({
        postId: post._id,
        userId: session.user.id,
        reaction,
      });
      if (res.success) {
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-950 text-slate-100 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">

      {/* Header - User Info */}
      <div className="flex items-center gap-4 p-6 bg-gradient-to-b from-slate-900/50 to-transparent">
        {post.uimage && (
          <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600">
            <Image
              height={100}
              width={100}
              alt={post.name}
              src={post.uimage}
              unoptimized
              className="w-12 h-12 rounded-full object-cover bg-slate-900"
            />
          </div>
        )}

        <div>
          <h4 className="font-semibold text-sm text-white">{post.name || "Anonymous"}</h4>
          <span className="text-xs font-medium text-slate-400">
            {new Date(post.createdAt).toLocaleDateString(undefined, {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>

      {/* Image Container */}
      {post.image && (
        <div className="relative group/img overflow-hidden px-6">
          <div className="relative rounded-xl overflow-hidden border border-slate-800">
            <Image
              width={500}
              height={500}
              src={post.image}
              alt={post.issue}
              className="h-[300px] w-full object-cover transition duration-500 group-hover/img:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
          </div>
        </div>
      )}

      {/* Body */}
      <div className="p-6">
        <h3 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-400 tracking-tight leading-snug">
          {post.issue}
        </h3>

        <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-400">
          {post.description}
        </p>
      </div>

      {/* Footer / Stats */}
      <div className="border-t border-slate-900 px-6 py-4 bg-slate-900/20">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold">
          <div className="flex items-center gap-1.5 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-cyan-400 shadow-inner">
            <span>👍</span>
            <span>{post.reactions.like.length}</span>
          </div>

          <div className="flex items-center gap-1.5 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-rose-400 shadow-inner">
            <span>❤️</span>
            <span>{post.reactions.love.length}</span>
          </div>

          <div className="flex items-center gap-1.5 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-amber-400 shadow-inner">
            <span>😮</span>
            <span>{post.reactions.necessary.length}</span>
          </div>

          <div className="ml-auto text-xs font-medium text-slate-500 tracking-wider uppercase">
            {post.comments.length} Comments
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-4 gap-1 border-t border-slate-900 pt-3 text-slate-400 text-xs font-bold tracking-wide">
          <button
            onClick={() => handleReaction("like")}
            className="flex flex-col sm:flex-row cursor-pointer items-center justify-center gap-2 rounded-xl py-2.5 transition-all duration-200 hover:bg-slate-900 hover:text-cyan-400 active:scale-95"
          >
            <HiOutlineHandThumbUp size={18} />
            <span>Like</span>
          </button>

          <button
            onClick={() => handleReaction("love")}
            className="flex flex-col sm:flex-row cursor-pointer items-center justify-center gap-2 rounded-xl py-2.5 transition-all duration-200 hover:bg-slate-900 hover:text-rose-400 active:scale-95"
          >
            <HiOutlineHeart size={18} />
            <span>Love</span>
          </button>

          <button
            onClick={() => handleReaction("necessary")}
            className="flex flex-col sm:flex-row cursor-pointer items-center justify-center gap-2 rounded-xl py-2.5 transition-all duration-200 hover:bg-slate-900 hover:text-amber-400 active:scale-95"
          >
            <span className="text-sm leading-none">😮</span>
            <span>Wow</span>
          </button>

          <button
            onClick={() => setShowComment(!showComment)}
            className={`flex flex-col sm:flex-row cursor-pointer items-center justify-center gap-2 rounded-xl py-2.5 transition-all duration-200 active:scale-95 ${showComment ? 'bg-cyan-500/10 text-cyan-400' : 'hover:bg-slate-900 hover:text-cyan-400'}`}
          >
            <HiOutlineChatBubbleLeft size={18} />
            <span>Comment</span>
          </button>
        </div>

        {/* Comment Box */}
        {showComment && (
          <div className="mt-5 pt-4 border-t border-slate-900 space-y-3">
            <TextArea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Join the discussion..."
              rows={3}
              className="w-full text-sm rounded-xl border border-slate-800 bg-slate-900 p-1 text-slate-200 placeholder-slate-500 outline-none focus-within:border-cyan-500/50 transition-all"
            />
            <div className="flex justify-end">
              <button
                onClick={handleComment}
                className="cursor-pointer rounded-xl bg-cyan-600 px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 font-sans transition-all duration-200 hover:bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] active:scale-95"
              >
                Post Comment
              </button>
            </div>
          </div>
        )}

        {/* Comments Section */}
        {post.comments.length > 0 && (
          <div className="mt-6 pt-4 border-t border-slate-900 space-y-3 max-h-[350px] overflow-y-auto pr-1">
            {post.comments.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 rounded-xl bg-slate-900/50 border border-slate-900 p-4 transition-all hover:border-slate-800"
              >
                <Image
                  src={item.photo}
                  alt={item.name}
                  width={45}
                  height={45}
                  className="h-9 w-9 rounded-full object-cover ring-2 ring-slate-800/50"
                  unoptimized
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-bold text-xs text-slate-200 truncate">
                      {item.name}
                    </h4>
                    <span className="text-[10px] font-medium text-slate-500 shrink-0">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed break-words">
                    {item.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default HelpPostCard;
