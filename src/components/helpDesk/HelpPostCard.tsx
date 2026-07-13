"use client";

import { Avatar, Chip, TextArea } from "@heroui/react";
import { HelpPost } from "./types";
import {
  HiOutlineHandThumbUp,
  HiOutlineChatBubbleLeft,
  HiOutlineHeart,
} from "react-icons/hi2";
import Image from "next/image";
import { getUserById } from "@/lib/api/user/getUserById";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addComment } from "@/lib/api/helpDesk/addComment";
import { useUserSession } from "@/lib/sessions/session";
import { reactPost } from "@/lib/api/helpDesk/reactPost";
// import { reactPost } from "@/lib/api/helpDesk/reactPost";
interface Props {
  post: HelpPost;
}

const roleColor = {
  student: "primary",
  teacher: "success",
  admin: "danger",
} as const;

const HelpPostCard = ({ post }: Props) => {
  const session = useUserSession()
  const router = useRouter();

  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState("");
  // const router = useRouter();

  // const [showComment, setShowComment] = useState(false);

  // const [comment, setComment] = useState("");
  // console.log(post?.userId,'this is a post')
  // console.log(getUserById(post?.userId),'user info')
  const handleComment = async () => {
    if (!comment.trim()) return;
    if (!session?.user) {
      return;
    }

    const body = {
      postId: post._id,
      userId: session.user.id,
      name: session.user.name,
      photo: session.user.image,
      comment,
    };
    console.log(body)

    const res = await addComment(body);
    console.log(res, 'comment result')

    if (res.success) {
      setComment("");
      setShowComment(false);
      router.refresh();
    }
  };
  const handleReaction = async (
    reaction: "like" | "love" | "necessary"
  ) => {
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
      const currentUserId = session?.user?.id ?? "";

      const isLiked = post.reactions.like.includes(currentUserId);

      const isLoved = post.reactions.love.includes(currentUserId);

      const isNecessary =
        post.reactions.necessary.includes(currentUserId);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">

      {/* Header */}

      <div className="flex items-center justify-between p-5">

        <div className="flex items-center gap-3">
          {
            post?.uimage && <Image
              height={100}
              width={300}
              alt="image logo"
              src={post.uimage}
              unoptimized
              className="w-15 h-15 rounded-full"
            />
          }


          <div>
            {post?.name
              &&

              <h2 className="font-semibold text-lg">
                {post?.name}
              </h2>
            }

            <div className="mt-1 flex items-center gap-2">

              {/* <Chip
                size="sm"
                color={roleColor[post.user.role]}
                variant="flat"
              >
                {post.user.role}
              </Chip> */}

              <span className="text-xs text-gray-500">
                {new Date(post.createdAt).toLocaleDateString()}
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Image */}

      {post.image && (
        <Image
          width={500}
          height={500}
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

        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">

          <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 dark:bg-slate-800">

            <span>👍</span>

            <span className="font-medium">
              {post.reactions.like.length}
            </span>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 dark:bg-slate-800">

            <span>❤️</span>

            <span className="font-medium">
              {post.reactions.love.length}
            </span>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 dark:bg-slate-800">

            <span>wow</span>

            <span className="font-medium">
              {post.reactions.necessary.length}
            </span>

          </div>

          <div className="ml-auto text-sm text-gray-500">

            💬 {post.comments.length} Comments

          </div>

        </div>

        <div className="flex items-center justify-between gap-3 place-items-center">

          <button
            onClick={() => handleReaction("like")}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-xl py-2 px-5  transition hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <HiOutlineHandThumbUp size={20} />
            Like
          </button>
          {/* df */}
          <button
            onClick={() => handleReaction("love")}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-xl py-2 px-5 transition hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <HiOutlineHeart size={20} />
            Love
          </button>

          <button
            onClick={() => handleReaction("necessary")}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-xl py-3 px-5 transition hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            😮
            wow
          </button>

          <button onClick={() => setShowComment(!showComment)} className="flex cursor-pointer items-center justify-center gap-2 rounded-xl py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800">

            <HiOutlineChatBubbleLeft size={20} />

            Comment

          </button>

        </div>
        {/* Comment Box */}
        {showComment && (
          <div className="mt-6 space-y-3">
            <TextArea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              rows={3}
              className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

            <div className="flex justify-end">
              <button
                onClick={handleComment}
                className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
              >
                Post Comment
              </button>
            </div>
          </div>
        )}
        {/* Comments */}
        {post.comments.length > 0 && (
          <div className="mt-8 space-y-4">
            {post.comments.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 rounded-2xl bg-slate-100 p-4 dark:bg-slate-800"
              >
                <Image
                  src={item.photo}
                  alt={item.name}
                  width={45}
                  height={45}
                  className="h-11 w-11 rounded-full object-cover"
                />

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">
                      {item.name}
                    </h4>

                    <span className="text-xs text-gray-500">
                      {new Date(item.createdAt).toLocaleString()}
                    </span>
                  </div>

                  <p className="mt-2 text-gray-700 dark:text-gray-300">
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