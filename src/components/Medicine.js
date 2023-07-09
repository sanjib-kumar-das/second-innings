import React from 'react'
import img1 from "./images/domains/med1.gif";
import img2 from "./images/domains/med2.gif";
import img3 from "./images/domains/med3.gif";
import { Carousel } from 'react-bootstrap';
import navpic from "./images/domains/demo.gif";

function Medicine() {
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
    {/* HEADING TEXT */}

    <div className="head-txt">
          <h1 className="text-brown text-warning head mt-5 mb-4" >
              M<span className="text-warn" style={{color:"#ff8a8a"}}>e</span>d<span className="text-warn" style={{color:"#ff8a8a"}}>i</span>c<span className="text-warn" style={{color:"#ff8a8a"}}>i</span>n<span className="text-warn" style={{color:"#ff8a8a"}}>e</span>s
              
            </h1>
          </div>

{/* CAROUSEL */}
<div className="container">
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
</Carousel></div>
    <div >
    <div className="accordion-item mt-5">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse2"
              aria-expanded="true"
              aria-controls="collapse2"
            >
              <span className='fs-2'>
                <strong className='text-center' style={{color:"#925000"}}>&nbsp; Medicines</strong>
              </span>
            </button>
          </h2>
          <div
            id="collapse2"
            className="accordion-collapse collapse show mb-5 mt-5"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="row mt-2 mb-2">
              <div className="col-md-4 d-flex justify-content-around">
                <div
                  className="card shadow"
                  style={{ width: "18rem", height: "23rem" }}
                >
                  <img
                    className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                    style={{ width: "8rem" }}
                    src={navpic}
                    alt="Baga Beach"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                        PetVet Medicines
                      <span  className="badge  " style={{color:"#F4D65E"}}> 100% Original Medicines </span>
                    </h5>
                    <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                    <hr className="dropdown-divider" />
                    <h6>Ratings: ⭐⭐⭐⭐</h6>

                    <p>
                      <button
                        type="button"
                         className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop11"
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                  {/* btn */}
                </div>
              </div>

              {/* 2 */}

              <div className="col-md-4 d-flex justify-content-around">
                <div
                  className="card shadow"
                  style={{ width: "18rem", height: "23rem" }}
                >
                  <img
                    className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                    src={navpic}
                    alt="Madgaon"
                    style={{ width: "8rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                        PetVet Medicines
                      <span  className="badge  " style={{color:"#F4D65E"}}> 100% Original Medicines </span>
                    </h5>
                    <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                    <hr className="dropdown-divider" />
                    <h6>Ratings: ⭐⭐⭐⭐</h6>

                    <p>
                      <button
                        type="button"
                         className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop11"
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                  {/* btn */}
                </div>
              </div>

              {/* 3 */}

              <div className="col-md-4 d-flex justify-content-around">
                <div
                  className="card shadow"
                  style={{ width: "18rem", height: "23rem" }}
                >
                  <img
                    className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                    src={navpic}
                    style={{ width: "8rem" }}
                    height={"100%"}
                    alt="Panaji"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                        PetVet Medicines
                      <span  className="badge  " style={{color:"#F4D65E"}}> 100% Original Medicines </span>
                    </h5>
                    <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                    <hr className="dropdown-divider" />
                    <h6>Ratings: ⭐⭐⭐⭐</h6>

                    <p>
                      <button
                        type="button"
                         className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop11"
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                  {/* btn */}
                </div>
              </div>
            </div>
            <div className="row mt-2 mb-2">
              <div className="col-md-4 d-flex justify-content-around">
                <div
                  className="card shadow"
                  style={{ width: "18rem", height: "23rem" }}
                >
                  <img
                    className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                    src={navpic}
                    style={{ width: "8rem" }}
                    height={"100%"}
                    alt="Panaji"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                        PetVet Medicines
                      <span  className="badge  " style={{color:"#F4D65E"}}> 100% Original Medicines </span>
                    </h5>
                    <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                    <hr className="dropdown-divider" />
                    <h6>Ratings: ⭐⭐⭐⭐</h6>

                    <p>
                      <button
                        type="button"
                         className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop11"
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                  {/* btn */}
                </div>
              </div>

              <div className="col-md-4 d-flex justify-content-around">
                <div
                  className="card shadow"
                  style={{ width: "18rem", height: "23rem" }}
                >
                  <img
                    className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                    src={navpic}
                    style={{ width: "8rem" }}
                    height={"100%"}
                    alt="Panaji"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                        PetVet Medicines
                      <span  className="badge  " style={{color:"#F4D65E"}}> 100% Original Medicines </span>
                    </h5>
                    <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                    <hr className="dropdown-divider" />
                    <h6>Ratings: ⭐⭐⭐⭐</h6>

                    <p>
                      <button
                        type="button"
                         className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop11"
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                  {/* btn */}
                </div>
              </div>

              <div className="col-md-4 d-flex justify-content-around">
                <div
                  className="card shadow"
                  style={{ width: "18rem", height: "23rem" }}
                >
                  <img
                    className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                    src={navpic}
                    style={{ width: "8rem" }}
                    height={"100%"}
                    alt="Panaji"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                        PetVet Medicines
                      <span  className="badge  " style={{color:"#F4D65E"}}> 100% Original Medicines </span>
                    </h5>
                    <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                    <hr className="dropdown-divider" />
                    <h6>Ratings: ⭐⭐⭐⭐</h6>

                    <p>
                      <button
                        type="button"
                         className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop11"
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                  {/* btn */}
                </div>
              </div>
            </div>
            <div className="row mt-2 mb-2">
              <div className="col-md-4 d-flex justify-content-around">
                <div
                  className="card shadow"
                  style={{ width: "18rem", height: "23rem" }}
                >
                  <img
                    className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                    src={navpic}
                    style={{ width: "8rem" }}
                    height={"100%"}
                    alt="Panaji"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                        PetVet Medicines
                      <span  className="badge  " style={{color:"#F4D65E"}}> 100% Original Medicines </span>
                    </h5>
                    <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                    <hr className="dropdown-divider" />
                    <h6>Ratings: ⭐⭐⭐⭐</h6>

                    <p>
                      <button
                        type="button"
                         className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop11"
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                  {/* btn */}
                </div>
              </div>

              <div className="col-md-4 d-flex justify-content-around">
                <div
                  className="card shadow"
                  style={{ width: "18rem", height: "23rem" }}
                >
                  <img
                    className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                    src={navpic}
                    style={{ width: "8rem" }}
                    height={"100%"}
                    alt="Panaji"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                        PetVet Medicines
                      <span  className="badge  " style={{color:"#F4D65E"}}> 100% Original Medicines </span>
                    </h5>
                    <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                    <hr className="dropdown-divider" />
                    <h6>Ratings: ⭐⭐⭐⭐</h6>

                    <p>
                      <button
                        type="button"
                         className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop11"
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                  {/* btn */}
                </div>
              </div>

              <div className="col-md-4 d-flex justify-content-around">
                <div
                  className="card shadow"
                  style={{ width: "18rem", height: "23rem" }}
                >
                  <img
                    className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                    src={navpic}
                    style={{ width: "8rem" }}
                    height={"100%"}
                    alt="Panaji"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                        PetVet Medicines
                      <span  className="badge  " style={{color:"#F4D65E"}}> 100% Original Medicines </span>
                    </h5>
                    <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                    <hr className="dropdown-divider" />
                    <h6>Ratings: ⭐⭐⭐⭐</h6>

                    <p>
                      <button
                        type="button"
                         className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop11"
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                  {/* btn */}
                </div>
              </div>
            </div>

            <div className="row mt-2 mb-2">
              <div className="col-md-4 d-flex justify-content-around">
                <div
                  className="card shadow"
                  style={{ width: "18rem", height: "23rem" }}
                >
                  <img
                    className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                    src={navpic}
                    style={{ width: "8rem" }}
                    height={"100%"}
                    alt="Panaji"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                        PetVet Medicines
                      <span  className="badge  " style={{color:"#F4D65E"}}> 100% Original Medicines </span>
                    </h5>
                    <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                    <hr className="dropdown-divider" />
                    <h6>Ratings: ⭐⭐⭐⭐</h6>

                    <p>
                      <button
                        type="button"
                         className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop11"
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                  {/* btn */}
                </div>
              </div>

              <div className="col-md-4 d-flex justify-content-around">
                <div
                  className="card shadow"
                  style={{ width: "18rem", height: "23rem" }}
                >
                  <img
                    className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                    src={navpic}
                    style={{ width: "8rem" }}
                    height={"100%"}
                    alt="Panaji"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                        PetVet Medicines
                      <span  className="badge  " style={{color:"#F4D65E"}}> 100% Original Medicines </span>
                    </h5>
                    <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                    <hr className="dropdown-divider" />
                    <h6>Ratings: ⭐⭐⭐⭐</h6>

                    <p>
                      <button
                        type="button"
                         className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop11"
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                  {/* btn */}
                </div>
              </div>

              <div className="col-md-4 d-flex justify-content-around">
                <div
                  className="card shadow"
                  style={{ width: "18rem", height: "23rem" }}
                >
                  <img
                    className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                    src={navpic}
                    style={{ width: "8rem" }}
                    height={"100%"}
                    alt="Panaji"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                        PetVet Medicines
                      <span  className="badge  " style={{color:"#F4D65E"}}> 100% Original Medicines </span>
                    </h5>
                    <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                    <hr className="dropdown-divider" />
                    <h6>Ratings: ⭐⭐⭐⭐</h6>

                    <p>
                      <button
                        type="button"
                         className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop11"
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                  {/* btn */}
                </div>
              </div>
            </div>
            <div className="row mt-2 mb-2">
              <div className="col-md-4 d-flex justify-content-around">
                <div
                  className="card shadow"
                  style={{ width: "18rem", height: "23rem" }}
                >
                  <img
                    className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                    src={navpic}
                    style={{ width: "8rem" }}
                    height={"100%"}
                    alt="Panaji"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                        PetVet Medicines
                      <span  className="badge  " style={{color:"#F4D65E"}}> 100% Original Medicines </span>
                    </h5>
                    <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                    <hr className="dropdown-divider" />
                    <h6>Ratings: ⭐⭐⭐⭐</h6>

                    <p>
                      <button
                        type="button"
                         className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop11"
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                  {/* btn */}
                </div>
              </div>

              <div className="col-md-4 d-flex justify-content-around">
                <div
                  className="card shadow"
                  style={{ width: "18rem", height: "23rem" }}
                >
                  <img
                    className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                    src={navpic}
                    style={{ width: "8rem" }}
                    height={"100%"}
                    alt="Panaji"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                        PetVet Medicines
                      <span  className="badge  " style={{color:"#F4D65E"}}> 100% Original Medicines </span>
                    </h5>
                    <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                    <hr className="dropdown-divider" />
                    <h6>Ratings: ⭐⭐⭐⭐</h6>

                    <p>
                      <button
                        type="button"
                         className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop11"
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                  {/* btn */}
                </div>
              </div>

              <div className="col-md-4 d-flex justify-content-around">
                <div
                  className="card shadow"
                  style={{ width: "18rem", height: "23rem" }}
                >
                  <img
                    className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                    src={navpic}
                    style={{ width: "8rem" }}
                    height={"100%"}
                    alt="Panaji"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                        PetVet Medicines
                      <span  className="badge  " style={{color:"#F4D65E"}}> 100% Original Medicines </span>
                    </h5>
                    <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                    <hr className="dropdown-divider" />
                    <h6>Ratings: ⭐⭐⭐⭐</h6>

                    <p>
                      <button
                        type="button"
                         className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop11"
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                  {/* btn */}
                </div>
              </div>
            </div>
            <div className="row mt-2 mb-2">
              <div className="col-md-4 d-flex justify-content-around">
                <div
                  className="card shadow"
                  style={{ width: "18rem", height: "23rem" }}
                >
                  <img
                    className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                    src={navpic}
                    style={{ width: "8rem" }}
                    height={"100%"}
                    alt="Panaji"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                        PetVet Medicines
                      <span  className="badge  " style={{color:"#F4D65E"}}> 100% Original Medicines </span>
                    </h5>
                    <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                    <hr className="dropdown-divider" />
                    <h6>Ratings: ⭐⭐⭐⭐</h6>

                    <p>
                      <button
                        type="button"
                         className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop11"
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                  {/* btn */}
                </div>
              </div>

              <div className="col-md-4 d-flex justify-content-around">
                <div
                  className="card shadow"
                  style={{ width: "18rem", height: "23rem" }}
                >
                  <img
                    className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                    src={navpic}
                    style={{ width: "8rem" }}
                    height={"100%"}
                    alt="Panaji"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                        PetVet Medicines
                      <span  className="badge  " style={{color:"#F4D65E"}}> 100% Original Medicines </span>
                    </h5>
                    <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                    <hr className="dropdown-divider" />
                    <h6>Ratings: ⭐⭐⭐⭐</h6>

                    <p>
                      <button
                        type="button"
                         className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop11"
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                  {/* btn */}
                </div>
              </div>

              <div className="col-md-4 d-flex justify-content-around">
                <div
                  className="card shadow"
                  style={{ width: "18rem", height: "23rem" }}
                >
                  <img
                    className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                    src={navpic}
                    style={{ width: "8rem" }}
                    height={"100%"}
                    alt="Panaji"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                        PetVet Medicines
                      <span  className="badge  " style={{color:"#F4D65E"}}> 100% Original Medicines </span>
                    </h5>
                    <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                    <hr className="dropdown-divider" />
                    <h6>Ratings: ⭐⭐⭐⭐</h6>

                    <p>
                      <button
                        type="button"
                         className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop11"
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                  {/* btn */}
                </div>
              </div>
            </div>
            <div className="row mt-2 mb-2">
              <div className="col-md-4 d-flex justify-content-around">
                <div
                  className="card shadow"
                  style={{ width: "18rem", height: "23rem" }}
                >
                  <img
                    className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                    src={navpic}
                    style={{ width: "8rem" }}
                    height={"100%"}
                    alt="Panaji"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                        PetVet Medicines
                      <span  className="badge  " style={{color:"#F4D65E"}}> 100% Original Medicines </span>
                    </h5>
                    <p className="card-text text-truncate">220A/2 A.J.C Bose Road, Kolata - 23</p>
                    <hr className="dropdown-divider" />
                    <h6>Ratings: ⭐⭐⭐⭐</h6>

                    <p>
                      <button
                        type="button"
                         className="btn   mt-2 shadow" style={{backgroundColor:"#925000", color:"white"}}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop11"
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                  {/* btn */}
                </div>
              </div>

             
            </div>
          </div>
        </div>
  </div>
  </>
  )
}

export default Medicine
