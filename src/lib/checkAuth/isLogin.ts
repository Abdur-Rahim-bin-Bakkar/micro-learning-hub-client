"use server";

import { redirect } from "next/navigation";


interface Session {
    user?: {
        id: string;
        name?: string | null;
        email?: string;
        image?: string | null;
        role?: string;
    };
}


export const isLogin = async (
    session: Session | null | undefined
) => {

    if (!session) {
        redirect("/unauthorized");
        return;
    }


    if (session.user?.role === "user") {
        redirect("/unauthorized");
        return;
    }

};