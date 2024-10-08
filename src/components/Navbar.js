import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar({title, homePage, aboutText, mode, toggleMode}) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{homePage}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{aboutText}</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
<div className={`mx-3   form-check form-switch text-${mode==='light'? 'dark' : 'light'}`}>
<input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
<label className=" form-check-label" htmlFor="flexSwitchCheckDefault">{mode==='light'? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
</div>
    </div>
  </div>
</nav>

    </>
  )
}

Navbar.propTypes = {title:propTypes.string.isRequired, aboutText: propTypes.string}

// Navbar.defaultProps = {
//     title: 'Default Title',
//     links: []
//   };
