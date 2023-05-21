import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { HomeContext } from "../contexts/HomeContext";
import { NavLink } from "react-router-dom";

export const About = () => {
  const { productId } = useParams();
  const { allBook } = useContext(HomeContext);

  const BookDetail = allBook.find((book) => book._id === productId);

  console.log(BookDetail);

  return (
    <>
      <div>
        <h2>About...</h2>
        {BookDetail ? (
          <>
            <h2>{BookDetail.title}</h2>
            <p>by {BookDetail.author}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
        <NavLink to="/home">Back to the All Products</NavLink>
      </div>
    </>
  );
};
