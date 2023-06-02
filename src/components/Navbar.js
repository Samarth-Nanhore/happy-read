import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css"; // Import the CSS file

export const Navbar = () => {
  const navigate = useNavigate();
  const encodedToken = localStorage.getItem("encodedToken");

  const handleUserClick = () => {
    if (encodedToken) {
      // User is logged in, navigate to the UserInfo page
      navigate("/userinfo");
    }
  };

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="logo">
          HappyRead
        </NavLink>
        <div className="nav-links">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/wishlist">WishList</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <span onClick={handleUserClick}>
            {encodedToken ? (
              <NavLink to="/userinfo">User</NavLink>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </span>
        </div>
      </nav>
    </>
  );
};
