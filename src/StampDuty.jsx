import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import React, { useState } from "react";

const StampDuty = () => {
  // State for form inputs
  const [instrumentType, setInstrumentType] = useState("");
  const [feeCollected, setFeeCollected] = useState("");

  // State for reports
  const [totalFeesCollected, setTotalFeesCollected] = useState("");
  const [feesByInstrument, setFeesByInstrument] = useState({});
  const [comparisonReport, setComparisonReport] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform database operations or API calls here
    // You can use the form inputs to update the database

    // Update reports based on database data

    // Example: Update report on total fees collected
    const totalFees = calculateTotalFeesCollected(); // Function to calculate total fees collected
    setTotalFeesCollected(totalFees);

    // Example: Update report on fees collected from each type of instrument
    const feesByInstrumentData = calculateFeesByInstrument(); // Function to calculate fees by instrument
    setFeesByInstrument(feesByInstrumentData);

    // Example: Update comparison report of actual fees collected with target
    const comparisonReportData = generateComparisonReport(); // Function to generate comparison report
    setComparisonReport(comparisonReportData);
  };

  // Function to calculate total fees collected
  const calculateTotalFeesCollected = () => {
    // Perform calculations based on database data
    // Return the total fees collected
    return 50000; // Sample total fees collected
  };

  // Function to calculate fees collected from each type of instrument
  const calculateFeesByInstrument = () => {
    // Perform calculations based on database data
    // Return an object with fees collected for each instrument type
    return {
      "Type A": 20000, // Sample fees collected for Type A instrument
      "Type B": 15000, // Sample fees collected for Type B instrument
      "Type C": 10000, // Sample fees collected for Type C instrument
    };
  };

  // Function to generate comparison report of actual fees collected with target
  const generateComparisonReport = () => {
    // Perform calculations based on database data
    // Return the comparison report
    return "Actual fees collected: $50000, Target fees: $60000"; // Sample comparison report
  };

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="container mx-auto p-4 ">
        <div className="lg:ml-[20rem]">
          <h1 className="text-2xl md:text-3xl text-[#2f373b] dark:text-slate-100 font-bold">Stamp Duty</h1>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-4"
          >
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="instrumentType" className="text-[#2f373b] dark:text-slate-100">Instrument Type:</label>
              <input
                type="text"
                id="instrumentType"
                value={instrumentType}
                onChange={(e) => setInstrumentType(e.target.value)}
                className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="feeCollected" className="text-[#2f373b] dark:text-slate-100">Fee Collected:</label>
              <input
                type="number"
                id="feeCollected"
                value={feeCollected}
                onChange={(e) => setFeeCollected(e.target.value)}
                className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
              />
            </div>

            <button
              type="submit"
              className="p-3 transition-all duration-200 bg-[#1C4E80] hover:bg-slate-500 cursor-pointer hover:bg-[#e6e9ec6b] rounded-md text-slate-100 text-xl font-semibold "
            >
              Save Data
            </button>
          </form>

          <div className="mt-8 text-[#2f373b] dark:text-slate-100">
            <h2 className="text-xl font-bold mb-2">Reports</h2>

            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Total Fees Collected:</h3>
              <p>{totalFeesCollected}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">
                Fees Collected by Instrument:
              </h3>
              <ul>
                {Object.entries(feesByInstrument).map(([instrument, fees]) => (
                  <li key={instrument}>
                    {instrument}: {fees}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Comparison Report:</h3>
              <p>{comparisonReport}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StampDuty;
