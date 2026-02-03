import React from 'react'

export const MapDemo3 = () => {
    const students = [
        { id: 1, name: "amit", city: "Ahmedabad", gender: "male" },
        { id: 201, name: "nisarg", city: "Deheradun", gender: "male" },
        { id: 55, name: "yashvi", city: "Rajkot", gender: "female" },
        { id: 10, name: "anushri", city: "Surat", gender: "female" }
    ]
    return (
        <div style={{ textAlign: "center" }}>
            <h1>MAP DEMO 3</h1>
            <table border="2" align='center'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((std) => {
                            return <tr>
                                    <td>{std.id}</td>
                                    <td>{std.name}</td>
                                    <td>{std.city}</td>
                                    <td>{std.gender}</td>
                                </tr>
        
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
