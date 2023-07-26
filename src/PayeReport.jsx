import React, { useRef } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useReactToPrint } from "react-to-print";
import { data } from "./TableData";
import { data2 } from "./TableData2";
import { data3 } from "./TableData3";

const PayeReport = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="relative overflow-x-auto p-3 md:p-5 lg:ml-[20rem]">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl text-[#2f373b] dark:text-slate-100">
            General PAYE Reports
          </h2>
          <p className="text-[#2f373b] text-[15px] pt-5 dark:text-slate-300">
            Enter a company name in the search box below to see company's PAYE
            reports
          </p>
        </div>
        <div className="pb-4 mt-7">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              id="table-search"
              className="w-full block p-2 pl-10 text-sm text-gray-900 border-2 outline-none border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
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

        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full" ref={componentRef}>
            <div className="overflow-hidden">
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
                      Date printed
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Company file number with BIR
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Company name
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Staff name
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Total earned income
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Relief
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Taxable income
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Tax payable
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Tax already deducted
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Underpayment/Overpayment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    .filter((item) => {
                      return search.toLowerCase() === ""
                        ? item
                        : item.Company_name.toLowerCase().includes(
                            search.toLowerCase()
                          );
                    })
                    .map((item, index) => (
                      <tr className={`border-2 ${
                        index % 2 === 0 ? "bg-slate-500" : "bg-gray-100"
                      }`}
                      key={item.id}>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}
                      >
                          {item.id}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}
                        >
                          {item.Date_printed}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}
                      >
                          {item.Company_file_number}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                          {item.Company_name}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                          {item.Staff_name}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                          {item.Total_earned_income}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                          {item.Relief}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                          {item.Taxable_income}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                          {item.Tax_payable}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                          {item.Tax_already_deducted}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                          {item.Underpayment_Overpayment}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto p-3 md:p-5 lg:ml-[20rem]">
        <h2 className="text-2xl font-bold md:text-3xl mt-32 text-[#2f373b] dark:text-slate-100">
          PAYE Tax Analysis Reports
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

        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full" ref={componentRef}>
            <div className="overflow-hidden">
              <table className="min-w-full overflow-hidden">
                <thead className="bg-white border-2 ">
                  <tr className="">
                    <th
                      scope="col"
                      className="whitespace-nowrap text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Report Date
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Operator Name
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Entertainment Allowance
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Utility Allowance
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Leave Allowance
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Total Relief
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data2.map((item, index) => (
                    <tr className={`border-2 ${
                      index % 2 === 0 ? "bg-slate-500" : "bg-gray-100"
                    }`} key={item.id}>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}>
                        {item.reportDate}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}>
                        {item.operatorName}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}>
                        {item.Entertainmentallowance}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}>
                        {item.Utilityallowance}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}>
                        {item.Leaveallowance}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}>
                        {item.total_releif}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>



      <div className="relative overflow-x-auto p-3 md:p-5 lg:ml-[20rem]">
        <h2 className="text-2xl font-bold md:text-3xl mt-28 text-[#2f373b] dark:text-slate-100">
          PAYE Tax Remittances (Yearly / Monthly)
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

        <div className="overflow-x-auto">
          <div className="py-2 inline-block min-w-full" ref={componentRef}>
            <div className="overflow-hidden">
              <table className="min-w-full overflow-hidden">
                <thead className="bg-white border-2 ">
                  <tr className="">
                    <th
                      scope="col"
                      className="whitespace-nowrap text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Operator Name 
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Total Monthly Remittances Made
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Total Remittances For The Year
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap text-sm font-semibold text-gray-900 px-6 tracking-wide py-4 text-left"
                    >
                      Outstanding Liability
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data3.map((item, index) => (
                    <tr className={`border-2 ${
                      index % 2 === 0 ? "bg-slate-500" : "bg-gray-100"
                    }`} key={item.id}>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}>
                        {item.operatorname}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}>
                        {item.totalmonthlyremittancesmade}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}>
                        {item.totalremittancesfortheyear}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}>
                        {item.outstandingliability}
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

export default PayeReport;
