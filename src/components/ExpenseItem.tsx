import Expense from "../models/Expenses"

const ExpenseItem = ({date, details, amount,category}:Expense) => {
  return (
    <div>
        <p>Date:{date}</p>
        <p>Details:{details}</p>
        <p>Amount:{amount}</p>
        <p>Category:{category}</p>
      
    </div>
  )
}

export default ExpenseItem
