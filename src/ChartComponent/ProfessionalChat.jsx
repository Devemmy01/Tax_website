import React from 'react'
import { Bar, Line, Scatter } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const ProfessionalChat = ({chartData}) => {
  return (
    <Line data={chartData}
    options={{ maintainAspectRatio: false, font:'white' }} 
    className=" h-[400px]  rounded-md" />
  )
}

export default ProfessionalChat;