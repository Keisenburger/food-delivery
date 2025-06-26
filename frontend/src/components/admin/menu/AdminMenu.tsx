import { fetchCategories, fetchFoods } from "@/functions/fetchData";
import { Category, Food } from "@/types";
import { useEffect, useState, useCallback } from "react";
import SingleMenu from "./SingleMenu";

export const AdminMenu = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [foods, setFoods] = useState<Food[]>([]);

  // Create a function to fetch all data
  const fetchAllData = useCallback(() => {
    fetchCategories(setCategories);
    fetchFoods(setFoods);
  }, []);

  useEffect(() => {
    fetchAllData();
  }, []); // Remove foods and categories from dependency array

  return (
    <div className="rounded-xl bg-white">
      {categories &&
        categories.map((category, index) => {
          return (
            <SingleMenu
              category={category}
              key={index}
              foods={foods}
              onDataChange={fetchAllData} // Pass the fetch function down
            />
          );
        })}
    </div>
  );
};

export default AdminMenu;
