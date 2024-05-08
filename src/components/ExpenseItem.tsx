interface ExpenseItemProps{
    date:string,
    details:string,
    amount:number
}

const ExpenseItem = ({date, details, amount}:ExpenseItemProps) => {
  return (
    <div>
        <p>Date:{date}</p>
        <p>Details:{details}</p>
        <p>Amount:{amount}</p>
      
    </div>
  )
}

export default ExpenseItem
