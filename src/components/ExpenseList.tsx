import React, { useState } from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Expense from "../models/Expenses";

interface ExpenseListProps {
  expenses: Expense[];
  onDeleteExpense: (index: number) => void;
}

function ExpenseList({ expenses, onDeleteExpense }: ExpenseListProps) {
  const [selectedCategory, setSelectedCategory] = useState('');

  
  const filteredExpenses = selectedCategory
    ? expenses.filter(expense => expense.category === selectedCategory)
    : expenses;

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };


  const totalExpenses = filteredExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const handleDelete = (index: number) => {
    onDeleteExpense(index);
  };

  return (
    <TableContainer
      component={Paper}
      style={{ maxWidth: "600px", margin: "20px auto" }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ marginRight: '10px' }}>Filter by Category:</span>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Study">Study</option>
          <option value="Miscellaneous">Miscellaneous</option>
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
            <TableCell style={{ fontSize: "18px", fontWeight: "bold" }}>
              Category
            </TableCell>
            <TableCell style={{ fontSize: "18px", fontWeight: "bold" }}>
              Date
            </TableCell>
            <TableCell
              align="center"
              style={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Details
            </TableCell>
            <TableCell
              align="right"
              style={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Amount
            </TableCell>
            <TableCell
              align="right"
              style={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredExpenses.map((expense, index) => (
            <TableRow
              key={index}
              style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white" }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{ fontSize: "16px" }}
              >
                {expense.category}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                style={{ fontSize: "16px" }}
              >
                {expense.date}
              </TableCell>
              <TableCell align="center" style={{ fontSize: "16px" }}>
                {expense.details}
              </TableCell>
              <TableCell align="right" style={{ fontSize: "16px" }}>
                {expense.amount}
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ExpenseList;

