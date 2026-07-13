"use client";

import { useState } from "react";
import { Avatar, Button } from "@heroui/react";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import CreatePostModal from "./CreatePostModal";
import { useUserSession } from "@/lib/sessions/session";
import Image from "next/image";

const CreatePostCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const session = useUserSession()

  return (
    <>
      <div className="mx-auto mb-8 max-w-3xl rounded-3xl border  bg-gradient-to-br from-[#0B0F14] via-[#111827] to-[#1E293B] p-5 shadow-lg transition-all duration-300 hover:shadow-xl border-slate-700 dark:bg-slate-900">

        {/* Top */}

        <div className="flex items-center gap-4">
          {
            session?.user?.image &&
            < Image
              width={100}
              height={200}
              alt="user image"
              unoptimized
              src={session?.user?.image}
              className="h-12 w-12 rounded-full"
            />
          }


          <button
            onClick={() => setIsOpen(true)}
            className="flex-1 rounded-full bg-slate-100 px-5 py-3 text-left text-sm text-slate-500 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            What'es your problem today?
          </button>

        </div>


        <div className="my-5 h-px bg-slate-200 dark:bg-slate-700" />
        <CreatePostModal />

        {/* Bottom */}



      </div>


    </>
  );
};

export default CreatePostCard;