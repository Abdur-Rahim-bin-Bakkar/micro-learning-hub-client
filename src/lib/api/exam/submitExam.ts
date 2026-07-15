const submitExam = async (
  examId: string,
  answers: any[],
  token: string
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/exams/${examId}/submit`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        answers,
      }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};

export default submitExam;