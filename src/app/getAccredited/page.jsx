import React from 'react';
import Form from '../component/form'
import RecentUpload from '../component/recentUpload'
const page = () => {

   

    return (
        <>
               <div className='p-14 text-white'>
        <h1 className="text-center text-5xl mb-4 px-5">SEARCH A TENANT REVIEW</h1>
        <h1 className="text-center text-5xl mb-5">FOR<strong> YOUR PROPERTY</strong></h1>
        <hr className="border-b-1 border-slate-200 mx-auto" style={{ width: "55%" }} />
      </div>
          

      <Form></Form>

      <RecentUpload></RecentUpload>

        </>
    );
};

export default page;