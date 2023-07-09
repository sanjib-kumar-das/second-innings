import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "./images/home-cover.png";
import img2 from "./images/domains/home2.gif";
import img3 from "./images/domains/home3.gif";
import "./styles/home.css";
import { Carousel } from "react-bootstrap";

import "swiper/css/bundle";

import Testimonial from "./Testimonial";

import Domains from "./Domains";
import { Link } from "react-router-dom";
import AIWriter from "react-aiwriter";

export default function Home() {
  toast("Click here to set remainder.");

 
  return (
    <>
      {/* <Link to="/reminder">
        <ToastContainer
          position="top-right"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        
      </Link> */}

      {/* <div className="">
          <img className="graphic rounded img-fluid" src={graphic} alt="" />
        </div> */}
      <div className="main mb-5  ">
        <div className="row d-flex mx-auto  ">
          <div className="text col-sm-5 px-5  ">
            <div className="codebird">
              <h1 className="text-brown main-head">
                <span className="text-warnin" style={{ color: "#15A6BA", fontWeight:"700" }}>
                  SEC
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    ON
                  </span>                 
                  D
                
                <span className="text-warnin" style={{ color: "#15A6BA" }}>
                  {" "}I
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    NN
                  </span>                 
                  I
                </span>
                <span className="text-warn" style={{ color: "#EEE" }}>
                    N
                  </span>
                  GS
                  </span>
              </h1>
            </div>
            <div className="sub-text my-5 fs-5 text-white">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia dolorum voluptate, laudantium accusantium deserunt eos
                explicabo, ipsa exercitationem asperiores voluptatum illum quasi
                id, sequi impedit nobis. Doloremque corporis veritatis neque?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </span>
            </div>
            {/* <Link to="https://discord.gg/m6AMnhBXwn" className="">
              <button type="button" className="btn btn-info text-white btn-sm mb-5">
                Contact Us
              </button>
            </Link> */}
            <a href="https://discord.gg/m6AMnhBXwn" target="blank">
              <button
                type="button"
                className="btn btn-warning text-dark btn-sm mb-5"
                style={{ backgroundColor: "#90CED3" }}
              >
                
                <i class="fa-sharp fa-solid fa-paper-plane fa-fade text-light"></i>{" "}
                <span className="text-light"> &nbsp; Contact Us</span>
              </button>
            </a>
          </div>

          <span className="col-sm-7 homeCar  ">
            <div class="container">
              <div class="image-container">
                <img src={img} alt="Background" className="home-pic h-5 img-fluid" style={{height:"37rem"}} />
              
              </div>
            </div>
          </span>
        </div>
      </div>
      {/* DOMAINS */}

      <Domains></Domains>
      {/* TESTIMONIAL */}
      <Testimonial></Testimonial>
      
    </>
  );
}
