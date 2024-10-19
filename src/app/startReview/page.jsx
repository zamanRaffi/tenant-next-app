"use client"
import React, { useState } from 'react'

import StarRating from '../component/starRating'
import AverageReviewCounter from '../component/AverageReviewCounter';
import { RatingProvider } from '../component/RatingContext'
import ImageUpload from '../component/ImageUpload'
import DisplayImages from '../component/DisplayImage'
import VideoUpload from '../component/VideoUpload';
import DisplayVideos from '../component/DisplayVideos';


const StartReview = () => {

  const [uploadedImages, setUploadedImages] = useState([]);

  const handleFilesChangePhotos = (newFiles) => {
    const updatedImages = [...uploadedImages, ...newFiles];
    // const updatedImages = combinedImages.slice(0, 3); // Limit to 3 images
    setUploadedImages(updatedImages);
  };



  const [uploadedVideos, setUploadedVideos] = useState([]);

  const handleFilesChangeVideos = (newFiles) => {
    const updatedVideos = [...uploadedVideos, ...newFiles];
    // const updatedVideos = combinedVideos.slice(0, 3); // Limit to 3 videos
    setUploadedVideos(updatedVideos);
  };


  return (

    <section>

      <div className='p-14 text-white'>
        <h1 className="text-center text-6xl mb-4">UNMASKING TRASHY TENATES</h1>
        <h1 className="text-center text-5xl mb-5">REAL STORIES AND <strong>REVIEWS</strong></h1>
        <hr className="border-b-1 border-slate-200 mx-auto" style={{ width: "63%" }} />
      </div>


      <div className={`bg-white w-[95%] h-[80vh] mx-auto mb-24 text-black p-6 rounded-xl shadow-lg `}>

        <h2 className='text-center text-2xl font-medium mb-6 mt-14'>Give A Rate To Trashy Tenants</h2>
        <hr className="border-b-1 border-gray-500 mx-auto" style={{ width: "26%" }} />

        <div>

          <RatingProvider>
            <div className='text-center text-5xl mt-8 font-semibold'>
              <AverageReviewCounter />
            </div>
            <div className='flex justify-center items-center mt-12'>
              <StarRating totalStars={5} size={45} margin={2.5} />
            </div>
          </RatingProvider>

        </div>

        <div>
          <div className='mt-16 px-10'>
            <h3 className='text-3xl font-medium mb-2'>Write A Review</h3>
            <hr className="border-b-1 border-warning" style={{ width: "16%" }} />
          </div>

          <div className='px-12 mt-10'>
            <textarea name="review" id="reviewArea" cols="155" rows="9" className="md:max-w-[1700px] min-h-[100px] p-2 border outline-dotted opacity-50 border-white rounded-md text-base resize-horizontal box-border bg-white resize-none"
              placeholder='Type Here' />
          </div>
        </div>


      </div>

      <div>
        <h1 className='text-white text-center text-5xl mb-5'>Upload Photo</h1>
        <hr className="border-b-1 border-white mx-auto" style={{ width: "23%" }} />
        <div className="flex mt-24 mb-24 px-12">
          <div className="ml-1">
            <ImageUpload onFilesChange={handleFilesChangePhotos} w={19} h={19} ml={4} />
            <h2 className='text-white text-center text-lg mt-4 ml-14'>Upload a Photo</h2>
          </div>
          <div className="flex-1">
            <DisplayImages images={uploadedImages} w={19} h={19} mr={1} mb={1.5} />
          </div>
        </div>
      </div>


      <div className='bg-white w-[95%] h-[95%] mx-auto mb-24 text-black p-6 rounded-xl shadow-lg'>
        <h1 className='text-black text-center text-5xl mb-5 mt-10'>Upload Video</h1>
        <hr className="border-b-1 border-warning mx-auto" style={{ width: "23%" }} />
        <div className="flex mt-24 mb-24 px-8">
          <div className="">
            <VideoUpload onFilesChange={handleFilesChangeVideos} w={19} h={19} ml={1} />
            <h2 className='text-black text-center text-lg mt-4'>Upload a Video</h2>
          </div>
          <div className="flex-1">
            <DisplayVideos videos={uploadedVideos} w={19} h={19} mr={1} mb={1.5} />
          </div>
        </div>


        <div className='ml-20 px-3'>
          <hr className="border-b-1 border-gray-400 mb-8" style={{ width: "95%" }} />
          <p className='text-md'> <span className='text-gray-600'>Note :</span> You Can Upload a video. Maximum Video Size <span className='text-warning'>50 MB</span></p>
          <hr className="border-b-1 border-gray-400 mt-8" style={{ width: "95%" }} />
        </div>


        <div className='flex justify-center items-center mt-14 mb-10'>
          <button
            type="submit"
            className="bg-warning hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-2xl w-72 h-12 mt-6"

          >
            Post
          </button>
        </div>

      </div>





    </section>
  );
};

export default StartReview;