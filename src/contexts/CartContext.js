import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // state variable to store array from api endpoint

  const encodedToken = localStorage.getItem("encodedToken");

  //API Call to add item to the cart

  const addToCart = async (book) => {
    try {
      const response = await fetch("/api/user/cart", {
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
        // Book added to state variable empty array and update every obj with new property
        const updateCartobj = data.cart.map((item) => ({
          ...item,
          quantity: 1,
        }));
        setCart(updateCartobj);
        // Book added to cart successfully
        alert("added to cart");
      } else {
        // Handle error response
        alert("Failed to add to cart");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //API call to remove item form the cart

  const removeFromCart = async (bookId) => {
    try {
      const response = await fetch(`/api/user/cart/${bookId}`, {
        method: "DELETE",
        headers: {
          authorization: encodedToken,
        },
      });
      // give product id
      if (response.ok) {
        // Book deleted from cart successfully
        alert("book deleted from cart");
        const updatedCartItems = cart.filter((item) => item._id !== bookId);
        setCart(updatedCartItems); // Update cartItems in CartContext
      } else {
        // Handle error response
        alert("Failed to delete from cart");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Update qunatity of cart item
  const updateCartItemQuantity = (bookId, actionType) => {
    const updatedCartItems = cart.map((item) => {
      if (item._id === bookId) {
        if (actionType === "increment") {
          return { ...item, quantity: item.quantity + 1 };
        } else if (actionType === "decrement" && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });

    setCart(updatedCartItems);
  };

  //API call ????

  // const updateCartItemQuantity = async (bookId, actionType) => {
  //   try {
  //     const response = await fetch(`/api/user/cart/${bookId}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         authorization: encodedToken,
  //       },
  //       body: JSON.stringify({ action: { type: actionType } }),
  //     });

  //     if (response.ok) {
  //       const updatedCartItems = cart.map((item) => {
  //         if (item._id === bookId) {
  //           if (actionType === "increment") {
  //             return { ...item, quantity: item.quantity + 1 };
  //           } else if (actionType === "decrement" && item.quantity > 1) {
  //             return { ...item, quantity: item.quantity - 1 };
  //           }
  //         }
  //         return item;
  //       });

  //       setCart(updatedCartItems);
  //     } else {
  //       alert("Failed to update cart item quantity");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <CartContext.Provider
        value={{
          addToCart,
          cart,
          setCart,
          removeFromCart,
          updateCartItemQuantity,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};
