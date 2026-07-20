import { getUserToken } from "@/lib/sessions/token";

const deleteExam = async (examId: string) => {
  const token = await getUserToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/exams/teacher/${examId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Failed to delete exam");
  return json;
};

export default deleteExam;
