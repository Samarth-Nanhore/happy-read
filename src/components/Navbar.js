import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/home">Home</NavLink>||
        <NavLink to="/wishlist">WishList</NavLink>||
        <NavLink to="/cart">Cart</NavLink>||
        <NavLink to="/login">User</NavLink>||
      </nav>
    </>
  );
};
