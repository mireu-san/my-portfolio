import React from "react";
import logoMireu from "../components/logo.png";
// React fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">

            <a className="navbar-brand mr-auto" href="#"><img className="logo" src={logoMireu} alt="logo mireu chronicle"/></a>
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
                    <Link to="/About">
                        <li className="nav-item">About Me</li>
                    </Link>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Thoughts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacts</a>
                    </li>

                </ul>
                </div>
            </div>
            </nav>
                )
            }

export default Navbar;
