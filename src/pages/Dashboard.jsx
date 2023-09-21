import React from 'react'
import Form from '../components/Form'
import Graph from '../components/Graph'
import Transactions from '../components/Transactions'

const Dashboard = () => {

  return (
    <div id='main-page' className='grid grid-cols-3 h-screen'>

      <div id='form' className='bg-red-300'>
        <Form />
      </div>
      
      <div id='right-content' className='col-span-2 grid'>
        <div id='graph' className='flex justify-between items-center'>
          <Graph title="income"/>
          <Graph title="expense"/>
        </div>
        <div id='transaction' className='bg-green-300 h-[30rem] overflow-y-scroll '>
          <Transactions />
        </div>
      </div>

    </div>
  )
}

export default Dashboard