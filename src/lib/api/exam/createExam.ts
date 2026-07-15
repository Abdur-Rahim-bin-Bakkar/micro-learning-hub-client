// import { getUserToken } from "@/lib/getUserToken";

import { getUserToken } from "@/lib/sessions/token";

const createExam = async (examData: any) => {
    const token = await getUserToken();
    console.log(token, '123 token 123')

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/exams/teacher/create`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(examData),
        }
    );

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message);
    }

    return data;
};

export default createExam;