import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/home">Home</NavLink>||
        <NavLink to="/">WishList</NavLink>||
        <NavLink>Cart</NavLink>||
        <NavLink to="/login">Login</NavLink>||
      </nav>
    </>
  );
};
