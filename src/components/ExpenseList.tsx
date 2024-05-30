import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import categories from "../models/Data";
import "../App.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import ExpenseItem from "./ExpenseItem";
import { useExpenses } from "../models/ExpenseContext";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "Reddit Sans", "sans-serif"].join(","),
  },
});

const ExpenseList = () => {
  const { expenses, deleteExpense } = useExpenses();
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const filteredExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  filteredExpenses.sort((a, b) => a.details.localeCompare(b.details));

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const totalExpenses = filteredExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const handleDelete = (index: number) => {
    deleteExpense(index);
  };

  return (
    <ThemeProvider theme={theme}>
      <TableContainer
        component={Paper}
        style={{ maxWidth: "100%", margin: "20px auto" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span style={{ marginRight: "10px" }}>Filter by Category:</span>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <Table aria-label="caption table">
          <caption
            style={{
              fontSize: "15px",
              fontWeight: "normal",
              textAlign: "right",
              marginBottom: "10px",
            }}
          >
            <Button variant="outlined">Total Expenses: {totalExpenses}</Button>
          </caption>
          <TableHead>
            <TableRow style={{ backgroundColor: "#f0f0f0" }}>
              <TableCell
                align="center"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#00215E",
                }}
              >
                Details
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#00215E",
                }}
              >
                Category
              </TableCell>
              <TableCell
                align="right"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#00215E",
                }}
              >
                Amount
              </TableCell>
              <TableCell
                align="right"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#00215E",
                }}
              >
                Date
              </TableCell>
              <TableCell
                align="right"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#00215E",
                }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredExpenses.map((expense, index) => (
              <ExpenseItem
                rowBackgroundColor={index % 2 === 0 ? "#f9f9f9" : "white"}
                key={index}
                expense={expense}
                onDelete={() => handleDelete(index)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default ExpenseList;

