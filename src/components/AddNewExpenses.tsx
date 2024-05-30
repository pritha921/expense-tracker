import ExpenseForm from "./ExpenseForm";
import { useExpenses } from "../models/ExpenseContext";

const AddNewExpenses = () => {
  const { addExpense } = useExpenses();

  return (
    <div>
      <ExpenseForm onAddExpense={addExpense} />
    </div>
  );
};

export default AddNewExpenses;

