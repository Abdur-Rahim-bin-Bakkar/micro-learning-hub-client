import getExamResult from "@/lib/api/exam/getExamResult";
import { getUserToken } from "@/lib/sessions/token";
// import { getUserToken } from "@/lib/getUserToken";

type Props = {
  params: Promise<{
    examId: string;
  }>;
};

const ResultPage = async ({ params }: Props) => {
  const { examId } = await params;

  const token = await getUserToken();
  console.log(examId, 'enon eta')

  const result = await getExamResult(examId, token as string);
    console.log(result,'rste')
  return (
    <div className="max-w-3xl mx-auto py-16">
      <div className="border rounded-xl p-8 text-center">
        <h1 className="text-4xl font-bold text-green-600">
          🎉 Exam Completed
        </h1>

        <p className="mt-3 text-gray-500">
          Your exam has been submitted successfully.
        </p>

        <div className="mt-10 space-y-4 text-xl">
          <p>
            <strong>Total Questions:</strong>{" "}
            {result.totalQuestions}
          </p>

          <p>
            <strong>Correct Answers:</strong>{" "}
            {result.correctAnswers}
          </p>

          <p>
            <strong>Wrong Answers:</strong>{" "}
            {result.wrongAnswers}
          </p>

          <p>
            <strong>Score:</strong>{" "}
            {result.score}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;