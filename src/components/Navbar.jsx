 import { NavLink , Link } from "react-router";
export default function Navbar(){
    return(
        <nav>
            <NavLink to="/"
            className={({isActive}) => isActive ? 'active' : ''}>
                HOME
                
            </NavLink>
            <NavLink to="/About"
            className={({isActive}) => isActive ? 'active' : ''}>
                About
                </NavLink>
                <NavLink to="/Services"
            className={({isActive}) => isActive ? 'active' : ''}>
                HOME
                
            </NavLink>
        </nav>
    )
 }