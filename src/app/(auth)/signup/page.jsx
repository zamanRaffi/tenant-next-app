"use client"

import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
const SignupPage = () => {
  const router = useRouter();

  // State to hold form data
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    state: '',
    zipCode: '',
    idCardNo: '',
    drivingLicenseNo: '',
    address: ''
  });

  // State to determine if all required fields are filled
  const [isFormValid, setIsFormValid] = useState(false);

  // Function to handle form submission
  const onSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/users/signup", user);
      router.push("../../login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Function to check if all required fields are filled
  const isFormFilled = () => {
    const { firstName, lastName, email, password, phoneNumber, state, zipCode, idCardNo, drivingLicenseNo, address } = user;
    return firstName !== '' && lastName !== '' && email !== '' && password !== '' && phoneNumber !== '' && state !== '' && zipCode !== '' && idCardNo !== '' && drivingLicenseNo !== '' && address !== '';
  };

 

 useEffect(() => {
    setIsFormValid(isFormFilled());
   }, [user]);



  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <section className='bg-black'>
      <div className='p-14'>
        <h1 className="text-center text-5xl">YOUR 1 STEP CLOSER FROM</h1>
        <h1 className="text-center text-6xl mb-5">STOPPING A <strong>Trashy Tenant</strong></h1>
        <hr className="border-b-1 border-slate-200 mx-auto" style={{ width: "60%" }} />
      </div>

      <div className="flex items-center justify-center p-11">
        <div  className={`text-black p-8 rounded-xl shadow-lg w-full bg-[#d9d9d9] w-[95%]`}>

          <form onSubmit={onSignup}>
            <div className="flex space-x-4 mb-8">
              <div className="flex flex-col w-1/2">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  placeholder="Type Here"
                  className="border border-gray-500 rounded-lg p-2 bg-white text-black hover:bg-warning mt-2 outline-none"
                  value={user.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  placeholder="Type Here"
                  className="border border-gray-500 rounded-lg p-2 bg-white text-black hover:bg-warning mt-2 outline-none"
                  value={user.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="flex space-x-4 mb-8">
              <div className="flex flex-col w-1/2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Type Here"
                  className="border border-gray-500 rounded-lg p-2 bg-white text-black hover:bg-warning mt-2 outline-none w-full"
                  value={user.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex flex-col w-1/2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Type Here"
                  className="border border-gray-500 rounded-lg p-2 bg-white text-black hover:bg-warning mt-2 outline-none w-full"
                  value={user.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="flex space-x-4 mb-8">
              <div className="flex flex-col w-1/2">
                <label htmlFor="phone-number">Phone Number</label>
                <input
                  type="text"
                  id="phone-number"
                  name="phoneNumber"
                  placeholder="Type Here"
                  className="border border-gray-500 rounded-lg p-2 bg-white text-black hover:bg-warning mt-2 outline-none"
                  value={user.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="Type Here"
                  className="border border-gray-500 rounded-lg p-2 bg-white text-black hover:bg-warning mt-2 outline-none"
                  value={user.state}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="flex space-x-4 mb-8">
              <div className="flex flex-col w-1/2">
                <label htmlFor="zip-code">Zip Code</label>
                <input
                  type="text"
                  id="zip-code"
                  name="zipCode"
                  placeholder="Type Here"
                  className="border border-gray-500 rounded-lg p-2 bg-white text-black hover:bg-warning mt-2 outline-none"
                  value={user.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="id-card-no">ID Card No</label>
                <input
                  type="text"
                  id="id-card-no"
                  name="idCardNo"
                  placeholder="Type Here"
                  className="border border-gray-500 rounded-lg p-2 bg-white text-black hover:bg-warning mt-2 outline-none"
                  value={user.idCardNo}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="flex space-x-4 mb-8">
              <div className="flex flex-col w-1/2">
                <label htmlFor="driving-license-no">Driving License No</label>
                <input
                  type="text"
                  id="driving-license-no"
                  name="drivingLicenseNo"
                  placeholder="Type Here"
                  className="border border-gray-500 rounded-lg p-2 bg-white text-black hover:bg-warning mt-2 outline-none"
                  value={user.drivingLicenseNo}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex flex-col w-1/2">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Type Here"
                  className="border border-gray-500 rounded-lg p-2 bg-white text-black hover:bg-warning mt-2 outline-none"
                  value={user.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className='flex justify-center items-center'>
              <button
                type="submit"
                className={`bg-warning hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg w-72 h-12 mt-6 ${isFormValid ? '' : 'opacity-50 cursor-not-allowed'}`}
                disabled={!isFormValid}
              >
                Next
              </button>
            </div>
          </form>

          <p className="text-lg text-center mt-5 font-light text-black">Already have an account? <Link href="/login" className="font-medium text-warning hover:underline">Login here</Link></p>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;


