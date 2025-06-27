"use client";
import { fetchCategories, fetchFoods } from "@/functions/fetcherFunctions/GET";
import type { Category, Food } from "@/types";
import { Plus } from "lucide-react";

import { useCallback, useEffect, useState } from "react";
import CategoryModal from "../modals/CategoryModal";

const AdminCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [foods, setFoods] = useState<Food[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fetchAllData = useCallback(() => {
    fetchCategories(setCategories);
    fetchFoods(setFoods);
  }, []);
  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div className="p-6 bg-white rounded-xl flex flex-col gap-4">
      <p className="text-xl font-semibold">Dishes Category</p>
      <div className="flex gap-3 text-[#18181B] font-medium">
        <div className="px-4 py-2 flex gap-2 items-center rounded-full border border-[#E4E4E7] text-[#09090B] font-medium cursor-pointer ">
          <p>All Dishes</p>
          <div className="px-2.5 py-0.5 text-[#FAFAFA] text-xs font-semibold bg-[#18181B] rounded-full">
            {foods && foods?.length}
          </div>
        </div>
        <div className="flex gap-3 text-[#18181B] font-medium">
          {categories &&
            categories?.map((category, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full items-center border border-[#E4E4E7] text-[#09090B] font-medium cursor-pointer flex gap-2"
              >
                <p>{category.categoryName}</p>
                <div className="px-2.5 py-0.5 text-[#FAFAFA] text-xs font-semibold bg-[#18181B] rounded-full">
                  {foods &&
                    foods.filter(
                      (food) =>
                        food?.category?.categoryName === category?.categoryName
                    ).length}
                </div>
              </div>
            ))}
          <div
            className="rounded-full bg-red-500 hover:bg-red-600 flex justify-center items-center size-[40px] transition cursor-pointer duration-200"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <Plus size={16} color="white" />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <CategoryModal
          setIsModalOpen={setIsModalOpen}
          onDataChange={fetchAllData}
        />
      )}
    </div>
  );
};

export default AdminCategory;
