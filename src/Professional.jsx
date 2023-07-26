import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { ArtisanData3 } from './ProfessionalData'
import ProfessionalChart from './ChartComponent/ArtisanChart'
import { Colors } from 'chart.js'


const ProfessionalChat = () => {

  const [userData, setUserData] = useState({
    labels: ArtisanData3.map((data) => data.Revenue),
    datasets: [
      {
        label: "Daily",
        data: ArtisanData3.map((data) => data.daily),
        backgroundColor: "blue",
        borderColor: "blue"
      },
      {
        label: "Weekly",
        data: ArtisanData3.map((data) => data.weekly),
        backgroundColor: "orange",
        borderColor: "Orange"
      },
      {
        label: "Monthly",
        data: ArtisanData3.map((data) => data.monthly),
        backgroundColor: "green",
        borderColor: "green"
      },
      {
        label: "Yearly",
        data: ArtisanData3.map((data) => data.yearly),
        backgroundColor: "red",
        borderColor: "red"
      },
    ],
  });

  return (
    <>
        <Navbar />
        <Sidebar />

        <div className="h-full md:p-4 lg:ml-[20rem]">
          
          <ProfessionalChart className="overflow-hidden"  chartData={userData}/>
        </div>
    </>
  )
}

export default ProfessionalChat;