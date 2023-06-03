import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";
import "../styles/ArrayFilter.css";

export const ArrayFilter = () => {
  const {
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
    handleInputSearchChange,
    searchTitle,
  } = useContext(FilterContext);

  return (
    <div className="array-filter">
      <div>
        <input
          type="text"
          value={searchTitle}
          onChange={handleInputSearchChange}
          placeholder="Search by title"
        />
      </div>
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

      {isFilterApplied && <button onClick={clearFilters}>Clear Filters</button>}
    </div>
  );
};
