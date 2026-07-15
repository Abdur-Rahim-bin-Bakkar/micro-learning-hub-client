const getExamResult = async (
  examId: string,
  token: string
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/exams/${examId}/result`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data.data;
};

export default getExamResult;