"use client";

import { authClient } from "../auth-client";
import type { UserWithRole } from "@/types/auth";


export function useUserSession() {

    const { data: session, isPending } = authClient.useSession();


    return {
        session,

        user: session?.user as UserWithRole | undefined,

        isPending,
    };
}