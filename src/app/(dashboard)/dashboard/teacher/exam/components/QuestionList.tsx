"use client";

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

type Props = {
  questions: Question[];
};

const QuestionList = ({ questions }: Props) => {
  if (questions.length === 0) {
    return (
      <div className="bg-base-100 border rounded-xl p-6 text-center">
        <p className="text-base-content/60">
          No questions added yet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-base-100 border rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-5">
        Added Questions ({questions.length})
      </h2>

      <div className="space-y-5">
        {questions.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-5"
          >
            <h3 className="font-semibold text-lg mb-4">
              {index + 1}. {item.question}
            </h3>

            <div className="space-y-2">
              {item.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className={`p-3 rounded border ${
                    option === item.correctAnswer
                      ? "border-success bg-success/10 text-success"
                      : "border-base-300"
                  }`}
                >
                  {String.fromCharCode(65 + optionIndex)}. {option}

                  {option === item.correctAnswer && (
                    <span className="ml-2 font-semibold">
                      ✓ Correct
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionList;