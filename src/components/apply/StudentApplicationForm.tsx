"use client";


import { useState } from "react";
import UserInfoCard from "./UserInfoCard";
import { useUserSession } from "@/lib/sessions/session";
// import UserInfoCard from "./UserInfoCard";


export default function StudentApplicationForm() {
    const { session } = useUserSession()
    console.log(session?.user, 'us')

    const user = session?.user


  



    const handleStudentSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {


        e.preventDefault();


        const form = e.currentTarget;


        const data = {


            name: user?.name,

            email: user?.email,

            image: user?.image,
            userId:user?.id,


            education:
                (form.elements.namedItem("education") as HTMLInputElement).value,


            interest:
                (form.elements.namedItem("interest") as HTMLInputElement).value,


            goal:
                (form.elements.namedItem("goal") as HTMLInputElement).value,


        };



        console.log(
            "Student Application:",
            data
        );


    }



    return (

        <div className="bg-white p-6 rounded-xl shadow">


            <UserInfoCard />



            <form
                onSubmit={handleStudentSubmit}
                className="space-y-4"
            >


                <input
                    name="education"
                    required
                    placeholder="Current Education"
                    className="input input-bordered w-full"
                />



                <input
                    name="interest"
                    required
                    placeholder="Learning Interest"
                    className="input input-bordered w-full"
                />



                <input
                    name="goal"
                    required
                    placeholder="Career Goal"
                    className="input input-bordered w-full"
                />



                <button
                    className="bg-green-600 text-white px-6 py-3 rounded-lg"
                >
                    Submit Student Application
                </button>



            </form>


        </div>

    )

}