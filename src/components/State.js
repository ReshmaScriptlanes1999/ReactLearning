import { useState } from "react";

function State(){
    const [Data, setData]=useState("Reshma")
    function update(){
        setData("I will complete my Dream one day");
    }
    return(
        <div>
            <h2>Reshma</h2>
            <h1>{Data}</h1>
            <button onClick={update}>update</button>
        </div>
    )
}
export default State;