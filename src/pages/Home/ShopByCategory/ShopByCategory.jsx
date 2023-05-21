import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import ToyCard from "./ToyCard";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("Car");

  useEffect(() => {
    fetch(`http://localhost:5000/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [activeTab]);


  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="my-20">
      <div className="text-center mb-10">
        <div className="flex flex-row items-center justify-center">
          <hr className="pl-20 h-1 bg-indigo-300" />
          <div className="flex flex-row items-center justify-center">
            <img
              className="w-14 h-14 rounded-full"
              src="https://img.freepik.com/free-psd/3d-illustration-children-s-toy-duck-car_23-2149345304.jpg?w=740&t=st=1684402780~exp=1684403380~hmac=5a68b570dcac4a59da579f12a68f6a314daa1b848567857ce003a056f616ba72"
              alt=""
            />
            <hr className="pr-20 h-1 bg-indigo-300" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-rose-500 w-full lg:leading-tight sm:text-4xl lg:text-5xl ">
          Shop By Category
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        <div
          onClick={() => handleTabClick("Car")}
          className={`tab  tab2 Car ${
            activeTab == "Car"
              ? " bg-error text-white rounded-lg text-xl font-bold"
              : "text-xl border-2 rounded-lg"
          }`}
        >
          Car
        </div>
        <div
          onClick={() => handleTabClick("Truck")}
          className={`tab  tab2 Truck ${
            activeTab == "Truck"
              ? " bg-error text-white rounded-lg text-xl font-bold"
              : "text-xl border-2 rounded-lg"
          }`}
        >
          Truck
        </div>
        <div
          onClick={() => handleTabClick("Bus")}
          className={`tab  tab2 Bus ${
            activeTab == "Bus"
              ? " bg-error text-white rounded-lg text-xl font-bold"
              : "text-xl border-2 rounded-lg"
          }`}
        >
          Bus
        </div>
      </div>
      <div className="grid md:grid-cols-2 my-5 gap-8">
        {toys?.map((toy) => (
          <ToyCard toy={toy}></ToyCard>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
