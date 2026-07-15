// import CreateExamForm from "../components/CreateExamForm";

import CreateExamForm from "../components/CreateExamForm";

const CreateExamPage = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Create New Exam
        </h1>

        <p className="text-default-500 mt-2">
          Fill in the exam information before adding questions.
        </p>

      </div>

      <CreateExamForm />

    </div>
  );
};

export default CreateExamPage;