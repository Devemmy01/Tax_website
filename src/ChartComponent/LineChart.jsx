import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const LineChart = ({chartData}) => {
  return (
      <Line data={chartData} className="mb-10 rounded-lg "/>
  )
}

export default LineChart;  