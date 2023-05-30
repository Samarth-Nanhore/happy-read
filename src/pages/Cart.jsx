import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const Cart = () => {
  const { cart, removeFromCart, updateCartItemQuantity } =
    useContext(CartContext);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <div>
          <div>
            <h2>Price Detail</h2>
            <p>
              Price {cart.length} book: {calculateTotalPrice()}
            </p>
            <button>Checkout</button>
            <hr />
          </div>

          <ul>
            {cart.map((item) => (
              <li key={item._id}>
                <p>Title: {item.title}</p>
                <p>Author: {item.author}</p>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p> {/* Display the quantity */}
                <button onClick={() => removeFromCart(item._id)}>
                  Remove From Cart
                </button>
                <button
                  onClick={() => updateCartItemQuantity(item._id, "increment")}
                >
                  Increment Quantity
                </button>
                <button
                  onClick={() => updateCartItemQuantity(item._id, "decrement")}
                >
                  Decrement Quantity
                </button>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
};
