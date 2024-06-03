import  { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import ExpenseItem from "./ExpenseItem";
import { useExpenses } from "../models/ExpenseContext";
import categories from "../models/Data";
import "../App.css";

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

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value as string);
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
        style={{
          maxWidth: "90%",
          margin: "20px auto",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid #e0e0e0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <FormControl variant="outlined" style={{ minWidth: 200 }}>
            <InputLabel id="category-select-label">Filter by Category</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
              label="Filter by Category"
            >
              <MenuItem value="All Categories">
                <em>All Categories</em>
              </MenuItem>
              {categories.map((category, index) => (
                <MenuItem key={index} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
            <TableRow style={{ backgroundColor: "#F8F1FF" }}>
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
                rowBackgroundColor={index % 2 === 0 ? "white" : "#F9F5F6"}
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
