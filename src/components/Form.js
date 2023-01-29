import { useState } from "react"


function Form(){
   const [name, setName] = useState("")
   const [city, setCity] = useState(false)
   const [privacy, setPrivacy] = useState("")
    function getData(e){
        e.preventDefault()
        console.log(name, city, privacy);
    }
    return(
        <div>
            <form onSubmit={getData}>
                <input type="text" onChange={(e)=>setName(e.target.value)} />
                <select onChange={(e)=>setCity(e.target.value)}>
                    <option>pune</option>
                    <option>mumbai</option>
                </select>
                <input type="checkbox" onChange={(e)=> setPrivacy(e.target.checked)}/>
                <button>submit</button>
            </form>
        </div>
    )
}
export default Form