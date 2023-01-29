function Apple(){
let name="Reshma"
const apple=(a)=>{
    alert(a);
}
function add(){
    alert("added");
}
    return(
        <div>
            <h1>my name is Reshma</h1>
            {name}
            <button onClick={add}>add</button>
            <button onClick={()=> apple("bol bhai")}>Click me</button>
            <button onClick={()=>alert("what happen")}>up</button>
        </div>
    )
}
export default Apple;