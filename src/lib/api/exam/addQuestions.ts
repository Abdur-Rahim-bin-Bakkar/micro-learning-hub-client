import { getUserToken } from "@/lib/sessions/token";


const addQuestions = async (

  examId:string,

  questions:any[]

)=>{


  const token = await getUserToken();



  const res = await fetch(

    `${process.env.NEXT_PUBLIC_API_URL}/api/exams/teacher/${examId}/questions`,

    {

      method:"POST",

      headers:{

        "Content-Type":"application/json",

        Authorization:`Bearer ${token}`

      },


      body:JSON.stringify({

        questions

      })

    }

  );



  const data = await res.json();



  if(!res.ok){

    throw new Error(data.message);

  }


  return data;


};



export default addQuestions;