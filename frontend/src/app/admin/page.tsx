"use client";
import AdminCategory from "@/components/admin/category/Category";
import AdminMenu from "@/components/admin/menu/AdminMenu";
import SideBar from "@/components/admin/sidebar/Sidebar";
import TopIcon from "@/components/admin/topIcon/TopIcon";

const Menu = () => {
  return (
    <div className="flex bg-[#F4F4F5] gap-6 min-h-screen">
      <SideBar page={"Menu"}></SideBar>
      <div className="ml-[230px] mt-6 mb-13  mr-10 w-full flex flex-col gap-6">
        <TopIcon></TopIcon>
        <AdminCategory></AdminCategory>

        <AdminMenu></AdminMenu>
      </div>
    </div>
  );
};

export default Menu;
