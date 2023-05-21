import { useEffect, useState } from "react";

export const Home = () => {
  const [allproduct, setAllproduct] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    async function fetchdata() {
      try {
        const responce = await fetch("/api/products");
        const data = await responce.json();
        setAllproduct(data.products);
        setIsLoding(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, []);

  console.log(allproduct);

  return (
    <div>
      {isLoding ? (
        <p>Loding...</p>
      ) : (
        allproduct.map((book) => {
          const { author, id, title, price, categoryName } = book;
          return (
            <div>
              <h3>Title: {title}</h3>
              <p>Author: {author}</p>
              <p>Price: {price}</p>
              <hr />
            </div>
          );
        })
      )}
    </div>
  );
};
