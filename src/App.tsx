import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import NavBar from "./components/NavBar";
import Expense from "./models/Expenses";
import "./components/globalStyles.css";
import ColorContext from "./models/ColorContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";

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
      date: new Date(expense.date).toISOString(),
    }));
    localStorage.setItem("expenses", JSON.stringify(addExpenses));
  }, [expenses]);

  const addExpense = (expense: Expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const handleDeleteExpense = (index: number) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  return (
    <>
      <ColorContext.Provider
        value={{
          selectedColor,
          setSelectedColor: (color) => setSelectedColor(color),
        }}
      >
        <BrowserRouter>
          <div className="app-container">
            <div>
              <NavBar />
            </div>
            <div>
              <Routes>
                <Route
                  path="/add"
                  render={() => (
                    <ExpenseForm
                      onAddExpense={addExpense}
                      buttonColor={selectedColor}
                    />
                  )}
                />
              </Routes>
            </div>
            <div>
              <ExpenseList
                expenses={expenses}
                onDeleteExpense={handleDeleteExpense}
              />
            </div>
          </div>
        </BrowserRouter>
      </ColorContext.Provider>
    </>
  );
};

export default App;
