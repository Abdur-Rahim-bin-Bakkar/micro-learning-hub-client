"use client";

import Image from "next/image";
import {
    CheckCircle,
    Clock3,
    XCircle,
    User,
    Mail,
    BookOpen,
    MessageSquare,
} from "lucide-react";

interface Props {
    application: any;
    type: "teacher" | "student";
}

export default function ApplicationStatusCard({
    application,
    type,
}: Props) {

    const status =
        application?.status?.toLowerCase() || "pending";

    const feedback =
        application?.feedback || "No feedback yet.";

    const badge = () => {

        switch (status) {

            case "approved":

                return (
                    <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700">
                        <CheckCircle size={18} />
                        Approved
                    </div>
                );

            case "rejected":

                return (
                    <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-red-700">
                        <XCircle size={18} />
                        Rejected
                    </div>
                );

            default:

                return (
                    <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-yellow-700">
                        <Clock3 size={18} />
                        Pending
                    </div>
                );

        }

    };

    return (

        <div className="rounded-2xl border bg-white p-8 shadow-lg">

            {/* Header */}

            <div className="flex flex-col items-center">

                <Image
                    src={application.image}
                    alt={application.name}
                    width={90}
                    height={90}
                                      unoptimized
                    className="rounded-full w-20 h-20 object-cover border-4 border-cyan-500"
                />

                <h2 className="mt-4 text-2xl font-bold">
                    {application.name}
                </h2>

                <p className="text-gray-500">
                    {application.email}
                </p>

                <div className="mt-5">
                    {badge()}
                </div>

            </div>

            {/* Divider */}

            <div className="my-8 border-t" />

            {/* Details */}

            <div className="grid gap-5 md:grid-cols-2">

                <div className="flex items-center gap-3">

                    <User className="text-cyan-700" />

                    <div>

                        <p className="text-sm text-gray-500">
                            Application Type
                        </p>

                        <p className="font-semibold capitalize">
                            {type}
                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-3">

                    <Mail className="text-cyan-700" />

                    <div>

                        <p className="text-sm text-gray-500">
                            Email
                        </p>

                        <p className="font-semibold">
                            {application.email}
                        </p>

                    </div>

                </div>

                {
                    type === "teacher"
                        ? (
                            <>
                                <div className="flex items-center gap-3">

                                    <BookOpen className="text-cyan-700" />

                                    <div>

                                        <p className="text-sm text-gray-500">
                                            Subject
                                        </p>

                                        <p className="font-semibold">
                                            {application.subject}
                                        </p>

                                    </div>

                                </div>

                                <div>

                                    <p className="text-sm text-gray-500">
                                        Experience
                                    </p>

                                    <p className="font-semibold">
                                        {application.experience}
                                    </p>

                                </div>

                                <div>

                                    <p className="text-sm text-gray-500">
                                        Qualification
                                    </p>

                                    <p className="font-semibold">
                                        {application.qualification}
                                    </p>

                                </div>

                            </>
                        )
                        : (
                            <>
                                <div>

                                    <p className="text-sm text-gray-500">
                                        Education
                                    </p>

                                    <p className="font-semibold">
                                        {application.education}
                                    </p>

                                </div>

                                <div>

                                    <p className="text-sm text-gray-500">
                                        Interest
                                    </p>

                                    <p className="font-semibold">
                                        {application.interest}
                                    </p>

                                </div>

                                <div>

                                    <p className="text-sm text-gray-500">
                                        Goal
                                    </p>

                                    <p className="font-semibold">
                                        {application.goal}
                                    </p>

                                </div>

                            </>
                        )
                }

            </div>

            {/* Feedback */}

            <div className="mt-8 rounded-xl bg-gray-100 p-5">

                <div className="mb-3 flex items-center gap-2">

                    <MessageSquare
                        className="text-cyan-500"
                        size={20}
                    />

                    <h3 className="font-semibold">
                        Admin Feedback
                    </h3>

                </div>

                <p className="text-cyan-500">
                    {feedback}
                </p>

            </div>

        </div>

    );

}