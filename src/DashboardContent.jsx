import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Switcher from './Switcher';


const ValueDisplay = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startValue = 0;
    let endValue = parseInt(value);
    let duration = Math.floor(4000 / endValue);
    let counter = setInterval(() => {
      startValue += 1;
      setDisplayValue(startValue);
      if (startValue === endValue) {
        clearInterval(counter);
      }
    }, duration);

    return () => {
      clearInterval(counter);
    };
  }, [value]);

  return (
    <span className="num">
      {displayValue.toString().padStart(3, '0')}
      {displayValue === parseInt(value) && '+'}
    </span>
  )
};

const DashboardContent = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  },[])
  return (
    <div className="container mx-auto p-5 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div data-aos = "zoom-in" className="flex flex-col text-xl md:text-xl text-slate-100 dark:text-[#2f373b] font-bold h-56 shadow-md dark:shadow-sm dark:shadow-slate-50 cursor-pointer rounded-xl pt-6 bg-[#1B2430] dark:bg-slate-50 transition-all">
            <h1 className="px-6 md:px-1 text-center">Total Tax Liability</h1>
            <h1 className="flex flex-col gap-6 items-center text-4xl justify-center mt-5">
                <i className="bi bi-cash-coin text-5xl text-[#509eeb] dark:text-[#1C4E80]"></i>
                <ValueDisplay value="300" />
            </h1>
            <p className='-p-4 ml-2 text-red-600'> -20%</p>
          </div>
          <div data-aos = "zoom-in" className="flex flex-col text-xl md:text-xl text-slate-100 dark:text-[#2f373b] font-bold h-56 shadow-md dark:shadow-sm dark:shadow-slate-50 cursor-pointer rounded-xl pt-6 bg-[#1B2430] dark:bg-slate-50 transition-all">
            <h1 className="px-6 md:px-3 text-center">Total Tax Collected</h1>
            <h1 className="flex flex-col gap-6 items-center text-4xl justify-center mt-5">
                <i className="bi bi-cash-coin text-5xl text-[#509eeb] dark:text-[#1C4E80]"></i>
                <ValueDisplay value="450" />
            </h1>
            <p className='-p-4 ml-2 text-green-600'> +40%</p>
          </div>
          <div data-aos = "zoom-in" className="flex flex-col text-xl md:text-xl text-slate-100 dark:text-[#2f373b] font-bold h-56 shadow-md dark:shadow-sm dark:shadow-slate-50  cursor-pointer rounded-xl pt-6 bg-[#1B2430] dark:bg-slate-50 transition-all">
            <h1 className="px-6 md:px-3 text-center">Total Tax Debtors</h1>
            <h1 className="flex flex-col gap-6 items-center text-4xl justify-center mt-5">
                <i className="bi bi-cash-coin text-5xl text-[#509eeb] dark:text-[#1C4E80]"></i>
                <ValueDisplay value="500" />
            </h1>
            <span className='-p-4 ml-2 text-red-600'> +30%</span>
          </div>
          
        </div>
    </div>
  );
};


export default DashboardContent;
