import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "The Midnight Library",
    author: "Matt Haig",
    price: "369",
    categoryName: "fiction",
  },
  {
    _id: uuid(),
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: "400",
    categoryName: "fiction",
  },
  {
    _id: uuid(),
    title: "The Headspace Guide To MEDITATION & MINDFULNESS",
    author: "Andy Puddicombe",
    price: "319",
    categoryName: "self-help",
  },
];
