import { getUserToken } from "@/lib/sessions/token";

const updateAnnouncement = async (id: string, data: any) => {
  const token = await getUserToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/announcements/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Failed to update announcement");
  return json;
};

export default updateAnnouncement;
