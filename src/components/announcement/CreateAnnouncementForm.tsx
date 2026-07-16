"use client";

import { createAnnouncement } from "@/lib/api/announcement/createAnnouncement";
import {
    Button,
    Input,
    TextArea,
} from "@heroui/react";

import { useState } from "react";

// .env ফাইল থেকে কী নেওয়া হচ্ছে
const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_KEY;

const typeOptions = [
    { id: "course-update", label: "Course Update" },
    { id: "system-update", label: "System Update" },
    { id: "event", label: "Event" },
    { id: "maintenance", label: "Maintenance" },
];

const priorityOptions = [
    { id: "low", label: "Low" },
    { id: "medium", label: "Medium" },
    { id: "high", label: "High" },
];

const audienceOptions = [
    { id: "student", label: "Student" },
    { id: "teacher", label: "Teacher" },
    { id: "admin", label: "Admin" },
];

const statusOptions = [
    { id: "draft", label: "Draft" },
    { id: "published", label: "Published" },
];

export default function CreateAnnouncementForm() {
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        description: "",
        image: "",
        type: "",
        priority: "",
        targetAudience: [] as string[],
        status: "",
    });

    const [isUploading, setIsUploading] = useState(false);
    const [formMessage, setFormMessage] = useState<{ text: string; isError: boolean } | null>(null);

    // টেক্সট ইনপুট এবং সিঙ্গেল সিলেক্টের জন্য হ্যান্ডলার
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (formMessage) setFormMessage(null);
    };

    // মাল্টিপল সিলেক্টের (Target Audience) জন্য বিশেষ হ্যান্ডলার
    const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const options = e.target.options;
        const selectedValues: string[] = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedValues.push(options[i].value);
            }
        }
        setFormData((prev) => ({
            ...prev,
            targetAudience: selectedValues,
        }));
        if (formMessage) setFormMessage(null);
    };

    // ImgBB Image Upload Handler
    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!IMGBB_API_KEY) {
            setFormMessage({ text: "Error: .env ফাইলে NEXT_PUBLIC_IMGBB_KEY পাওয়া যায়নি!", isError: true });
            return;
        }

        setIsUploading(true);
        setFormMessage(null);
        
        const uploadData = new FormData();
        uploadData.append("image", file);

        try {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
                method: "POST",
                body: uploadData,
            });

            const result = await response.json();
            if (result.success) {
                setFormData((prev) => ({
                    ...prev,
                    image: result.data.url,
                }));
            } else {
                setFormMessage({ text: "ইমেজ আপলোড ব্যর্থ হয়েছে। আবার চেষ্টা করুন।", isError: true });
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            setFormMessage({ text: "ইমেজ আপলোডের সময় কোনো একটি সমস্যা হয়েছে।", isError: true });
        } finally {
            setIsUploading(false);
        }
    };

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
        !formData.title.trim() ||
        !formData.slug.trim() ||
        !formData.description.trim() ||
        !formData.type ||
        !formData.priority ||
        !formData.status ||
        formData.targetAudience.length === 0
    ) {
        setFormMessage({
            text: "সবগুলো প্রয়োজনীয় ফিল্ড পূরণ করুন",
            isError: true,
        });

        return;
    }

    try {
        const result = await createAnnouncement(formData);

        console.log(result, 'post res');

        setFormMessage({
            text: "Announcement Created Successfully",
            isError: false,
        });

        setFormData({
            title: "",
            slug: "",
            description: "",
            image: "",
            type: "",
            priority: "",
            targetAudience: [],
            status: "",
        });

    } catch (error) {
        console.error(error);

        setFormMessage({
            text:
                error instanceof Error
                    ? error.message
                    : "Something went wrong",
            isError: true,
        });
    }
};

    return (
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800/80 bg-slate-950 p-8 shadow-2xl shadow-indigo-500/5 text-slate-100 my-10 backdrop-blur-sm">
            <h1 className="mb-2 text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Create Announcement
            </h1>
            <p className="text-slate-400 mb-8 text-sm">Fill out the details below to publish a new announcement.</p>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Title */}
                <div className="focus-within:ring-2 focus-within:ring-blue-500/40 rounded-xl transition-all duration-200">
                    <Input
                        // label="Title *"
                        name="title"
                        placeholder="Enter announcement title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full text-slate-900"
                    />
                </div>

                {/* Slug */}
                <div className="focus-within:ring-2 focus-within:ring-blue-500/40 rounded-xl transition-all duration-200">
                    <Input
                        // label="Slug *"
                        name="slug"
                        placeholder="new-course-release"
                        value={formData.slug}
                        onChange={handleChange}
                        className="w-full text-slate-900"
                    />
                </div>

                {/* Description */}
                <div className="focus-within:ring-2 focus-within:ring-blue-500/40 rounded-xl transition-all duration-200">
                    <TextArea
                        // label="Description *"
                        name="description"
                        placeholder="Write description here..."
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full text-slate-900"
                    />
                </div>

                {/* Image Upload Field */}
                <div className="flex flex-col gap-2 p-5 rounded-xl border border-dashed border-slate-800 bg-slate-900/30 focus-within:border-blue-500/60 transition-all duration-300">
                    <label className="text-sm font-medium text-slate-300">Announcement Banner (Optional)</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-slate-800 file:text-slate-200 hover:file:bg-slate-700 hover:file:text-white cursor-pointer file:transition-all"
                    />
                    {isUploading && <p className="text-xs text-blue-400 animate-pulse mt-1">Uploading image to ImgBB...</p>}
                    {formData.image && (
                        <div className="mt-2">
                            <p className="text-xs text-emerald-400 mb-2 font-medium">✓ Uploaded successfully!</p>
                            <img src={formData.image} alt="Preview" className="h-28 w-auto object-cover rounded-xl border border-slate-800 shadow-md" />
                        </div>
                    )}
                </div>

                {/* Default HTML Select Box Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Type */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-300">Type *</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239CB3C9%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_16px_center] bg-no-repeat pr-10"
                        >
                            <option value="" disabled className="bg-slate-950">Select Type</option>
                            {typeOptions.map((item) => (
                                <option key={item.id} value={item.id} className="bg-slate-950 text-slate-200">{item.label}</option>
                            ))}
                        </select>
                    </div>

                    {/* Priority */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-300">Priority *</label>
                        <select
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239CB3C9%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_16px_center] bg-no-repeat pr-10"
                        >
                            <option value="" disabled className="bg-slate-950">Select Priority</option>
                            {priorityOptions.map((item) => (
                                <option key={item.id} value={item.id} className="bg-slate-950 text-slate-200">{item.label}</option>
                            ))}
                        </select>
                    </div>

                    {/* Status */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-300">Status *</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239CB3C9%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_16px_center] bg-no-repeat pr-10"
                        >
                            <option value="" disabled className="bg-slate-950">Select Status</option>
                            {statusOptions.map((item) => (
                                <option key={item.id} value={item.id} className="bg-slate-950 text-slate-200">{item.label}</option>
                            ))}
                        </select>
                    </div>

                    {/* Target Audience (Multiple Select) */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-300">Target Audience * <span className="text-xs text-slate-500">(Ctrl/Cmd চেপে একাধিক সিলেক্ট করুন)</span></label>
                        <select
                            multiple
                            name="targetAudience"
                            value={formData.targetAudience}
                            onChange={handleMultiSelectChange}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200 cursor-pointer h-[46px] overflow-y-auto"
                        >
                            {audienceOptions.map((item) => (
                                <option key={item.id} value={item.id} className="bg-slate-950 text-slate-200 py-1 checked:bg-indigo-600 checked:text-white">{item.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Submit Button & Messages */}
                <div className="space-y-4 pt-4">
                    <Button
                        type="submit"
                        // color="primary"
                        // disabled={isUploading}
                        className="w-full py-4 text-base font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 tracking-wide"
                    >
                        {isUploading ? "Uploading Image..." : "Create Announcement"}
                    </Button>

                    {formMessage && (
                        <div className={`text-center text-sm font-semibold tracking-wide transition-all duration-300 p-3 rounded-xl border ${
                            formMessage.isError 
                                ? "text-red-400 bg-red-950/30 border-red-900/50" 
                                : "text-emerald-400 bg-emerald-950/30 border-emerald-900/50"
                        }`}>
                            {formMessage.text}
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}