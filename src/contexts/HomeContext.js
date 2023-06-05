import { createContext, useState, useEffect } from "react";

export const HomeContext = createContext();

export const HomeContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [allBook, setAllbook] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        const responce = await fetch("/api/products");
        const data = await responce.json();
        setAllbook(data.products);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, []);

  return (
    <>
      <HomeContext.Provider value={{ allBook, isLoading }}>
        {children}
      </HomeContext.Provider>
      ;
    </>
  );
};
