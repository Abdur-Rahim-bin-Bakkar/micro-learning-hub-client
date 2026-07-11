"use client";

import { useState } from "react";
import {
    Upload,
    Loader2,
} from "lucide-react";
"react-icons";

import { authClient } from "@/lib/auth-client";
import { router } from "better-auth/api";
import { useRouter } from "next/navigation";



type RegisterData = {
    name: string;
    email: string;
    password: string;
    image: string;
};




export default function RegisterForm() {
    let router = useRouter()


    const [imageFile, setImageFile] =
        useState<File | null>(null);


    const [loading, setLoading] =
        useState<boolean>(false);



    const [error, setError] =
        useState<string>("");



    const [formData, setFormData] =
        useState<RegisterData>({

            name: "",
            email: "",
            password: "",
            image: "",

        });







    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {


        setFormData({

            ...formData,

            [e.target.name]: e.target.value,

        });


        setError("");

    };








    const uploadImage = async (): Promise<string> => {


        if (!imageFile) {

            throw new Error(
                "Profile image is required"
            );

        }



        const imageData =
            new FormData();


        imageData.append(
            "image",
            imageFile
        );



        const response =
            await fetch(

                `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,

                {

                    method: "POST",

                    body: imageData,

                }

            );



        const result =
            await response.json();



        if (!result.success) {

            throw new Error(
                "Image upload failed"
            );

        }



        return result.data.url;


    };












    const validateForm = () => {


        if (!formData.name.trim()) {

            return "Please enter your name";

        }



        if (!formData.email.trim()) {

            return "Please enter your email";

        }



        if (!formData.password) {

            return "Please enter your password";

        }



        if (formData.password.length < 6) {

            return "Password must be at least 6 characters";

        }



        if (!imageFile) {

            return "Profile image is required";

        }



        return "";

    };









    const handleGoogleLogin = () => {


        alert(
            "Google Login function called"
        );


        // এখানে পরে Better Auth Google Login add করবে

    };









    const handleRegister = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {


        e.preventDefault();

        console.log('cliek hocch')

        const validationError =
            validateForm();



        if (validationError) {

            setError(validationError);

            return;

        }





        try {


            setLoading(true);


            setError("");



            const imageUrl =
                await uploadImage();







            const { data, error } =
                await authClient.signUp.email({

                    name:
                        formData.name,


                    email:
                        formData.email,


                    password:
                        formData.password,


                    image:
                        imageUrl,


                    callbackURL:
                        "/dashboard",

                });

                console.log(data,'data')
                console.log(error,'error')



            if (error) {


                setError(
                    error.message
                );


                return;


            }
            if(data){
                router.push('/')
            }





            console.log(
                data
            );



        }

        catch (err) {


            if (err instanceof Error) {

                setError(
                    err.message
                );

            }


        }


        finally {


            setLoading(false);


        }


    };












    return (


        <div className="my-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">


            <h1 className="text-center text-3xl font-bold text-white">

                Create Account

            </h1>



            <p className="mt-2 text-center text-gray-400">

                Join Micro Learning Hub

            </p>








            <form

                onSubmit={handleRegister}

                className="mt-8 space-y-5"

            >







                <div>


                    <label className="text-gray-300">

                        Name

                    </label>


                    <input

                        name="name"

                        value={formData.name}

                        onChange={handleChange}

                        placeholder="Full name"

                        className="mt-2 w-full rounded-xl bg-black/20 px-4 py-3 text-white outline-none"

                    />


                </div>









                <div>


                    <label className="text-gray-300">

                        Email

                    </label>


                    <input

                        name="email"

                        type="email"

                        value={formData.email}

                        onChange={handleChange}

                        placeholder="Email address"

                        className="mt-2 w-full rounded-xl bg-black/20 px-4 py-3 text-white outline-none"

                    />


                </div>








                <div>


                    <label className="text-gray-300">

                        Password

                    </label>


                    <input

                        name="password"

                        type="password"

                        value={formData.password}

                        onChange={handleChange}

                        placeholder="Password"

                        className="mt-2 w-full rounded-xl bg-black/20 px-4 py-3 text-white outline-none"

                    />


                </div>









                <div>


                    <label className="text-gray-300">

                        Profile Image

                    </label>


                    <label className="mt-2 flex cursor-pointer items-center gap-3 rounded-xl bg-black/20 px-4 py-3 text-gray-400">


                        <Upload size={20} />


                        {
                            imageFile
                                ?
                                imageFile.name
                                :
                                "Upload Image"
                        }



                        <input

                            type="file"

                            hidden

                            accept="image/*"

                            onChange={(e) => {


                                if (e.target.files) {

                                    setImageFile(
                                        e.target.files[0]
                                    );

                                }


                            }}


                        />


                    </label>


                </div>








                {/* Error Message */}


                {
                    error && (

                        <p className="rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-400">

                            {error}

                        </p>

                    )

                }









                <button

                    disabled={loading}

                    type="submit"

                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"

                >


                    {
                        loading &&
                        <Loader2
                            className="animate-spin"
                            size={20}
                        />
                    }


                    Register


                </button>







                {/* Google Button */}



                <button

                    type="button"

                    onClick={handleGoogleLogin}

                    className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3 font-semibold text-white hover:bg-white/10"

                >


                    <img
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        alt="Google"
                        className="h-5 w-5"
                    />


                    Continue with Google


                </button>






            </form>


        </div>


    );


}