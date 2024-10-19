"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProfilePage = () => {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Check if searchResults exist in router.query
    if (router.query.searchResults) {
      try {
        const results = JSON.parse(router.query.searchResults);
        setSearchResults(results);
      } catch (error) {
        console.error('Error parsing search results:', error);
      }
    }
  }, [router.query.searchResults]);

  return (
    <div>
      <h1>Profile Page</h1>
      {/* Display search results here */}
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>
            {/* Display each search result item */}
            {/* Example: */}
            <p>Name: {result.firstName} {result.lastName}</p>
            <p>Email: {result.email}</p>
            {/* Add more fields as per your search result structure */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;
