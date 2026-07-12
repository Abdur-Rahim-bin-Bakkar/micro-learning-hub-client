import React from 'react';
import { getUserSessionServer } from "@/lib/sessions/sesionServer";
import { redirect } from "next/navigation";

const page =async () => {
    const session = await getUserSessionServer()
    redirect(`/dashboard/${session?.user?.role}`)
    return
};

export default page;