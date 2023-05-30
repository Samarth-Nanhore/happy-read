import { useContext } from "react";
import { WishlistContext } from "../contexts/WishlistContext";

export const WishList = () => {
  const { wishlist, removeFromWishlist, addToCartFromWishlist } =
    useContext(WishlistContext);

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlist.length > 0 ? (
        <div>
          <ul>
            {wishlist.map((item) => (
              <li key={item._id}>
                <p>Title: {item.title}</p>
                <p>Author: {item.author}</p>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p> {/* Display the quantity */}
                <button onClick={() => removeFromWishlist(item._id)}>
                  Remove From Wishlist{" "}
                </button>
                ||
                <button onClick={() => addToCartFromWishlist(item._id, item)}>
                  Add to Cart
                </button>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Wishlist is empty</p>
      )}
    </div>
  );
};
