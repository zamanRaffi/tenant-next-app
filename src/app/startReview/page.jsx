"use client"


import React, { useEffect,useState } from 'react';
import Footer from '../component/Footer';
const page = () => {


    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


   useEffect(()=>{

    const fetchData = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!res.ok) {
                throw new Error(res.status);
            }
            const data = await res.json();
            setPosts(data);
            setIsLoading(false);
        } catch (err) {
            setError(err);
            setIsLoading(false);
        }
    };
  
      fetchData();

   },[])


      const loadingSkeleton = (
        <div className="flex flex-col gap-4 w-full">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      );

      
       return (

        <div>

{isLoading && loadingSkeleton}


{posts &&  posts.map((post)=> 
      <div className="card glass mb-4" key={post.id}>
  <div className="card-body">
    <h2 className="card-title">{post.title}</h2>
    <p>{post.body}</p>
  </div>
</div>)}

            {error && <p>Error: {"Your data kono kamer na"}</p>}
           
        </div>
    );
};

export default page;