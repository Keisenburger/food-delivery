import { Category, Food } from "@/types";
import SingleMenu from "./SingleMenu";
interface CategoryProps {
  categories: Category[];
  foods: Food[];
  fetchAllData: () => void; // Add this prop
}
export const AdminMenu = ({
  categories,
  foods,
  fetchAllData,
}: CategoryProps) => {
  return (
    <div className="rounded-xl bg-white">
      {categories &&
        categories.map((category, index) => {
          return (
            <SingleMenu
              category={category}
              key={index}
              foods={foods}
              fetchAllData={fetchAllData} // Pass the fetch function down
            />
          );
        })}
    </div>
  );
};

export default AdminMenu;
