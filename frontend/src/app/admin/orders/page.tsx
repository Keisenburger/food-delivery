"use client";
import SideBar from "@/components/admin/sidebar/Sidebar";
import { ArrowDownUp, Calendar } from "lucide-react";

import { useEffect, useState } from "react";

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:4000/food-order");
      const responseData = await response.json();
      setOrders(responseData.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="flex bg-[#F4F4F5] gap-6">
      <SideBar page={"Orders"}></SideBar>
      <div className="mt-6 mb-13 border mr-10 w-full flex flex-col gap-6">
        <div className="flex justify-end">
          <img
            src="/logo.png"
            alt=""
            className="size-9 bg-white rounded-full"
          />
        </div>
        <div className="rounded-lg ">
          <div className="p-4 flex justify-between items-center bg-white rounded-t-lg">
            <div>
              <p className="text-[#09090B] font-bold text-xl">Orders</p>
              <p className="text-xs font-semibold text-[#71717A]">32 items</p>
            </div>
            <div className="gap-3 flex items-center">
              <div className="rounded-full border border-[#E4E4E7] flex items-center px-4 py-2 gap-2 ">
                <Calendar size={16} />
                <p>13 June 2023 - 14 July 2023</p>
              </div>
              <div className="px-4 py-2 text-[#FAFAFA] bg-[#acacae] rounded-full">
                Change delivery state
              </div>
            </div>
          </div>
          {/* orders */}
          <div className="flex p-4 gap-8 items-center border border-[#E4E4E7] bg-alpha-50 ">
            <input type="checkbox" name="" id="" />
            <p>№</p>
            <p className="min-w-[250px]">Customer</p>
            <p className="min-w-[160px]">Food</p>
            <div className="min-w-[120px] flex items-center justify-between">
              <p>Date</p>
              <ArrowDownUp size={16} />
            </div>
            <p className="min-w-[160px]">Total</p>
            <p className="w-full">Delivery Address</p>
            <p className="min-w-[160px]">Delivery State</p>
          </div>
          {orders &&
            orders.map((order) => {
              return (
                <div
                  className="flex p-4 gap-8 items-center border border-[#E4E4E7] bg-white hover:bg-[#F4F4F5] transition-colors duration-200 cursor-pointer"
                  key={order._id}
                >
                  <input type="checkbox" name="" id="" />
                  <p>1</p>
                  <p className="min-w-[250px]">{order?.user?.email}</p>
                  <p className="min-w-[160px]">
                    {order?.foodOrderItems.length} foods
                  </p>
                  <div className="min-w-[120px] flex items-center justify-between">
                    <p>{order?.createdAt}</p>
                    <ArrowDownUp size={16} />
                  </div>
                  <p className="min-w-[160px]">${order?.totalPrice}</p>
                  <p className="w-full">{order?.user?.address}</p>
                  <p className="min-w-[160px]">{order?.status}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Admin;
