export interface StudentApplicationPayload {
  name: string;
  email: string;
  image: string;
  userId: string;
  education: string;
  interest: string;
  goal: string;
}

export const createStudentApplication = async (
  payload: StudentApplicationPayload
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/applications/student`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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