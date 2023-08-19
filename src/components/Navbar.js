import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === "dark" ? "light" : "dark"}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
                    </div>
                </div>
            </div >
        </nav >
    )
}

// Now if we want to set different properties of our props like whether our prop is string,object,number etc. or set default values to props then we must import Proptypes from "prop-types" then apply below functions on our element.

Navbar.propTypes = {
    title: PropTypes.string, // now we set it to string means if we pass number or any other value than string it will throw an error.
    //aboutText: PropTypes.string.isRequired  // writing isRequired means this field is necessary otherwise throw an error.
};

// If want to set default values to our props means if add nothing to our props this will show instead by default.
Navbar.defaultProps = {
    title: "Title Here",
    //aboutText: "About Text Here"
};
