"use server";

import { getUserToken } from "@/lib/sessions/token";

const getMyPosts = async () => {
  const token = await getUserToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/helpdesk/my-posts`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to fetch your posts");
  return data.data;
};

export default getMyPosts;
