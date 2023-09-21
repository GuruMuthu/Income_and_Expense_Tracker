import React,{useContext} from 'react'
import {GlobalState} from '../context/context'

const Transactions = () => {
  const {state,deleteTransactions} = useContext(GlobalState)
  return (
    <div>
      <div><h1><b>Transactions :</b></h1></div>
      <div id='t-details' className='flex flex-col gap-3 p-6'>
        {
          state.transactions?.map(t =>(
            <div key={t.id} className=
            {t.type === 'income' ? "p-3 border-2 border-blue-600 rounded flex justify-between items-center"
              : "p-3 border-2 border-red-600 rounded flex justify-between items-center"}
            >
               <p>Transactions Type : {t.type}</p>
               <p>Category :{t.category}</p>
               <p>Amount :{t.amount}</p>
               <p>Date : {t.date}</p>
               <button id='t-delete' onClick={() => deleteTransactions(t.id)} className='bg-red-300 rounded px-3 py-2'>Delete</button>
            </div>
          ))
        }
      </div>
    </div>
    
  )
}

export default Transactions