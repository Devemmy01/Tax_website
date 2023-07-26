import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  // State to track the sidebar open/close status
//   const [open, setOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);    

  // Function to toggle the sidebar open/close status
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle the submenu open/close status
  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <>
        <style>{`
        .sidebar {
          transition: transform 0.3s ease-in-out;
          transform: translateX(${isOpen ? '-100%' : '0'});
        }
        @media (max-width: 1023px) {
            .sidebar {
              transform: translateX(${isOpen ? '0' : '-100%'});
            }
        }
      `}</style>


        
            {/* Hamburger Menu */}
            <span
            className="absolute text-white dark:text-gray-800 text-4xl top-5 left-4 cursor-pointer"
            onClick={toggleSidebar} >
                <i className="bi bi-filter-left px-2 bg-[#1B2430] dark:bg-slate-100  rounded-md lg:hidden"></i>
            </span>

            {/* Sidebar */}
            <div
            className="sidebar bg-slate-50 dark:bg-[#1B2430] bottom-0 shadow-md p-5 pt-8 fixed left-0 top-0 duration-300 z-10 overflow-y-auto">
                <div className="text-xl">
                    {/* Sidebar header */}
                    <div className="p-2.5 mt-1 flex items-center justify-center rounded-md shadow-md">
                        <i className="bi bi-app-indicator text-[#1C4E80] dark:text-slate-100 px-2 py-1 text-[30px] rounded-md "></i> 
                        <h1 className="font-bold text-[#2f373b] dark:text-slate-100 text-[20px] md:text-[25px] ml-3">Menu</h1>
                        <i
                        className="bi bi-x cursor-pointer text-[#2f373b] dark:text-slate-100 ml-28 text-[25px] lg:hidden"
                        onClick={toggleSidebar}
                        ></i>
                    </div>
                </div>

                <Link to={"/"} className="p-2.5 mt-16 flex items-center rounded-md px-4 duration-300 cursor-pointer text-[#2f373b] dark:text-slate-100 hover:bg-[rgba(7,186,209,0.14)] ">
                    <i className="bi bi-house text-2xl text-[#1C4E80] dark:text-[#509eeb]"></i>
                    <div className="text-[15px] tracking-widest ml-4 mt-2 font-semibold"><li className='list-none'>Dashboard</li></div>
                </Link>

                <Link to={"/User"} className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer text-[#2f373b] dark:text-slate-100 hover:bg-[rgba(7,186,209,0.14)] ">
                    <i className="bi bi-people text-2xl text-[#1C4E80] dark:text-[#509eeb]"></i>
                    <div className="text-[15px] tracking-widest ml-4 mt-2 font-semibold"><li className='list-none'>Users</li></div>
                </Link>

                <Link to={"/Roles"} className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer text-[#2f373b] dark:text-slate-100 hover:bg-[rgba(7,186,209,0.14)] ">
                    <i className="bi bi-bar-chart-steps text-2xl text-[#1C4E80] dark:text-[#509eeb]"></i>
                    <div className="text-[15px] tracking-widest ml-4 mt-2 font-semibold"><li className='list-none'>Roles</li></div>
                </Link>

                <div onClick={toggleSubmenu}
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-[#2f373b] dark:text-slate-100 hover:bg-[rgba(7,186,209,0.14)]"
                
                >
                    <div className="flex w-full items-center ">
                        <i className="bi bi-cash-coin text-2xl text-[#1C4E80] dark:text-[#509eeb]"></i>
                        <span className="text-[15px] tracking-widest ml-4 font-semibold">Income Tax</span>
                        <span className={`text-sm ${isSubmenuOpen ? 'rotate-180' : ''} mx-auto`}>
                        <i className="bi bi-chevron-down "></i>
                        </span>
                    </div>
                </div>

                <div
                className={`text-left text-sm mt-2 w-4/5 mx-auto  font-semibold ${
                    isSubmenuOpen ? '' : 'hidden'
                }`}
                >
                    <Link to={"/DirectAssesment"} className='list-none mt-2'><li className="text-[15px] tracking-wide cursor-pointer p-2 text-[#2f373b] dark:text-slate-100 hover:bg-[rgba(7,186,209,0.14)] duration-200 rounded-md ">Direct Assesment</li></Link>
                    <Link to={"/withholdingTax"} className='list-none mt-3'><li  className="text-[15px] tracking-wide cursor-pointer p-2 text-[#2f373b] dark:text-slate-100 hover:bg-[rgba(7,186,209,0.14)] rounded-md ">Withholding Tax</li></Link>
                    <Link to={"/paye"} className='list-none mt-3'><li  className="text-[15px] tracking-wide cursor-pointer p-2 text-[#2f373b] dark:text-slate-100 hover:bg-[rgba(7,186,209,0.14)] rounded-md ">P.A.Y.E</li></Link>
                </div>

                <Link to={"/RoadTaxes"}
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-[#2f373b] dark:text-slate-100 hover:bg-[rgba(7,186,209,0.14)]"
                >
                    <i className="bi bi-car-front-fill text-2xl text-[#1C4E80] dark:text-[#509eeb]"></i>
                    <span className="text-[15px] tracking-widest ml-4 font-semibold">Road Taxes</span>
                </Link>

                <Link to={"/CapitalGainsTax"}
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-[#2f373b] dark:text-slate-100 hover:bg-[rgba(7,186,209,0.14)]"
                >
                    <i className="bi bi-cash-stack text-2xl text-[#1C4E80] dark:text-[#509eeb]"></i>
                    <span className="text-[15px] tracking-widest ml-4 font-semibold">Capital Gains Tax</span>
                </Link>

                <Link to={"/StampDuty"}
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-[#2f373b] dark:text-slate-100 hover:bg-[rgba(7,186,209,0.14)]"
                >
                    <i className="bi bi-card-checklist text-2xl text-[#1C4E80] dark:text-[#509eeb]"></i>
                    <span className="text-[15px] tracking-widest ml-4 font-semibold">Stamp Duty</span>
                </Link>

                <Link to={"/PoolBettingandGaming"}
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-[#2f373b] dark:text-slate-100 hover:bg-[rgba(7,186,209,0.14)]"
                >
                    <i className="bi bi-joystick text-2xl text-[#1C4E80] dark:text-[#509eeb]"></i>
                    <span className="text-[15px] tracking-widest ml-4 font-semibold">Pool Betting and Gaming</span>
                </Link>
            </div>
    
    </>
  );
};

export default Sidebar;