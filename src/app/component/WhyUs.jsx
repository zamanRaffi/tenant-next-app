import React from 'react';
import style from '../../styles/WhyUs.module.css'
import Image from 'next/image';
const WhyUs = () => {
    return (
        
            
            <section className={`${style.WhyUsSection}`}>




<div className='relative'>  


<h1 className="text-black text-5xl text-center font-semibold py-16">Why Us</h1>


<hr className={`${style.straightLine6} absolute top-36`}/>

</div>



<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:text-black">
<div className="col-span-1 flex items-center">
  <Image
    className={style.whyUsImg1st}
    width={12}
    height={12}
    src="/Group 1171275180.png"
    alt="Image"
  />
  <div>
    <h3 className={`${style.whyUsh2} text-lg font-semibold`}>13+ City's</h3>
    <p className={style.whyUs1stP}>13+ City’s our community are expansive</p>
  </div>
</div>

<div className="col-span-1 flex items-center">
  <img
    className={style.whyUsImg2nd}
    width={12}
    height={12}
    src="/Group 1171275181.png"
    alt="Image"
  />
  <div>
    <h3 className={`${style.whyUsh3} text-lg font-semibold`}>50k+ Tenants</h3>
    <p className={style.whyUs2ndP}>50 Thousand+ Tenants & homeowner join our community</p>
  </div>
</div>

<div className="col-span-1 flex items-center">
  <Image
    className={style.whyUsImg3rd}
    width={12}
    height={12}
    src="/Group 1171275180.png"
    alt="Image"
  />
  <div>
    <h3 className={`${style.whyUsh4} text-lg font-semibold`}>3M+ Review</h3>
    <p className={style.whyUs3rdP}>3 Million + Homeowner review in our community</p>
  </div>
</div>
</div>



 
</section>




        
    );
};

export default WhyUs;