import { createContext, useState, useEffect, useContext } from "react";
import { FilterContext } from "./FilterContext";
import { useNavigate } from "react-router-dom";

export const WelcomeContext = createContext();

export const WelcomeContextProvider = ({ children }) => {
  const [allBookcategories, setAllbookcategories] = useState([]);

  const { selectedCategories, setSelectedCategories } =
    useContext(FilterContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchdata() {
      try {
        const responce = await fetch("/api/categories");
        const data = await responce.json();
        setAllbookcategories(data.categories);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, []);

  const handleChange = (bookCategory) => {
    setSelectedCategories([
      ...selectedCategories,
      bookCategory.categoryName.toLowerCase(),
    ]);
    navigate("/home");
  };

  return (
    <>
      <WelcomeContext.Provider value={{ allBookcategories, handleChange }}>
        {children}
      </WelcomeContext.Provider>
    </>
  );
};
