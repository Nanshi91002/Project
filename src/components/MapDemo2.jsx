import React from 'react'

export const MapDemo2 = () => {
    const students=[
        {id:99,name:"Nanshi",age:23,gender:"Female",city:"Ahmedabad"},
        {id:201,name:"Shreya",age:19,gender:"Female",city:"Surat"},
        {id:4,name:"Dhiaan",age:21,gender:"Male",city:"Rajkot"},
        {id:10,name:"AbhiShek",age:30,gender:"Male",city:"Surendranagar"}
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 2</h1>
        {
            students.map((stud)=>{
                return<h2>
                    {stud.id}----{stud.name}----{stud.age}---{stud.gender}----{stud.city}
                </h2>
            })
        }
    </div>
  )
}
