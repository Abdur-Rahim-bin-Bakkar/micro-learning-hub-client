import { getUserToken } from "@/lib/sessions/token";

interface AddCommentPayload {
    postId: string;
    userId: string;
    name: string;
    photo: string;
    comment: string;
}

export const addComment = async (
    payload: AddCommentPayload
) => {
    const token = await getUserToken();

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/helpdesk/${payload.postId}/comment`,
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