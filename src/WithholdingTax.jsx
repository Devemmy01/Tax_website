import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { withholdingTaxCategories } from "./WithholdingTData";
import { withholdingTaxDebtors } from "./WithholdingTData";
import { useState } from "react";

const WithholdingTax = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDebtor, setSelectedDebtor] = useState("");

  const calculateWithholdingTaxLiability = (revenue) => {
    return revenue * 0.2; // Assuming a flat 20% withholding tax rate
  };

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="relative overflow-x-auto md:p-5 lg:ml-[20rem]">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl md:text-3xl text-[#2f373b] dark:text-slate-100 font-bold mb-4">
            Withholding Tax Categories
          </h1>

          {/* Select category */}
          <div className="mb-4">
            <label htmlFor="categorySelect" className="mr-2 font-semibold text-[#2f373b] dark:text-slate-100">
              Select Category:
            </label>
            <select className="outline-none border bg-slate-100 dark:bg-[#1B2430] text-[#2f373b] dark:text-slate-100"
              id="categorySelect"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">-- Select --</option>
              {withholdingTaxCategories.map((category) => (
                <option key={category.category} value={category.category}>
                  {category.category}
                </option>
              ))}
            </select>
          </div>

          {/* Display selected category's withholding tax liability */}
          {selectedCategory && (
            <div className="mb-4 text-[#2f373b] dark:text-slate-100">
              <h2 className="font-bold">
                Withholding Tax Liability for {selectedCategory}:
              </h2>
              <p>
                Calculated Withholding Tax Liability: $
                {calculateWithholdingTaxLiability(
                  withholdingTaxCategories.find(
                    (category) => category.category === selectedCategory
                  ).actualRevenue
                )}
              </p>
            </div>
          )}

          {/* Report on total revenue collected from each source */}
          <div className="mb-4 overflow-x-auto mt-10 text-[#2f373b] dark:text-slate-100">
            <h2 className="font-bold">Revenue Collection Report:</h2>
            <table className="min-w-full overflow-hidden">
              <thead>
                <tr className="text-[#2f373b]">
                  <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">Category</th>
                  <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">Targeted Revenue</th>
                  <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">Actual Revenue</th>
                </tr>
              </thead>
              <tbody>
                {withholdingTaxCategories.map((category, index) => (
                  <tr className={`border-2 ${
                    index % 2 === 0 ? "bg-slate-500" : "bg-gray-100"
                  }`} key={category.category}>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                            index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                          }`}>{category.category}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                            index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                          }`}>{category.targetedRevenue}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                            index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                          }`}>{category.actualRevenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* List withholding tax debtors and amounts owed */}
          <div className="mt-20 overflow-x-auto">
            <h2 className="font-bold text-[#2f373b] dark:text-slate-100">Withholding Tax Debtors:</h2>
            <table className="min-w-full overflow-hidden">
              <thead>
                <tr className="text-[#2f373b]">
                  <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">Name</th>
                  <th className="px-4 py-2 whitespace-nowrap bg-gray-100 border-b">Amount Owed</th>
                </tr>
              </thead>
              <tbody>
                {withholdingTaxDebtors.map((debtor, index) => (
                  <tr className={`border-2 ${
                    index % 2 === 0 ? "bg-slate-500" : "bg-gray-100"
                  }`} key={debtor.name}>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                            index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                          }`}>{debtor.name}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                            index % 2 === 0 ? "text-slate-100" : "text-gray-900"
                          }`}>{debtor.amountOwed}</td>
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

export default WithholdingTax;
