import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { PoolBettingData } from "./PoolBettingData";
import PoolBettingChart from "./PoolBettingChart";
import { newEntrant } from "./PoolBettingData";
import { useState } from "react";
import { PoolChartData } from "./PoolBettingData";
import { TaxDebtors } from "./TaxDebtorsData";

const PoolBettingandGaming = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [userData, setUserData] = useState({
    labels: PoolChartData.map((data) => data.Revenue),
    datasets: [
      {
        label: "Weekly Collection",
        data: PoolChartData.map((data) => data.weekly),
        backgroundColor: ["#1C4E80"],
        borderColor: "#1C4E80",
      },
      {
        label: "Monthly Collection",
        data: PoolChartData.map((data) => data.monthly),
        backgroundColor: ["orange"],
        borderColor: "orange",
      },
    ],
  });

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="mt-20 md:p-5 lg:ml-[20rem]">
        <PoolBettingChart chartData={userData} />
      </div>
      <div className=" relative overflow-x-auto px-3 md:p-5 lg:ml-[20rem]">
        <div>
          <h2 className="text-2xl font-bold mt-20 md:text-3xl text-[#2f373b] dark:text-slate-100">
            List of Registered Promoters
          </h2>
        </div>

        <div className="flex justify-end mt-4 mb-4">
          <button
            className="flex p-3 transition-all duration-200 bg-[#1C4E80] hover:bg-slate-500 cursor-pointer hover:bg-[#e6e9ec6b] rounded-md text-slate-100 text-xl gap-1"
            onClick={handlePrint}
          >
            <span className="text-xl font-semibold">Print</span>
            <i className="bx bxs-printer text-2xl"></i>
          </button>
        </div>

        <div className="overflow-x-auto">
          <div className="py-2 inline-block container mx-auto p-4" ref={componentRef}>
            <div className="">
              <table className="min-w-full overflow-hidden">
                <thead className="bg-white border-2 ">
                  <tr className="">
                    <th
                      scope="col"
                      className="text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap date text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Registered Promoters
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PoolBettingData.map((item, index) => (
                    <tr
                      className={`border-2 ${
                        index % 2 === 0 ? "bg-slate-500" : "bg-gray-100"
                      }`}
                      key={item.id}
                    >
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                          index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                        }`}
                      >
                        {item.id}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                          index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                        }`}
                      >
                        {item.Registeredpromoters}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <h2 className="text-2xl mt-32 font-bold md:text-3xl text-[#2f373b] dark:text-slate-100">
          New Entrants
        </h2>

        <div className="flex justify-end mt-4 mb-4">
          <button
            className="flex p-3 transition-all duration-200 bg-[#1C4E80] hover:bg-slate-500 cursor-pointer hover:bg-[#e6e9ec6b] rounded-md text-slate-100 text-xl gap-1"
            onClick={handlePrint}
          >
            <span className="text-xl font-semibold">Print</span>
            <i className="bx bxs-printer text-2xl"></i>
          </button>
        </div>

        <div className="py-2 mt-6" ref={componentRef}>
          <div className="overflow-x-auto">
            <table className="min-w-full overflow-hidden">
              <thead className="bg-white border-2 ">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap date text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                  >
                    Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {newEntrant.map((item, index) => (
                  <tr
                    className={`border-2 ${
                      index % 2 === 0 ? "bg-slate-500" : "bg-gray-100"
                    }`}
                    key={item.id}
                  >
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                      {item.id}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                      {item.Name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-2xl mt-32 flex items-center justify-center font-bold md:text-3xl text-[#2f373b] dark:text-slate-100">
          Promoters Exiting the Tax System
        </h2>

        <div className="flex justify-end mt-4 mb-4">
          <button
            className="flex p-3 transition-all duration-200 bg-[#1C4E80] hover:bg-slate-500 cursor-pointer hover:bg-[#e6e9ec6b] rounded-md text-slate-100 text-xl gap-1"
            onClick={handlePrint}
          >
            <span className="text-xl font-semibold">Print</span>
            <i className="bx bxs-printer text-2xl"></i>
          </button>
        </div>

        <div className="py-2 mt-6" ref={componentRef}>
          <div className="overflow-x-auto">
            <table className="min-w-full overflow-hidden">
              <thead className="bg-white border-2 ">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap date text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                  >
                    Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {newEntrant.map((item, index) => (
                  <tr
                    className={`border-2 ${
                      index % 2 === 0 ? "bg-slate-500" : "bg-gray-100"
                    }`}
                    key={item.id}
                  >
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                      {item.id}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                      {item.Name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-2xl mt-32 font-bold md:text-3xl text-[#2f373b] dark:text-slate-100">
          Tax Debtors
        </h2>

        <div className="flex justify-end mt-4 mb-4">
          <button
            className="flex p-3 transition-all duration-200 bg-[#1C4E80] hover:bg-slate-500 cursor-pointer hover:bg-[#e6e9ec6b] rounded-md text-slate-100 text-xl gap-1"
            onClick={handlePrint}
          >
            <span className="text-xl font-semibold">Print</span>
            <i className="bx bxs-printer text-2xl"></i>
          </button>
        </div>

        <div className="py-2 mt-6" ref={componentRef}>
          <div className="overflow-x-auto">
            <table className="min-w-full overflow-hidden">
              <thead className="bg-white border-2 ">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap date text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                  >
                    Debt
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap date text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                  >
                    Penalty
                  </th>
                </tr>
              </thead>
              <tbody>
                {TaxDebtors.map((item, index) => (
                  <tr
                    className={`border-2 ${
                      index % 2 === 0 ? "bg-slate-500" : "bg-gray-100"
                    }`}
                    key={item.id}
                  >
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                      {item.id}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                      {item.Name}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                      {item.Debt}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                      {item.penalty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoolBettingandGaming;
