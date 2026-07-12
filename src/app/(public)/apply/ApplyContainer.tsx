"use client";

import { useEffect, useState } from "react";
import TeacherApplicationForm from "@/components/apply/TeacherApplicationForm";
import StudentApplicationForm from "@/components/apply/StudentApplicationForm";
import ApplicationStatusCard from "@/components/apply/ApplicationStatusCard";
import { getApplicationStatus } from "@/lib/api/application/status";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function ApplyPageContainer() {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter()


    const user = session?.user;


    const [activeTab, setActiveTab] = useState<
        "teacher" | "student"
    >("teacher");

    const [loading, setLoading] = useState<boolean>(true);

    const [applicationStatus, setApplicationStatus] = useState<any>(null);

    useEffect(() => {


        if (isPending) return;

        if (!user?.id) {

            setLoading(false);

            return;

        }

        const loadStatus = async () => {

            const result = await getApplicationStatus(user.id);

            setApplicationStatus(result);

            setLoading(false);

        };

        loadStatus();

    }, [user, isPending]);
   




    return (

        <div className="min-h-screen bg-gray-100 py-10">

            <div className="mx-auto max-w-4xl px-5">

                <h1 className="mb-8 text-center text-3xl font-bold">

                    Application Form

                </h1>



                {/* Already Applied */}

                {applicationStatus?.alreadyApplied ? (

                    <ApplicationStatusCard

                        application={applicationStatus.application}

                        type={applicationStatus.type}

                    />

                ) : (

                    <>

                        {/* Category */}

                        <div className="mb-8 flex justify-center gap-5">

                            <button

                                onClick={() => setActiveTab("teacher")}

                                className={`rounded-lg px-6 py-3 font-semibold transition ${activeTab === "teacher"

                                    ? "bg-blue-600 text-white"

                                    : "bg-white"

                                    }`}

                            >

                                Teacher

                            </button>



                            <button

                                onClick={() => setActiveTab("student")}

                                className={`rounded-lg px-6 py-3 font-semibold transition ${activeTab === "student"

                                    ? "bg-green-600 text-white"

                                    : "bg-white"

                                    }`}

                            >

                                Student

                            </button>

                        </div>



                        {activeTab === "teacher" ? (

                            <TeacherApplicationForm />

                        ) : (

                            <StudentApplicationForm />

                        )}

                    </>

                )}

            </div>

        </div>

    );

}