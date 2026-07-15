import ExamResult from "@/components/exam/ExamResult";
import getExamResult from "@/lib/api/exam/getExamResult";
import { getUserToken } from "@/lib/sessions/token";
import { redirect } from "next/navigation";

type Props = {
    params: Promise<{
        examId: string;
    }>;
};

const ResultPage = async ({ params }: Props) => {
    const { examId } = await params;

    const token = await getUserToken();

    const result = await getExamResult(
        examId,
        token as string
    );
    if(!result){
       redirect('/dashboard/student/exam/')
    }

    return (
        <ExamResult result={result} />
    );
};

export default ResultPage;