"use client"
import React from 'react';
import style from '../../styles/PersonalStories.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import StarRating from '../component/starRating'
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
        
        <div className="text-sm mt-16">
        <p className='mb-4' >
          Stories like yours are what helps homeowners, property  
        </p>

        <p className='mb-4'>
        management companies save thousands of dollars from renting
        </p>

        <p>
        from a bad tenant.
        </p>

        </div>

      </div>
      
      <div className='mt-14 ml-16'>
      <StarRating totalStars={5} size={20} margin={0.3}/>
      </div>
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