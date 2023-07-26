import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const PoolBettingChart = ({chartData}) => {
  return (
    <Line data={chartData}
    options={{ maintainAspectRatio: false, font:'white' }} 
    className=" h-[400px]  rounded-md" />
  )
}

export default PoolBettingChart