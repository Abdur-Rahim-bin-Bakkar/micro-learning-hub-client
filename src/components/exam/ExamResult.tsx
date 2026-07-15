type Props = {
  result: any;
  alreadySubmitted?: boolean;
};

const ExamResult = ({
  result,
  alreadySubmitted = false,
}: Props) => {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 bg-slate-950 text-slate-100 min-h-screen flex items-center justify-center">
      <div className="relative w-full overflow-hidden border border-slate-800/80 bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 sm:p-12 text-center shadow-[0_0_50px_rgba(6,182,212,0.05)]">
        
        {/* Futuristic Background Glow */}
        <div className={`absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full blur-3xl transition-colors duration-500 ${
          alreadySubmitted ? "bg-amber-500/10" : "bg-cyan-500/10"
        }`}></div>

        {/* Dynamic Badge Icon */}
        <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border shadow-lg text-3xl transition-all duration-300 ${
          alreadySubmitted 
            ? "bg-amber-500/10 border-amber-500/30 shadow-amber-500/5 text-cyan-400" 
            : "bg-cyan-500/10 border-cyan-500/30 shadow-cyan-500/10 text-cyan-400"
        }`}>
          {alreadySubmitted ? "📝" : "🎉"}
        </div>

        {/* Responsive Heading */}
        <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r bg-clip-text text-transparent ${
          alreadySubmitted ? "from-cyan-400 to-cyan-500" : "from-cyan-400 to-blue-500"
        }`}>
          {alreadySubmitted ? "Already Attempted" : "Exam Completed"}
        </h1>

        <p className="mt-3 text-sm text-slate-400 max-w-sm mx-auto tracking-wide">
          {alreadySubmitted
            ? "You have already completed this exam."
            : "Your exam has been submitted successfully. Here is your breakdown."}
        </p>

        {/* Circular Dashboard Score Display */}
        <div className={`my-10 inline-flex flex-col items-center justify-center p-6 rounded-full border border-slate-800 bg-slate-950/80 w-36 h-36 shadow-[inset_0_0_15px_rgba(255,255,255,0.02)] relative group`}>
          <div className={`absolute inset-0 rounded-full opacity-20 blur-md transition-all duration-500 group-hover:opacity-40 ${
            alreadySubmitted ? "bg-cyan-500" : "bg-cyan-500"
          }`}></div>
          <span className={`text-3xl font-black relative z-10 transition-colors duration-300 ${
            alreadySubmitted ? "text-cyan-400" : "text-cyan-400"
          }`}>{result.score}%</span>
          <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase mt-1 relative z-10">
            Score
          </span>
        </div>

        {/* Premium Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          
          {/* Total Box */}
          <div className="p-5 rounded-xl border border-slate-800/80 bg-slate-900/30 flex flex-col justify-between transition-all hover:border-slate-700">
            <span className="text-xs font-semibold text-slate-500 tracking-wide uppercase">Total Questions</span>
            <h2 className="text-3xl font-bold text-slate-200 mt-2 tracking-tight">
              {result.totalQuestions}
            </h2>
          </div>

          {/* Correct Box */}
          <div className="p-5 rounded-xl border border-cyan-500/20 bg-cyan-950/10 flex flex-col justify-between transition-all hover:border-cyan-500/40">
            <span className="text-xs font-semibold text-cyan-500/70 tracking-wide uppercase">Correct</span>
            <h2 className="text-3xl font-bold text-cyan-400 mt-2 tracking-tight">
              {result.correctAnswers}
            </h2>
          </div>

          {/* Wrong Box */}
          <div className="p-5 rounded-xl border border-rose-500/20 bg-rose-950/10 flex flex-col justify-between transition-all hover:border-rose-500/40">
            <span className="text-xs font-semibold text-rose-500/70 tracking-wide uppercase">Wrong</span>
            <h2 className="text-3xl font-bold text-rose-500 mt-2 tracking-tight">
              {result.wrongAnswers}
            </h2>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ExamResult;