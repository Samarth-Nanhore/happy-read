import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Fiction",
    description:
      "Explore the art of storytelling with our captivating selection of fiction books.",
  },
  {
    _id: uuid(),
    categoryName: "Non-Fiction",
    description:
      "Explore journey of knowledge and discovery with our enlightening collection of non-fiction books.",
  },
  {
    _id: uuid(),
    categoryName: "Self Help",
    description:
      " Find guidance and personal growth insights from our empowering collection of self-help books.",
  },
];
