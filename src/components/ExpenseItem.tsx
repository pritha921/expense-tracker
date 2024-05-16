import Expense from "../models/Expenses"
import './components/globalStyles.css'
const ExpenseItem = ({ date, details, amount,category}:Expense) => {
  return (
    <div>
       
        <p>Details:{details}</p>
        <p>Category:{category}</p>
        <p>Amount:{amount}</p>
        <p>Date:{date.toLocaleDateString()}</p>
        
      
    </div>
  )
}

export default ExpenseItem
