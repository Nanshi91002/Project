import React from 'react'

export const MapDemo1 = () => {
    var cars=["3XO","Mercedes","Audi","Lamborgini"]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 1</h1>
        {
            cars.map((c)=>{
                return <h1>{c}</h1>
            })
            
        }
    </div>
  )

}
