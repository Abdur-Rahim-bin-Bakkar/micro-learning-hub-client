"use client";

import { useState } from "react";
import TeacherApplicationForm from "@/components/apply/TeacherApplicationForm";
import StudentApplicationForm from "@/components/apply/StudentApplicationForm";


export default function ApplyPage() {


    const [activeTab, setActiveTab] = useState<
        "teacher" | "student"
    >("teacher");


    return (

        <div className="min-h-screen bg-gray-100 py-10">


            <div className="max-w-3xl mx-auto px-5">


                <h1 className="text-3xl font-bold text-center mb-8">
                    Application Form
                </h1>



                {/* Category Button */}

                <div className="flex justify-center gap-5 mb-8">


                    <button

                        onClick={() => setActiveTab("teacher")}

                        className={`px-6 py-3 rounded-lg font-semibold ${
                            activeTab === "teacher"
                            ?
                            "bg-blue-600 text-white"
                            :
                            "bg-white"
                        }`}

                    >
                        Teacher
                    </button>



                    <button

                        onClick={() => setActiveTab("student")}

                        className={`px-6 py-3 rounded-lg font-semibold ${
                            activeTab === "student"
                            ?
                            "bg-green-600 text-white"
                            :
                            "bg-white"
                        }`}

                    >
                        Student
                    </button>



                </div>



                {
                    activeTab === "teacher"
                    ?
                    <TeacherApplicationForm />
                    :
                    <StudentApplicationForm />
                }



            </div>


        </div>

    );

}