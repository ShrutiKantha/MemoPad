import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Navbar.css'
import logo from '../components/assests/iconlogo.png'

const Navbar = () => {

  let location = useLocation();
  let navigate=useNavigate();

  const handleLogout =()=>{
    localStorage.removeItem('token');
    navigate("/login");
  }

  // useEffect(() => {
  //   // Google Analytics
  //   console.log(location.pathname);
  // }, [location]);

  return (
        <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        <img 
            src={logo} 
            alt="Logo" 
            className="navbar-logo" 
          />
          MemoPad
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem('token')?<form className="d-flex" role="search">
          <Link className="buttonclass" to="/login" role="button">Login</Link>
          <Link className="buttonclass" to="/signup" role="button">Signup  </Link>
          </form>: <button onClick={handleLogout} className="buttonclass">Logout</button>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;  