'use server'
import { getUserToken } from "@/lib/sessions/token";

export interface TeacherApplicationPayload {
  name: string;
  email: string;
  image: string;
  userId: string;
  subject: FormDataEntryValue | null;
  experience: FormDataEntryValue | null;
  qualification: FormDataEntryValue | null;
}

export const createTeacherApplication = async (
  payload: TeacherApplicationPayload
) => {
  try {
    const token = await getUserToken()
    console.log(token, 'token')

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/applications/teacher`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message,
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
};