import React from 'react'
import title from "./img/Group 38.png"
import "./css/navcss.css"

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div className="container col-sm-12">
        <a className="navbar-brand img-fluid" href="#"><img src={title} width="139" alt=""/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mr-5 p-9">
            <li className="nav-item ">
              <a className="nav-link"  href="#">Talent Finder</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Reinsure</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">For Recruites</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">For Employers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Our Team</a>
            </li>
            <button type="button" className="btn btn-outline-primary mx-2 rounded-pill btn-custom-purple "  >Sign in</button>
            <button type="button" className="btn btn-outline-primary mx-2 rounded-pill btn-custom-purple ">Sign up</button>
          </ul>
        </div>
      </div>
    </nav>


    </>
  )
}

export default Navbar
