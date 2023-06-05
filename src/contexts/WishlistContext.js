import { createContext, useContext, useState } from "react";
import { CartContext } from "./CartContext";

export const WishlistContext = createContext();

export const WishlistContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const encodedToken = localStorage.getItem("encodedToken");
  const { cart, setCart } = useContext(CartContext);

  //API call to add book in wishlist

  const addToWishlist = async (book) => {
    try {
      const response = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: encodedToken,
        },
        body: JSON.stringify({
          product: book,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Book added to state variable empty array
        setWishlist(data.wishlist);
        const RemoveItemFromCart = cart.filter((item) => item._id !== book._id);
        setCart(RemoveItemFromCart);
        // Book added to wishlist successfully
        alert("added to wishlist");
      } else {
        // Handle error response
        alert("Failed to add to wishlist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //API call to remove item from wishlist
  const removeFromWishlist = async (bookId) => {
    try {
      const response = await fetch(`/api/user/wishlist/${bookId}`, {
        method: "DELETE",
        headers: {
          authorization: encodedToken,
        },
      });
      // give product id
      if (response.ok) {
        alert("deleted from wishlist");
        const updatedWishlistItems = wishlist.filter(
          (item) => item._id !== bookId
        );
        setWishlist(updatedWishlistItems); // Update wishlistsItems
      } else {
        // Handle error response
        alert("Failed to delete from wishlist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //API call to delete item from wishlist also add the add that deleted book to cart

  const addToCartFromWishlist = async (bookId, book) => {
    try {
      const response = await fetch(`/api/user/wishlist/${bookId}`, {
        method: "DELETE",
        headers: {
          authorization: encodedToken,
        },
      });
      // give product id
      if (response.ok) {
        alert("added to cart");
        const updatedWishlistItems = wishlist.filter(
          (item) => item._id !== bookId
        );
        setWishlist(updatedWishlistItems);
        setCart([...cart, book]);
      } else {
        // Handle error response
        alert("Failed to add to cart");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <WishlistContext.Provider
        value={{
          wishlist,
          addToWishlist,
          removeFromWishlist,
          addToCartFromWishlist,
        }}
      >
        {children}
      </WishlistContext.Provider>
    </>
  );
};
