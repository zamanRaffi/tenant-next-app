"use client"


import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const header = () => {
 
  const router = useRouter();

  const logOut = async () =>{

    try {
      await axios.get('/api/users/logout');
       
      router.push('/login')

      
    } catch (error) {
       console.log(error.message)
       toast.error(error.message)
    }
  }

  const pathName = usePathname();
  const isProfilePage = pathName.startsWith('/profile');
  return (

    <header className="bg-gray-900 w-full">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <Link href="/" className="flex items-center flex-shrink-0 mr-6">
          <Image className="mr-4" src="/logo.png" width={100} height={120} alt="logo" />
        </Link>

        <div className="w-full  flex-grow lg:flex lg:items-center lg:w-auto ">
          <div
            className="text-sm lg:flex-grow "

          >
            <ul className="flex justify-center lg:justify-end text-lg">
              <li className="nav-item">
                <Link href='/' className={` text-white ${pathName === "/" ? "active" : ""}`}> Home </Link>
              </li>
              <li className="nav-item ml-3">
                <Link href='/pricing' className={` text-white ${pathName === "/pricing" ? "active" : ""}`}> Pricing </Link>
              </li>
              <li className="nav-item ml-3">
                <Link href='/getAccredited' className={` text-white ${pathName === "/getAccredited" ? "active" : ""}`}>Get Accredited</Link>
              </li>
              <li className="nav-item ml-3 mr-2">
                <Link href='/startReview' className={` text-white ${pathName === "/startReview" ? "active" : ""}`}>Start A Review</Link>
              </li>
            </ul>
          </div>

          <div className="justify-center">
          {isProfilePage ? (
              <button className="btn btn-warning text-md-center" onClick={logOut}>
                Logout
                <svg
                  className="text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="20"
                  viewBox="0 0 512 512"
                >
                  <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/>
                </svg>
              </button>
            ) : (
              <Link href="/login">
                <button className="btn btn-warning text-md-center">
                  Login
                  <svg
                    className="text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    width="20"
                    viewBox="0 0 512 512"
                  >
                    <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/>
                  </svg>
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>


  );
};

export default header;