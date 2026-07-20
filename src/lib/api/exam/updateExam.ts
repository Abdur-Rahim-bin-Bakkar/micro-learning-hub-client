import { getUserToken } from "@/lib/sessions/token";

const updateExam = async (examId: string, data: any) => {
  const token = await getUserToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/exams/teacher/${examId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Failed to update exam");
  return json;
};

export default updateExam;
