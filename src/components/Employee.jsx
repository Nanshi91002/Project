import React from 'react'
import { EmployeeList } from './EmployeeList'

export const Employee = () => {
    var title="NANSHI"
    var company={
        name:"UNICORN",
        year:2026
    }
    var students=[
        {id:201,name:"NANSHI",age:23,gender:"FEMALE"},
        {id:11,name:"NIYATI",age:20,gender:"FEMALE"},
        {id:2,name:"PIYUSH",age:19,gender:"MALE"},
        {id:1,name:"PRIYANSHI",age:21,gender:"FEMALE"},
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>EMPLOYEES</h1>
        <EmployeeList title={title} company={company} students={students}></EmployeeList>
    </div>
  )
}
