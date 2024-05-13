import  { useState } from 'react';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from './components/ExpenseList';
import NavBar from "./components/NavBar";
import Expense from './models/Expenses';
import './components/globalStyles.css'

const App = () => {
  const [expenses, setExpenses]=useState<Expense[]>([])

  const addExpense = (expense: Expense) => {
    setExpenses(prevExpenses => [...prevExpenses, expense]);
  };
  const handleDeleteExpense = (index: number) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  }
  return (
    <>
      <div>
        <NavBar />  
      </div>
      <div>
        <ExpenseForm onAddExpense={addExpense} />
      </div>
      <div>
        <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense}/>
      </div>
    </>
  );
};


export default App;
