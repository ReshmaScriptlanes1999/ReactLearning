import { useEffect, useState } from "react"

function Effect(){
    const [count, setCount] = useState(10)
    const [data, setData] = useState(100)
    useEffect(()=> {
        console.log("effect work");
    })
    return(
        <div>
            <h1>Effect</h1>
            {count}
            <button onClick={()=>setCount(count+1)}>Effect</button>

        </div>
    )
}
export default Effect