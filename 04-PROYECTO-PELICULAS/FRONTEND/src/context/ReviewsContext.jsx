import {  createContext, useEffect, useState } from "react";

//Creamos el contexto
export const ReviewsContext = createContext();

//Creamos el provider del contexto
export const ReviewsProvider = ({ children }) => {

    //Utilizo useState para sacar las reviews del localStorage
    const [reviews, setReviews] = useState(() => {
        const saveReviews = localStorage.getItem('reviews');
        return saveReviews? JSON.parse(saveReviews) : [];
    })

    //Utilizo useEffect para guardar las reviews del localStorage    
    useEffect(() => {
      localStorage.setItem('reviews', JSON.stringify(reviews));
    }, [reviews])

    //Acciones que puedo realizar con las reviews
    const addReview = (review) => {
      setReviews((prevReviews) => [...prevReviews, review]);
    }

    const deleteReview = (reviewId) => {
      setReviews((prevReviews) => prevReviews.filter((review) => review.id !== reviewId));
    }

    return (
      // {{}} porque le estoy pasando un objeto, {} porque voy a escribir js
      <ReviewsContext.Provider value={{reviews, addReview, deleteReview}}> 
        {children}
      </ReviewsContext.Provider>
    );
}