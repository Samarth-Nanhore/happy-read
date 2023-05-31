import { createContext, useContext, useState } from "react";
import { HomeContext } from "./HomeContext";

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const { allBook } = useContext(HomeContext);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([100, 1000]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [isFilterApplied, setIsFilterApplied] = useState(false);

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

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (e.target.checked) {
      setSelectedCategories([...selectedCategories, selectedCategory]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== selectedCategory)
      );
    }
    setIsFilterApplied(true);
  };

  const handlePriceChange = (e) => {
    const selectedMinPrice = parseInt(e.target.value);
    const selectedMaxPrice = 1000; // Assuming the maximum price is 1000

    setSelectedPriceRange([selectedMinPrice, selectedMaxPrice]);
    setIsFilterApplied(true);
  };

  const handleRatingChange = (e) => {
    const selectedRating = parseInt(e.target.value);
    setSelectedRating(selectedRating);
    setIsFilterApplied(true);
  };

  const handleSortOptionChange = (e) => {
    const selectedSortOption = e.target.value;
    setSelectedSortOption(selectedSortOption);
    setIsFilterApplied(true);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRange([100, 1000]);
    setSelectedRating(0);
    setSelectedSortOption("");
    setIsFilterApplied(false);
  };

  return (
    <>
      <FilterContext.Provider
        value={{
          filteredBooks,
          selectedSortOption,
          selectedCategories,
          handleCategoryChange,
          selectedPriceRange,
          handlePriceChange,
          selectedRating,
          handleRatingChange,
          handleSortOptionChange,
          isFilterApplied,
          clearFilters,
        }}
      >
        {children}
      </FilterContext.Provider>
    </>
  );
};
