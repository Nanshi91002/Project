import React from 'react'
import "../assets/css/img1.css"

export const MapDemo6 = () => {
    var products = [
        { id: 201,img:"/images/iphone.jpg", name: "Iphone", category: "electronic", price: 75000, status: "out of stock", orderno: 165 },
        { id: 349, name: "Biscuit", category: "food", price: 20, status: "available", orderno: 890 },
        { id: 789, name: "Pen", category: "stationary", price: 2, status: "available", orderno: 135 },
        { id: 760, name: "Erarser", category: "stationary", price: 5, status: "not-available", orderno: 112 },
        { id: 75, name: "Almond", category: "dry-fruit", price: 1000, status: "available", orderno: 5 },
        { id: 99, name: "TV", category: "electronic", price: 55000, status: "out of stock", orderno: 8 }
    ]
    return (
        <div style={{ textAlign: "center" }}>
            <h1>MAP DEMO 6</h1>
            <table className='table table-dark'>
                
                <thead>
                    <tr>
                        <th>ID:</th>
                        <th>IMAGE:</th>
                        <th>NAME:</th>
                        <th>CATEGORY:</th>
                        <th>PRICE:</th>
                        <th>STATUS:</th>
                        <th>ORDER NO</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((prod) => {
                            return <tr key = {prod.id}>
                                <td>{prod.id}</td>
                                <td>
                                    <img src={prod.img} alt="" className='img1' />
                                </td>
                                <td style={{backgroundColor:prod.name=="iphone" &&"yellowgreen"}}>{prod.name}</td>
                                <td>{prod.category}</td>
                                <td>{prod.price}</td>
                                <td>{prod.status}</td>
                                <td>{prod.orderno}</td>
                            </tr>

                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
