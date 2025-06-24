"use client";
import AdminCategory from "@/components/admin/category/Category";
import AdminMenu from "@/components/admin/menu/AdminMenu";
import SideBar from "@/components/admin/sidebar/Sidebar";

const Menu = () => {
  return (
    <div className="flex bg-[#F4F4F5] gap-6">
      <SideBar page={"Menu"}></SideBar>
      <div className="mt-6 mb-13 border mr-10 w-full flex flex-col gap-6">
        <div className="flex justify-end">
          <img
            src="/logo.png"
            alt=""
            className="size-9 bg-white rounded-full"
          />
        </div>
        <AdminCategory></AdminCategory>

        <AdminMenu></AdminMenu>
      </div>
    </div>
  );
};

export default Menu;
