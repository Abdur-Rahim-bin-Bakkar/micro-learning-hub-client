"use client";

import { useUserSession } from "@/lib/sessions/session";
import Image from "next/image";


type UserInfo = {

    name: string;

    email: string;

    image: string;

}



interface Props {

    user: UserInfo;

}



export default function UserInfoCard() {
    const { session } = useUserSession()
    console.log(session?.user, 'us')

    const user = session?.user


    return (

        <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl mb-6">


            <Image
                unoptimized

                src={user?.image}

                width={60}

                height={60}

                alt="profile"

                className="rounded-full"

            />



            <div>

                <h2 className="font-bold">
                    {user?.name}
                </h2>


                <p className="text-sm text-gray-500">
                    {user?.email}
                </p>


            </div>



        </div>

    );

}