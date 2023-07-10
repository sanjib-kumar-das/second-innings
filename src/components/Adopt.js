import React from 'react'

function Adopt() {
  return (
   <>
   <form className='container mt-5'>
    
   <h2 className="heading my-2">
          <div className="codebird head-txt">
          <h1 className="text-brown main-head service-head">
                <span className="text-warnin" style={{ color: "#15A6BA", fontWeight:"700" }}>
                  AD
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    OP
                  </span>                 
                  T
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    {" "}P
                  </span> 
                <span className="text-warnin" style={{ color: "#15A6BA" }}>
                  AR
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    E
                  </span>                 
                  NT
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    S
                  </span>  
                </span>
                </span>
              </h1>
          </div>
        </h2>

<div className="row mb-5 text-light fs-4">Do you think your residence could benefit from staying connected through our "Adopt Parent" program? If so, then register your care home today. <br /> Fill out the following form, and a member of your family will be in touch should be in touch for the complete process.</div>

  <div class="row mb-4">
    <div class="col">
      <div class="form-inline">
        <input type="text" id="form6Example1" class="form-control" placeholder='First Name' />
        <label class="form-label" for="form6Example1"></label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form6Example2" class="form-control" placeholder='Last Name' />
        <label class="form-label" for="form6Example2"></label>
      </div>
    </div>
  </div>
  <div class="form-outline mb-4">
    <input type="text" id="form6Example3" class="form-control" placeholder='Address line 1' />
    <label class="form-label" for="form6Example3"></label>
  </div>
  <div class="form-outline mb-4">
    <input type="text" id="form6Example4" class="form-control" placeholder='Address line 2' />
    <label class="form-label" for="form6Example4"></label>
  </div>
  <div class="form-outline mb-4">
    <input type="text" id="form6Example4" class="form-control" placeholder='City/Town' />
    <label class="form-label" for="form6Example4"></label>
  </div>
  <div class="form-outline mb-4">
    <input type="Number" id="form6Example4" class="form-control" placeholder='Postcode' />
    <label class="form-label" for="form6Example4"></label>
  </div>
  <div class="form-outline mb-4">
    <input type="email" id="form6Example5" class="form-control" placeholder='Email' />
    <label class="form-label" for="form6Example5"></label>
  </div>
  <div class="form-outline mb-4">
    <input type="number" id="form6Example6" class="form-control" placeholder='Phone' />
    <label class="form-label" for="form6Example6"></label>
  </div>
  <div class="form-outline mb-4">
    <input type="number" id="form6Example6" class="form-control" placeholder='Annual Income' />
    <label class="form-label" for="form6Example6"></label>
  </div>
  <div class="form-outline mb-4">
    <textarea class="form-control" id="form6Example7" rows="4" placeholder='Additional Information' ></textarea>
    <label class="form-label" for="form6Example7"></label>
  </div>

  <button type="submit" class="btn btn-primary btn-block mb-4">Submit</button>

  
</form>
<a className='text-danger fs-2 mx-5' href='https://drive.google.com/file/d/1ejjqhgwyAp07gjrBXGrvLzekPc25DCAj/view?usp=sharing'>*** Rules & Regulations!!! ***</a>
   </>
  )
}

export default Adopt