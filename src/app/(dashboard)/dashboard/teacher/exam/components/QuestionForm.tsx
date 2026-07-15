"use client";

import { useState } from "react";


type Props = {
  onAddQuestion: (question: {
    question: string;
    options: string[];
    correctAnswer: string;
  }) => void;
};



const QuestionForm = ({
  onAddQuestion
}: Props) => {


  const [question, setQuestion] = useState("");

  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");

  const [correctAnswer, setCorrectAnswer] = useState("");



  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();



    const newQuestion = {

      question,

      options: [
        option1,
        option2,
        option3,
        option4
      ],

      correctAnswer

    };



    console.log(
      "New Question:",
      newQuestion
    );



    // Parent state এ পাঠাবে
    onAddQuestion(newQuestion);



    // Reset form

    setQuestion("");

    setOption1("");

    setOption2("");

    setOption3("");

    setOption4("");

    setCorrectAnswer("");

  };




  return (

    <form

      onSubmit={handleSubmit}

      className="bg-base-100 border rounded-xl p-6 space-y-5 shadow"

    >


      <h2 className="text-xl font-bold">
        Add New Question
      </h2>



      {/* Question */}

      <div>

        <label className="font-medium">
          Question
        </label>


        <input

          type="text"

          className="input input-bordered w-full mt-2"

          placeholder="Enter question..."

          value={question}

          onChange={(e)=>
            setQuestion(e.target.value)
          }

          required

        />

      </div>




      {/* Options */}

      <div className="grid md:grid-cols-2 gap-4">


        <input

          type="text"

          className="input input-bordered"

          placeholder="Option 1"

          value={option1}

          onChange={(e)=>
            setOption1(e.target.value)
          }

          required

        />



        <input

          type="text"

          className="input input-bordered"

          placeholder="Option 2"

          value={option2}

          onChange={(e)=>
            setOption2(e.target.value)
          }

          required

        />



        <input

          type="text"

          className="input input-bordered"

          placeholder="Option 3"

          value={option3}

          onChange={(e)=>
            setOption3(e.target.value)
          }

          required

        />



        <input

          type="text"

          className="input input-bordered"

          placeholder="Option 4"

          value={option4}

          onChange={(e)=>
            setOption4(e.target.value)
          }

          required

        />


      </div>




      {/* Correct Answer */}

      <div>

        <label className="font-medium">

          Correct Answer

        </label>



        <select


          className="select select-bordered w-full mt-2"


          value={correctAnswer}


          onChange={(e)=>
            setCorrectAnswer(e.target.value)
          }


          required


        >


          <option value="">

            Select Correct Answer

          </option>



          <option value={option1}>

            {option1 || "Option 1"}

          </option>



          <option value={option2}>

            {option2 || "Option 2"}

          </option>



          <option value={option3}>

            {option3 || "Option 3"}

          </option>



          <option value={option4}>

            {option4 || "Option 4"}

          </option>



        </select>


      </div>




      <div className="flex justify-end">


        <button

          type="submit"

          className="btn btn-primary"

        >

          Add Question

        </button>


      </div>



    </form>

  );

};


export default QuestionForm;