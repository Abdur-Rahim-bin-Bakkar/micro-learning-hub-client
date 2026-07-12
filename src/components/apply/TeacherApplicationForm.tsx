"use client";


import { useUserSession } from "@/lib/sessions/session";
import UserInfoCard from "./UserInfoCard";
import { createTeacherApplication } from "@/lib/api/application/teacher";



export default function TeacherApplicationForm() {



    // পরে এখানে better auth session থেকে আসবে
    const { session } = useUserSession()
    console.log(session?.user, 'us')

    const user = session?.user





    const handleTeacherSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        const form = e.currentTarget;

        const formData = new FormData(e.currentTarget);

        const teacherData = {
            name: user?.name ?? "",
            email: user?.email ?? "",
            image: user?.image ?? "",
            userId: user?.id ?? "",

            subject: formData.get("subject"),
            experience: formData.get("experience"),
            qualification: formData.get("qualification"),
        };

        const result = await createTeacherApplication(teacherData);

        if (result.success) {
            console.log("Teacher Application Added");
            console.log(result.data);

            form.reset();
        } else {
            console.log(result.message);
        }
    };





    return (


        <div className="bg-white p-6 rounded-xl shadow">


            <UserInfoCard />



            <form

                onSubmit={handleTeacherSubmit}

                className="space-y-4"

            >



                <input

                    type="text"

                    name="subject"

                    placeholder="Teaching Subject"

                    required

                    className="w-full border p-3 rounded-lg"

                />



                <input

                    type="text"

                    name="experience"

                    placeholder="Teaching Experience"

                    required

                    className="w-full border p-3 rounded-lg"

                />



                <input

                    type="text"

                    name="qualification"

                    placeholder="Qualification"

                    required

                    className="w-full border p-3 rounded-lg"

                />




                <button

                    type="submit"

                    className="bg-blue-600 text-white px-6 py-3 rounded-lg"

                >

                    Submit Teacher Application

                </button>



            </form>


        </div>


    );


}