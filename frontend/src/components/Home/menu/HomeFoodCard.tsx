import { Food } from "@/types";
import { Plus } from "lucide-react";

export const HomeFoodCard = ({ food }: { food: Food }) => {
  return (
    <div className="p-4 rounded-[20px] border border-[#E4E4E7] flex flex-col gap-5 bg-white">
      {/* <img src="/bg.png" alt="" className="h-[210px] rounded-xl" /> */}
      <div className="bg-[url(/bg.png)] w-full h-[210px] bg-center bg-cover rounded-xl p-5 flex justify-end items-end ">
        <div className="bg-white rounded-full p-4 text-red-500 hover:bg-[#E4E4E7] cursor-pointer">
          <Plus></Plus>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold text-red-500">{food.foodName}</p>
          <p className="text-[#09090B] text-lg font-semibold">${food.price}</p>
        </div>
        <p className="text-sm text-[#09090B]">{food.ingredients}</p>
      </div>
    </div>
  );
};

export default HomeFoodCard;
