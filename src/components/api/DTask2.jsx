import axios from 'axios'
import React, { useState } from 'react'

export const DTask2 = () => {
    const [users,setusers]=useState([])
    const getuser=async()=>{
        const response=await axios.get("https://dummyjson.com/comments")
        console.log(response);
        console.log(response.comments);
        console.log(response.data.message);
        setusers(response.data.comments)
        
        
        
    }
  return (
    <div style={{textAlign:"center"}}>
            <h1>Demo Task 2</h1>
            <button onClick={()=>{getuser()}}>GET</button>
            {users.length>0&&(
                <table border="1" align='center'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>BODY</th>
                            <th>POSTID</th>
                            <th>LIKES</th>
                            <th>USER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user)=>{
                                return <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.body}</td>
                                        <td>{user.postId}</td>
                                        <td>{user.likes}</td>
                                        <td>{user.users}</td>
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
