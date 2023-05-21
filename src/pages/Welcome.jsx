import { NavLink } from "react-router-dom";

export const Welcome = () => {
  return (
    <>
      <h2>Welcome To Happy Read</h2>
      <p>Get your all favourite books here </p>
      <NavLink to="/home">
        {" "}
        <p>Shop Now</p>
      </NavLink>
    </>
  );
};
