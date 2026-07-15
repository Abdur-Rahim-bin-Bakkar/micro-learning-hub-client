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
      <div className="bg-[#1E293B] border border-slate-800 rounded-2xl p-8 text-center shadow-xl">
        <p className="text-slate-400">
          No questions added yet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#1E293B] border border-slate-800 rounded-2xl shadow-xl p-6 sm:p-8">
      <h2 className="text-xl font-bold mb-6 text-slate-100 flex items-center gap-2">
        <span className="w-1.5 h-5 rounded bg-cyan-500 inline-block"></span>
        Added Questions ({questions.length})
      </h2>

      <div className="space-y-6">
        {questions.map((item, index) => (
          <div
            key={index}
            className="border border-slate-800 bg-[#0F172A]/50 rounded-xl p-5 sm:p-6 transition-all duration-200 hover:border-slate-700"
          >
            <h3 className="font-semibold text-lg mb-4 text-slate-200 flex items-start gap-2">
              <span className="text-cyan-500 font-bold">{index + 1}.</span>
              <span>{item.question}</span>
            </h3>

            <div className="space-y-3">
              {item.options.map((option, optionIndex) => {
                const isCorrect = option === item.correctAnswer;
                return (
                  <div
                    key={optionIndex}
                    className={`p-3.5 rounded-xl border text-sm sm:text-base transition-all duration-200 flex items-center justify-between ${
                      isCorrect
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-medium"
                        : "border-slate-800 bg-[#0F172A] text-slate-300"
                    }`}
                  >
                    <div>
                      <span className={`mr-2 font-bold ${isCorrect ? "text-emerald-400" : "text-slate-500"}`}>
                        {String.fromCharCode(65 + optionIndex)}.
                      </span>
                      {option}
                    </div>

                    {isCorrect && (
                      <span className="flex items-center gap-1 text-xs px-2.5 py-1 bg-emerald-500/20 text-emerald-400 rounded-full font-semibold border border-emerald-500/30">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        Correct Answer
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionList;