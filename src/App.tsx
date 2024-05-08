import  { useState } from 'react';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from './components/ExpenseList';
import NavBar from "./components/NavBar";

const App = () => {
  const [expenses, setExpenses]=useState<string[]>([])

  const addExpense = (expense: string) => {
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
