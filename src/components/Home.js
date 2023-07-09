import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img1 from "./images/domains/home1.gif";
import img2 from "./images/domains/home2.gif";
import img3 from "./images/domains/home3.gif";
import "./styles/home.css";
import { Carousel } from 'react-bootstrap';

import "swiper/css/bundle";

import Testimonial from "./Testimonial";
import Domains from "./Domains";
import { Link } from "react-router-dom";
import AIWriter from "react-aiwriter";

export default function Home() {
  toast("Click here to set remainder.");

  const images = [
    {
      id: 1,
      src: img1,
      alt: 'Image 1',
    },
    {
      id: 2,
      src: img2,
      alt: 'Image 2',
    },
    {
      id: 3,
      src: img3,
      alt: 'Image 3',
    },
   
    
  ];
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
      <div className="main mb-5 ">
        <div className="row d-flex mx-auto mt-5 ">
          <div className="text col-sm-5 px-5 ">
            <div className="codebird">
              <h1 className="text-brown main-head" >
                <span className="text-warning" style={{color:"#ff8a8a"}}>
                W
                <span className="text-warn" style={{color:"#ff8a8a"}}>O</span>
                <span className="text-warn" style={{color:"#ff8a8a"}}>O</span>
                F
                </span>
                
              </h1>
            </div>
            <div className="sub-text my-5 fs-5">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia dolorum voluptate, laudantium accusantium deserunt eos
                explicabo, ipsa exercitationem asperiores voluptatum illum quasi
                id, sequi impedit nobis. Doloremque corporis veritatis neque?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia dolorum voluptate, laudantium accusantium deserunt eos
                explicabo, ipsa maleonia asperiores voluptatum illum quasi
                id, sequi impedit nobis. Doloremque corporis veritatis neque?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia dolorum voluptate, laudantium accusantium deserunt eos
                explicabo, ipsa exercitationem asperiores voluptatum illum quasi
                id, sequi impedit nobis. Doloremque corporis veritatis neque?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia dolorum voluptate, laudantium accusantium deserunt eos
                explicabo, ipsa maleonia asperiores voluptatum illum quasi
                id, sequi impedit nobis. Doloremque corporis veritatis neque?
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
                style={{backgroundColor:"#ff8a8a"}}
              >
                <i className="fab fa-discord fa-flip text-light"></i> <span  className="text-light"> &nbsp; Join With Us</span> 
              </button>
            </a>
          </div>
         
            {/* <img
              className="home-anim rounded img-fluid mx-auto d-flex"
              src={graphic}
              alt=""
            /> */}
            <span className="col-sm-7 homeCar">
            <Carousel className=" shadow container mx-auto">
  {images.map(image => (
    <Carousel.Item key={image.id}>
      <img
        className="d-block rounded w-100"
        src={image.src}
        alt={image.alt}
      />
    </Carousel.Item>
  ))}
</Carousel>
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
