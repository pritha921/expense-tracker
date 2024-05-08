import ExpenseItem from "./ExpenseItem"
import Expense from "../models/Expenses"

interface ExpenseListProps{
  expenses:Expense[]
}

const ExpenseList = ({expenses}:ExpenseListProps) => {
  return (
    <div>
      <h2>Expense List</h2>
      {expenses.map((expense,index)=>(
             <ExpenseItem
             key={index}
             date={expense.date}
             details={expense.details}
             amount={expense.amount}
           />
      ))}
    </div>
  )
}

export default ExpenseList
