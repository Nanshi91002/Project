import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    console.log("errors",errors);

    const submitHandler=(data)=>{
        console.log(data);
        
    }
    const ValidationSchema={
        nameValidator:{
            required:{
                value:true,
                message:"Name is required"
            }
        }
    }
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 4</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <label>NAME</label>
            <input type='text' placeholder='enter name'{...register("name",ValidationSchema.nameValidator)}>
                {errors.name?.message}
            </input>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}
