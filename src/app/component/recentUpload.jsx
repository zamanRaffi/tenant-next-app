"use client"
import React from 'react'
import Image from 'next/image';
import StarRating from '../component/starRating'
import AverageReviewCounter from '../component/AverageReviewCounter';
import { RatingProvider } from '../component/RatingContext'
import DisplayPagination from '../component/DisplayPagination';
const recentUpload = () => {
  return (
    <>
    <div className="bg-white w-full mb-20 h-fit p-12">
      <div>
        <h2 className="font-semibold text-5xl text-black mt-16 mb-7 ml-12 px-8">
          Recent Upload
        </h2>
        <hr
          className="border-b-1 border-warning mb-12 ml-20"
          style={{ width: "24%" }}
        />
      </div>
  
      <div className=" text-[#5B4F51] rounded-3xl border-2 mb-10 border-gray-400 hover:bg-warning flex px-2 hover:text-white w-[92%] mx-auto relative">
        <Image
          src="/image 52.png"
          width={412}
          height={393}
          className="my-3"
          alt="Header Image"
        />
        <div className="card-body">
          <div className="flex items-center">
            <Image
              src="/Mask group.png"
              width={70}
              height={70}
              className="rounded-full bg-[#90A99A]"
              alt="Profile Image"
            />
            <div>
              <h5 className="card-title ml-2 p-1 text-2xl font-semibold">
                Marvin McKinney
              </h5>
              <p className="card-text  ml-3 ">Tenants</p>
  
              <div></div>
            </div>
          </div>
  
          <div className="flex absolute right-[4rem] mt-4">
            <RatingProvider>
              <div className="text-xl mr-3 font-black">
                <AverageReviewCounter />
              </div>
              <div className="border-4 rounded-3xl bg-[#ffffff] w-[7.8rem]  ">
                <StarRating totalStars={5} size={23} />
              </div>
            </RatingProvider>
          </div>
  
          <div className="flex mt-5 text-lg flex-wrap">
            <h4 className="mr-5">Email: debra.holt@example.com</h4>
            <h4 className="mr-5">
              <span className="font-black">Address:</span> 1901 Thornridge Cir.
              Shiloh, Hawaii 81063
            </h4>
            <h4 className="mr-5">
              <span className="font-black">Zip Code:</span> 6800
            </h4>
            <h4 className="mr-5">
              <span className="font-black">State:</span> California
            </h4>
          </div>
  
          <h3 className="mt-8 text-2xl font-semibold">
            It Was A Very Good Experience
          </h3>
  
          <p className="mt-5 text-lg">
            A responsible tenant takes good care of the property, keeping it clean
            and reporting any maintenance issues in a timely manner. tenants who
            maintain open and prompt communication, whether it's regarding rent
            payments, maintenance requests,
          </p>
  
          <h1 className="text-2xl my-4">
            Review Written By:{" "}
            <span className="font-semibold">Kathryn Murphy</span>
          </h1>
        </div>
      </div>
  
      <div className=" text-[#5B4F51] rounded-3xl border-2 mb-10 border-gray-400 hover:bg-warning flex px-2 hover:text-white w-[92%] mx-auto relative">
        <Image
          src="/image 52.png"
          width={412}
          height={393}
          className="my-3"
          alt="Header Image"
        />
        <div className="card-body">
          <div className="flex items-center">
            <Image
              src="/Mask group.png"
              width={70}
              height={70}
              className="rounded-full bg-[#90A99A]"
              alt="Profile Image"
            />
            <div>
              <h5 className="card-title ml-2 p-1 text-2xl font-semibold">
                Marvin McKinney
              </h5>
              <p className="card-text  ml-3 ">Tenants</p>
            </div>
          </div>
  
          <div className="flex absolute right-[4rem] mt-4">
            <RatingProvider>
              <div className="text-xl mr-3 font-black">
                <AverageReviewCounter />
              </div>
              <div className="border-4 rounded-3xl bg-[#ffffff] w-[7.8rem]  ">
                <StarRating totalStars={5} size={23} />
              </div>
            </RatingProvider>
          </div>
  
          <div className="flex mt-5 text-lg  flex-wrap">
            <h4 className="mr-5 mb-2">Email: debra.holt@example.com</h4>
            <h4 className="mr-5">
              <span className="font-black">Address:</span> 1901 Thornridge Cir.
              Shiloh, Hawaii 81063
            </h4>
            <h4 className="mr-5">
              <span className="font-black">Zip Code:</span> 6800
            </h4>
            <h4 className="mr-5">
              <span className="font-black">State:</span> California
            </h4>
          </div>
  
          <h3 className="mt-8 text-2xl font-semibold">
            It Was A Very Good Experience
          </h3>
  
          <p className="mt-5 text-lg">
            A responsible tenant takes good care of the property, keeping it clean
            and reporting any maintenance issues in a timely manner. tenants who
            maintain open and prompt communication, whether it's regarding rent
            payments, maintenance requests,
          </p>
  
          <h1 className="text-2xl my-4">
            Review Written By:{" "}
            <span className="font-semibold">Kathryn Murphy</span>
          </h1>
        </div>
      </div>
  
      <div className=" text-[#5B4F51]  rounded-3xl border-2 mb-10 border-gray-400 hover:bg-warning flex px-2 hover:text-white w-[92%] mx-auto relative">
        <Image
          src="/image 52.png"
          width={412}
          height={393}
          className="my-3"
          alt="Header Image"
        />
        <div className="card-body relative">
          <div className="flex items-center">
            <Image
              src="/Mask group.png"
              width={70}
              height={70}
              className="rounded-full bg-[#90A99A]"
              alt="Profile Image"
            />
            <div>
              <h5 className="card-title ml-2 p-1 text-2xl font-semibold">
                Marvin McKinney
              </h5>
              <p className="card-text  ml-3 ">Tenants</p>
            </div>
          </div>
  
          <div className="flex absolute right-[4rem] mt-4">
            <RatingProvider>
              <div className="text-xl mr-3 font-black">
                <AverageReviewCounter />
              </div>
              <div className="border-4 rounded-3xl bg-[#ffffff] w-[7.8rem]  ">
                <StarRating totalStars={5} size={23} />
              </div>
            </RatingProvider>
          </div>
  
          <div className="flex mt-5 text-lg  flex-wrap">
            <h4 className="mr-5 mb-2">Email: debra.holt@example.com</h4>
            <h4 className="mr-5">
              <span className="font-black">Address:</span> 1901 Thornridge Cir.
              Shiloh, Hawaii 81063
            </h4>
            <h4 className="mr-5">
              <span className="font-black">Zip Code:</span> 6800
            </h4>
            <h4 className="mr-5">
              <span className="font-black">State:</span> California
            </h4>
          </div>
  
          <h3 className="mt-8 text-2xl font-semibold">
            It Was A Very Good Experience
          </h3>
  
          <p className="mt-5 text-lg">
            A responsible tenant takes good care of the property, keeping it clean
            and reporting any maintenance issues in a timely manner. tenants who
            maintain open and prompt communication, whether it's regarding rent
            payments, maintenance requests,
          </p>
  
          <h1 className="text-2xl my-4">
            Review Written By:{" "}
            <span className="font-semibold">Kathryn Murphy</span>
          </h1>
        </div>
      </div>
  
      <DisplayPagination className="py-10"></DisplayPagination>
    </div>
  </>
  
  )
}

export default recentUpload;
