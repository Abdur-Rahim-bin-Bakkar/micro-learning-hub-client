'use server'

import { redirect } from "next/navigation";
import { getUserSessionServer } from "../sessions/sesionServer"

export const checkRole = async (role)=>{
    const session = await getUserSessionServer()
    const userRole = await session?.user?.role;
    if(userRole !== role){
        redirect('/unauthorized')
    }
    
}