import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Book 1",
    author: "Author 1",
    price: 300,
    categoryName: "fiction",
    rating: 4.5,
  },
  {
    _id: uuid(),
    title: "Book 2",
    author: "Author 2",
    price: 400,
    categoryName: "fiction",
    rating: 4,
  },
  {
    _id: uuid(),
    title: "Book 3",
    author: "Author 3",
    price: 200,
    categoryName: "self-help",
    rating: 3.5,
  },
  {
    _id: uuid(),
    title: "Book 4",
    author: "Author 4",
    price: 500,
    categoryName: "non-fiction",
    rating: 2,
  },
  {
    _id: uuid(),
    title: "Book 5",
    author: "Author 5",
    price: 600,
    categoryName: "non-fiction",
    rating: 5,
  },
  {
    _id: uuid(),
    title: "Book 6",
    author: "Author 6",
    price: 600,
    categoryName: "self-help",
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Book 7",
    author: "Author 7",
    price: 500,
    categoryName: "fiction",
    rating: 4.1,
  },
  {
    _id: uuid(),
    title: "Book 8",
    author: "Author 8",
    price: 700,
    categoryName: "non-fiction",
    rating: 2,
  },
  {
    _id: uuid(),
    title: "Book 9",
    author: "Author 9",
    price: 1000,
    categoryName: "self-help",
    rating: 5,
  },
];
