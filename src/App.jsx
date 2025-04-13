import React, { useState } from 'react'
import './App.css'
import Form from './Form'
import SearchBar from './SearchBar'
import ExpenseTable from './ExpenseTable'

function App() {
   const [expenses, setExpenses] = useState([])
   const [search, setSearch] = useState('')

   const handleAddExpense = (newExpense) => {
    const newExpenseWithId = { ...newExpense, id: Date.now() }
    setExpenses((prevExpenses ) => [ ...prevExpenses, newExpenseWithId])
   }
   
   

    const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(search.toLowerCase()) ||
    expense.description.toLowerCase().includes(search.toLowerCase())
  );





  return (
    <div id='body-container'>
      <h1 id='heading'>EXPENSE TRACKER </h1>
      <SearchBar searchTerm={search} onSearchChange={setSearch} />

      <div id='expense-container'>
        <Form onAddExpense={handleAddExpense} />
        <ExpenseTable expenses={filteredExpenses} />
      </div>
      

    </div>
  )
}

export default App
