import Expense from "../models/Expenses"
import './components/globalStyles.css'
const ExpenseItem = ({ details, amount,category}:Expense) => {
  return (
    <div>
       
        <p>Details:{details}</p>
        <p>Category:{category}</p>
        <p>Amount:{amount}</p>
        {/* <p>Date:{Date}</p> */}
        
      
    </div>
  )
}

export default ExpenseItem
