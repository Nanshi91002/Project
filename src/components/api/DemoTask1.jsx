import axios from 'axios'
import React, { useState } from 'react'

export const DemoTask1 = () => {
    //const [message,setmessage]=useState("")
    const [users,setusers]=useState([])
    const getuser=async ()=>{
        const response=  await axios.get("https://dummyjson.com/products")
        console.log(response);
        console.log(response.products);
        console.log(response.data.message);
        // setmessage(response.data.message)
        setusers(response.data.products)        
        
    
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>DEMO Task 1</h1>
        <button onClick={()=>{getuser()}}>GET</button>
        {/* <h2>MESSAGE:{message}</h2> */}
        {users.length>0 &&(
            <table border="1" align='center'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>DESCRIPTION</th>
                        <th>CATEGORY</th>
                        <th>PRICE</th>
                        <th>DISCOUNT PERCENTAGE</th>
                        <th>RATING</th>
                        <th>STOCK</th>
                        <th>TAGS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            return<tr key={user.id}>
                                <td >{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.description}</td>
                                <td>{user.category}</td>
                                <td>{user.price}</td>
                                <td>{user.discountPercentage}</td>
                                <td>{user.rating}</td>
                                <td>{user.stock}</td>
                                <td>{user.tags}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        )

        }
    </div>
  )
}
