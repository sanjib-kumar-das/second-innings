import React from 'react'
import "./styles/gethome.css"
function Gethome() {
  return (
    <div>
        <h2 className="heading my-4">
          <div className="codebird head-txt">
          <h1 className="text-brown main-head service-head">
                <span className="text-warnin" style={{ color: "#15A6BA", fontWeight:"700" }}>
                  F
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    I
                  </span>                 
                  ND
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    {" "}A{" "}
                  </span> 
                <span className="text-warnin" style={{ color: "#15A6BA" }}>
                  {" "}H
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    O
                  </span>                 
                  M
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    E
                  </span>  
                </span>
                </span>
              </h1>
          </div>
        </h2>
      <div class="get-home-container">
        <div class="get-home-card" style={{color:"#009688"}}>
            <div class="imgBx">
                <img src="logo-removebg-preview.png" alt=""/>
            </div>
            <div class="content">
                <h2>Home 1</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel est nobis, nostrum vitae eligendi esse excepturi ipsa sunt aliquid?</p>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <span>4/5</span>
                    
                </div>
    
                <a href="*">Read More</a>
            </div>
        </div>
        <div class="get-home-card" style={{color:"#ff3e7f"}}>
            <div class="imgBx">
                <img src="logo-removebg-preview.png" alt=""/>
            </div>
            <div class="content">
                <h2>Home 2</h2> 
                               
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel est nobis, nostrum vitae eligendi esse excepturi ipsa sunt aliquid?</p>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <span>4/5</span>
                    
                </div>
    
                <a href="*">Read More</a>
            </div>
        </div>
        <div class="get-home-card" style={{color:"#03a9f4"}}>
            <div class="imgBx">
                <img src="logo-removebg-preview.png" alt=""/>
            </div>
            <div class="content">
                <h2>Home 3</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel est nobis, nostrum vitae eligendi esse excepturi ipsa sunt aliquid?</p>
                
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <span>4/5</span>
                    
                </div>
    
                <a href="*">Read More</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Gethome
