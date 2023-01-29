import { useState } from "react";

function Props(props){
    console.log("props", props);
    const [Data, setData]=useState("adfja");
    function properties(){
        setData("jjjjj")
    }   
    return(
        <div>
            my mother name is {props.name}
            {Data}
            <button onClick={properties}>Properties</button>
        </div>
    )
}
export default Props;