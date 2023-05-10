import React from 'react'
import logo from "../images/title.svg"

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg " style={{backgroundColor:"black"}}>
  <div className="container-fluid">
  <a className="navbar-brand" href="/">
        <img src={logo} height="35px" alt="Logo"/>
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02" >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"style={{color:"White"}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login"style={{color:"White"}}>Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href="#footer"style={{color:"White"}}>Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header