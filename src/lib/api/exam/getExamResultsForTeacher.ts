import { getUserToken } from "@/lib/sessions/token";

const getExamResultsForTeacher = async (examId: string) => {
  const token = await getUserToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/exams/teacher/${examId}/results`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to fetch results");
  return data.data;
};

export default getExamResultsForTeacher;
