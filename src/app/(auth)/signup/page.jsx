"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {

    const router = useRouter();

    const [user, setUser] = useState({
        email: "",
        password: "",
        confirm_password: ""
    });

    const [buttonDisable, setButtonDisable] = useState(true);
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    const onSignup = async (e) => {
        try {
           e.preventDefault();
         await axios.post("/api/users/signup", user);
            router.push("../../login");

        } catch (error) {
            toast.error(error.message);
        }

    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.confirm_password.length > 0 && user.password === user.confirm_password) {
            setButtonDisable(false);
           
        } else {
            setButtonDisable(true);
        }

        if(user.password === user.confirm_password){
            setPasswordMatchError(false);
        }
        else{
            setPasswordMatchError(true);
        }

        // console.log("i am effect")
    }, [user.email, user.password, user.confirm_password]);

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            <Image className="mr-2" src="/logo.png" priority={true} width={150} height={20} alt="logo"/>
                       
                    </Link>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create an account</h1>

                            <form className="space-y-4 md:space-y-6"  method='POST'>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} required/>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                                </div>
                                <div>
                                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input type="password" name="confirm_password" id="confirm_password" placeholder="••••••••" value={user.confirm_password} onChange={(e) => setUser({...user, confirm_password: e.target.value})} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${passwordMatchError ? 'border-red-500' : ''}`} required/>
                                    {passwordMatchError && <p className="text-xs text-red-500">Passwords do not match</p>}
                                </div>
                                <button type="submit" className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${buttonDisable ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-400'}`} onClick={onSignup} disabled={buttonDisable}>{buttonDisable ? "Can't Create an account" : "Create an account"}</button>


                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account? <Link href="/login" className="font-medium text-yellow-500 hover:underline">Login here</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Signup;
