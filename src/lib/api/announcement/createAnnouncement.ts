import { getUserToken } from "@/lib/sessions/token";

export interface AnnouncementPayload {
    title: string;
    slug: string;
    description: string;
    image: string;
    type: string;
    priority: string;
    targetAudience: string[];
    status: string;
}

export const createAnnouncement = async (
    announcementData: AnnouncementPayload
) => {
    const token = await getUserToken();
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/announcements`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(announcementData),
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to create announcement"
        );
    }

    return data;
};