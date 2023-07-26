import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";

const PayE = () => {

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    const handleInputChange1 = (event) => {
        setInput1(event.target.value.replace(/[^A-Za-z]/g, ''));
      };
    
      const handleInputChange2 = (event) => {
        setInput2(event.target.value.replace(/[^A-Za-z]/g, ''));
      };

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="p-7 flex flex-col md:flex-row gap-4 justify-between lg:ml-[20rem]">
        <div>
            <h2 className="text-2xl md:text-3xl text-[#2f373b] dark:text-slate-100 underline">PAYE</h2>
            <p className="text-[#2f373b] pt-3 dark:text-slate-100">Kindly fill out the PAYE tax form below</p>
        </div>
        <div>
            <Link to={"/PayeReport"}>
                <button className="p-3 transition-all duration-200 bg-[#1C4E80] hover:bg-slate-500 cursor-pointer hover:bg-[#e6e9ec6b] rounded-md text-slate-100 text-xl font-semibold">
                    Generate report
                </button>
            </Link>
        </div>
      </div>
      
      <form className="p-7 grid md:grid-cols-2 gap-5 lg:ml-[20rem] ">
        <div className="flex flex-col gap-1 w-full">
          <label className="text-[#2f373b] dark:text-slate-100">
            Company's file number (given by BIR)
          </label>
          <input
            type="number"
            className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            required
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-[#2f373b] dark:text-slate-100">
            Company's name
          </label>
          <input type="text"
            value={input1}
            onChange={handleInputChange1}
            name="Company name" id="" className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"/>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-[#2f373b] dark:text-slate-100">
            Employees' code
          </label>
          <input
            type="number"
            className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            required
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-[#2f373b] dark:text-slate-100">
            Employees' name
          </label>
          <input
            type="text"
            value={input2}
            onChange={handleInputChange2}
            className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            required
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-[#2f373b] dark:text-slate-100">
            Basic pay
          </label>
          <input
            type="number"
            className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            required
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-[#2f373b] dark:text-slate-100">
            Total income (Gross) &#8358;
          </label>
          <input
            type="number"
            className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            required
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-[#2f373b] dark:text-slate-100">
            Total deduction (Actual) &#8358;
          </label>
          <input
            type="number"
            className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            required
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-[#2f373b] dark:text-slate-100">
            Months (No of month worked for the year)
          </label>
          <input
            type="number"
            className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            required
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-[#2f373b] dark:text-slate-100">Year</label>
          <input
            type="number"
            className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            required
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-[#2f373b] dark:text-slate-100">
            Other relief (Actual)
          </label>
          <input
            type="number"
            className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            required
          />
        </div>

        <div className="grid ">
          <div className="flex gap-4 w-full">
            <label className="text-[#2f373b] dark:text-slate-100">
              Are you contributing to NSITF ?
            </label>
            <input type="checkbox" className=" outline-none p-2 text-gray-500" />
          </div>
          <div className="flex gap-4 w-full">
            <label className="text-[#2f373b] dark:text-slate-100">
              Are you contributing to NHF ?
            </label>
            <input type="checkbox" className="outline-none p-2 text-gray-500" />
          </div>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-[#2f373b] dark:text-slate-100">
            Insurance
          </label>
          <input
            type="number"
            className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            required
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-[#2f373b] dark:text-slate-100">Pension</label>
          <input
            type="number"
            className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            required
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-[#2f373b] dark:text-slate-100">
            Children (No of children or maximum stipulated by tax law)
          </label>
          <input
            type="number"
            className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            required
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-[#2f373b] dark:text-slate-100">
            Dependant (No of depandant or maximum stipulated by tax law)
          </label>
          <input
            type="number"
            className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            required
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-[#2f373b] dark:text-slate-100">
            Entertainment allowance
          </label>
          <input
            type="number"
            className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            required
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-[#2f373b] dark:text-slate-100">
            Utility allowance
          </label>
          <input
            type="number"
            className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            required
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-[#2f373b] dark:text-slate-100">
            Leave allowance
          </label>
          <input
            type="number"
            className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            required
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
            <label
              className="text-[#2f373b] dark:text-slate-100"
              htmlFor="taxpayerName"
            >
              Name of Tax Payer (Name of Organization if corporate entity)
            </label>
            <input
              className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
              type="text"
              name="taxpayerName"
            />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-[#2f373b] dark:text-slate-100" htmlFor="email">
            Email
          </label>
          <input
            className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            type="email"
            name="email"
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
            <label
              className="text-[#2f373b] dark:text-slate-100"
              htmlFor="taxIdentificationNumber"
            >
              Tax Identification Number (TIN)
            </label>
            <input
              className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
              type="text"
              name="taxIdentificationNumber"
            />
        </div>

        <div className="flex flex-col gap-1 w-full">
            <label
              className="text-[#2f373b] dark:text-slate-100"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
              type="number"
              name="amount"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              className="text-[#2f373b] dark:text-slate-100"
              htmlFor="taxPeriod"
            >
              Tax Period
            </label>
            <input
              className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
              type="text"
              name="taxPeriod"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              className="text-[#2f373b] dark:text-slate-100"
              htmlFor="date"
            >
              Date
            </label>
            <input
              className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
              type="date"
              name="date"
            />
          </div>

        {/* <a href="image.html"> */}
          <input
            type="submit"
            className="w-full btn cursor-pointer p-3 transition-all duration-200 bg-[#1C4E80] hover:bg-slate-500 dark:hover:bg-[#e6e9ec6b] rounded-md text-slate-100 text-xl font-semibold"
            value="Submit"
          />
        {/* </a> */}
      </form>
    </>
  );
};

export default PayE;
