import { useState } from "react"

function Toggle(){
    const [data, setData]= useState(true)
    return(
        <div>
            {
                data?
                <h1>Display me</h1>
                :null
            }
          
            <button onClick={()=>setData(true)}>show</button>
            <button onClick={()=>setData(false)}>hide</button>
            <button onClick={()=>setData(!data)}>Toggle</button>
        </div>

    )
}
export default Toggle;