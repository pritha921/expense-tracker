import  { useState } from 'react';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from './components/ExpenseList';
import NavBar from "./components/NavBar";
import Expense from './models/Expenses';

const App = () => {
  const [expenses, setExpenses]=useState<Expense[]>([])

  const addExpense = (expense: Expense) => {
    setExpenses(prevExpenses => [...prevExpenses, expense]);
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <ExpenseForm onAddExpense={addExpense} />
      </div>
      <div>
        <ExpenseList expenses={expenses} />
      </div>
    </>
  );
};


export default App;
