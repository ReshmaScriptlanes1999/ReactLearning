import { useState } from "react";

function Validation(){
    const [UserId, setUserId] = useState("")
    const [Password, setPassword] = useState("")
    const [UserIderr, setUserIderr] = useState(false)
    const [Passworderr, setPassworderr] = useState(false)
    function getData(e){
        e.preventDefault()
        if(UserId.length<3 || Password.length<3){
            alert("wrong")
            
        }
        else{
            alert("correct")
            alert(UserId,Password)
        }
    }
    function getuserId(e){
        let item
        item=e.target.value;
        if(item.length<3){
            setUserIderr(true)
        }
        else{
            setUserIderr(false)
        }
        setUserId(item)
    }
    function getpassword(e){
        let item2
        item2=e.target.value
        if(item2.length<3){
            setPassworderr(true)
        }
        else{
            setPassworderr(false)
        }
        setPassword(item2)
    }
    return(
        <div>
            <form onSubmit={getData}>
                <input type="text" onChange={getuserId}/>UserId{UserIderr? <span>Invalid</span>:""}
                <input type="password" onChange={getpassword}/>password{Passworderr?<span>Invalid</span>:""}
                <button>submit</button>
            </form>
        </div>
    )
}
export default Validation