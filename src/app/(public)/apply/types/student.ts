export interface StudentApplication {
  phone: string;
  gender: string;
  dateOfBirth: string;
  address: string;

  institution: string;
  education: string;
  interestedCategory: string;
  learningGoal: string;
}

export const studentInitialValues: StudentApplication = {
  phone: "",
  gender: "",
  dateOfBirth: "",
  address: "",

  institution: "",
  education: "",
  interestedCategory: "",
  learningGoal: "",
};