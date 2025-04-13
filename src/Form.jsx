import React, { useState} from "react";

function Form( { onAddExpense } ){
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    function handleSubmit (events){
        events.preventDefault()

        if (!name || !amount || isNaN(amount)){
            alert ("Enter a valid numeric amount!! ")
        }

        const newExpense = {
            name,
            description,
            category,
            amount: parseFloat(amount),
            date,
        }

        onAddExpense( newExpense )
        console.log(onAddExpense);
        

        setName('')
        setDescription('')
        setCategory('') 
        setAmount('')
        setDate('')
    }

    return(
        <div id='form-container'>
            <form id='addExpenseForm' onSubmit={ handleSubmit }>
                <h2>Add Expense</h2>
                <p> Enter your expense details below </p>
                <input type='text' placeholder='Enter expense name...' value={name} onChange={(e) => setName(e.target.value)}/>
                <input type='text' placeholder='Enter expense description...'value={description}  onChange={(e) => setDescription(e.target.value)}/>
                <input type='text' placeholder='Enter expense category...' value={category}  onChange={(e) => setCategory(e.target.value)}/>
                <input type='text' placeholder='Add amount ' value={amount}  onChange={(e) => setAmount(e.target.value)}/>
                <input type='date' placeholder='Add expense...' value={date}  onChange={(e) => setDate(e.target.value)}/>
                <button type='submit'> Add Expense </button>
            </form>
        </div> 
    )
}

export default Form