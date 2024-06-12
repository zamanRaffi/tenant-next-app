"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
// import { useSession, signIn} from "next-auth/react"
const Login = () => {

  const router = useRouter();
//   const session = useSession();
// //  console.log(session);

  const [user, setUser] = useState({
    email: "",
    password: "",
  
});

const [buttonDisable, setButtonDisable] = useState(true);
const [passwordError, setPasswordError] = useState(false);
const [emailError, setEmailError] = useState("");

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};


const onLogin = async (e) => {
  e.preventDefault();
  if (!validateEmail(user.email)) {
    setEmailError("Please provide a valid email address.");
    return;
  }


  
  try {
    const response = await axios.post("/api/users/login", user);
    if (response.data.error) {
      if (response.data.error === "User not found") {
        setEmailError("User doesn't exist.");
      } else if (response.data.error === "Invalid credentials") {
        setPasswordError(true);
      }
      return;
    }
    router.push("../../profile");
} catch (error) {
    // console.log("Login failed", error.message);
    toast.error(error.message);
};

}

useEffect(() => {
  if (user.email.length > 0 && user.password.length > 0 ) {
      setButtonDisable(false);
     
  } else {
      setButtonDisable(true);
      
  }
}, [user.email,user.password]);


    return (
            
            <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-6  dark:bg-gray-800 dark:border-gray-700 rounded-md shadow-md lg:max-w-xl">
      <Link href="/" className="flex items-center justify-center mb-6 text-3xl font-semibold text-gray-900 dark:text-white">
          <Image src="/logo.png" priority={true} width={150} height={20} alt="logo"/>
   
      </Link>
        <form className="mt-6">
          <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm text-gray-900 dark:text-white">Your email</label>
            <input
             type="email" name="email" id="email" value={user.email} 
             onChange={(e) => {setUser({...user, email: e.target.value });
              setEmailError("");}} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required=""
            />

           {emailError && (
              <p className="mt-2 text-pink-600 text-sm">{emailError}</p>
            )}


          </div>
          <div className="mb-2">
          <label htmlFor="password" className="block mb-2 text-sm text-gray-900 dark:text-white">Password</label>
            <input
              type="password"  name="password" id="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
            />

 
                   {passwordError && <p className="mt-2 text-pink-600 text-sm">{passwordError}</p>}

          </div>
          <Link
            href="/forget"
            className="text-md text-yellow-500 hover:underline"
          >
            Forget Password?
          </Link>
          <div className="mt-4">
            <button className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${buttonDisable ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-400'}`} onClick={onLogin}>
              {buttonDisable ? "Can't Login": "Login"}
            </button>
          </div>
        </form>

        <div className="relative flex items-center justify-center w-full mt-6 border border-gray-600">
          <div className="absolute px-5 bg-gray-600 rounded-lg text-white">Or</div>
        </div>
        <div className="flex mt-6 gap-x-2">

          {/* google */}

          
          <button
            type="button"
            className="flex items-center justify-center w-full p-2 border border-gray-400  rounded-md focus:ring-2 focus:ring-black focus:ring-black hover:bg-gray-600"
            onClick={ async ()=> await signIn("google")}
          >
            
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5"
              fill="currentColor"

            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
          
          
          

          {/* github */}
          <button 
          type="button"
          className="flex items-center justify-center w-full p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600 hover:bg-gray-600"
          onClick={ async ()=> await signIn("github")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5"
              fill="currentColor"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>


          {/* twitter */}
          <button className="flex items-center justify-center w-full p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600 hover:bg-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5"
              fill="currentColor"
            >
              <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
            </svg>
          </button>
        </div>

        <p className="mt-4 text-sm text-center text-white">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-md text-yellow-500 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>

    </div>
    
            
            
             
             );
        
};

export default Login;