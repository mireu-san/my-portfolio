import React from "react";
import logoMireu from "../components/logo.png";
// React fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";



const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">

                <NavLink className="navbar-brand mr-auto" to="/">
                    <img className="logo" src={logoMireu} alt="logoMireuChronicle"/>
                </NavLink>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <FontAwesomeIcon icon={faBars} style={{ color: "#2ff1f2" }}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/about">About me</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/thoughts">Thoughts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;