import Link from "next/link";

const exams = [
  {
    id: "1",
    title: "React Fundamentals",
    subject: "Frontend Development",
    duration: 30,
    totalQuestions: 20,
    status: "Published",
  },
  {
    id: "2",
    title: "JavaScript Basics",
    subject: "Programming",
    duration: 20,
    totalQuestions: 15,
    status: "Draft",
  },
];

const TeacherExamPage = () => {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Exams</h1>
          <p className="text-gray-500 mt-1">
            Create, manage and publish your exams.
          </p>
        </div>

        <Link
          href="/dashboard/teacher/exam/create"
          className="btn btn-primary"
        >
          + Create Exam
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th>Exam</th>
              <th>Subject</th>
              <th>Duration</th>
              <th>Questions</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {exams.map((exam) => (
              <tr key={exam.id}>
                <td className="font-semibold">{exam.title}</td>

                <td>{exam.subject}</td>

                <td>{exam.duration} min</td>

                <td>{exam.totalQuestions}</td>

                <td>
                  <span
                    className={`badge ${
                      exam.status === "Published"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {exam.status}
                  </span>
                </td>

                <td>
                  <Link
                    href={`/dashboard/teacher/exam/${exam.id}`}
                    className="btn btn-sm btn-outline"
                  >
                    Manage
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherExamPage;