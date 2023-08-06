import { useState, useEffect } from "react";

const MakePayment = () => {
  const [formData, setFormData] = useState({
    name: "Test Name",
    tin: "123456780",
    tax: "Income tax",
    amount: "25000",
    period: "6 months",
    date: "2023-07-24",
    email: "hardensoftdevteam@gmail.com",
  });

  const [errors, setErrors] = useState({});

  const isValidDate = (dateString) => {
    const dateObj = new Date(dateString);
    return !isNaN(dateObj.getTime());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation

    const newErrors = {};
    if (formData.amount.trim() === "") {
      newErrors.amount = ["The amount field is required."];
    }
    if (formData.date.trim() === "") {
      newErrors.date = ["The date field is required."];
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});

      if (!isValidDate(formData.date)) {
        console.error("Invalid date format");
        return;
      }

      fetch("https://api.tax.hardensoft.com.ng/api/v1/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error sending request:", error);
        });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* <Navbar /> */}

      <header className="App-header mt-20">
        {/* <img src="./src/bank.png" height={200} width={200} className="mx-auto" alt="" /> */}
        <i className="bx bxs-bank flex items-center justify-center text-9xl text-[#1C4E80]"></i>
        <h1 className="text-3xl font-bold mb-4 text-center text-slate-900 dark:text-slate-100">
          Welcome To Test Bank
        </h1>
        <h1 className="text-3xl font-bold mb-4 text-center text-slate-900 dark:text-slate-100">
          Make Payment
        </h1>
        {/* <TaxForm /> */}
      </header>
      <div className="container mx-auto py-8 lg:px-36">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Tax Payer Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
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
              name="tin"
              id="tin"
              value={formData.tin}
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
              name="tax"
              id="tax"
              value={formData.tax}
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
            {errors.amount &&
              errors.amount.map((error, index) => (
                <p key={index} className="text-red-600">
                  {error}
                </p>
              ))}
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
              name="period"
              id="period"
              value={formData.period}
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
            {errors.date &&
              errors.date.map((error, index) => (
                <p key={index} className="text-red-600">
                  {error}
                </p>
              ))}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#1C4E80] hover:bg-[#1c4e807a] w-full transition-all text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              // onClick={handleSubmit}
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
