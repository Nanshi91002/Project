import React from 'react'
//import { SubEmployee } from './SubEmployee'

export const EmployeeList = (props) => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>EMPLOYEE LIST</h1>
        <h2>{props.title}</h2>
        <h3>{props.company.name}</h3>
        <h3>{props.company.year}</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.students.map((stud)=>{
                        return <tr>
                            <td>{stud.id}</td>
                            <td>{stud.name}</td>
                            <td>{stud.age}</td>
                            <td>{stud.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        {/* <SubEmployee title={props.title}></SubEmployee> */}
    </div>
 )
}
