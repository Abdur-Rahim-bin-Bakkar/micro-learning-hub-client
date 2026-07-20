import { getUserToken } from "@/lib/sessions/token";

const deleteAccount = async () => {
  const token = await getUserToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/profile`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Failed to delete account");
  return json;
};

export default deleteAccount;
