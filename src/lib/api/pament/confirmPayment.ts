"use server";

import { getUserToken } from "@/lib/sessions/token";

export const confirmPayment = async (
    sessionId: string
) => {

    try {
        

        const token = await getUserToken();

        const response = await fetch(

            `${process.env.NEXT_PUBLIC_API_URL}/api/payment/confirm`,

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json",

                    Authorization: `Bearer ${token}`,

                },

                body: JSON.stringify({

                    sessionId,

                }),

            }

        );

        const data = await response.json();

        if (!response.ok) {

            return {

                success: false,

                message:
                    data.message || "Payment verification failed",

            };

        }

        return {

            success: true,

            data,

        };

    }

    catch (error) {

        console.error(error);

        return {

            success: false,

            message: "Something went wrong",

        };

    }

};