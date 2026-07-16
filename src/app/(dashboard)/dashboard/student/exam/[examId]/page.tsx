import getSingleExam from "@/lib/api/exam/getSingleExam";
// import { getUserToken } from "@/lib/getUserToken";
import ExamClient from "./ExamClient";
import { getUserToken } from "@/lib/sessions/token";

type Props = {
  params: Promise<{
    examId: string;
  }>;
};

const SingleExamPage = async ({ params }: Props) => {
  const { examId } = await params;

  const exam = await getSingleExam(examId);

  const token = await getUserToken();
    if (!token) {
    return null;
  }

  return (
    <ExamClient
      exam={exam}
      token={token}
    />
  );
};

export default SingleExamPage;