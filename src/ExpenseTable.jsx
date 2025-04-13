import React from 'react';
import ExpenseRow from './ExpenseRow';


function ExpenseTable({ expenses }) {
  return (
    <table id='Expense-table' border="1" cellPadding="10" cellSpacing="0" style={{ marginTop: '30px' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount ($)</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <ExpenseRow key={expense.id} expense={expense} />
          ))
        ) : (
          <tr>
            <td colSpan="5" style={{ textAlign: 'center' }}>
              No expenses found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ExpenseTable;