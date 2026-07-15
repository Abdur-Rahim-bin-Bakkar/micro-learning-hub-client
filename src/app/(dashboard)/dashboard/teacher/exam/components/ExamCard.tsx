import Link from "next/link";


const ExamCard = ({
    exam
}: {
    exam: any
}) => {


   



    return (

        <div className="
        border rounded-xl p-5
        shadow-sm
        bg-white
        ">


            <h2 className="text-xl font-bold">
                {exam.title}
            </h2>


            <p>
                Subject: {exam.subject}
            </p>


            <p>
                Questions: {exam.totalQuestion}
            </p>


            <span className="badge">
                {exam.status}
            </span>


            <div className="mt-5">

                <Link
                    href={`/dashboard/teacher/exam/${exam.id}`}
                    className="btn btn-sm btn-outline"
                >
                    Manage
                </Link>

            </div>



        </div>

    )

}


export default ExamCard;