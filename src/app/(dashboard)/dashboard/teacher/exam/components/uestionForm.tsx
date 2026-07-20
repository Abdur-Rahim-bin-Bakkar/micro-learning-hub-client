"use client";

import { useState } from "react";

const QuestionForm = () => {
  const [question, setQuestion] = useState("");

  const [optionA, setOptionA] = useState("");

  const [optionB, setOptionB] = useState("");

  const [optionC, setOptionC] = useState("");

  const [optionD, setOptionD] = useState("");

  const [correctAnswer, setCorrectAnswer] = useState("A");

  const [mark, setMark] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      question,
      options: [
        optionA,
        optionB,
        optionC,
        optionD,
      ],
      correctAnswer,
      mark,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>

        <label className="font-medium">

          Question

        </label>

        <textarea
          className="textarea textarea-bordered w-full mt-2"
          placeholder="Write Question..."
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
        />

      </div>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          className="input input-bordered"
          placeholder="Option A"
          value={optionA}
          onChange={(e) =>
            setOptionA(e.target.value)
          }
        />

        <input
          className="input input-bordered"
          placeholder="Option B"
          value={optionB}
          onChange={(e) =>
            setOptionB(e.target.value)
          }
        />

        <input
          className="input input-bordered"
          placeholder="Option C"
          value={optionC}
          onChange={(e) =>
            setOptionC(e.target.value)
          }
        />

        <input
          className="input input-bordered"
          placeholder="Option D"
          value={optionD}
          onChange={(e) =>
            setOptionD(e.target.value)
          }
        />

      </div>

      <div className="grid md:grid-cols-2 gap-5">

        <select
          className="select select-bordered"
          value={correctAnswer}
          onChange={(e) =>
            setCorrectAnswer(e.target.value)
          }
        >
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
        </select>

        <input
          type="number"
          className="input input-bordered"
          value={mark}
          onChange={(e) =>
            setMark(Number(e.target.value))
          }
        />

      </div>

      <button className="btn btn-primary cursor-pointer">

        Add Question

      </button>
    </form>
  );
};

export default QuestionForm;