import { useContext, useState } from "react";
import { HomeContext } from "../contexts/HomeContext";
import { NavLink } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

export const Home = () => {
  const { allBook, isLoding } = useContext(HomeContext);

  const { addToCart, cart } = useContext(CartContext);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([100, 1000]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedSortOption, setSelectedSortOption] = useState("");

  const filteredBooks =
    selectedCategories.length === 0
      ? allBook.filter(
          (book) =>
            book.price >= selectedPriceRange[0] &&
            book.price <= selectedPriceRange[1] &&
            book.rating >= selectedRating
        )
      : allBook.filter(
          (book) =>
            selectedCategories.includes(book.categoryName) &&
            book.price >= selectedPriceRange[0] &&
            book.price <= selectedPriceRange[1] &&
            book.rating >= selectedRating
        );

  const renderBook = () => {
    filteredBooks.sort((a, b) => {
      if (selectedSortOption === "lowToHigh") {
        return a.price - b.price; // Sort by price low to high
      } else if (selectedSortOption === "highToLow") {
        return b.price - a.price; // Sort by price high to low
      } else {
        return 0; // No sorting applied
      }
    });

    return filteredBooks.map((book) => {
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

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (e.target.checked) {
      setSelectedCategories([...selectedCategories, selectedCategory]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== selectedCategory)
      );
    }
  };

  const handlePriceChange = (e) => {
    const selectedMinPrice = parseInt(e.target.value);
    const selectedMaxPrice = 1000; // Assuming the maximum price is 1000

    setSelectedPriceRange([selectedMinPrice, selectedMaxPrice]);
  };

  const handleRatingChange = (e) => {
    const selectedRating = parseInt(e.target.value);
    setSelectedRating(selectedRating);
  };

  const handleSortOptionChange = (e) => {
    const selectedSortOption = e.target.value;
    setSelectedSortOption(selectedSortOption);
  };

  return (
    <div>
      <div>
        <span>Filter by Category: </span>
        <label>
          <input
            type="checkbox"
            value="fiction"
            checked={selectedCategories.includes("fiction")}
            onChange={handleCategoryChange}
          />
          fiction
        </label>
        <label>
          <input
            type="checkbox"
            value="non-fiction"
            checked={selectedCategories.includes("non-fiction")}
            onChange={handleCategoryChange}
          />
          non-fiction
        </label>
        <label>
          <input
            type="checkbox"
            value="self-help"
            checked={selectedCategories.includes("self-help")}
            onChange={handleCategoryChange}
          />
          self-help
        </label>

        <div>
          <span>Filter by Price: </span>
          <input
            type="range"
            min={100}
            max={1000}
            value={selectedPriceRange[0]}
            onChange={handlePriceChange}
          />
          <span>{selectedPriceRange[0]}</span>
        </div>

        <div>
          <span>Filter by Rating: </span>
          <label>
            <input
              type="radio"
              value={1}
              checked={selectedRating === 1}
              onChange={handleRatingChange}
            />
            1 star & above
          </label>
          <label>
            <input
              type="radio"
              value={2}
              checked={selectedRating === 2}
              onChange={handleRatingChange}
            />
            2 stars & above
          </label>
          <label>
            <input
              type="radio"
              value={3}
              checked={selectedRating === 3}
              onChange={handleRatingChange}
            />
            3 stars & above
          </label>
          <label>
            <input
              type="radio"
              value={4}
              checked={selectedRating === 4}
              onChange={handleRatingChange}
            />
            4 stars & above
          </label>
        </div>
        <div>
          <span>Sort by Price: </span>
          <label>
            <input
              type="radio"
              value="lowToHigh"
              checked={selectedSortOption === "lowToHigh"}
              onChange={handleSortOptionChange}
            />
            Low to High
          </label>
          <label>
            <input
              type="radio"
              value="highToLow"
              checked={selectedSortOption === "highToLow"}
              onChange={handleSortOptionChange}
            />
            High to Low
          </label>
        </div>
      </div>

      {isLoding ? <h3>...Loding</h3> : renderBook()}
    </div>
  );
};
