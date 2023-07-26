import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import DashboardContent from "./DashboardContent";
import BarChart from "./ChartComponent/BarChart";
import LineChart from "./ChartComponent/LineChart";
import { UserData } from "./Data";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Total Revenue",
        data: UserData.map((data) => data.totalRevenue),
        backgroundColor: ["#1C4E80", "orange"],
        borderColor: "blue"
      },
    ],
  });

  const [toggle, setToggle] = useState(1);

  const updateToggle = (id) => {
    setToggle(id);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="h-screen flex w-full">
      <Sidebar />

      <div className="flex flex-col h-20 w-full lg:flex-1 lg:ml-80">
        <div>
            <Navbar />
        </div>
        <div>
          <DashboardContent />
        </div>

        <ul
          data-aos="zoom-in"
          className="flex gap-2 md:gap-5 mx-auto mt-10 p-7"
        >
          <div
            className="flex gap-2 w-20 text-[#2f373b] dark:text-slate-100 cursor-pointer"
            onClick={() => updateToggle(1)}
          >
            <span className="bg-[#1C4E80] w-8 h-5 "></span>
            <li className="text-1xl md:text-xl -mt-1 font-bold">Bar</li>
          </div>
          <div
            className="flex gap-2 text-[#2f373b] dark:text-slate-100 cursor-pointer"
            onClick={() => updateToggle(2)}
          >
            <span className=" bg-orange-600 w-8 h-5 "></span>
            <li className="text-1xl md:text-xl -mt-1 font-bold">Graph</li>
          </div>
        </ul>
        <div data-aos="fade-up" className="">
          <div className={` ${toggle === 1 ? "show-content" : "content"}`}>
            <BarChart chartData={userData} />
          </div>
          <div className={toggle === 2 ? "show-content" : "content"}>
            <LineChart chartData={userData} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
