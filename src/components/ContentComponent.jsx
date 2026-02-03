import React from 'react'

export default function ContentComponent() {
    var name = "React Js "
    var year = 2025
    var isAvailable = true;
    var Student = {
        name: "Nanshi Shah",
        age: 23,
        city: "Ahmedabad",
        college: "JG UNIVERSITY",
        enrollment: 24101151122
    }
    return (
        <div style={{backgroundColor:"greenyellow", color:"black", border:10, width:200, height:500}}>
            <h1>Hello</h1>
            <h2>Name:{name}</h2>
            <h3>Available:{isAvailable == true ? "True" : "False"}</h3>
            <h4>Student Name:{Student.name}</h4>
            <h4>Student Age:{Student.age}</h4>
            <h4>Student City:{Student.city}</h4>
            <h4>Student College:{Student.college}</h4>
            <h4>Student Entrollmemt No:{Student.enrollment}</h4>
        </div>
    )
}
