// RatingContext.js - Define the context
'use client'
import React, { createContext, useContext, useState } from 'react';

const RatingContext = createContext();

export const useRating = () => {
    return useContext(RatingContext);
};

export const RatingProvider = ({ children }) => {
    const [ratings, setRatings] = useState([1.0]); // Initial ratings with 1.0

    const handleRatingUpdate = (newRating) => {
        setRatings([...ratings, newRating]);
    };

    const averageRating = () => {
        return ratings.length > 0
            ? (ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length).toFixed(1)
            : 0;
    };

    return (
        <RatingContext.Provider value={{ ratings, handleRatingUpdate, averageRating }}>
            {children}
        </RatingContext.Provider>
    );
};
