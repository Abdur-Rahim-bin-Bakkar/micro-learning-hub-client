import { getUserToken } from "@/lib/sessions/token";

interface ReactionPayload {
  postId: string;
  userId: string;
  reaction: "like" | "love" | "necessary";
}

export const reactPost = async (payload: ReactionPayload) => {
  const token = await getUserToken();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/helpdesk/${payload.postId}/react`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    }
  );

  return response.json();
};