import { NavLink } from "react-router-dom";
import "../styles/Welcome.css";

export const Welcome = () => {
  return (
    <div className="banner">
      <h2>Welcome To Happy Read</h2>
      <p>"Find Your Next Great Read."</p>
      <NavLink to="/home" className="explore-button">
        Explore Now
      </NavLink>
    </div>
  );
};
