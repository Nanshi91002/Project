import React, { useState } from 'react'

export const InputDemo = () => {
    const [name, setname] = useState("")
    const [lname, setlname] = useState("")
    const [surname, setsurname] = useState("")
    const [age, setage] = useState("")
    const [email, setemail] = useState("")
    const [password,setpassword]=useState("")
    const [gender,setgender]=useState("")
    const [dob,setdob]=useState("")
    const [hobbies,sethobbies]=useState("")
    const [skill,setskill]=useState("")
    const nameHandler = (event) => {
        console.log(event.target.value);
        setname(event.target.value)
    }
    const lastnameHandler = (event) => {
        console.log(event.target.value);
        setlname(event.target.value)
    }
    const surnameHandler = (event) => {
        console.log(event.target.value);
        setsurname(event.target.value)

    }
    const ageHandler = (event) => {
        console.log(event.target.value);
        setage(event.target.value)
    }
    const emailHandler = (event) => {
        console.log(event.target.value);
        setemail(event.target.value)
    }
    const passwordHandler=(event)=>{
        console.log(event.target.value);
        setpassword(event.target.value)
        
    }
    const genderHandler=(event)=>{
        console.log(event.target.value);
        setgender(event.target.value)
        
    }
    const dobHandler=(event)=>{
        console.log(event.target.value);
        setdob(event.target.value)
        
    }
    const hobbiesHandler=(event)=>{
        console.log(event.target.value);
        sethobbies(event.target.value)
    }
    const skillHandler=(event)=>{
        console.log(event.target.value);
        setskill(event.target.value)
        
    }
    return (

        <div style={{ textAlign: "center" }}>
            <h1>Input Demo 1</h1>
            <div>
                <label>NAME:</label>
                <input type="text" placeholder='Enter Name' onChange={(event) => { nameHandler(event) }} ></input>
                {name}
            </div>
            <div>
                <label>LAST NAME:</label>
                <input type='text' placeholder='Enter Last Name' onChange={(event) => { lastnameHandler(event) }}></input>
                {lname}
            </div>
            <div>
                <label>SURNAME:</label>
                <input type='text' placeholder='Enter Surname' onChange={(event) => { surnameHandler(event) }}></input>
                {surname}
            </div>
            <div>
                <label>AGE</label>
                <input type='number' placeholder='Enter Age:' onChange={(event) => { ageHandler(event) }}></input>
                {age}
            </div>
            <div>
                <label>EMAIL</label>
                <input type='email' placeholder='Enter Email' onChange={(event) => { emailHandler(event) }}></input>
                {email}
            </div>
            <div>
                <label>PASSWORD</label>
                <input type='password' placeholder='Enter Password' onChange={(event)=>{passwordHandler(event)}}></input>
                {password}
            </div>
            <div>
                <label>GENDER</label>
                <input type='text' placeholder='Enter Gender' onChange={(event)=>{genderHandler(event)}}></input>
                {gender}
            </div>
            <div>
                <label>DOB</label>
                <input type='number' placeholder='Enter DOB' onChange={(event)=>{dobHandler(event)}}></input>
                {dob}
            </div>
            <div>
                <label>HOBBIES</label>
                <input type='text' placeholder='Enter Hobby' onChange={(event)=>{hobbiesHandler(event)}}></input>
                    {hobbies}
            </div>
            <div>
                <label>SKILLS</label>
                <input type='text' placeholder='Enter Skill' onChange={(event)=>{skillHandler(event)}}></input>
                {skill}
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </div>
    )
}
