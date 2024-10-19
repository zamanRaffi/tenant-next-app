"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
const Footer = () => {
    const router = usePathname();

    const pathName = usePathname();

    const shouldShowFooter = () => {
        return !['/signup', '/login','/profile'].some(route => router.startsWith(route)); 
      };


    return shouldShowFooter() ?(
        <div>
            <footer className='bg-black'>
                <div className="mx-auto p-8 rounded-tr-3xl rounded-tl-3xl w-[95%] bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="col-span-1 ml-8">
                            <div className="input-group">
                            <span className="rounded-3 mt-4" id="basic-addon1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        // fill="currentColor"
                                        className="bi bi-globe"
                                        viewBox="0 0 16 16"
                                    >
                                        {/* <!-- SVG path --> */}
                                    </svg>
                                </span>
                                <select
                                    className="form-select rounded-3 mt-4"
                                    aria-label="Default select example"
                                    defaultValue="American English"
                                >
                                    <option value="1">American English</option>
                                    <option value="1">Español</option>
                                    <option value="2">Russian</option>
                                    <option value="3">অসমীয়া</option>
                                    <option value="4">বাংলা</option>
                                    <option value="5">中文(简体)</option>
                                    <option value="6">Português (Brasil)</option>
                                </select>
                            </div>

                            <Image className="mt-3 text-white" src="/brandLogo.png" width={150} height={100} alt="Brandlogo" />
                            <p className="mt-4 text-black">Malachi Kirby</p>
                            <h5 className="font-semibold text-black">Operation Manager</h5>
                        </div>

                        <div className="col-span-1">
                            <div className="mt-5 mx-5 text-black">
                                <h3 className="text-center text-2xl mb-5">Company</h3>
                                <ul className="navbar-nav text-center text-xl">
                                    <li className="nav-item active">
                                    <Link href='/' className={` text-black ${pathName === "/" ? "active" : ""}`}> Home </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link href='/pricing' className={` text-black ${pathName === "/pricing" ? "active" : ""}`}> Pricing </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link href='/getAccredited' className={` text-black ${pathName === "/getAccredited" ? "active" : ""}`}>Get Accredited</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link href='/startReview' className={` text-black ${pathName === "/startReview" ? "active" : ""}`}>Start A Review</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-span-1 ">
                            <div className="mt-5 ml-36 text-black">
                                <h3 className='text-2xl'>Contact</h3>
                                <div>
                                    <p>
                                        <span className="">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-telephone"
                                                viewBox="0 0 16 16"
                                            >
                                                {/* <!-- SVG path --> */}
                                            </svg>
                                        </span>
                                        (678) 689-591-6138
                                    </p>
                                    <p>
                                        <span className="">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-geo-alt"
                                                viewBox="0 0 16 16"
                                            >
                                                {/* <!-- SVG path --> */}
                                            </svg>
                                        </span>
                                        US Headquarters,Las Vegas,NV
                                    </p>
                                    <p>
                                        <span className="">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-globe2"
                                                viewBox="0 0 16 16"
                                            >
                                                {/* <!-- SVG path --> */}
                                            </svg>
                                        </span>
                                        settlekarma.com
                                    </p>
                                    <p>
                                        <span className="">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-envelope"
                                                viewBox="0 0 16 16"
                                            >
                                                {/* <!-- SVG path --> */}
                                            </svg>
                                        </span>
                                        malachi@settlekarma.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    ): null;
};

export default Footer;
