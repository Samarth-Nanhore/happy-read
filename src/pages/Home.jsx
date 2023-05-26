import { useContext } from "react";
import { HomeContext } from "../contexts/HomeContext";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const { allBook, isLoding } = useContext(HomeContext);

  const renderBook = () => {
    return allBook.map((book) => {
      const { author, _id, title, price, categoryName, rating } = book;
      return (
        <div id="book-div" key={_id}>
          <h3>Title: {title}</h3>
          <p>Author: {author}</p>
          <p>Rating: {rating}</p>
          <p>Price: {price}</p>

          <NavLink to={`/about/${_id}`}>
            <p>Book Detail</p>
          </NavLink>
        </div>
      );
    });
  };

  return <div>{isLoding ? <h3>...Loding</h3> : renderBook()}</div>;
};
