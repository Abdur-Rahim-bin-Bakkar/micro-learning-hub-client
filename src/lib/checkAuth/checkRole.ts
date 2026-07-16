"use server";

import { redirect } from "next/navigation";
import { getUserSessionServer } from "../sessions/sesionServer";
import type { UserRole } from "@/types/auth";


export const checkRole = async (
    role: UserRole
) => {


    const session = await getUserSessionServer();


    const userRole = session?.user?.role;


    if (userRole !== role) {

        redirect("/unauthorized");

    }

};