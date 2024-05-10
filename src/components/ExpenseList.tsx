import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Expense from "../models/Expenses";

interface ExpenseListProps {
    expenses: Expense[];
}

function ExpenseList({ expenses }: ExpenseListProps) {
  console.log(expenses)
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} aria-label="caption table">
                <caption style={{ fontSize: '15px', fontWeight: 'normal' }}>Total Expenses: {totalExpenses}</caption>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>Date</TableCell>
                        <TableCell align="right"sx={{ fontSize: '18px', fontWeight: 'bold' }}>Details</TableCell>
                        <TableCell align="right" sx={{ fontSize: '18px', fontWeight: 'bold' }}>Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {expenses.map((expense, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {expense.date}
                            </TableCell>
                            <TableCell align="right">{expense.details}</TableCell>
                            <TableCell align="right">{expense.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ExpenseList;



