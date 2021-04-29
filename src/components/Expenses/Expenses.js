import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onFilterYear={filterYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
