import { Food } from "@/types";

export const FoodCard = ({ food }: { food: Food }) => {
  return (
    <div className="p-4 rounded-[20px] border border-[#E4E4E7] flex flex-col gap-5 bg-white">
      <img src="/bg.png" alt="" className="h-[210px] rounded-xl" />
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

export default FoodCard;
