import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

export const ApiDemo2 = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    

    const submitHandler=async(data)=>{
        try{
            const respond= await axios.post("https://node5.onrender.com/user/user/",data)
            console.log(respond.data);
            
        }catch(err){
            console.log(err);
            
        }
    }
        
        
    
  return (
    <div style={{textAlign:"center"}}> 
        <h1>API DEMO 2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>
                    Name:<input type='name' placeholder='enter name'{...register("name",{required:"Name is required*"})}>
                    {errors.name?.message}
                    </input>
                </label>
            </div>
            <div>
                <label>
                    Email:<input type='email' placeholder='enter email'{...register("email",{required:"Email is required*",pattern:{value:"/^@%&/",message:"Invalid email format"}})}>
                        {errors.email?.message}
                    </input>
                </label>
            </div>
            <div>
                <label>
                    AGE:<input type='number' placeholder='enter age'{...register("age",{required:"Age is required*",min:{value:18,message:"Age should be 18"}})}>
                        {errors.age?.message}
                    </input>
                </label>
            </div>
            <div>
                <label>
                    PASSWORD:<input type='password' placeholder='enter password'{...register("password",{required:"Password is required*",minLength:{value:6,message:"Password should be minimum 6"}})}>
                        {errors.password?.message}
                    </input>
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox"{...register("isActive")}>IsActive</input>
                </label>
            </div>
           <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
