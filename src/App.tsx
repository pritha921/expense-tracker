import { useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExpenseList from "./components/ExpenseList";
import NavBar from "./components/NavBar";
import AddNewExpenses from "./components/AddNewExpenses";
import "./components/globalStyles.css";
import ColorContext from "./models/ColorContext";
import { ExpensesProvider } from "./models/ExpenseContext";

const App = () => {
  const [selectedColor, setSelectedColor] = useState<string>("blue");

  return (
    <ColorContext.Provider
      value={{
        selectedColor,
        setSelectedColor: (color) => setSelectedColor(color),
      }}
    >
      <ExpensesProvider>
        <Router>
          <div className="app-container">
            <NavBar />
            <Routes>
              <Route path="/" element={<ExpenseList />} />
              <Route path="/add" element={<AddNewExpenses />} />
            </Routes>
          </div>
        </Router>
      </ExpensesProvider>
    </ColorContext.Provider>
  );
};

export default App;

