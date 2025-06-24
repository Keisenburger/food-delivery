"use client";
import type { Category, Food } from "@/types";

import { useEffect, useState } from "react";

const AdminCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [foods, setFoods] = useState<Food[]>([]);
  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:4000/food-category");
      const responseData = await response.json();
      setCategories(responseData.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchFoods = async () => {
    try {
      const response = await fetch("http://localhost:4000/food");
      const responseData = await response.json();
      setFoods(responseData.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategories();
    fetchFoods();
  }, []);
  return (
    <div className="p-6 bg-white rounded-xl flex flex-col gap-4">
      <p className="text-xl font-semibold">Dishes Category</p>
      <div className="flex gap-3 text-[#18181B] font-medium">
        <div className="px-4 py-2 flex gap-2 items-center rounded-full border border-[#E4E4E7] text-[#09090B] font-medium cursor-pointer ">
          <p>All Dishes</p>
          <div className="px-2.5 py-0.5 text-[#FAFAFA] text-xs font-semibold bg-[#18181B] rounded-full">
            {foods.length}
          </div>
        </div>
        <div className="flex gap-3 text-[#18181B] font-medium">
          {categories?.map((category, index) => (
            <div
              key={index}
              className="px-4 py-2 rounded-full items-center border border-[#E4E4E7] text-[#09090B] font-medium cursor-pointer flex gap-2"
            >
              <p>{category.categoryName}</p>
              <div className="px-2.5 py-0.5 text-[#FAFAFA] text-xs font-semibold bg-[#18181B] rounded-full">
                {
                  foods.filter(
                    (food) =>
                      food.category.categoryName === category.categoryName
                  ).length
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCategory;
