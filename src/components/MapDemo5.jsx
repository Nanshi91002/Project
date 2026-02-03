import React from 'react'

export const MapDemo5 = () => {
    var users=[
        {id:201,name:"Nisha",marks:55,gender:"female",age:20},
        {id:330,name:"Naitik",marks:60,gender:"male",age:18},
        {id:24,name:"Rajiv",marks:45,gender:"male",age:23},
        {id:89,name:"Naiya",marks:94,gender:"female",age:21},
        {id:87,name:"Niyati",marks:100,gender:"female",age:22}
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 5</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID:</th>
                    <th>NAME:</th>
                    <th>MARKS:</th>
                    <th>GENDER:</th>
                    <th>AGE:</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return <tr>
                            <td style={{backgroundColor:user.id>100 && "yellowgreen" }}>{user.id}</td>
                            <td style={{backgroundColor:user.name=="Rajiv" &&"blue"}}>{user.name}</td>
                            <td style={{color:user.marks>50 ? "red":"blue"}}>{user.marks}</td>
                            <td style={{backgroundColor:user.gender=="female" && "pink"}}>{user.gender}</td>
                            <td style={{color:user.age>=20 && "yellow"}}>{user.age}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
