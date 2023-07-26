import React from 'react'
import { Bar, Line } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const LineChartTaxLia = ({chartData}) => {
  return (
    <Bar data={chartData} height={250}/>
  )
}



export default LineChartTaxLia