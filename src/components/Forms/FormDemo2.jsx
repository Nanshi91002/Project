import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
    const { register, handleSubmit } = useForm()
    const[userData,setuserData]=useState({})
    const[issubmitted,setissubmitted]=useState(false)
    const submitHandler = (data) => {
        console.log(data)
        setuserData(data)
        setissubmitted(data)

    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>FORM DEMO 2</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>NAME:</label>
                    <input type='text' placeholder='enter name'{...register("name")}></input>
                </div>
                <div>
                    <label>SURNAME:</label>
                    <input type='text' placeholder='enter surname' {...register("surname")}></input>
                </div>
                <div>
                    <label>LAST NAME</label>
                    <input type='text' placeholder='enter last name'{...register("lastname")}></input>
                </div>
                <div>
                    <label>EMAIL</label>
                    <input type='text' placeholder='enter email'{...register("email")}></input>
                </div>
                <div>
                    <label>PASSWORD</label>
                    <input type='password' placeholder='enter password'{...register("password")}></input>
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
            {issubmitted==true &&<div>
                <h1>OUTPUT:</h1>
                <h3>NAME={userData.name}</h3>
                <h3>SURNAME={userData.surname}</h3>
                <h3>LAST NAME={userData.lastname}</h3>
                <h3>EMAIL={userData.email}</h3>
                <h3>PASSWORD={userData.password}</h3>
            </div>

            }
        </div>
    )
}
