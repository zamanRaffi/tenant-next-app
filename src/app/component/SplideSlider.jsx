import React from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// import '@splidejs/splide/css/core';
import '@splidejs/splide/css/skyblue';
const SplideSlider = ({ slides, width = 650, height = 400,mt= 0 , mb = 0 , ml=0,mr=0 }) => {
  const marginStyle = {
    margin: `${mt}px ${mb}px ${ml}px ${mr}px`,
  };
  return (
   
    <div style={marginStyle}>
        <Splide options={{  
      //  type:'loop',
       drag : 'free',
       arrows:false,
       pagination:true,
      //  autoplay:true,
        pauseOnHover: true,
        interval:4000,
       speed:2000
       }}>
      {slides.map((slide, index) => (
        <SplideSlide key={index}>
          <Image src={slide.imageUrl} alt={`Slide ${index}`}  width={width} 
            height={height}/>
        </SplideSlide>
      ))}
    </Splide>
    </div>
 
    
  );
};

export default SplideSlider;
