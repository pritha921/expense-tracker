import Expense from "../models/Expenses"

const ExpenseItem = ({date, details, amount}:Expense) => {
  return (
    <div>
        <p>Date:{date}</p>
        <p>Details:{details}</p>
        <p>Amount:{amount}</p>
      
    </div>
  )
}

export default ExpenseItem
