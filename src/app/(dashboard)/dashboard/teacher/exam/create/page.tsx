import CreateExamForm from "../components/CreateExamForm";

const CreateExamPage = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 border-b border-slate-800 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Create New <span className="text-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">Exam</span>
          </h1>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Fill in the exam information before adding questions to your test.
          </p>
        </div>

        {/* Form Container with Dark Card Styling */}
        <div className="bg-[#1E293B] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl shadow-cyan-950/20 relative overflow-hidden">
          {/* Subtle top cyan glow line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          
          <CreateExamForm />
        </div>

      </div>
    </div>
  );
};

export default CreateExamPage;