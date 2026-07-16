"use client";

import { useState } from "react";
import Image from "next/image";
import { Bug } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { createHelpDeskPost } from "@/lib/api/helpDesk/createHelpDeskPost";
import { useUserSession } from "@/lib/sessions/session";

interface ReportData {
  image: string;
  issue: string;
  description: string;
  userId: string;
  name: string;
  uimage: string
}


export default function CreatePostModal() {

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [issue, setIssue] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const session = useUserSession()

  const uploadImageToImgBB = async (file: File): Promise<string> => {
    const apiKey = process.env.NEXT_PUBLIC_IMGBB_KEY;

    if (!apiKey) {
      throw new Error("ImgBB API Key not found");
    }

    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    console.log("ImgBB Response:", data);

    if (!response.ok || !data.success) {
      throw new Error(data.error?.message || "Image upload failed");
    }

    return data.data.display_url;
  };

  const handleSubmit = async () => {
    if (!issue.trim()) {
      alert("Issue is required");
      return;
    }

    if (!description.trim()) {
      alert("Description is required");
      return;
    }

    try {
      setLoading(true);

      let imageUrl = "";

      if (imageFile) {
        imageUrl = await uploadImageToImgBB(imageFile);
      }

      if (!session?.user?.id) {
        alert("Please login first");
        return;
      }

      const reportData: ReportData = {
        image: imageUrl,
        issue,
        description,
        userId: session.user.id,
        uimage: session.user.image || "",
        name: session.user.name || "",
      };
      const result = await createHelpDeskPost(reportData);
      console.log(result, 'pst result')
      setImageFile(null);
      setPreview("");
      setIssue("");
      setDescription("");
    } catch (error) {
      console.error(error);
      alert("Failed to upload image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal>
      <Button className={'w-full'}>Create Post</Button>

      <Modal.Backdrop className="bg-black/70 backdrop-blur-sm">
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#0B1120] text-white shadow-2xl">
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header className="border-b border-white/10 px-6 py-5">
              <Modal.Icon className="bg-orange-500/15 text-cyan-400">
                <Bug className="size-5" />
              </Modal.Icon>

              <div>
                <Modal.Heading className="text-xl font-semibold text-white">
                  Create Post
                </Modal.Heading>

                <p className="mt-1 text-sm text-gray-400">
                  Upload an image and describe your issue.
                </p>
              </div>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="bg-[#0B1120] p-6">
              <Surface className="rounded-xl border border-white/10 bg-[#111827] p-6">
                <div className="space-y-6">
                  {/* Image */}

                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-gray-200">
                      Image (Optional)
                    </Label>

                    <input
                      type="file"
                      accept="image/*"
                      className="block w-full rounded-lg border border-white/10 bg-[#1F2937] p-3 text-sm text-gray-300 file:mr-4 file:rounded-md file:border-0 file:bg-cyan-400 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-cyan-400"
                      onChange={(e) => {
                        const file = e.target.files?.[0];

                        if (!file) return;

                        setImageFile(file);
                        setPreview(URL.createObjectURL(file));
                      }}
                    />

                    {preview && (
                      <div className="overflow-hidden rounded-xl border border-white/10">
                        <Image
                          src={preview}
                          alt="Preview"
                          width={180}
                          height={180}
                          className="h-44 w-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Issue */}

                  <TextField
                    className="w-full"
                    variant="secondary"
                    isRequired
                  >
                    <Label className="text-gray-200">
                      Issue / Problem
                    </Label>

                    <Input
                      placeholder="Enter issue..."
                      value={issue}
                      onChange={(e) => setIssue(e.target.value)}
                    />
                  </TextField>

                  {/* Description */}

                  <div className="space-y-2">
                    <Label
                      isRequired
                      className="text-sm font-medium text-gray-200"
                    >
                      Description
                    </Label>

                    <TextArea
                      placeholder="Write description..."
                      value={description}
                      onChange={(
                        e: React.ChangeEvent<HTMLTextAreaElement>
                      ) => setDescription(e.target.value)}
                      className="min-h-32 w-full"
                    />
                  </div>
                </div>
              </Surface>
            </Modal.Body>

            {/* Footer */}

            <Modal.Footer className="border-t border-white/10 bg-[#0B1120] px-6 py-5">
              <Button
                slot="close"
                variant="secondary"
              >
                Cancel
              </Button>

              <Button
                slot="close"
                // isLoading={loading}
                onPress={handleSubmit}
                className="bg-cyan-400 font-medium text-white hover:bg-cyan-700"
              >
                Submit
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}