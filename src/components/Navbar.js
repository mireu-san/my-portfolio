import React from 'react';
import logoMireu from "../components/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">

            <a className="navbar-brand mr-auto" href="#"><img className="logo" src={logoMireu} alt="logo mireu chronicle"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">About me</a>
                    </li>
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
