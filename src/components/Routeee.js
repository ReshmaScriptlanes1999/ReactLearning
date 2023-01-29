import { BrowserRouter, Link, Route } from "react-router-dom"
function Routeee(){
    return(
        <div>
            <BrowserRouter>
            <Link to="/home">home</Link>
            <Link to="/about">about</Link>
            <Route path="/home"><Home /></Route>
            <Route path="/about"><About /></Route>
            </BrowserRouter>
        </div>
    )


function Home(){
    return(
        <div>
            <div>Home</div>
            <h3>this is home page</h3>
        </div>
    )
}

function About(){
    return(
        <div>
            <div>About</div>
            <h3>this is about page</h3>
        </div>
    )
}
}
export default Routeee