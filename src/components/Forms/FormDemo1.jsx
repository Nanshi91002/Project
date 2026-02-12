import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
    const{register,handleSubmit}=useForm()
    const [userData,setuserData]=useState({})
    const [issubmitted,setissubmitted]=useState(false)

    const submitHandler=(data)=>{
        console.log(data)
        setuserData(data)
        setissubmitted(true)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 1 </h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME:</label>
                <input type='text' placeholder='enter name' {...register("name")}></input>
            </div>
            <div>
                <label>AGE:</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <label>GENDER:</label><br></br>
                MALE:<input type='radio' value="male"{...register("gender")} ></input><br></br>
                FEMALE:<input type='radio' value="female" {...register("gender")}></input>
            </div>
            <div>
                <label>HOBBIES:</label>
                BADMINTON:<input type='checkbox' value="badminton" {...register("hobbies")}></input><br></br>
                TABLE TENNIS:<input type='checkbox' value="table-tennis" {...register("hobbies")}></input><br></br>
                DRIVING:<input type='checkbox' value="driving" {...register("hobbies")}></input>
            </div>
            <div>
                <input type="submit" />
            </div>
            
        </form>
        {issubmitted==true && <div>
            <h1>Output</h1>
            <h3>NAME={userData.name}</h3>
            <h3>Age={userData.age}</h3>
            </div>
        }
        </div>
  )
}
