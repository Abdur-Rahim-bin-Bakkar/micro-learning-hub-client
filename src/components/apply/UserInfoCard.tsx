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
    const { session } = useUserSession();
    console.log(session?.user, 'us');

    const user = session?.user;

    return (
        <div className="flex items-center gap-4 bg-slate-900/60 border border-slate-800/80 p-4 rounded-xl mb-6 shadow-inner transition-all duration-300 hover:border-cyan-500/30">
            {
                user?.image && (
                    <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                        <Image
                            unoptimized
                            src={user?.image}
                            width={60}
                            height={60}
                            alt="profile"
                            className="rounded-full object-cover w-[52px] h-[52px] bg-slate-950"
                        />
                    </div>
                )
            }

            <div className="min-w-0">
                <h2 className="font-bold text-base text-white tracking-wide truncate">
                    {user?.name}
                </h2>

                <p className="text-xs font-medium text-slate-400 tracking-normal mt-0.5 truncate">
                    {user?.email}
                </p>
            </div>
        </div>
    );
}