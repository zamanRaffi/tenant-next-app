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

  const logOut = async () => {

    try {
      await axios.get('/api/users/logout');

      router.push('/login')


    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  }

  const pathName = usePathname();
  const isHomePage = pathName === '/';
  const isProfilePage = pathName.startsWith('/profile');
  return (

    <header>
      <nav className="lg:p-6 flex items-center justify-between relative">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image className="ml-5" src="/logo.png" width={130} height={120} alt="brand-logo" />
        </Link>

        <div className="flex items-center justify-center flex-grow">
          <ul className="flex justify-center items-center text-lg space-x-3">
            <li className="nav-item">
              <Link href='/' className={`text-white hover:text-warning ${pathName === "/" ? "active" : ""}`}> Home </Link>
            </li>
            <li className="nav-item">
              <Link href='/pricing' className={`text-white hover:text-warning ${pathName === "/pricing" ? "active" : ""}`}> Pricing </Link>
            </li>
            <li className="nav-item">
              <Link href='/getAccredited' className={`text-white hover:text-warning ${pathName === "/getAccredited" ? "active" : ""}`}>Get Accredited</Link>
            </li>
            <li className="nav-item">
              <Link href='/startReview' className={`text-white hover:text-warning ${pathName === "/startReview" ? "active" : ""}`}>Start A Review</Link>
            </li>
          </ul>


          <div className='ml-28'>
            
            {isProfilePage ? (
              <button className="flex text-warning hover:text-orange-600" onClick={logOut}>
                Logout
                <svg
                  className="fill-current ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="25"
                  width="20"
                  viewBox="0 0 512 512"
                >
                  <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </button>
            ) : (
              <Link href="/login">
                <button className="flex text-warning hover:text-orange-600">
                  Login
                  <svg
                    className="fill-current ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    height="25"
                    width="20"
                    viewBox="0 0 512 512"
                  >
                    <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                  </svg>
                </button>
              </Link>
            )}
          </div>


        </div>

      


        {isHomePage && (
          <div className='absolute left-[77%] top-[-1%]'>
            <Image className=" mt-2 w-[14rem]" src="/header2.png" width={300} height={250} alt="Image" />
            <div className="reviwes-count mt-14">
              <h1 className="text-center text-3xl mb-1 text-white">200+</h1>
              <h1 className="text-center text-2xl ml-4 mb-2 text-white">REVIEWS</h1>
              <hr className="border-b-2 border-white ml-16 w-[8rem]" />
            </div>
            <div className='mt-[3.5rem] ml-[4rem] mt-20'>
              <Image className=' w-[10rem]' src="/header3.png" width={250} height={250} alt="Image" />
            </div>
          </div>
        )}


      </nav>
    </header>




  );
};

export default header;