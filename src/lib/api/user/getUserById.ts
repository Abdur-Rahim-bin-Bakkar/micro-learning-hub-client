"use server";

import { getUserToken } from "@/lib/sessions/token";

export const getUserById = async (id: string) => {
  const token = await getUserToken();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to fetch user.");
    }

    return result.data;
  } catch (error) {
    console.error("Get User Error:", error);
    throw error;
  }
};