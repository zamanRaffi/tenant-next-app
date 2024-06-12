"use client"
import React from 'react';
import style from '../../styles/PersonalStories.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
const PersonalStories = () => {
    return (
        <div className="p-5 mt-12 relative">
            
            <section className={`${style.personalStories}  ml-12`}>
  <div className="flex flex-col md:flex-row relative">
    <div className="w-7/12">
      <div className="p-5">
        <h1 className="font-semibold text-5xl mx-3 mb-2">The Personal Stories</h1>
        <h1 className="font-semibold text-5xl mx-3 mb-3">Behind Every Review</h1>
        <hr className={`${style.straightLine5} border-2 ml-3 mb-3`}/>
        <p className="text-xl">
          Stories like yours are what helps homeowners, property management companies save thousands of dollars from renting from a bad tenant.
        </p>
      </div>
      <img
        className="mx-5 my-6 px-5"
        src="/Group 6357384.png"
        alt="Image"
      />
    </div>


   
    {/* <!-- Right Part with Slider --> */}

    <div className="w-5/12">
      
    <Splide options={{ 
  type:'loop',
  arrows: false,
  pagination:false,
  autoplay:true,
  interval:5000,
  speed:3000,
 fixedWidth:1000 ,
 fixedHeight:500}}>
           
      


           <SplideSlide>
              <img  src="/Rectangle 84.png" alt="slider1" />
            </SplideSlide>
            <SplideSlide>
              <img src="/Rectangle 84.png" alt="slider2" />
            </SplideSlide>


         
  
            
          </Splide>


        
    </div>

  </div>
</section>

        </div>
    );
};

export default PersonalStories;