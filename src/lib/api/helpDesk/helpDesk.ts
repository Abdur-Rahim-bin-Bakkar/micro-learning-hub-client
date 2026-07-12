'use server'

import { getUserToken } from "@/lib/sessions/token";

export const getHelpPosts = async () => {
    const token = await getUserToken()
    console.log(token, 'token')
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/helpdesk`,
        {
            cache: "no-store",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch help posts");
    }

    return response.json();
};