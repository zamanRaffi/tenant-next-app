import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useState } from "react";
import { useRating } from '../component/RatingContext';
import styles from '../../styles/StarRating.module.css';

const StarRating = ({ totalStars = 5, size, margin, bg, rounded,border,w }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const { handleRatingUpdate } = useRating();

  const handleRating = (ratingValue) => {
    setRating(ratingValue);
    handleRatingUpdate(ratingValue);
  };

  return (


<div className={styles.starRating}>
{[...Array(totalStars)].map((star, index) => {
  const ratingValue = index + 1;
  return (
    <label key={index} className={styles.starLabel}
      style={{ marginRight: `${margin}rem` , backgroundColor: `${bg}`, borderRadius:`${rounded}rem`, border: `${border}px`, width:`${w}rem`}} >
      <input
        type="radio"
        name="rating"
        value={ratingValue}
        onClick={() => handleRating(ratingValue)}
        style={{ display: 'none' }}
      />
      <span
        onMouseEnter={() => setHover(ratingValue)}
        onMouseLeave={() => setHover(null)}
      >
        {ratingValue <= (hover || rating) ? (
          <FaStar className={styles.filled} size={size} />
        ) : (
          <FaRegStar className={styles.unfilled} size={size} />
        )}
      </span>
    </label>
  );
})}
</div>

  );
};

export default StarRating;

