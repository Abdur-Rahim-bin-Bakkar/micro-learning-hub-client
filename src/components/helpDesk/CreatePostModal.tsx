"use client";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
  TextArea,
} from "@heroui/react";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  HiOutlinePhoto,
  HiOutlineTrash,
} from "react-icons/hi2";

interface Props {
  open: boolean;
  onClose: () => void;
}

const CreatePostModal = ({ open, onClose }: Props) => {
  const fileRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  const [issue, setIssue] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(file);

    setPreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setImage(null);
    setPreview("");

    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  const handleSubmit = async () => {
    if (!image || !issue || !description) return;

    setLoading(true);

    setTimeout(() => {
      console.log({
        image,
        issue,
        description,
        userId: "USER_ID_FROM_SESSION",
      });

      setLoading(false);

      setImage(null);
      setPreview("");
      setIssue("");
      setDescription("");

      onClose();
    }, 800);
  };

  return (
    <Modal
      isOpen={open}
      onOpenChange={onClose}
      size="2xl"
      scrollBehavior="inside"
    >
      <div>
        <>
          <ModalHeader>
            <h2 className="text-2xl font-bold">
              Create Help Post
            </h2>
          </ModalHeader>

          <ModalBody>

            <input
              hidden
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={handleImage}
            />

            {!preview ? (
              <button
                onClick={() => fileRef.current?.click()}
                className="flex h-60 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-400 bg-blue-50 transition hover:bg-blue-100"
              >
                <HiOutlinePhoto
                  size={70}
                  className="text-blue-500"
                />

                <p className="mt-4 font-semibold">
                  Upload Image
                </p>

                <span className="text-sm text-gray-500">
                  JPG PNG WEBP
                </span>
              </button>
            ) : (
              <div className="relative h-72 w-full overflow-hidden rounded-2xl">

                <Image
                  fill
                  src={preview}
                  alt=""
                  className="object-cover"
                />

                <Button
                  isIconOnly
                  color="danger"
                  className="absolute right-3 top-3 z-20"
                  onPress={removeImage}
                >
                  <HiOutlineTrash size={20} />
                </Button>

              </div>
            )}

            <Input
              label="Issue / Problem"
              placeholder="Example: React build error"
              value={issue}
              onValueChange={setIssue}
              isRequired
            />

            <TextArea
              label="Description"
              placeholder="Describe your problem..."
              minRows={6}
              value={description}
              onValueChange={setDescription}
              isRequired
            />

          </ModalBody>

          <ModalFooter>

            <Button
              variant="flat"
              onPress={onClose}
            >
              Cancel
            </Button>

            <Button
              color="primary"
              onPress={handleSubmit}
              isDisabled={
                !image ||
                !issue ||
                !description ||
                loading
              }
            >
              {loading ? (
                <>
                  <Spinner size="sm" color="white" />
                  Uploading...
                </>
              ) : (
                "Submit Post"
              )}
            </Button>

          </ModalFooter>
        </>
      </div>
    </Modal>
  );
};

export default CreatePostModal;