import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";
import "./styles/darkmode.css";
import navpic from "./images/logo.jfif";
// import { useState } from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-gradient bg-white rounded ">
        <div className="container-fluid">
          <img className="mx-1" src={navpic} alt="" height="35" width="35" />
          <Link className="navbar-brand col-md-1 mx-1 text-center" to="/">
            <p className="navMainTxt mt-3 fw-bold fs-3">
              WOOF
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
            
  
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ">
      <li class="nav-item">
      <Link className="nav-link" to="/">
                  <p className="text-center fw-bold">Home</p>
                </Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="about">
                  <p className="text-center fw-bold">About Us</p>
                </Link>
        </li>
        <li className="nav-item ">
                <Link className="nav-link" to="feed">
                  <p className="text-center fw-bold">Feed</p>
                </Link>
              </li>
              
              <div class="dropdown  mt-2">
  <li class="dropbtn">Services</li>
  <div class="dropdown-content">
    <ul>
    <li className="nav-item">
                <Link className="nav-link" to="food">
                  <p className="text-center fw-bold">Food & Accessories</p>
                </Link>
              </li>
  <li className="nav-item">
                <Link className="nav-link" to="training">
                  <p className="text-center fw-bold">Training & Grooming</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="kennel">
                  <p className="text-center fw-bold">Pet Shops & Kennels</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="clinic">
                  <p className="text-center fw-bold">Clinics & Hospitals</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="medicine">
                  <p className="text-center fw-bold">Medicine</p>
                </Link>
              </li>
    
    </ul>
  </div>
</div>

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
