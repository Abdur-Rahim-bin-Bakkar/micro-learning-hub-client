import ExamCard from "./ExamCard";


type Exam = {
    id:string;
    title:string;
    subject:string;
    totalQuestion:number;
    status:string;
}


const ExamTable = ({
    exams
}:{
    exams:Exam[]
})=>{


    return (

        <div className="grid md:grid-cols-2 gap-5">


            {
                exams.map(exam=>(

                    <ExamCard
                        key={exam.id}
                        exam={exam}
                    />

                ))
            }


        </div>

    )
}


export default ExamTable;