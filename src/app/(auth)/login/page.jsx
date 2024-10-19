"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";


const LoginForm = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [passwordError, setPasswordError] = useState(null);
  const [emailError, setEmailError] = useState(null);

  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const onLogin = async (e) => {
    e.preventDefault();
    setEmailError(null);
    setPasswordError(null); 

    try {
      const response = await axios.post("/api/users/login", user);
      if (response.data.error) {
       if (response.data.error === "User not found") {
          setEmailError("User not found");
        } else if (response.data.error === "Invalid credentials") {
          setPasswordError("Invalid credentials");
        }
        return;
      }
      
      router.push("/profile");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Effect to enable/disable the login button based on form validity
  useEffect(() => {
    if (user.email && user.password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user.email, user.password,]);



  return (
    <section className="bg-black h-screen">
      <div className="p-14">
        <h1 className="text-center text-4xl mb-2">YOUR 1 STEP CLOSER FROM</h1>
        <h1 className="text-center text-5xl mb-5">
          STOPPING A <strong>Trashy Tenant</strong>
        </h1>
        <hr className="border-b-1 border-slate-200 mx-auto" style={{ width: "60%" }} />
      </div>

      <div className="flex items-center justify-center p-11">
      <div className={`text-black p-8 rounded-xl shadow-lg w-full bg-[#d9d9d9] w-[95%]`}>


          <form onSubmit={onLogin}>
            <div className="mb-8">
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Type Here"
                  className="border border-gray-500 rounded-lg p-2 bg-white text-black hover:bg-warning mt-2 outline-none w-full"
                  value={user.email}
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                    if (!validateEmail(e.target.value)) {
                      setEmailError("Please provide a valid email address.");
                    } else {
                      setEmailError(null);
                    }
                  }}
                  required
                />
                {emailError && (
                  <p className="mt-2 text-pink-600 text-sm">{emailError}</p>
                )}
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Type Here"
                  className="border border-gray-500 rounded-lg p-2 bg-white text-black hover:bg-warning mt-2 outline-none w-full"
                  value={user.password}
                  onChange={(e) => setUser({...user, password: e.target.value})}
                  required
                />
                {passwordError && <p className="text-red-500">Invalid credentials.</p>}
              </div>
            </div>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className={`bg-warning hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg w-72 h-12 mt-6 ${
                  buttonDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={buttonDisabled}
              >
                Login
              </button>
            </div>
          </form>

          <p className="text-lg text-center mt-5 font-light text-black">
            Doesn't have an account?{" "}
            <Link href="/signup" className="font-medium text-warning hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;




