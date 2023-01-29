import { useState } from "react";

function Input(){
    const [data, setData]= useState(null)
    const [submit, setSubmit]= useState(false)
    function getData(val){
        console.log(val.target.value);
        setData(val.target.value)
        
    }
    return(
        <div>
            {
                submit?
                <h2>{data}</h2>
                :null
            }
            <input type="text" onChange={getData}/>
            <button onClick={()=>setSubmit(true)}>submit</button>
        </div>
    )
}
export default Input;