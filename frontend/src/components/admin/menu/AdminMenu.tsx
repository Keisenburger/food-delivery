import { Category, Food } from "@/types";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

export const AdminMenu = () => {
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
    <div>
      {categories.map((category, index) => {
        return (
          <div
            className="p-6 bg-white rounded-xl flex flex-col gap-4"
            key={index}
          >
            <p className="text-xl font-semibold text-[#09090B]">Salads (3)</p>
            <div className="grid grid-cols-4 gap-6">
              <div className="py-2 px-4 rounded-[20px] border flex items-center justify-center flex-col gap-6 border-red-500 border-dashed">
                <div className="rounded-full bg-red-500 flex justify-center items-center size-[40px]">
                  <Plus size={16} color="white" />
                </div>
                <p className="text-sm font-medium text-[#18181B]">
                  Add new Dish to Salads
                </p>
              </div>
              {foods
                .filter(
                  (food) => food.category.categoryName === category.categoryName
                )
                .map((food, index) => {
                  return (
                    <div
                      className="p-4 rounded-[20px] border flex flex-col gap-5 bg-white"
                      key={index}
                    >
                      <img
                        src="/bg.png"
                        alt=""
                        className="h-[210px] rounded-xl"
                      />
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <p className="text-2xl font-semibold text-red-500">
                            {food.foodName}
                          </p>
                          <p className="text-[#09090B] text-lg font-semibold">
                            ${food.price}
                          </p>
                        </div>
                        <p className="text-sm text-[#09090B]">
                          {food.ingredients}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminMenu;
