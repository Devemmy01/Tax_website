import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const PieChart = ({chartData}) => {
  return (
    <div className="w-full mx-auto p-3 md:p-7 ">
      <Doughnut data={chartData} className="mb-8 h-[400px] rounded-lg" width={"30%"} options={{ maintainAspectRatio: false }} />
    </div>
      
  )
}

export default PieChart;  