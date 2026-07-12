'use server'
import { headers } from "next/headers";
import { auth } from "../auth";
// import { authClient } from "../auth-client";

export const getUserToken =async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    return session?.session?.token
}