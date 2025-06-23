const Navigation = () => {
  return (
    <div className="flex w-full justify-center items-center py-3 bg-[#18181B]">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" className="w-[46px]" />
          <div>
            <div className="font-semibold text-xl text-[#FAFAFA]">
              <span>Nom</span>
              <span className="text-[#EF4444]">Nom</span>
            </div>
            <p className="text-xs text-[#F4F4F5]">Swift delivery</p>
          </div>
        </div>
        <div className="flex gap-3 font-medium">
          <button className="px-3 py-2 text-[#18181B] bg-[#F4F4F5] rounded-full ">
            Sign up
          </button>
          <button className="px-3 py-2 rounded-full text-[#FAFAFA] bg-[#EF4444]">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
