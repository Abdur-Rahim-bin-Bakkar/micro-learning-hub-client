"use client";

import { Button, Avatar } from "@heroui/react";
import { HiOutlinePlus } from "react-icons/hi2";
import { useState } from "react";
import CreatePostModal from "./CreatePostModal";

const CreatePostCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-5 shadow-lg dark:border-slate-700 dark:bg-slate-900">

        <div className="flex items-center gap-4">

          <Avatar
            size="lg"
            src="https://i.pravatar.cc/300"
          />

          <button
            onClick={() => setOpen(true)}
            className="flex-1 rounded-full bg-slate-100 px-6 py-4 text-left text-slate-500 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            Ask a question or share your problem...
          </button>

        </div>

        <div className="mt-5">

          <Button
            onPress={() => setOpen(true)}
            radius="full"
            color="primary"
            className="w-full h-12 text-base font-semibold"
            startContent={<HiOutlinePlus size={20} />}
          >
            Create Post
          </Button>

        </div>

      </div>

      <CreatePostModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default CreatePostCard;