import Props from "./Prop";

function Passfunctionasprops(props){
    return(
        <div>
            <h1>passfunctionas props</h1>
            <button onClick={()=>props.data()}>submit</button>
        </div>
    )
}
export default Passfunctionasprops;