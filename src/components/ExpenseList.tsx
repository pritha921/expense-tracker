// import React, { useState } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import categories from "../models/Data";
// import "../App.css";
// import { ThemeProvider } from "@emotion/react";
// import { createTheme } from "@mui/material";
// import ExpenseItem from "./ExpenseItem";
// import { useExpenses } from "../models/ExpenseContext";

// const theme = createTheme({
//   typography: {
//     fontFamily: ["Roboto", "Reddit Sans", "sans-serif"].join(","),
//   },
// });

// const ExpenseList = () => {
//   const { expenses, deleteExpense } = useExpenses();
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [open, setOpen] = useState(false);
//   const [expenseToDelete, setExpenseToDelete] = useState<number | null>(null);

//   const filteredExpenses = selectedCategory
//     ? expenses.filter((expense) => expense.category === selectedCategory)
//     : expenses;

//   filteredExpenses.sort((a, b) => a.details.localeCompare(b.details));

//   const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedCategory(e.target.value);
//   };

//   const totalExpenses = filteredExpenses.reduce(
//     (total, expense) => total + expense.amount,
//     0
//   );

//   const handleDeleteClick = (index: number) => {
//     setExpenseToDelete(index);
//     setOpen(true);
//   };

//   const handleConfirmDelete = () => {
//     if (expenseToDelete !== null) {
//       deleteExpense(expenseToDelete);
//     }
//     setOpen(false);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <TableContainer
//         component={Paper}
//         style={{
//           maxWidth: "90%",
//           margin: "50px auto 20px auto",
//           padding: "20px",
//           borderRadius: "10px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "10px",
//           }}
//         >
//           <span style={{ marginRight: "10px" }}>Filter by Category:</span>
//           <select value={selectedCategory} onChange={handleCategoryChange}>
//             <option value="">All Categories</option>
//             {categories.map((category, index) => (
//               <option key={index} value={category}>
//                 {category}
//               </option>
//             ))}
//           </select>
//         </div>
//         <Table aria-label="caption table">
//           <caption
//             style={{
//               fontSize: "15px",
//               fontWeight: "normal",
//               textAlign: "right",
//               marginBottom: "10px",
//             }}
//           >
//             <Button variant="outlined">Total Expenses: {totalExpenses}</Button>
//           </caption>
//           <TableHead>
//             <TableRow style={{ backgroundColor: "#F8F1FF" }}>
//               <TableCell
//                 align="center"
//                 style={{
//                   fontSize: "18px",
//                   fontWeight: "bold",
//                   color: "#00215E",
//                 }}
//               >
//                 Details
//               </TableCell>
//               <TableCell
//                 align="center"
//                 style={{
//                   fontSize: "18px",
//                   fontWeight: "bold",
//                   color: "#00215E",
//                 }}
//               >
//                 Category
//               </TableCell>
//               <TableCell
//                 align="right"
//                 style={{
//                   fontSize: "18px",
//                   fontWeight: "bold",
//                   color: "#00215E",
//                 }}
//               >
//                 Amount
//               </TableCell>
//               <TableCell
//                 align="right"
//                 style={{
//                   fontSize: "18px",
//                   fontWeight: "bold",
//                   color: "#00215E",
//                 }}
//               >
//                 Date
//               </TableCell>
//               <TableCell
//                 align="right"
//                 style={{
//                   fontSize: "18px",
//                   fontWeight: "bold",
//                   color: "#00215E",
//                 }}
//               >
//                 Action
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredExpenses.map((expense, index) => (
//               <ExpenseItem
//                 rowBackgroundColor={index % 2 === 0 ? "white" : "#F9F5F6"}
//                 key={index}
//                 expense={expense}
//                 onDelete={() => handleDeleteClick(index)}
//               />
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Are you sure you want to delete this item?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleConfirmDelete} color="primary" autoFocus>
//             Yes
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </ThemeProvider>
//   );
// };

// export default ExpenseList;


import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
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
  const [open, setOpen] = useState(false);
  const [expenseToDelete, setExpenseToDelete] = useState<number | null>(null);

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

  const handleDeleteClick = (index: number) => {
    setExpenseToDelete(index);
    setOpen(true);
  };

  const handleConfirmDelete = () => {
    if (expenseToDelete !== null) {
      deleteExpense(expenseToDelete);
    }
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <TableContainer
        component={Paper}
        style={{
          maxWidth: "90%",
          margin: "40px auto 20px auto", // Add top margin here
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between", // Adjust layout
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span>Total Expenses: {totalExpenses}</span>
          <div style={{ display: "flex", alignItems: "center" }}>
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
                onDelete={() => handleDeleteClick(index)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default ExpenseList;

