"use client"
import React from 'react';
import Image from 'next/image';
import style from '../../styles/OurRectReview.module.css'
import SplideSlider from './SplideSlider';
const OurRectReview = () => {

  const slides = [
    { imageUrl: '/Rectangle 84.png' },
    { imageUrl: '/Rectangle 84.png' },
    { imageUrl: '/Rectangle 84.png' },
  ];

  return (



    <section className={style.OurRecentReview}>
    <div className="flex flex-col md:flex-row text-black relative p-5 mb-12">
  
      <div className='w-7/12'> 
        <div>
          <h2 className="font-semibold text-5xl mt-4">Our Recent Reviews</h2>
          <hr className={`${style.straightLine4} border-2`} />
        </div>
  
        {/* Cards */}
  
        <div className="mt-16">
  
          {/* Top 2 cards */}
  
          <div className="md:flex md:flex-row w-11/12">
  
            {/* Card 1 */}
  
            <div className="md:w-2/5 p-5">
              <div className={`card ${style.ourRecentCard} md:w-96`}> 
                <div className="card-header md:flex md:mt-2 md:ml-6">
                  <div className="md:bg-emerald-800 md:rounded-full">
                    <Image
                      src="/Mask group.png"
                      width={55}
                      height={50}
                      className="md:rounded-full"
                      alt="Image"
                    />
                    <Image
                      src="/Group 6357520.png"
                      width={68}
                      height={90}
                      className="md:absolute md:top-16"
                      alt="Overlay Image"
                    />
                  </div>
                  <div className="md:ml-2">
                    <h5 className="card-title md:font-semibold">Marvin McKinney</h5>
                    <p className="card-text md:text-sm">Tenants</p>
                    <div className="md:flex md:justify-end md:absolute md:left-60 md:top-15">
                      <span className="md:text-md md:mr-2">4.5</span>
                      <Image src="/Vector.png" width={20} height={0} />
                    </div>
                  </div>
                </div>
  
                {/* Card Body */}
  
                <div className="card-body">
                  <h6 className="card-title md:font-semibold md:text-sm">
                    It was a very good experience
                  </h6>
                  <p className="card-text md:text-sm">
                    Lorem ipsum dolor sit amet consectetur. Neque ut tempus
                    sagittis id eget elementum turpis gravida urna. Urna
                    quisque porta iaculis scelerisque
                  </p>
                </div>
              </div>
            </div>
  
            {/* Card 2 */}
            
            <div className="md:w-2/5 md:p-5">
              <div className={`card ${style.ourRecentCard} md:w-96 md:ml-16`}> {/* Increased width */}
                <div className="card-header md:flex md:mt-2 md:ml-6">
                  <div className="md:bg-emerald-800 md:rounded-full">
                    <Image
                      src="/Mask group.png"
                      width={55}
                      height={50}
                      className="md:rounded-full"
                      alt="Image"
                    />
                    <Image
                      src="/Group 6357520.png"
                      width={68}
                      height={90}
                      className="md:absolute md:top-16"
                      alt="Overlay Image"
                    />
                  </div>
                  <div className="md:ml-2">
                    <h5 className="card-title md:font-semibold">Marvin McKinney</h5>
                    <p className="card-text md:text-sm">Tenants</p>
                    <div className="flex justify-end absolute left-60 md:top-15">
                      <span className="text-md mr-2">4.5</span>
                      <Image src="/Vector.png" width={20} height={0} />
                    </div>
                  </div>
                </div>
  
                {/* Card Body */}
  
                <div className="card-body">
                  <h6 className="card-title md:font-semibold md:text-sm">
                    It was a very good experience
                  </h6>
                  <p className="card-text md:text-sm">
                    Lorem ipsum dolor sit amet consectetur. Neque ut tempus
                    sagittis id eget elementum turpis gravida urna. Urna
                    quisque porta iaculis scelerisque
                  </p>
                </div>
              </div>
            </div>


        
          </div>

          

          {/* Bottom 2 cards */}
  
          <div className="flex flex-row mt-5 w-11/12">
  
            {/* Card 1 */}
  
            <div className="md:w-2/5 p-5">
              <div className={`card ${style.ourRecentCard} md:w-96`}> 
                <div className="card-header md:flex md:mt-2 md:ml-6">
                  <div className="md:bg-emerald-800 md:rounded-full">
                    <Image
                      src="/Mask group.png"
                      width={55}
                      height={50}
                      className="md:rounded-full"
                      alt="Image"
                    />
                    <Image
                      src="/Group 6357520.png"
                      width={68}
                      height={90}
                      className="md:absolute md:top-16"
                      alt="Overlay Image"
                    />
                  </div>
                  <div className="md:ml-2">
                    <h5 className="card-title md:font-semibold">Marvin McKinney</h5>
                    <p className="card-text md:text-sm">Tenants</p>
                    <div className="md:flex md:justify-end md:absolute md:left-60 md:top-15">
                      <span className="md:text-md md:mr-2">4.5</span>
                      <Image src="/Vector.png" width={20} height={0} />
                    </div>
                  </div>
                </div>
  
                {/* Card Body */}
  
                <div className="card-body">
                  <h6 className="card-title md:font-semibold md:text-sm">
                    It was a very good experience
                  </h6>
                  <p className="card-text md:text-sm">
                    Lorem ipsum dolor sit amet consectetur. Neque ut tempus
                    sagittis id eget elementum turpis gravida urna. Urna
                    quisque porta iaculis scelerisque
                  </p>
                </div>
              </div>
            </div>
  
            {/* Card 2 */}
            
            <div className="md:w-2/5 md:p-5">
              <div className={`card ${style.ourRecentCard} md:w-96 md:ml-16`}> {/* Increased width */}
                <div className="card-header md:flex md:mt-2 md:ml-6">
                  <div className="md:bg-emerald-800 md:rounded-full">
                    <Image
                      src="/Mask group.png"
                      width={55}
                      height={50}
                      className="md:rounded-full"
                      alt="Image"
                    />
                    <Image
                      src="/Group 6357520.png"
                      width={68}
                      height={90}
                      className="md:absolute md:top-16"
                      alt="Overlay Image"
                    />
                  </div>
                  <div className="md:ml-2">
                    <h5 className="card-title md:font-semibold">Marvin McKinney</h5>
                    <p className="card-text md:text-sm">Tenants</p>
                    <div className="flex justify-end absolute left-60 md:top-15">
                      <span className="text-md mr-2">4.5</span>
                      <Image src="/Vector.png" width={20} height={0} />
                    </div>
                  </div>
                </div>
  
                {/* Card Body */}
  
                <div className="card-body">
                  <h6 className="card-title md:font-semibold md:text-sm">
                    It was a very good experience
                  </h6>
                  <p className="card-text md:text-sm">
                    Lorem ipsum dolor sit amet consectetur. Neque ut tempus
                    sagittis id eget elementum turpis gravida urna. Urna
                    quisque porta iaculis scelerisque
                  </p>
                </div>
              </div>
            </div>


        
          </div>
         

        </div>
      </div>
  
      {/* Right Part with Slider */}
  
      <div className="md:w-5/12 md:absolute md:top-32 md:right-0"> {/* Moved slider up */}
        <SplideSlider slides={slides}></SplideSlider>
      </div>
    </div>
  </section>
  




  );
};

export default OurRectReview;