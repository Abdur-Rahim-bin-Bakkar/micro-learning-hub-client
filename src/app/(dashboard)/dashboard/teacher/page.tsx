import Link from "next/link";

const TeacherDashboardPage = () => {
  const stats = [
    {
      title: "Total Exams",
      value: 12,
    },
    {
      title: "Published Exams",
      value: 8,
    },
    {
      title: "Draft Exams",
      value: 4,
    },
    {
      title: "Total Questions",
      value: 156,
    },
  ];

  const recentExams = [
    {
      id: "1",
      title: "React Fundamentals",
      subject: "Frontend",
      questions: 20,
      status: "Published",
    },
    {
      id: "2",
      title: "JavaScript Basics",
      subject: "Programming",
      questions: 15,
      status: "Draft",
    },
    {
      id: "3",
      title: "HTML & CSS",
      subject: "Web Design",
      questions: 25,
      status: "Published",
    },
  ];

  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
          <p className="text-gray-500 mt-1">
            Welcome back! Manage your exams and questions.
          </p>
        </div>

        <Link
          href="/dashboard/teacher/exam/create"
          className="btn btn-primary"
        >
          + Create Exam
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-gray-500">{item.title}</p>

            <h2 className="mt-2 text-3xl font-bold">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Recent Exams */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Recent Exams</h2>

          <Link
            href="/dashboard/teacher/exam"
            className="btn btn-outline btn-sm"
          >
            View All
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Exam</th>
                <th>Subject</th>
                <th>Questions</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {recentExams.map((exam) => (
                <tr key={exam.id}>
                  <td>{exam.title}</td>

                  <td>{exam.subject}</td>

                  <td>{exam.questions}</td>

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
    </div>
  );
};

export default TeacherDashboardPage;