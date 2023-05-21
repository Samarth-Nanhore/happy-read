import { useContext } from "react";
import { HomeContext } from "../contexts/HomeContext";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const { allBook, isLoding } = useContext(HomeContext);
  console.log(allBook);

  return (
    <div>
      {isLoding ? (
        <p>Loding...</p>
      ) : (
        allBook.map((book) => {
          const { author, _id, title, price, categoryName } = book;
          return (
            <div id="book-div">
              <h3>Title: {title}</h3>
              <p>Author: {author}</p>
              <p>Price: {price}</p>
              <NavLink to={`/about/${_id}`}>
                <p>Book Detail</p>
              </NavLink>
            </div>
          );
        })
      )}
    </div>
  );
};
