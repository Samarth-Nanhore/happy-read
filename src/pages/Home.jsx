import { useContext, useState } from "react";
import { HomeContext } from "../contexts/HomeContext";
import { NavLink } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { FilterContext } from "../contexts/FilterContext";
import { ArrayFilter } from "../components/ArrayFilter";

export const Home = () => {
  const { isLoding } = useContext(HomeContext);
  const { addToCart, cart } = useContext(CartContext);
  const { filteredBooksBySearch, selectedSortOption } =
    useContext(FilterContext);

  const renderBook = () => {
    filteredBooksBySearch.sort((a, b) => {
      if (selectedSortOption === "lowToHigh") {
        return a.price - b.price; // Sort by price low to high
      } else if (selectedSortOption === "highToLow") {
        return b.price - a.price; // Sort by price high to low
      } else {
        return 0; // No sorting applied
      }
    });

    if (filteredBooksBySearch.length === 0) {
      return <p>Book not found.</p>;
    }

    return filteredBooksBySearch.map((book) => {
      const { author, _id, title, price, categoryName, rating } = book;
      const isAddedToCart = cart.map((book) => book._id).includes(_id);
      return (
        <div id="book-div" key={_id}>
          <h3>Title: {title}</h3>
          <p>Author: {author}</p>
          <p>Rating: {rating}</p>
          <p>Price: {price}</p>
          <p>Category-Name: {categoryName}</p>

          <NavLink to={`/about/${_id}`}>
            <p>Book Detail</p>
          </NavLink>
          {isAddedToCart ? (
            <NavLink to="/cart">
              <button>Go to Cart</button>
            </NavLink>
          ) : (
            <button onClick={() => addToCart(book)}>Add to Cart</button>
          )}
        </div>
      );
    });
  };

  return (
    <div>
      {!isLoding && <ArrayFilter />}
      {isLoding ? <h3>...Loding</h3> : renderBook()}
    </div>
  );
};
