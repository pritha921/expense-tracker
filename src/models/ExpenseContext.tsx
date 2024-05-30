import  { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Expense from "../models/Expenses";

interface ExpensesContextProps {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  deleteExpense: (index: number) => void;
}

const ExpensesContext = createContext<ExpensesContextProps>({
  expenses: [],
  addExpense: () => {},
  deleteExpense: () => {},
});

export const ExpensesProvider = ({ children }: { children: ReactNode }) => {
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

  useEffect(() => {
    const addExpenses = expenses.map((expense) => ({
      ...expense,
      date: expense.date.toISOString(),
    }));
    localStorage.setItem("expenses", JSON.stringify(addExpenses));
  }, [expenses]);

  const addExpense = (expense: Expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const deleteExpense = (index: number) => {
    setExpenses((prevExpenses) => {
      const newExpenses = [...prevExpenses];
      newExpenses.splice(index, 1);
      return newExpenses;
    });
  };

  return (
    <ExpensesContext.Provider value={{ expenses, addExpense, deleteExpense }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpensesContext);

