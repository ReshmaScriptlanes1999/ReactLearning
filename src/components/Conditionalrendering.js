import { useState } from "react"

function Conditionalrendering(){
    const [login, setLogin] = useState(3)
    return(
        <div>
            {
                login==1? <h1>user1 login</h1>
                :login==2?<h1>user2</h1>
                :<h1>logout</h1>
            }
        </div>
    )
}
export default Conditionalrendering