import React from "react";
import { useState } from "react";

const MakePayment = () => {
  const [formData, setFormData] = useState({
    taxpayerName: "",
    email: '',
    taxIdentificationNumber: "",
    taxType: "",
    amount: "",
    taxPeriod: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send the data to the server or perform validation
    console.log(formData);
  };

  return (
    <div>
      {/* <Navbar /> */}

      <header className="App-header mt-20">
        {/* <img src="./src/bank.png" height={200} width={200} className="mx-auto" alt="" /> */}
        <i className="bx bxs-bank flex items-center justify-center text-9xl text-[#1C4E80]"></i>
        <h1 className="text-3xl font-bold mb-4 text-center text-slate-900 dark:text-slate-100">Welcome To Test Bank</h1>
        <h1 className="text-3xl font-bold mb-4 text-center text-slate-900 dark:text-slate-100">Make Payment</h1>
        {/* <TaxForm /> */}
      </header>
      <div className="container mx-auto py-8 lg:px-36">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="taxpayerName"
            >
              Name of Tax Payer (Name of Organization if corporate entity)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="taxpayerName"
              id="taxpayerName"
              value={formData.taxpayerName}
              onChange={handleChange}
              placeholder="Enter Tax Payer Name"
            />
          </div>
          <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email Address"
          />
        </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="taxIdentificationNumber"
            >
              Tax Identification Number (TIN)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="taxIdentificationNumber"
              id="taxIdentificationNumber"
              value={formData.taxIdentificationNumber}
              onChange={handleChange}
              placeholder="Enter TIN"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="taxType"
            >
              Type of Tax
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="taxType"
              id="taxType"
              value={formData.taxType}
              onChange={handleChange}
            >
              <option value="">Select Tax Type</option>
              <option value="Income Tax">Income Tax</option>
              <option value="Sales Tax">Sales Tax</option>
              <option value="Property Tax">Property Tax</option>
              {/* Add more dummy tax types as needed */}
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="amount"
              id="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter Amount"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="taxPeriod"
            >
              Tax Period
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="taxPeriod"
              id="taxPeriod"
              value={formData.taxPeriod}
              onChange={handleChange}
              placeholder="Enter Tax Period"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="date"
            >
              Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#1C4E80] hover:bg-[#1c4e807a] w-full transition-all text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakePayment;
