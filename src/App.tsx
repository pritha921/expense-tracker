import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExpenseList from "./components/ExpenseList";
import NavBar from "./components/NavBar";
import AddNewExpenses from "./components/AddNewExpenses";
import Expense from "./models/Expenses";
import "./components/globalStyles.css";
import ColorContext from "./models/ColorContext";

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const savedExpenses = localStorage.getItem("expenses");
    if (savedExpenses) {
      const parsedExpenses = JSON.parse(savedExpenses);
      return parsedExpenses.map((expense: Expense) => ({
        ...expense,
        date: new Date(expense.date),
      }));
    }
    return [];
  });

  const [selectedColor, setSelectedColor] = useState<string>("blue");

  useEffect(() => {
    const addExpenses = expenses.map((expense) => ({
      ...expense,
      date: expense.date.toISOString(),
    }));
    localStorage.setItem("expenses", JSON.stringify(addExpenses));
  }, [expenses]);

  const handleDeleteExpense = (index: number) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  return (
    <ColorContext.Provider
      value={{
        selectedColor,
        setSelectedColor: (color) => setSelectedColor(color),
      }}
    >
      <Router>
        <div className="app-container">
          <NavBar />
          <Routes>
            <Route path="/" element={
              <ExpenseList
                expenses={expenses}
                onDeleteExpense={handleDeleteExpense}
              />
            } />
            <Route path="/add" element={<AddNewExpenses />} />
          </Routes>
        </div>
      </Router>
    </ColorContext.Provider>
  );
};

export default App;

