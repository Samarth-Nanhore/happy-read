import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Welcome.css";
import { Footer } from "../components/Footer";

export const Welcome = () => {
  const [allBookcategories, setAllbookcategories] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        const responce = await fetch("/api/categories");
        const data = await responce.json();
        setAllbookcategories(data.categories);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, []);

  return (
    <>
      <div className="banner">
        <h2>Welcome To Happy Read</h2>
        <p>"Find Your Next Great Read."</p>
        <NavLink to="/home" className="explore-button">
          Explore Now
        </NavLink>
      </div>
      <h2>Explore Categories</h2>
      <div className="categories-container">
        <div className="categories">
          {allBookcategories.map((bookCategory) => {
            const { _id, categoryName, description } = bookCategory;
            return (
              <div key={_id} className="category">
                <h2>{categoryName}</h2>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
