"use server";

import { getUserToken } from "@/lib/sessions/token";
import { revalidatePath } from "next/cache";

const updatePost = async (postId: string, data: { issue: string; description: string }) => {
  const token = await getUserToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/helpdesk/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Failed to update post");
  revalidatePath("/dashboard/my-posts");
  return json;
};

export default updatePost;
