const getAllExams = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/exams`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch exams");
  }

  return data.data;
};

export default getAllExams;