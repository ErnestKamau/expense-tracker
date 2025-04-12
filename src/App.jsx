import React, { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
      <h3>EXPENSE TRACKER </h3>

      <div id='form-container'>
        <form id='addExpenseForm'>
          <label>Expense</label>
          <input type='text' placeholder='Add expense...'></input>
        </form>
      </div>

    </div>
  )
}

export default App
