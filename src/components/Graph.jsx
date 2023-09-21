import React,{useState} from 'react'
import useTransaction from '../hooks/useTransactions'
import { GlobalState } from '../context/context'
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2'
const Graph = ({title}) => {
  
  const  { filteredCategories, total, chartData } = useTransaction(title)

  return (
    
    <div  className='h-96'>
      <h1><b>{title}</b></h1>
      <Doughnut data={chartData} />
    </div>
  )
}

export default Graph

//D3.js or Chart.js libraries from websites  (npm i chart.js react-chartjs-2)
//Speechly (npm i @ speechly/react-client @speechly/react-ui)
//redux  (npm i redux react-redux)

// nmp install -D tailwindcss
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p



