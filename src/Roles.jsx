import React from 'react'
import { Link } from'react-router-dom';
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Roles = () => {
  return (
    <div>
        <Sidebar/>
        <Navbar />
        <h1 class="lg:ml-[20rem] px-12 text-2xl md:text-3xl font-bold text-gray-800 capitalize dark:text-white">
          Roles And Permissions
        </h1>
        <section className='lg:ml-[20rem] p-5 mt-12'>
            <div className='flex flex-col mx-auto gap-3 w-full'>
                <Link to={"/TaxPayment"} className="bg-[#1C4E80] hover:bg-[#1c4e807a] transition-all rounded-md p-4 text-xl font-semibold text-white"><span>Tax Payment</span></Link>
                <Link to={"/TaxCategory"} className="bg-[#1C4E80] hover:bg-[#1c4e807a] transition-all rounded-md p-4 text-xl font-semibold text-white"><span>Tax Categories</span></Link>
                <Link to={"/TaxSubCategory"} className="bg-[#1C4E80] hover:bg-[#1c4e807a] transition-all rounded-md p-4 text-xl font-semibold text-white"><span>Tax sub Categories</span></Link>
                <Link to={"/UserLevel"} className="bg-[#1C4E80] hover:bg-[#1c4e807a] transition-all rounded-md p-4 text-xl font-semibold text-white"><span>User Levels</span></Link>
                <Link to={"/SystemUser"} className="bg-[#1C4E80] hover:bg-[#1c4e807a] transition-all rounded-md p-4 text-xl font-semibold text-white"><span>System Users</span></Link>
                <Link to={"/Reports"} className="bg-[#1C4E80] hover:bg-[#1c4e807a] transition-all rounded-md p-4 text-xl font-semibold text-white"><span>Reports(based on features approved for access)</span></Link>
            </div>
        </section>
    </div>
  )
}

export default Roles