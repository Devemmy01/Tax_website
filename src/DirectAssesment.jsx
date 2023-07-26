import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import LineChartTaxLia from "./ChartComponent/LineChartTaxLia";
import React, { useRef } from "react";
import { useState } from "react";
import { ArtisanData } from "./LineChartTaxLiaData";
import { NewEntrant } from "./NewEntrants";
import { ExitingData } from "./ExitingData";
import { TaxDebtors } from "./TaxDebtorsData";
import { useReactToPrint } from "react-to-print";

const DirectAssesment = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [userData, setUserData] = useState({
    labels: ArtisanData.map((data) => data.year),
    datasets: [
      {
        label: "Tax Liability for Professionals",
        data: ArtisanData.map((data) => data.taxliabilityfromprof),
        backgroundColor: ["#1C4E80"],
      },
      {
        label: "Tax Liability for Artisans",
        data: ArtisanData.map((data) => data.taxliabilityfromartisan),
        backgroundColor: ["orange"],
      },
    ],
  });

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="relative p-5 lg:ml-[20rem] flex flex-col ">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl text-[#2f373b] dark:text-slate-100">
            Tax Liability
          </h2>
          <div className="">
            <LineChartTaxLia chartData={userData} />
          </div>
        </div>

        <div className="flex-wrap">
          <h2 className="text-2xl font-bold mt-28 md:text-3xl text-[#2f373b] dark:text-slate-100">
            Total Revenue Collected From
          </h2>

          <ul
            // data-aos="zoom-in"
            className="flex flex-col md:flex-row gap-5 md:gap-5 mt-5"
          >
            <Link
              to={"/Professional"}
              className="flex gap-2 p-3 rounded-md transition-all duration-200 text-slate-100 bg-[#1C4E80] hover:bg-slate-500 cursor-pointer"
            >
              <i className="bi bi-briefcase text-2xl"></i>
              <li className="text-1xl md:text-xl mt-1 font-bold">
                Professionals & Businessmen
              </li>
            </Link>
            <Link
              to={"/Artisan"}
              className="flex gap-2 p-3 rounded-md transition-all duration-200 text-slate-100 bg-[#1C4E80] hover:bg-slate-500 cursor-pointer"
            >
              <i className="bi bi-tools text-2xl"></i>
              <li className="text-1xl md:text-xl mt-1 font-bold">
                Artisans, Craftsmen & Traders
              </li>
            </Link>
          </ul>
        </div>

        <h2 className="text-2xl mt-32 flex items-center justify-center font-medium md:text-3xl text-[#2f373b] dark:text-slate-100">
          New Entrants
        </h2>

        <div
          className="py-2 mt-6"
          ref={componentRef}
        >
          <div className="overflow-x-auto">
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
                    Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {NewEntrant.map((item, index) => (
                  <tr className={`border-2 ${
                    index % 2 === 0 ? "bg-slate-500" : "bg-gray-100"
                  }`} key={item.id}>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}>
                      {item.id}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}>
                      {item.Name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-32 md:text-3xl text-[#2f373b] dark:text-slate-100">
            List of Exiting Tax-Payers
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

        <div className="overflow-x-auto ">
          <div className="py-2 inline-block " ref={componentRef}>
            <div className="overflow-x-auto">
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
                      Name
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Cause of exit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ExitingData
                    .map((item, index) => (
                      <tr className={`border-2 ${
                        index % 2 === 0 ? "bg-slate-500" : "bg-gray-100"
                      }`} key={item.id}>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}>
                          {item.id}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}>
                          {item.Name}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}>
                          {item.cause}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-32 md:text-3xl text-[#2f373b] dark:text-slate-100">
            List of Tax Debtors
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

        <div className="overflow-x-auto ">
          <div className="py-2 inline-block " ref={componentRef}>
            <div className="overflow-x-auto">
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
                      Name
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Debt
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TaxDebtors
                    .map((item,index) => (
                      <tr className={`border-2 ${
                        index % 2 === 0 ? "bg-slate-500" : "bg-gray-100"
                      }`} key={item.id}>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}>
                          {item.id}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}>
                          {item.Name}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}>
                          {item.Debt}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectAssesment;
