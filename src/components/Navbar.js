import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-warning" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
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
