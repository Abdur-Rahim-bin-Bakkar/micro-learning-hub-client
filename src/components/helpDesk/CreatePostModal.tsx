"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Button,
  Input,
  Modal,
  Spinner,
  Textarea,
} from "@heroui/react";
import {
  HiOutlinePhoto,
  HiOutlineTrash,
} from "react-icons/hi2";

interface Props {
  open: boolean;
  onClose: () => void;
}

const CreatePostModal = ({
  open,
  onClose,
}: Props) => {
  const fileRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState<File | null>(
    null
  );
  const [preview, setPreview] = useState("");

  const [issue, setIssue] = useState("");
  const [description, setDescription] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setImage(file);

    const url = URL.createObjectURL(file);

    setPreview(url);
  };

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const removeImage = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setImage(null);
    setPreview("");

    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  const resetForm = () => {
    removeImage();

    setIssue("");
    setDescription("");
  };

  const handleSubmit = async () => {
    if (
      !image ||
      !issue.trim() ||
      !description.trim()
    ) {
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("image", image);
      formData.append("issue", issue);
      formData.append(
        "description",
        description
      );

      console.log(formData);

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      resetForm();

      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          resetForm();
          onClose();
        }
      }}
    >
      <Modal.Backdrop />

      <Modal.Container>
        <Modal.Dialog className="max-w-2xl rounded-3xl">
          <Modal.CloseTrigger />

          <Modal.Header>
            <Modal.Heading className="text-2xl font-bold">
              Create Help Post
            </Modal.Heading>
          </Modal.Header>

          <Modal.Body className="space-y-5">
            <input
              hidden
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={handleImage}
            />

            {!preview ? (
              <button
                type="button"
                onClick={() =>
                  fileRef.current?.click()
                }
                className="flex h-64 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary bg-primary/5 transition hover:bg-primary/10"
              >
                <HiOutlinePhoto
                  size={70}
                  className="text-primary"
                />

                <h3 className="mt-4 text-lg font-semibold">
                  Upload Screenshot
                </h3>

                <p className="text-sm text-default-500">
                  JPG • PNG • WEBP
                </p>
              </button>
            ) : (
              <div className="relative h-72 overflow-hidden rounded-2xl">
                <Image
                  src={preview}
                  alt="Preview"
                  fill
                  unoptimized
                  className="object-cover"
                />

                <Button
                  isIconOnly
                  color="danger"
                  radius="full"
                  className="absolute right-4 top-4"
                  onPress={removeImage}
                >
                  <HiOutlineTrash
                    size={18}
                  />
                </Button>
              </div>
            )}

            <Input
              label="Issue / Problem"
              placeholder="Example: React build error"
              value={issue}
              onValueChange={setIssue}
            />

            <Textarea
              label="Description"
              placeholder="Describe your issue..."
              value={description}
              onValueChange={
                setDescription
              }
              minRows={6}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="flat"
              slot="close"
              onPress={() => {
                resetForm();
                onClose();
              }}
            >
              Cancel
            </Button>

            <Button
              color="primary"
              onPress={handleSubmit}
              isDisabled={
                loading ||
                !image ||
                !issue.trim() ||
                !description.trim()
              }
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  Uploading...
                </>
              ) : (
                "Submit Post"
              )}
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal.Container>
    </Modal>
  );
};

export default CreatePostModal;