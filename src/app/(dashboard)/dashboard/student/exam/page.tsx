import getAllExams from "@/lib/api/exam/getAllExams";

const StudentExamPage = async () => {
  const exams = await getAllExams();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Available Exams
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exams.map((exam: any) => (
          <div
            key={exam._id}
            className="border rounded-xl p-5"
          >
            <h2 className="text-xl font-semibold">
              {exam.title}
            </h2>

            <p>{exam.courseName}</p>

            <p>Level : {exam.level}</p>

            <p>
              Duration : {exam.duration} Minutes
            </p>

            <p>
              Questions : {exam.totalQuestions}
            </p>

            <button>
              Start Exam
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentExamPage;