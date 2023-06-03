import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/About.css";

export const About = () => {
  const { productId } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    async function fetchdata() {
      try {
        const responce = await fetch(`/api/products/${productId}`);
        const data = await responce.json();
        setBook(data.product);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, []);

  console.log(book);

  return (
    <>
      <div id="book-div">
        <h2>About...</h2>
        {book ? (
          <>
            <img src={book.img} alt={book.title} />
            <h2>{book.title}</h2>
            <p>by {book.author}</p>
            <p>Pages: {book.pages}</p>
            <p>Rating: {book.rating}</p>
            <p>Price: {book.price}</p>
            <p>Delivery: {book.delivery} days</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <NavLink to="/home" className="back-link">
        Back to All Products
      </NavLink>
    </>
  );
};
