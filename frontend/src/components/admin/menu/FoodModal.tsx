import { Category } from "@/types";
import { X } from "lucide-react";

interface FoodModalProps {
  setIsModalOpen: (open: boolean) => void;
  category: Category;
}

const FoodModal = ({ setIsModalOpen, category }: FoodModalProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-full h-full fixed flex justify-center items-center  left-0 top-0 z-30 bg-black/50 cursor-default text-[#09090B]">
      <div className="bg-white rounded-xl p-6  flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-[16px]">
            Add new Dish to {category.categoryName}
          </p>
          <button
            className="rounded-full bg-[#F4F4F5] p-4 hover:bg-[#E4E4E7] transition duration-200 cursor-pointer"
            onClick={handleClose}
          >
            <X />
          </button>
        </div>
        <div className="flex gap-6">
          <div className="felx flex-col gap-2 w-full">
            <p className="font-medium">Food Name</p>
            <input
              type="text"
              className="px-3 py-2 border border-[#E4E4E7] rounded-md focus:outline-none"
              placeholder="Type food name"
            />
          </div>
          <div className="felx flex-col gap-2 w-full">
            <p className="font-medium">Food Price</p>
            <input
              type="number"
              className="px-3 py-2 border border-[#E4E4E7] rounded-md focus:outline-none"
              placeholder="Enter price..."
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium">Ingredients</p>
          <textarea
            className="w-full px-3 py-2 border border-[#E4E4E7] rounded-md focus:outline-none"
            placeholder="List ingredients..."
            rows={4}
          ></textarea>
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="font-medium">Food Image</p>
          <input
            type="string"
            className="px-3 py-2 border border-[#E4E4E7] rounded-md focus:outline-none"
            placeholder="Enter image url"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodModal;
