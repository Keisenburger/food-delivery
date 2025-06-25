import { fetchCategories } from "@/functions/fetchData";
import { Category } from "@/types";
import { useEffect, useState } from "react";
import SingleMenu from "./SingleMenu";

export const AdminMenu = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    fetchCategories(setCategories);
  }, []);

  return (
    <div className="rounded-xl bg-white">
      {categories &&
        categories.map((category, index) => {
          return <SingleMenu category={category} key={index}></SingleMenu>;
        })}
    </div>
  );
};

export default AdminMenu;
