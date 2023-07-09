import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles/domains.css";

import feed from "./images/domains/demo.gif";
import food from "./images/domains/food.png";
import train from "./images/domains/train.png";
import petshop from "./images/domains/petshop.png";
import vet from "./images/domains/vet.png";
import med from "./images/domains/med.png";
import hospital from "./images/domains/hospital.png";




// import required modules
import { Pagination } from "swiper";

export default function Domains() {
  return (
    <>
      <div className="container domain">
        <h2 className="heading my-4">
          <div className="codebird head-txt">
            <h1 className="text-brown text-warning head mb-5" >
              S<span className="text-warn" style={{color:"#ff8a8a"}}>e</span>rv<span className="text-warning">i</span>c<span className="text-warn" style={{color:"#ff8a8a"}}>e</span>s W<span className="text-warn" style={{color:"#ff8a8a"}}>e</span> Pr<span className="text-warning">o</span>v<span className="text-warning">i</span>d<span className="text-warn" style={{color:"#ff8a8a"}}>e</span>
            </h1>
          </div>
        </h2>
        {/* <Swiper 
          slidesPerView={3}
          spaceBetween={10}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
          }}
          modules={[Pagination]}
          className="mySwiper containe "
          
        >
          <SwiperSlide style={{backgroundColor:"#fff7cb"}}>
            <div className="card shadow">
              <div className="row g-0">
                <div className="col-md-4">
                  <div className="col-2 mx-auto d-flex align-items-center "><img src={food} alt="" className="h-50" />
            <br /><span>Food & Accessories</span></div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fs-2 mt-2 fs-2">Feed Post</h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{backgroundColor:"#fff7cb"}}>
            <div className="card mb-5 shadow">
              <div className="row g-0">
                <div className="col-md-4">
                  <span className="position-absolute top-0 start-100 translate-middle mt-3 badge rounded-pill bg-red">
                    #2
                  </span>
                  <img src={food} alt="" className="h-50" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fs-2">Food & Accessories</h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{backgroundColor:"#fff7cb"}}>
            <div className="card mb-3 shadow">
              <div className="row g-0">
                <div className="col-md-4">
                  <span className="position-absolute top-0 start-100 translate-middle mt-3 badge rounded-pill bg-red">
                    #3
                  </span>
                  <img
                    className="lead-pic d-flex mx-auto"
                    src={train}
                    alt=""
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fs-2">Training & Grooming</h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{backgroundColor:"#fff7cb"}}>
            <div className="card mb-5 shadow">
              <div className="row g-0">
                <div className="col-md-4">
                  <span className="position-absolute top-0 start-100 translate-middle mt-3 badge rounded-pill bg-red">
                    #4
                  </span>
                  <img className="lead-pic d-flex mx-auto" src={petshop} alt="" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fs-2">Petshops & Kennels</h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{backgroundColor:"#fff7cb"}}>
            <div className="card mb-3 shadow">
              <div className="row g-0">
                <div className="col-md-4">
                  <span className="position-absolute top-0 start-100 translate-middle mt-3 badge rounded-pill bg-red">
                    #5
                  </span>
                  <img className="lead-pic d-flex mx-auto" src={vet} alt="" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fs-2 mt-2 fs-2">Clinics & Hospitals</h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{backgroundColor:"#fff7cb"}}>
            <div className="card mb-3 shadow">
              <div className="row g-0">
                <div className="col-md-4">
                  <span className="position-absolute top-0 start-100 translate-middle mt-3 badge rounded-pill bg-red">
                    #6
                  </span>
                  <img className="lead-pic d-flex mx-auto" src={med} alt="" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fs-2">Medicines</h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
         
        </Swiper> */}

        {/* Domains */}

        <div className="container text-center ">
          <div className="row justify-content-center">
            
            <div class="col text-center my-auto">
              <div className=""><img src={food} alt="" className=" img-fluid" style={{width:"70%"}} /></div>
              <div className="fs-4 my-3"><span><a href="/food">Food & Accessories </a></span></div>             
            </div>
            
            <div class="col  text-center my-auto">
              <div className=""><img src={train} alt="" className=" img-fluid" style={{width:"70%"}} /></div>
              <div className="fs-4 my-3"><span> <a href="/training" >Training & Grooming</a></span></div> 
            </div>

            <div class="col  text-center my-auto">
              <div className=""><img src={petshop} alt="" className=" img-fluid" style={{width:"70%"}} /></div>
              <div className="fs-4 my-3"><span> <a href="/kennel" >Petshops & Kennels</a></span></div> 
            </div>
            
          </div>


          <div className="row justify-content-center mt-5">
            
            <div class="col text-center my-auto">
              <div className=""><img src={vet} alt="" className=" img-fluid" style={{width:"70%"}} /></div>
              <div className="fs-4 my-3"><span> <a href="/clinic" >Veternary Doctor</a></span></div>             
            </div>
            
            <div class="col  text-center my-auto">
              <div className=""><img src={med} alt="" className=" img-fluid" style={{width:"70%"}} /></div>
              <div className="fs-4 my-3"><span> <a href="/medicine" >Medicines</a></span></div> 
            </div>

            <div class="col  text-center my-auto">
              <div className=""><img src={hospital} alt="" className=" img-fluid" style={{width:"70%"}} /></div>
              <div className="fs-4 my-3"><span> <a href="/clinic" >Clinics & Hospitals</a></span></div> 
            </div>
            
          </div>
          </div>
        {/* Domains */}
      </div>
    </>
  );
}
