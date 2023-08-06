import { useState, useEffect } from "react";

const MakePayment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tin: "",
    tax: "",
    amount: "",
    period: "",
    date: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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

      // Convert the date to the expected format (e.g., "YYYY-MM-DD")
      const formattedDate = new Date(formData.date).toISOString().split("T")[0];

      // Create the FormData object
      const form = new FormData();
      form.append("name", formData.name);
      form.append("tin", formData.tin);
      form.append("tax", formData.tax);
      form.append("amount", formData.amount);
      form.append("period", formData.period);
      form.append("date", formattedDate); // Use the formatted date here
      form.append("email", formData.email);

      // Make the AJAX request
      try {
        const response = await fetch(
          "https://api.tax.hardensoft.com.ng/api/v1/pay",
          {
            method: "POST",
            body: form, // Use the FormData object as the body
          }
        );

        if (!response.ok) {
          console.error(
            "Error submitting form:",
            response.status,
            response.statusText
          );
          // If there's a response body, log it as well
          try {
            const responseBody = await response.json();
            console.log("Response body:", responseBody);
          } catch (error) {
            console.error("Failed to parse response body as JSON:", error);
          }
          return;
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
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
