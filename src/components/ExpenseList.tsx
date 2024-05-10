import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Expense from "../models/Expenses";
import { Button } from '@mui/material';

interface ExpenseListProps {
    expenses: Expense[];
}

function ExpenseList({ expenses }: ExpenseListProps) {
  console.log(expenses)
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    return (
        <TableContainer component={Paper} style={{ maxWidth: '600px', margin: '20px auto' }}>
            <Table aria-label="caption table">
                <caption style={{ fontSize: '15px', fontWeight: 'normal', textAlign: 'right', marginBottom: '10px' }}><Button variant="outlined">Total Expenses: {totalExpenses}</Button></caption>
                <TableHead>
                    <TableRow style={{ backgroundColor: '#f0f0f0' }}>
                        <TableCell style={{ fontSize: '18px', fontWeight: 'bold' }}>Date</TableCell>
                        <TableCell align="center" style={{ fontSize: '18px', fontWeight: 'bold' }}>Details</TableCell>
                        <TableCell align="right" style={{ fontSize: '18px', fontWeight: 'bold' }}>Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {expenses.map((expense, index) => (
                        <TableRow key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
                            <TableCell component="th" scope="row" style={{ fontSize: '16px' }}>
                                {expense.date}
                            </TableCell>
                            <TableCell align="center" style={{ fontSize: '16px' }}>{expense.details}</TableCell>
                            <TableCell align="right" style={{ fontSize: '16px' }}>{expense.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ExpenseList;




