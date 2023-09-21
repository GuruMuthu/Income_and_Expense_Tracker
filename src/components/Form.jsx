import React, { useState, useContext } from 'react'
import { incomeCategories, expenseCategories } from '../constant/category'
import { v4 as uuid } from 'uuid'
import { GlobalState } from '../context/context'

const Form = () => {

  const { addTransactions } = useContext(GlobalState)

  const [formData, setFormData] = useState({
    type: "income",
    category: "",
    amount: 0,
    date: ""
  })
  let selectCategories = formData.type === "income" ? incomeCategories : expenseCategories

  const handleForm = () => {

    let transaction = {
      ...formData,
      id: uuid()
    }
    addTransactions(transaction)
    setFormData({
      type: "income",
      category: "",
      amount: 0,
      date: ""
    })
  }

  return (
    <div className='p-10'>
      <div>
        <b id='f-head'>Form</b>
      </div>
      <div className='flex flex-col gap-3 my-3'>
        <label className='text-lg' htmlFor="type"><b>Transaction Type:</b></label>
        <select className='p-2 rounded border' name='type'
        value={formData.type} 
        onChange={(e) => setFormData({...formData, type: e.target.value})}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className='flex flex-col gap-3 my-3'>
        <label className='text-lg' htmlFor="category"><b>Category Type:</b></label>
        <select className='p-2 rounded border' name='category'
        value={formData.category} 
        onChange={(e) => setFormData({...formData, category: e.target.value})}>
          {
            selectCategories.map(cat => (
              <option key={cat.type} value={cat.type}>{cat.type}</option>
            ))
          }
        </select>
      </div>
      <div className='flex flex-col gap-3 my-3'>
        <label className='text-lg' htmlFor="amount"><b>Amount :</b></label>
        <input className='p-2 rounded border' type="number" name="amount"
        value={formData.amount} 
        onChange={(e) => setFormData({...formData, amount: e.target.value})} />
      </div>
      <div className='flex flex-col gap-3 my-3'>
        <label className='text-lg' htmlFor="date"><b>Date :</b></label>
        <input className='p-2 rounded border' type="date" name="date"
        value={formData.date} 
        onChange={(e) => setFormData({...formData, date: e.target.value})} />
      </div>
        <button onClick={handleForm} id='f-submit'>Submit</button>
    </div>
  )
}

export default Form