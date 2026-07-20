import { getUserToken } from "@/lib/sessions/token";

const deleteAnnouncement = async (id: string) => {
  const token = await getUserToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/announcements/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Failed to delete announcement");
  return json;
};

export default deleteAnnouncement;
