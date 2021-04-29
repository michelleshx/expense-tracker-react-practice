import React, { useState } from 'react'; // not necessary
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onEdit={stopEditingHandler}
        />
      ) : (
        <button className="new-expense" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}

      {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> */}
    </div>
  );
};

export default NewExpense;
