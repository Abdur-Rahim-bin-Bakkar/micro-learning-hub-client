"use server";

import { getUserToken } from "@/lib/sessions/token";

export interface StudentPaymentPayload {
    name: string;
    email: string;
    image: string;
    userId: string;
    education: string;
    interest: string;
    goal: string;
}

export const createCheckoutSession = async (
    payload: StudentPaymentPayload
) => {
    try {

        const token = await getUserToken();

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/payment/create-checkout-session`,
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

    }

    catch (error) {

        console.error(error);

        return {

            success: false,
            message: "Something went wrong",

        };

    }

};