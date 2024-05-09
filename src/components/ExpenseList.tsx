import ExpenseItem from "./ExpenseItem"
import Expense from "../models/Expenses"

interface ExpenseListProps{
  expenses:Expense[]
}

const ExpenseList = ({expenses}:ExpenseListProps) => {
  const totalExpenses = expenses.reduce((total, expense) => total + parseFloat(expense.amount.toString()), 0);
  return (
    <div>
    <h2>Expense List</h2>
    {expenses.length === 0 ? (
      <p>Nothing to show</p>
    ) : (
      <>
        {expenses.map((expense, index) => (
          <ExpenseItem
            key={index}
            date={expense.date}
            details={expense.details}
            amount={expense.amount}
          />
        ))}
        <p>Total Expenses: {totalExpenses}</p>
      </>
    )}
  </div>
);
};


export default ExpenseList
