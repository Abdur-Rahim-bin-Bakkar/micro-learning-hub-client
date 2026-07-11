"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";


type LoginData = {
  email: string;
  password: string;
};


export default function LoginForm() {


const [showPassword,setShowPassword] =
useState<boolean>(false);



const [formData,setFormData] = 
useState<LoginData>({
  email:"",
  password:"",
});




const handleChange = (
e: React.ChangeEvent<HTMLInputElement>
)=>{


setFormData({

...formData,

[e.target.name]: e.target.value,

});


};





const handleLogin = (
e: React.FormEvent<HTMLFormElement>
)=>{

e.preventDefault();



console.log("Login Data:",formData);


// এখানে API call হবে

};





return (

<div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">


<h1 className="text-center text-3xl font-bold text-white">

Welcome Back

</h1>


<p className="mt-2 text-center text-gray-400">

Login to continue learning

</p>





<form
onSubmit={handleLogin}
className="mt-8 space-y-5"
>



<div>


<label className="text-sm text-gray-300">
Email
</label>


<div className="relative mt-2">


<Mail
className="absolute left-3 top-3 text-gray-400"
/>


<input

name="email"


onChange={handleChange}

type="email"

placeholder="Enter email"

className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-11 text-white outline-none"

 />


</div>


</div>





<div>


<label className="text-sm text-gray-300">

Password

</label>



<div className="relative mt-2">


<Lock
className="absolute left-3 top-3 text-gray-400"
/>



<input

name="password"


onChange={handleChange}


type={
showPassword
?
"text"
:
"password"
}


placeholder="Enter password"


className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-11 pr-11 text-white outline-none"

/>




<button

type="button"

onClick={()=>setShowPassword(!showPassword)}

className="absolute right-3 top-3 text-gray-400"

>


{
showPassword
?
<EyeOff/>
:
<Eye/>
}


</button>



</div>



</div>






<button

type="submit"

className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"

>

Login

</button>





</form>



</div>

);


}