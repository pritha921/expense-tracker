import { Button } from "@mui/material";
import { SubmitHandler, useForm } from 'react-hook-form';

type FormFields = {
    date: string,
    details: string,
    amount: number
};

type ExpenseFormProps = {
    onAddExpense: (expense: FormFields) => void;
};

const ExpenseForm = ({ onAddExpense }: ExpenseFormProps) => {
    const { register, handleSubmit, formState: { errors },reset } = useForm<FormFields>();

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        onAddExpense(data);
        reset();
    };

    return (
        <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h1 style={{ textAlign: 'center' }}>Expense Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '0 20px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <input {...register("date", { required: "Please enter the date" })} type="date" placeholder="Enter the date"  style={{ width: '100%', padding: '8px', marginBottom: '5px', borderRadius: '5px' }} />
                    {errors.date && (<div style={{ color: 'red' }}>{errors.date.message}</div>)}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input {...register("details", { required: "Please enter details of expenses" })} type="text" placeholder="Enter the details" style={{ width: '100%', padding: '8px', marginBottom: '5px', borderRadius: '5px' }} />
                    {errors.details && (<div style={{ color: 'red' }}>{errors.details.message}</div>)}
                </div>
                <div style={{ marginBottom: '10px' }}>
                     <input {...register("amount", { required: "Please enter the amount", pattern: { value: /^[0-9]*$/, message: "Please enter a valid number" } })} type="number" placeholder="Enter the amount" style={{ width: '100%', padding: '8px', marginBottom: '5px', borderRadius: '5px' }} />
                    {errors.amount && (<div style={{ color: 'red' }}>{errors.amount.message}</div>)}
                </div>
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                    <Button type="submit" variant="contained" color="primary" style={{ width: '150px', borderRadius: '5px' }}>Add</Button>
                </div>
            </form>
        </div>
    );
};

export default ExpenseForm;




