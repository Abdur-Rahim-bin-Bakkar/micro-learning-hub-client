export interface TeacherApplication {
  phone: string;
  gender: string;
  dateOfBirth: string;
  address: string;

  profession: string;
  experience: string;
  qualification: string;
  skills: string;
  teachingCategory: string;
  whyTeach: string;
}

export const teacherInitialValues: TeacherApplication = {
  phone: "",
  gender: "",
  dateOfBirth: "",
  address: "",

  profession: "",
  experience: "",
  qualification: "",
  skills: "",
  teachingCategory: "",
  whyTeach: "",
};