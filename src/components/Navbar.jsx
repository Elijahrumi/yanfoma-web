import React from "react";
import axios from 'axios';
import { Routes, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Route } from "react-router-dom";
// import  Login  from "./Login";

export default function Navbar(){
  const history = useNavigate();
  
  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      history("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
      <nav
        className="navbar custom-navbar navbar-expand-lg navbar-dark"
        data-spy="affix"
        data-offset-top="20"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="assets/imgs/logo_yanfoma.png" alt="Yanfoma logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <HashLink className="nav-link" smooth to="/#home">
                  Home
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to="/#about">
                  About
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to="/#service">
                  Service
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to="/#portfolio">
                  Portfolio
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to="/#team">
                  Team
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to="/#testimonial">
                  Testimonial
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to="/#blog">
                  Blog
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to="/#contact">
                  Contact
                </HashLink>
              </li>
              {/* <li className="nav-item">
                <Routes>
                <Route path="/login" >
                    <Login/>
                </Route>
                </Routes>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
}