// import { getUserToken } from "@/lib/sessions/token";
'use server'
import { getUserToken } from "@/lib/sessions/token";

export const getApplicationStatus = async (
    userId: string,
) => {
    
    const token = await getUserToken()
    console.log(token,'token')
    try {

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/applications/status/${userId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return await response.json();

    } catch (error) {

        console.error(error);

        return {
            success: false,
            alreadyApplied: false,
        };

    }

};