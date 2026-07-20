"use server";

import { getUserToken } from "@/lib/sessions/token";
import { revalidatePath } from "next/cache";

const deletePost = async (postId: string) => {
  const token = await getUserToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/helpdesk/${postId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Failed to delete post");
  revalidatePath("/dashboard/my-posts");
  return json;
};

export default deletePost;
