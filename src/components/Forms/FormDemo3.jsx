import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    console.log("errors...",errors);
    
    const submitHandler=(data)=>{
        alert("form submitted successfully")
        console.log(data);
        
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <label>NAME:</label>
            <input type='text'{...register("name",{required:{value:true,message:"Name is required*"}})}></input>
            {errors.name && errors.name.message}
        </form>
        <div>
            <input type="submit" />
        </div>
    </div>
  )
}
