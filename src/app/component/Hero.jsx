import React from 'react';
import Image from 'next/image';
const Hero = () => {
  return (
    
    <section className="header-banner" style={{ height: '65vh' }}>
      <div className="flex flex-row">
        <div className={`p-[2.5rem] w-1/2`}>
          <div className=" flex text-5xl text-white mb-5">
            SHARE YOUR
            <svg
              className="w-[2.5rem] h-[2.5rem] ml-[5rem] fill-current"
              xmlns="http://www.w3.org/2000/svg"
              height="5"
              width="5"
              viewBox="0 0 576 512"
            >
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              />
            </svg>
          </div>
          <h1 className="text-5xl text-white mb-5">REVIEWS &</h1>
          <h1 className="text-5xl text-white mb-5">PHOTOS ON</h1>
          <strong className="text-6xl font-bold text-white mb-5">TRASHY TENANT</strong>
          <hr className="border-b-1 border-white w-[32rem]" />

          <div className="mt-10 input input-bordered flex items-center gap-2 bg-white w-[32rem]">

            <input type="text" className="grow text-black" placeholder="Search Before You Rent" />

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-[2.5rem] h-[3rem] opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>

          </div>
        </div>

        <div className="flex relative">
          <div className="mt-[3rem] w-[14rem] h-[14rem] absolute left-40">
            <Image src="/header1.png" width={300} height={250} alt="Image" />
          </div>

          <div className="mt-[1rem] w-[14rem] h-[14rem] absolute top-[30rem] left-[36rem] ">



          </div>
        </div>
      </div>
    </section>


  );
};

export default Hero;