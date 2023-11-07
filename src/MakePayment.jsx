import { useState, useEffect } from "react";
import Modal from "react-modal"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

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

  const [serverResponse, setServerResponse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

      try {
        const response = await fetch("https://api.tax.hardensoft.com.ng/api/v1/pay", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
  
        // Check if the response is in JSON format
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          console.log(data);
  
          // Set the server response in the state
          setServerResponse(data);
  
          // Open the modal to display the response
          setIsModalOpen(true);
        } else {
          console.error("Response is not in JSON format");
        }
      } catch (error) {
        console.error("Error sending request:", error.message);
      }
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* <Navbar /> */}

      <Modal
        // className="w-full"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Server Response"
      >
        <div className="flex items-center justify-center">
          {/* <h2>Server Response</h2> */}
          {serverResponse && (
            <div className="flex flex-col text-center gap-6 mt-16">
              {/* <p>Status: {serverResponse.status}</p> */}
              {/* <p>Message: {serverResponse.message}</p> */}
              <p className="text-xl font-bold">Click here to proceed your payment</p>
              <p>
                {/* Data:{" "} */} 
                <button className="bg-[#1C4E80] text-white p-3 text-xl rounded-lg">
                  <a href={serverResponse.data} target="_blank" rel="noopener noreferrer">
                    {/* {serverResponse.data} */} Proceed
                  </a>
                </button>
              </p>
            </div>
          )}
          <button onClick={closeModal}><i className='bx bx-x absolute text-2xl top-5 right-6'></i></button>
        </div>
      </Modal>

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
