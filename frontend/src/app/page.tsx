import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
const data = [1, 2, 3, 4, 5, 6];
const Home = () => {
  return (
    <div className="flex flex-col gap-22 bg-neutral-700 items-center">
      <section>
        <Navigation></Navigation>
        <img src="/bg.png" alt="bg" className="w-screen" />
      </section>
      <section className="container flex flex-col gap-[54px]">
        <h2 className="font-semibold text-3xl text-[#FFFFFF]">Appetizers</h2>
        <div className="grid grid-cols-3 gap-9">
          {data.map((item) => {
            return (
              <div
                className="p-4 rounded-[20px] border flex flex-col gap-5 bg-white"
                key={item}
              >
                <img src="/bg.png" alt="" className="h-[210px] rounded-xl" />
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-semibold text-red-500">
                      Finger food
                    </p>
                    <p className="text-[#09090B] text-lg font-semibold">
                      $12.99
                    </p>
                  </div>
                  <p className="text-sm text-[#09090B]">
                    Fluffy pancakes stacked with fruits, cream, syrup, and
                    powdered sugar.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
