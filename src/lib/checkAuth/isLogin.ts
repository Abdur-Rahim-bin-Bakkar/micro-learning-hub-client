import { redirect } from "next/navigation"

export const isLogin = async (session) => {
    if (!session) {
        redirect('/unauthorized')
        return
    }
    if (session?.user?.role === 'user') {
        redirect('/unauthorized')
        return
    }
}