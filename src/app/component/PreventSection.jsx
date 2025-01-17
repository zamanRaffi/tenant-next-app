import React from 'react';
import Image from 'next/image';

const PreventSection = () => {
  return (
    

<section className="mt-5 h-[90vh] mb-6" >

<div >
    <h1 className="mt-24 text-white text-4xl text-center font-semibold">
            How To Prevent Dirty Tenant
   </h1>

         <h2 className="text-white text-3xl font-semibold text-center mb-4">
          Situations
         </h2>

         <hr className="border-b-1 border-gray-500 mx-auto w-[40rem] mt-5" />

            <p className="text-white text-center mt-5 mx-20 text-xl leading-10">
               One of the easiest ways is to make sure your rental agreement
               covers consequences of unhygienic habits. Make sure you explain how they can affect others  and their health for being dirty.
 
            </p>

</div>

<div className="grid grid-cols-1 md:grid-cols-3 md:px-[8rem] md:ml-3 md:text-black lg:mt-16">

<div className="col-md-4 mr-5">
  <div className="text-white rounded-b-xl rounded-t-3xl border-2 border-gray-400 hover:bg-warning">
    <Image
      src="/image 52.png"
      width={600}
      height={0}
      className=""
      alt="Header Image"
    />

    <div className="card-body relative">
      <div className="flex items-center">
        <Image
          src="/Mask group.png"
          width={55}
          height={60}
          className="rounded-full bg-[#90A99A]"
          alt="Profile Image"
        />
        <div>
          <h5 className="card-title ml-2 p-1">Marvin McKinney</h5>
          <p className="card-text ml-3">Tenants</p>
        </div>
        <span className="mr-2 absolute right-0 top-16 text-white text-base flex">
          5.0
          <Image
            src="/Vector.png"
            alt="Image"
            width={25}
            height={25}
           className="p-1"
          />
        </span>
      </div>
      <div className="mt-3">
        <p className="ml-auto">
          Small plates, salads & sandwiches in an intimate setting on 12 indoor seats plus patio seating.
        </p>
      </div>
    </div>
  </div>
</div>



<div className="col-md-4 mr-5">
  <div className="text-white rounded-b-xl rounded-t-3xl border-2 border-gray-400 hover:bg-warning">
    <Image
      src="/image 52.png"
      width={550}
      height={0}
      className="card-img-top"
      alt="Header Image"
    />
    <div className="card-body relative">
      <div className="flex items-center">
        <Image
          src="/Mask group.png"
          width={55}
          height={12}
          className="rounded-full bg-[#90A99A]"
         alt="Profile Image"
        />
               <div>
       <h5 className="card-title ml-2 p-1">Marvin McKinney</h5>
        <p className="card-text ml-3">Tenants</p>
          </div >


            
             
             <span className="absolute right-0 top-16 mr-2 text-white text-base flex ">
         5.0
        <Image
         src="/Vector.png"
         alt="Image"
         width={25}
         height={25}
         className="p-1"
       />
      </span>

             
    </div>
        <div className="mt-3">
          <p className="ml-auto">
            Small plates, salads & sandwiches in an intimate setting on 12 indoor seats plus patio seating.
          </p>
</div>
   </div>
     </div>
      </div>



        <div className="col-md-4 mr-5">
            <div className="text-white rounded-b-xl rounded-t-3xl border-2 border-gray-400 hover:bg-warning">
                <Image
              src="/image 52.png"
              width={550}
              height={20}
              alt="Header Image"
/>
<div className="card-body relative">
  <div className="flex items-center">
    <Image
      src="/Mask group.png"
      className="rounded-full bg-[#90A99A]"
      width={55}
      height={40}
      alt="Profile Image"
    />
    <div>
      <h5 className="card-title ml-2 p-1">Marvin McKinney</h5>
      <p className="card-text ml-2">Tenants</p>
    </div>
    <span className="mr-2 absolute right-0 top-16 text-white text-base flex">
      5.0
      <Image
        src="/Vector.png"
        alt="Image"
        width={25}
        height={25}
        className="p-1"
      />
    </span>
  </div>
  <div className="mt-3">
    <p className="ml-auto">
      Small plates, salads & sandwiches in an intimate setting on 12 indoor seats plus patio seating.
    </p>
  </div>
</div>
</div>
</div>
</div>
</section>


    
  );


}

export default PreventSection;