import { Button} from "@mui/material";
import {SubmitHandler, useForm} from 'react-hook-form'

type FormFields={
    date: string,
    details: string,
    amount: number
}

const ExpenseForm = () => {
    const { register, handleSubmit,formState:{errors} }= useForm<FormFields>();

    const onSubmit: SubmitHandler<FormFields>=(data)=>{
        console.log(data);
    }
  return (
    <>
      <div>
        <h1>Expense Form</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("date", { required: "Please enter the date" })} type="text" placeholder="Enter the date" />
          {errors.date && (<div>{errors.date.message}</div>
          )}
          <input {...register("details", { required: "Please enter details of expenses" })} type="text" placeholder="Enter the details" />
          {errors.details && (<div>{errors.details.message}</div>
          )}
          <input {...register("amount", { required: "Please enter the amount" })} type="text" placeholder="Enter the amount" />
          {errors.amount && (<div>{errors.amount.message}</div>
          )}
          <Button type="submit">Add   </Button>
        </form>
      </div>  
    </>
  );
};

export default ExpenseForm;

