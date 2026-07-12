"use client";

import HelpPostCard from "./HelpPostCard";
import { HelpDeskProps } from "./types";

const PostList = ({ PostData }: HelpDeskProps) => {
  if (!PostData?.length) {
    return (
      <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-10 text-center shadow">
        <h2 className="text-2xl font-bold">
          No Help Posts Yet
        </h2>

        <p className="mt-3 text-gray-500">
          Be the first person to create a help post.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-8 max-w-3xl space-y-8">
      {PostData.map((post) => (
        <HelpPostCard
          key={post._id}
          post={post}
        />
      ))}
    </div>
  );
};

export default PostList;