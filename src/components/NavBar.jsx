import React, { Component } from 'react';
import ".././App.css"

class NavBar extends Component {

    render() { 
        return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{padding:"25px" ,color:"#9d9d9d"  , position: "relative" , left:"0px" , top:"0px"}}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
    <span className="navbar-toggler-icon"></span>
    </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link disabled" href="/" style={{ fontSize:'20px',color:"white" , fontFamily :"caption" }}>GolangAcademy <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/compiler"  style={{color:"#9d9d9d"}}>
        <i className="fa fa-code" aria-hidden="true"></i>Compiler</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/problems"  style={{color:"#9d9d9d"}}><i className="fa fa-book" aria-hidden="true"></i>
Problems</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="/about-us"  style={{color:"#9d9d9d"}}>About Us</a>
      </li>

      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
      </li> */}
    </ul>
  </div>
</nav>
          );
    }
}
 
export default NavBar;