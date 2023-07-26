import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { TaxDebtors } from "./TaxDebtorsData";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { CapitalGainsData, Totalrev } from "./CapitalGainsData";
import { purchasers } from "./CapitalGainsData";
import { vendors } from "./CapitalGainsData";

const CapitalGainsTax = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className="relative overflow-x-auto p-5 lg:ml-[20rem]">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mt-8 text-[#2f373b] dark:text-slate-100">
            Capital Gains Liability
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

        <div className=" overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full" ref={componentRef}>
            <div className="overflow-hidden">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr>
                    <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">
                      Transaction ID
                    </th>
                    <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">
                      Asset Name
                    </th>
                    <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">
                      Date Acquired
                    </th>
                    <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">
                      Date Sold
                    </th>
                    <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">
                      Acquisition Cost
                    </th>
                    <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">
                      Selling Price
                    </th>
                    <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">
                      Capital Gains
                    </th>
                    <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">
                      Tax Liability
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CapitalGainsData.capitalGainsTransactions.map(
                    (transaction, index) => (
                      <tr
                        className={`border-2 ${
                          index % 2 === 0 ? "bg-slate-500" : "bg-gray-100"
                        }`}
                        key={transaction.transactionId}
                      >
                        <td
                          className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                            index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                          }`}
                        >
                          {transaction.transactionId}
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                            index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                          }`}
                        >
                          {transaction.assetName}
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                            index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                          }`}
                        >
                          {transaction.dateAcquired}
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                            index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                          }`}
                        >
                          {transaction.dateSold}
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                            index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                          }`}
                        >
                          {transaction.acquisitionCost}
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                            index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                          }`}
                        >
                          {transaction.sellingPrice}
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                            index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                          }`}
                        >
                          {transaction.capitalGains}
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                            index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                          }`}
                        >
                          {transaction.taxLiability}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto p-5 mt-24 lg:ml-[20rem]">
        <div>
          <h2 className="text-2xl md:text-3xl text-[#2f373b] dark:text-slate-100">
            Transaction vendors
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

        <div className=" overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full" ref={componentRef}>
            <div className="overflow-hidden">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr>
                    <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">
                      Vendor ID
                    </th>
                    <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">
                      Vendor Name
                    </th>
                    <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">
                      Vendor Address
                    </th>
                    <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">
                      Vendor Email
                    </th>
                    <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">
                      Vendor Phone
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((vendor, index) => (
                    <tr
                      className={`border-2 ${
                        index % 2 === 0 ? "bg-slate-500" : "bg-gray-100"
                      }`}
                      key={vendor.vendorId}
                    >
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                          index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                        }`}
                      >
                        {vendor.vendorId}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                          index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                        }`}
                      >
                        {vendor.vendorName}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                          index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                        }`}
                      >
                        {vendor.vendorAddress}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                          index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                        }`}
                      >
                        {vendor.vendorEmail}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                          index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                        }`}
                      >
                        {vendor.vendorPhone}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto mt-24 p-5 lg:ml-[20rem]">
        <div>
          <h2 className="text-2xl md:text-3xl text-[#2f373b] dark:text-slate-100">
            Transaction purchasers
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

        <div className=" overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full" ref={componentRef}>
            <div className="overflow-hidden">
              <table className="min-w-full border border-gray-300 mt-4">
                <thead>
                  <tr>
                    <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">
                      Purchaser ID
                    </th>
                    <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">
                      Purchaser Name
                    </th>
                    <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">
                      Purchaser Address
                    </th>
                    <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">
                      Purchaser Email
                    </th>
                    <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">
                      Purchaser Phone
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {purchasers.map((purchaser, index) => (
                    <tr
                      className={`border-2 ${
                        index % 2 === 0 ? "bg-slate-500" : "bg-gray-100"
                      }`}
                      key={purchaser.purchaserId}
                    >
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                          index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                        }`}
                      >
                        {purchaser.purchaserId}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                          index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                        }`}
                      >
                        {purchaser.purchaserName}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                          index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                        }`}
                      >
                        {purchaser.purchaserAddress}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                          index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                        }`}
                      >
                        {purchaser.purchaserEmail}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                          index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                        }`}
                      >
                        {purchaser.purchaserPhone}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="relative overflow-x-auto p mt-24">
          <div>
            <h2 className="text-2xl md:text-3xl text-[#2f373b] dark:text-slate-100">
              Total revenue collected from each assset class
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

          <div className=" overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full" ref={componentRef}>
              <div className="overflow-hidden">
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap date text-sm font-semibold text-gray-900 dark:text-slate-100 px-6 tracking-wide py-4 text-left">
                        Asset Class
                      </th>
                      <th className="whitespace-nowrap date text-sm font-semibold text-gray-900 dark:text-slate-100 px-6 tracking-wide py-4 text-left">
                        Total Revenue
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Totalrev.map((item, index) => (
                      <tr  className={`border-2 ${
                        index % 2 === 0 ? "bg-slate-500" : "bg-gray-100"
                      }`} key={item.assetClass}>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}>
                          {item.assetClass}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                      }`}>
                          {item.totalRevenue}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


        <div className="relative overflow-x-auto p mt-24">
          <div>
            <h2 className="text-2xl md:text-3xl text-[#2f373b] dark:text-slate-100">
            Tax Debtors
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

          <div className="py-2 mt-6" ref={componentRef}>
          <div className="overflow-x-auto">
            <table className="min-w-full overflow-hidden">
              <thead className="bg-white border-2 ">
                <tr >
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
      </div>
    </div>
  );
};

export default CapitalGainsTax;
