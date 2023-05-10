import React from 'react'
import logo from "../images/title.svg"

const HeaderTrainer = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg " style={{backgroundColor:"black"}}>
<div className="container-fluid">
<a className="navbar-brand" href="/">
    <img src={logo} height="35px" alt="Logo"  />
  </a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarTogglerDemo02" >
  <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
  <li className="nav-item">
      <a className="nav-link" href="/learnerDashboard"style={{color:"White"}}>Learner Insights</a>
    </li>
    <li className="nav-item">
      <a className="nav-link"  href="/addLearner"style={{color:"White"}}>Enroll Learner</a>
    </li>
    <li className="nav-item">
      <a className="nav-link"  href="/addBatch"style={{color:"White"}}>Batch Enroll</a>
    </li>
    <li className="nav-item">
      <a className="nav-link"  href="/login"style={{color:"White"}}>Logout</a>
    </li>
  </ul>
</div>
</div>
</nav>
</div>
  )
}

export default HeaderTrainer