import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return(
        <>
        <nav>
        <NavLink to='/'>Home</NavLink>||
        <NavLink to='/'>WishList</NavLink>||
        <NavLink>Cart</NavLink>||
        <NavLink>User Profile</NavLink>||
        </nav>
        </>
    )
}