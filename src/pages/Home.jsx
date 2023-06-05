import { useContext, useState } from "react";
import { HomeContext } from "../contexts/HomeContext";
import { NavLink } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { FilterContext } from "../contexts/FilterContext";
import { ArrayFilter } from "../components/ArrayFilter";
import "../styles/Home.css";

export const Home = () => {
  const { isLoading } = useContext(HomeContext);
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
      return <p>No Products Found for applied filters.</p>;
    }

    return filteredBooksBySearch.map((book) => {
      const { author, _id, title, price, categoryName, rating, img } = book;
      const isAddedToCart = cart.map((book) => book._id).includes(_id);

      return (
        <div key={_id} className="book">
          <img src={img} alt={title} />
          <h3>Title: {title}</h3>
          <p>rating: {rating}</p>

          <p>price: {price}</p>

          <NavLink to={`/about/${_id}`}>
            <p>Book Detail</p>
          </NavLink>
          {isAddedToCart ? (
            <NavLink to="/cart" className="button-container">
              <button>Go to Cart</button>
            </NavLink>
          ) : (
            <div className="button-container">
              <button onClick={() => addToCart(book)}>Add to Cart</button>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div>
      {!isLoading && <ArrayFilter />}
      {isLoading ? (
        <h3>...Loading</h3>
      ) : (
        <div className="book-container">{renderBook()}</div>
      )}
    </div>
  );
};
