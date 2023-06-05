import { NavLink } from "react-router-dom";
import { useContext } from "react";
import "../styles/Welcome.css";
import { Footer } from "../components/Footer";
import { WelcomeContext } from "../contexts/WelcomeContext";

export const Welcome = () => {
  const { allBookcategories, handleChange } = useContext(WelcomeContext);

  return (
    <>
      <div className="banner">
        <h2>Welcome To HappyRead</h2>
        <p>"Explore Your Next Great Read."</p>
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
              <div
                key={_id}
                className="category"
                onClick={() => handleChange(bookCategory)}
              >
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
