import Expense from "../models/Expenses";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import "./globalStyles.css";
import { TableCell, TableRow } from "@mui/material";
import ColorContext from "../models/ColorContext";
import { useContext } from "react";

interface ExpenseItemProps {
  expense: Expense;
  onDelete: () => void;
  rowBackgroundColor?: string;
}

const ExpenseItem = ({
  expense,
  onDelete,
  rowBackgroundColor = "white",
}: ExpenseItemProps) => {
  const { selectedColor } = useContext(ColorContext);
  return (
    <TableRow style={{ backgroundColor: rowBackgroundColor }}>
      <TableCell
        align="center"
        style={{ fontSize: "16px", color: selectedColor }}
      >
        {expense.details}
      </TableCell>
      <TableCell align="center" style={{ fontSize: "16px" }}>
        {expense.category}
      </TableCell>
      <TableCell align="right" style={{ fontSize: "16px" }}>
        {expense.amount}
      </TableCell>
      <TableCell align="right" style={{ fontSize: "16px" }}>
        {expense.date instanceof Date
          ? expense.date.toLocaleDateString()
          : "Invalid Date"}
      </TableCell>
      <TableCell align="right">
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={onDelete}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ExpenseItem;