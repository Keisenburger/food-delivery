"use client";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Category, Food } from "@/types";
import { useEffect, useState } from "react";

const Home = () => {
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
  console.log(foods);

  return (
    <div className="flex flex-col gap-22 bg-neutral-700 items-center">
      <section>
        <Navigation></Navigation>
        <img src="/bg.png" alt="bg" className="w-screen" />
      </section>

      {categories.map((category) => {
        return (
          <div
            className="container flex flex-col gap-[54px]"
            key={category._id}
          >
            <h2 className="font-semibold text-3xl text-[#FFFFFF]">
              {category.categoryName}
            </h2>
            <div className="grid grid-cols-3 gap-9">
              {foods
                .filter(
                  (food) => food.category.categoryName === category.categoryName
                )
                .map((food) => {
                  return (
                    <div
                      className="p-4 rounded-[20px] border flex flex-col gap-5 bg-white"
                      key={food._id}
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

      <Footer></Footer>
    </div>
  );
};

export default Home;
