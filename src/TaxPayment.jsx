import React from "react";
import Roles from "./Roles";
import { Link } from "react-router-dom";

const TaxPayment = () => {
  
  return (
    <div>
      <Roles />

      <h1 className="lg:ml-[20rem] mt-10 px-12 text-3xl font-bold text-gray-800 capitalize dark:text-white">
          Tax Payment
      </h1>
      <div className="lg:ml-[20rem] mt-5 sm:mx-0.5 lg:mx-0.5 mb-20">
        <div className="py-2 inline-block w-full ">
          <div className="">
            <table className=" border border-gray-300 w-full">
              <thead>
                <tr className="bg-white text-gray-900 dark:bg-gray-900 dark:text-slate-100 ">
                  <th className="whitespace-nowrap date text-xl font-semibold text-gray-900 dark:text-slate-100 px-6 tracking-wide py-4 text-left">
                    ACTION
                  </th>
                  <th className="whitespace-nowrap date text-xl font-semibold text-gray-900 dark:text-slate-100 px-6 tracking-wide py-4 text-left">
                    PERMISSION
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-300">
                <tr className="border">
                  
                    <td className="px-6 py-4 whitespace-nowrap dark:text-gray-900 text-xl font-semibold">
                      <Link to={"/MakePayment"}>
                        Create Tax Payment
                      </Link>
                    </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap text-xl font-semibold">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                    </label>
                  </td>
                </tr>
                <tr className="border">
                  <td className="px-6 py-4 whitespace-nowrap dark:text-gray-900 text-xl font-semibold">
                    Read Tax Payment
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xl font-medium">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                    </label>
                  </td>
                </tr>
                <tr className="border">
                  <td className="px-6 py-4 whitespace-nowrap dark:text-gray-900 text-xl font-semibold">
                    Update Tax Payment
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xl font-medium">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                    </label>
                  </td>
                </tr>
                <tr className="border">
                  <td className="px-6 py-4 whitespace-nowrap dark:text-gray-900 text-xl font-semibold">
                    Delete Tax Payment
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xl font-medium">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxPayment;
