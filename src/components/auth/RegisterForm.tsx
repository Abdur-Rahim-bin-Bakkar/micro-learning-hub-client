"use client";


import { useState } from "react";
import { User, Mail, Lock, Upload } from "lucide-react";



type RegisterData = {

    name: string;
    email: string;
    password: string;
    role: string;
    image: string;

};




export default function RegisterForm() {


    const [imageFile, setImageFile] =
        useState<File | null>(null);



    const [formData, setFormData] =
        useState<RegisterData>({

            name: "",
            email: "",
            password: "",
            role: "Student",
            image: "",

        });







    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement
        >
    ) => {


        setFormData({

            ...formData,

            [e.target.name]: e.target.value,

        });


    };









    const uploadImage = async () => {


        if (!imageFile) return "";



        const data = new FormData();


        data.append(
            "image",
            imageFile
        );



        const res = await fetch(

            `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,

            {

                method: "POST",

                body: data,

            }

        );



        const result = await res.json();



        return result.data.url;


    };








    const handleRegister = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {


        e.preventDefault();




        let imageUrl = "";



        if (imageFile) {

            imageUrl = await uploadImage();

        }





        const registerData = {

            ...formData,

            image: imageUrl,

        };
        // console.log(registerData)



        console.log(
            "Register Data:",
            registerData
        );



        // এখানে API call হবে



    };







    return (

        <div className="w-full my-10 max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">



            <h1 className="text-center text-3xl font-bold text-white">

                Create Account

            </h1>



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

                       

                        onChange={handleChange}

                        placeholder="Full name"

                        className="mt-2 w-full rounded-xl bg-black/20 px-4 py-3 text-white"

                    />


                </div>






                <div>


                    <label className="text-gray-300">
                        Email
                    </label>


                    <input

                        name="email"

                       

                        onChange={handleChange}

                        placeholder="Email"

                        className="mt-2 w-full rounded-xl bg-black/20 px-4 py-3 text-white"

                    />


                </div>







                <div>


                    <label className="text-gray-300">
                        Password
                    </label>


                    <input

                        name="password"

                      

                        onChange={handleChange}

                        type="password"

                        placeholder="Password"

                        className="mt-2 w-full rounded-xl bg-black/20 px-4 py-3 text-white"

                    />


                </div>











                <div>


                    <label className="text-gray-300">
                        Profile Image
                    </label>


                    <label className="mt-2 flex cursor-pointer items-center gap-3 rounded-xl bg-black/20 px-4 py-3 text-gray-400">


                        <Upload />


                        Upload Image



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









                <button

                    type="submit"

                    className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"

                >

                    Register

                </button>





            </form>


        </div>

    );


}