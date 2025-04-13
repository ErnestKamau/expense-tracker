import React from 'react';

function ExpenseRow({ expense }) {
  return (
    <tr>
      <td>{expense.name}</td>
      <td>{expense.description}</td>
      <td>{expense.category}</td>
      <td>{expense.amount.toFixed(2)}</td>
      <td>{expense.date || 'N/A'}</td>
    </tr>
  );
}

export default ExpenseRow;
