"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const form = () => {
  const router = useRouter();

  // State to hold search criteria
  const [searchCriteria, setSearchCriteria] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    state: "",
    zipCode: "",
    drivingLicenseNo: "",
    idCardNo: "",
  });

  // State for search results
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle form submission for search
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      // // Perform search API call
      const response = await axios.get("/api/users/search", {
        params: searchCriteria,
      });

      setSearchResults(response.data);

      // // Check authentication status before redirect
      if (isAuthenticated()) {
        // Pass search results to profile page via query params
        router.push({
          pathname: "/profile",
          query: searchResults ,
        });
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.error("Error searching users:", error);
    }
  };
  // State to determine if all required fields are filled
  const [isFormValid, setIsFormValid] = useState(false);

  // Function to check if all required fields are filled
  const isFormFilled = () => {
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      state,
      zipCode,
      idCardNo,
      drivingLicenseNo,
      address,
    } = searchCriteria;
    return (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      password !== "" &&
      phoneNumber !== "" &&
      state !== "" &&
      zipCode !== "" &&
      idCardNo !== "" &&
      drivingLicenseNo !== "" &&
      address !== ""
    );
  };

  useEffect(() => {
    setIsFormValid(isFormFilled());
  }, [searchCriteria]);

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  const isAuthenticated = () => {
    // Check if token exists in cookies
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));

    if (token) {
      const tokenValue = token.split("=")[1]; // Extract token value

      return true;
    }

    return false;
  };

  return (
    <>
      <div className="w-[85%] mx-auto">
        <form onSubmit={handleSearch}>
          <div className="flex mb-3">
            <div className="flex flex-col w-1/3">
              <label htmlFor="first-name"></label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                placeholder="| First Name"
                className="border border-gray-500 p-4 rounded-xl bg-white text-black hover:bg-warning mt-2 outline-none h-[71px] w-[416px]"
                value={searchCriteria.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col w-1/3">
              <label htmlFor="last-name"></label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                placeholder="| Last Name"
                className="border border-gray-500 p-4 rounded-xl bg-white text-black hover:bg-warning mt-2 outline-none h-[71px] w-[416px]"
                value={searchCriteria.lastName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="flex flex-col w-1/3">
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="| Email"
                className="border border-gray-500 p-4 rounded-xl bg-white text-black hover:bg-warning mt-2 outline-none h-[71px] w-[416px] "
                value={searchCriteria.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="flex mb-3">
            <div className="flex flex-col w-1/3">
              <label htmlFor="phone-number"></label>
              <input
                type="text"
                id="phone-number"
                name="phoneNumber"
                placeholder="| Phone No"
                className="border border-gray-500 p-4 rounded-xl bg-white text-black hover:bg-warning mt-2 outline-none h-[71px] w-[416px]"
                value={searchCriteria.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col w-1/3">
              <label htmlFor="address"></label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="| Address"
                className="border border-gray-500 p-4 rounded-xl bg-white text-black hover:bg-warning mt-2 outline-none h-[71px] w-[416px]"
                value={searchCriteria.address}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="flex flex-col w-1/3">
              <label htmlFor="state"></label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="| State"
                className="border border-gray-500 p-4 rounded-xl bg-white text-black hover:bg-warning mt-2 outline-none h-[71px] w-[416px] "
                value={searchCriteria.state}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="flex mb-3">
            <div className="flex flex-col w-1/3">
              <label htmlFor="zip-Code"></label>
              <input
                type="text"
                id="zip-code"
                name="zipCode"
                placeholder="| Zip Code"
                className="border border-gray-500 p-4 rounded-xl bg-white text-black hover:bg-warning mt-2 outline-none h-[71px] w-[416px]"
                value={searchCriteria.zipCode}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col w-1/3">
              <label htmlFor="driving-license-no"></label>
              <input
                type="text"
                id="driving-license-no"
                name="drivingLicenseNo"
                placeholder="| Driving License No"
                className="border border-gray-500 p-4 rounded-xl bg-white text-black hover:bg-warning mt-2 outline-none h-[71px] w-[416px]"
                value={searchCriteria.drivingLicenseNo}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="flex flex-col w-1/3">
              <label htmlFor="id-card-no"></label>
              <input
                type="text"
                id="id-card-no"
                name="idCardNo"
                placeholder="| ID Card No"
                className="border border-gray-500 p-4 rounded-xl bg-white text-black hover:bg-warning mt-2 outline-none h-[71px] w-[416px] "
                value={searchCriteria.idCardNo}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className={`bg-warning hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-3xl w-[630px] h-[75px] mt-6 text-2xl mb-10`}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default form;
