import React from 'react'
import '../NavBar/NavBar.css';
import logo from '/assets/Logo.png';
import Emp1 from '/assets/emp1.jpg';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='row m-0 nav-container'>
        <div className="col-sm-1 d-none d-md-block">
           <a className="navbar-brand " href="/"> <img src={logo} alt="Logo" height="100" className="d-inline-block align-top me-2"/>
         </a>
        </div>
        <div className="col-sm-11 m-0 p-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">  
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
         </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <Link to={"/"}>
                        <li className="nav-item">
                           <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        </Link>
                    </ul>
                    <div className="dropdown text-end" style={{marginRight:"20px"}}>
                        <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={Emp1} alt="mdo" width="38" height="38" className="rounded-circle" />
                        </a>
                        <ul className="dropdown-menu text-small" style={{}}>
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                     </ul>
                 </div>
                    <form className="d-flex me-2">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                 
            </div>
          
        </div>
    </nav>
    </div>
    </div>
  )
}
