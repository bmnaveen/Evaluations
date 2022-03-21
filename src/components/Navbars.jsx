import{Link} from "react-router-dom"

export const Navbars=()=>{
    
    return(
        <nav className="nav" >
            <Link to="/">Home</Link>
            <Link to="/heaven">Heaven</Link>
        </nav>
    )
}