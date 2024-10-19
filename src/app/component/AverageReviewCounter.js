import React from 'react';
import { useRating } from './RatingContext';

const AverageReviewCounter = () => {
  const { averageRating } = useRating();
  return (
    <div>
      <h1>{averageRating()}</h1>
    </div>
  );
};

export default AverageReviewCounter;

