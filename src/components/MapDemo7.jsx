import React from 'react'

export const MapDemo7 = () => {
    var employees=[
        {id:201,name:"Rajiv",age:24,department:"Accountant",gender:"male",salary:25000},
        {id:61,name:"Krishna",age:32,department:"Receptionist",gender:"female",salary:20000},
        {id:78,name:"Janvi",age:30,department:"Sales-department",gender:"female",salary:15500},
        {id:115,name:"Rajesh",age:42,department:"HR",gender:"male",salary:52000},
        {id:99,name:"Seema",age:26,department:"IT",gender:"female",salary:55000},
        {id:96,name:"Maulik",age:28,department:"cashier",gender:"male",salary:12000}
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 7</h1>
        <table className='table table-dark'>
           <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>DEPARTMENT</th>
                <th>GENDER</th>
                <th>SALARY</th>
            </tr>
           </thead>
           <tbody>
            {
                employees.map((emp)=>{
                    return <tr>
                        <td style={{backgroundColor:emp.id>100 && "yellowgreen"}}>{emp.id}</td>
                        <td style={{backgroundColor:emp.name=="Krishna" && "brown"}}>{emp.name}</td>
                        <td style={{backgroundColor:emp.age>30? "burlywood":"pink"}}>{emp.age}</td>
                        <td style={{backgroundColor:emp.department=="Sales-department" && "lightcoral"}}>{emp.department}</td>
                        <td style={{color:emp.gender=="female" && "blue"}}>{emp.gender}</td>
                        <td style={{color:emp.salary>20000 ? "red":"blueviolet"}}>{emp.salary}</td>
                    </tr>
                })
            }
           </tbody>
        </table>
    </div>
  )
}
