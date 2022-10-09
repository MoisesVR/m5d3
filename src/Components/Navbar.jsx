import { NavLink } from "react-router-dom";
import "../style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");
    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container-fluid">
                <img className="imgNav" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
                <div className="nav-item">
                    <span className="navlink">
                        <NavLink className={setActiveClass} end to="/m5d3" >
                            Home
                        </NavLink>
                    </span>
                    <span className="navlink">
                        <NavLink className={setActiveClass} to="/pokemones">
                            Pokemones
                        </NavLink>
                    </span>
                </div>
            </div>
        </nav>
    );
}