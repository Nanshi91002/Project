import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    console.log("errors...",errors);
    
    const submitHandler=(data)=>{
        alert("form submitted successfully")
        console.log(data);
        
    }
    const ValidationSchema={
        ageValidator:{
            required:{
                value:true,
                message:"Age is required"
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <label>NAME:</label>
            <input type='text'{...register("name",{required:{value:true,message:"Name is required*"}})}></input>
            {errors.name && errors.name.message}
            <div>
                <label>AGE:
                    <input type='text'{...register("age",ValidationSchema.ageValidator)}></input>
                    {errors.age && errors.age.message}
                </label>
            </div>
            <div>
            <input type="submit" />
        </div>
        </form>
        
    </div>
  )
}
