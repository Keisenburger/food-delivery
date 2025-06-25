import FoodCard from "@/components/Home/menu/FoodCard";
import { fetchCategories, fetchFoods } from "@/functions/fetchData";
import { Category, Food } from "@/types";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

export const AdminMenu = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    fetchCategories(setCategories);
    fetchFoods(setFoods);
  }, []);
  return (
    <div>
      {categories &&
        categories.map((category, index) => {
          return (
            <div
              className="p-6 bg-white rounded-xl flex flex-col gap-4"
              key={index}
            >
              <p className="text-xl font-semibold text-[#09090B]">
                {category.categoryName} (
                {foods &&
                  foods.filter(
                    (food) =>
                      food.category.categoryName === category.categoryName
                  ).length}
                )
              </p>
              <div className="grid grid-cols-4 gap-6">
                <div className="py-2 px-4 rounded-[20px] border flex items-center justify-center flex-col gap-6 border-red-500 border-dashed">
                  <div className="rounded-full bg-red-500 flex justify-center items-center size-[40px]">
                    <Plus size={16} color="white" />
                  </div>
                  <p className="text-sm font-medium text-[#18181B]">
                    Add new Dish to {category.categoryName}
                  </p>
                </div>
                {foods &&
                  foods
                    .filter(
                      (food) =>
                        food.category.categoryName === category.categoryName
                    )
                    .map((food, index) => {
                      return <FoodCard food={food} key={index}></FoodCard>;
                    })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AdminMenu;
