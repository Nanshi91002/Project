import React from 'react'

export const MapDemo4 = () => {
    var cities = [
        { id: 115, name: "Ahmedabad", pop: 8500000, aqi: 320 },
        { id: 201, name: "Delhi", pop: 750000, aqi: 115 },
        { id: 859, name: "Rajkot", pop: 89000, aqi: 150 }
    ]
    return (
        <div style={{ textAlign: "center" }}>
            <h1>MAP DEMO 4</h1>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID:</th>
                        <th>NAME:</th>
                        <th>POPULATION:</th>
                        <th>AQI:</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cities.map((city)=>{
                            return<tr>
                                <td>{city.id}</td>
                                <td>{city.name}</td>
                                <td>{city.pop}</td>
                                <td>{city.aqi}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
