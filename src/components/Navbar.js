import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";
import "./styles/darkmode.css";
import navpic from "./images/logo.png";
// import { useState } from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-gradient bg-light rounded">
        <div className="container-fluid">
          <img className="mx-1" src={navpic} alt="" height="60" width="60" />
          <Link className="navbar-brand col-md-1 mx-1 text-center" to="/">
            <p className="navMainTxt mt-3 fw-bold fs-3">
              SECOND INNINGS
              {/* <p style={{ fontSize: "12px" }}>The Coding Club of UIT, BU</p> */}
            </p>
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

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            
  
  <div class="container-fluid  ">
    <div class="collapse navbar-collapse  " id="navbarNavDropdown">
      <ul class="navbar-nav  fs-5">
      <li class="nav-item  mt-1">
      <Link className="nav-link" to="/">
                  <p className="text-center fw-bold">Home</p>
                </Link>
        </li>
        <li className="nav-item">
                <Link className="nav-link" to="/gethome">
                  <p className="text-center fw-bold">Find a home</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/adopt">
                  <p className="text-center fw-bold">Adopt parents</p>
                </Link>
              </li>
      
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  <p className="text-center fw-bold"> Gallery</p>
                </Link>
              </li>             
        
 


        

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <p className="text-center fw-bold">Contact</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">
                  <p className="text-center fw-bold">FAQs</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signin">
                  <p className="text-center fw-bold">Login</p>
                </Link>
              </li>
              
      </ul>
    </div>
  </div>
  
</nav>
            {/* <ul className="navbar-nav nav justify-content-left mr-auto mx-2 d-flex justify-content-center"> */}
            
          </div>
        </div>
      </nav>
    </>
  );
}
