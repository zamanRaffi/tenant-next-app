import React from 'react';
import Image from 'next/image';
import style from '../../styles/Hero.module.css'
const Hero = () => {
    return (
      <section className="header-banner mb-5 " style={{ height: '70vh' }}>
      <div className="flex flex-row">
        <div className={`${style.bannerTitle} w-1/2`}>
          <div className=" flex text-5xl font-bold text-white mb-5">
            SHARE YOUR
            <svg
              className={style.bannerSvg}
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
          <div className="text-5xl font-bold text-white mb-5">REVIEWS &</div>
          <div className="text-5xl font-bold text-white mb-5">PHOTOS ON</div>
          <div className="text-5xl font-bold text-white mb-5">TRASHY TENANT</div>
          <hr className={style.straightLine} />
    
         <div className='mt-5'>
         <label className="input input-bordered flex items-center gap-2" style={{ width: "28rem" }}>
  <input type="text" className="grow" placeholder="Search Before You Rent" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
         </div>
        </div>
    
        <div className="w-1/2 images flex">
          <div className={style.img1}>
            <Image src="/header1.png" width={300} height={250} alt="Image" />
          </div>
    
          <div className={`${style.img2} mb-2`}>
            <Image className="ml-6" src="/header2.png" width={300} height={250} alt="Image" />
    
            <div className="reviwes-count mt-5">
              <h1 className="text-center text-4xl mb-1 text-white">200+</h1>
              <h1 className="text-center text-2xl ml-4 mb-2 text-white">REVIEWS</h1>
              <hr className={style.straightLine2} />
            </div>
    
            <div className={style.headerImg3}>
              <Image src="/header3.png" width={250} height={250} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
    

    );
};

export default Hero;