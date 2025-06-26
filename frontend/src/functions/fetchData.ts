import { Category, Food, Order } from "@/types";
import { SetStateAction } from "react";
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODVhN2U4NzBhN2ZhYzU5MGIyYWU2OTgiLCJpYXQiOjE3NTA4MjcwMDYsImV4cCI6MTc1MDkxMzQwNn0.5JHDZpNgUclUQ5xVmo6BafXVcUWN8UAY_p_4FA38LZc";
const baseUrl = "http://localhost:4000/";

export const fetchCategories = async (setCategories: {
  (value: SetStateAction<Category[]>): void;
  (arg0: any): void;
}) => {
  try {
    const response = await fetch(`${baseUrl}food-category`);
    const responseData = await response.json();
    setCategories(responseData.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchFoods = async (setFoods: {
  (value: SetStateAction<Food[]>): void;
  (arg0: any): void;
}) => {
  try {
    const response = await fetch(`${baseUrl}food`);
    const responseData = await response.json();
    setFoods(responseData.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchOrders = async (setOrders: {
  (value: SetStateAction<Order[]>): void;
  (arg0: any): void;
}) => {
  try {
    const response = await fetch(`${baseUrl}food-order`);
    const responseData = await response.json();
    setOrders(responseData.data);
  } catch (error) {
    console.log(error);
  }
};
