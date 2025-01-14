import "./Home.css";
import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import img1 from './img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'
import img7 from './images/img7.jpg'
import img8 from './images/img8.jpg'
import img10 from './images/img10.jpg'
import img11 from './images/img11.jpg'
import img12 from './images/img12.jpg'
import acit1 from './images/acit1.png'
import acit2 from './images/acit2.png'
import acit3 from './images/acit3.png'
import acit4 from './images/acit4.png'
import acit5 from './images/acit5.png'
import acit6 from './images/acit6.png'
import Product from "./Product";
import Totop from "./Totop";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Tech from "./Tech.jsx";
import { getProducts } from "../../utils/utils.js";
import {Helmet} from "react-helmet";



export default function Home({ recData }){
  

  //fix/reorgainse this 
  useEffect(()=> {
    var slider = document.getElementById("slider");
    var sliderWidth = (slider.offsetWidth - ( + 10));
    // console.log(slider.offsetWidth)
    var slideList = document.getElementById("slideWrap");
    let count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

  
    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });
  
    const prevSlide = function() {
      if (count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
        // console.log(slider.offsetWidth)
      }
      else if (count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
        // console.log(slider.offsetWidth)
      }
    };
  
  
    const nextSlide = function() {
      if (count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if (count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
    };
  
    next.addEventListener("click", function(){
      nextSlide();
    });
    prev.addEventListener("click", function(){
      prevSlide();
    });
    
  
    setInterval(function(){
      nextSlide();
    }, 5000)  
    
  },[]);

  const currentSlide =(n)=> {
    //check access to sliderwidth variable
    console.log(sliderWidth)
  }

    return (
      <div className="home-conatainer">

      <Helmet>
        <title>Greengadget: Buy, sell and even repair tech</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

        <div className="Hero" style={{display: "none"}}> 
          <div>
            <ol>
              <li>sign up</li>
              <li>join the family</li>
              <li>Enjoy our services enjoy</li>
            </ol>
          </div>  
        </div>
        
        <div className="img-slider-container">
          <div id="slider">
            <ul id="slideWrap">
              <li><img src={img1} alt="placeholder img1"></img></li>
              <li><img loading="lazy" src={img2} alt="placeholder img2"></img></li>
              <li><img loading="lazy" src={img3} alt="placeholder img3"></img></li>
              <li><img loading="lazy" src={img4} alt="placeholder img4"></img></li>
              <li><img loading="lazy" src={img5} alt="placeholder img5"></img></li>
              <li><img loading="lazy" src={img6} alt="placeholder img6"></img></li>
              <li><img loading="lazy" src={img7} alt="placeholder img7"></img></li>
            </ul>
            <a id="prev" >&#10094;</a>
            <a id="next" >&#10095;</a>
            <div className="dot-container">
              <span className="dot" onClick={currentSlide}><span className="inner-dot" ></span></span>
              <span className="dot"><span className="inner-dot" ></span></span>
              <span className="dot"><span className="inner-dot" ></span></span>
              <span className="dot"><span className="inner-dot" ></span></span>
              <span className="dot"><span className="inner-dot" ></span></span>
              <span className="dot"><span className="inner-dot" ></span></span>
              <span className="dot"><span className="inner-dot" ></span></span>
            </div>
          </div>
        </div>

      
      <div className="rec-prod">
        <div className="rd-scroller">
          <ul>
            <li>
              <span>Recomended</span>
            </li>
            <li>
              <span>Recomended</span>
            </li>
            <li>
              <span>Recomended</span>
            </li>
            <li>
              <span>Recomended</span>
            </li>
            <li>
              <span>Recomended</span>
            </li>
            <li>
              <span>Recomended</span>
            </li>
            <li>
              <span>Recomended</span>
            </li>
            <li>
              <span>Recomended</span>
            </li>
            <li>
              <span>Recomended</span>
            </li>
            <li>
              <span>Recomended</span>
            </li>
          </ul>
          <ul aria-hidden="true">
            <li>
              <span>Recomended</span>
            </li>
            <li>
              <span>Recomended</span>
            </li>
            <li>
              <span>Recomended</span>
            </li>
            <li>
              <span>Recomended</span>
            </li>
            <li>
              <span>Recomended</span>
            </li>
            <li>
              <span>Recomended</span>
            </li>
            <li>
              <span>Recomended</span>
            </li>
            <li>
              <span>Recomended</span>
            </li>
            <li>
              <span>Recomended</span>
            </li>
            <li>
              <span>Recomended</span>
            </li>
          </ul>
        </div>
        
        <Product electronicList={recData} />
      </div>

      {/* user benefit  */}

      <div className="card-container">
      {/* <div className="rm-card">
      <img src={img10} alt="where to start" className="card-img"></img>
      <div className="card-info">
        <h3>Welcome</h3>
        <p className="sub-heading">Welcome to our site</p>
        <p></p>
        <a href="">Read More</a>
      </div>
    </div> */}

    <div className="acit-card">
      <Link to={'/FAQ'} aria-label="Familiarise yourself with the site by reading our FAQ.">
        <div className="acit-face acit-face1">
            <img loading="lazy" src={acit1} alt="where to start" className="card-img"></img>
            <FaArrowRightLong size={30}/>
            {/* <div style={{position:"absolute", backgroundImage:"linear-gradient(transparent 75%, #edeece)",
              width:"100%", height:"101%", top:"0"
            }}></div> */}
        </div>
      </Link>
        
        <div className="acit-face acit-face2">
          <div className="acit-content">
            <h3>Welcome</h3>
            <p>Find anwsers to frequently asked questions, 
              and general help navigating the site.
            </p>
            <Link to={'/FAQ'} aria-label="Familiarise yourself with the site by reading our FAQ.">Read More</Link>
          </div>
        </div>
      </div>

    <div className="acit-card">
        <div className="acit-face acit-face1">
            <img loading="lazy" src={acit5} alt="where to start" className="card-img"></img>
            <FaArrowRightLong size={30}/>
        </div>
        <div className="acit-face acit-face2">
          <div className="acit-content">
            <h3>Help</h3>
            <p>Find anwsers to frequently asked questions, 
              and general help navigating the site.
            </p>
            <Link to={'/FAQ'}>Read More</Link>
          </div>
        </div>
      </div>

    <div className="acit-card">
        <div className="acit-face acit-face1">
            <img loading="lazy" src={acit2} alt="where to start" className="card-img"></img>
            <FaArrowRightLong size={30}/>
        </div>
        <div className="acit-face acit-face2">
          <div className="acit-content">
            <h3>How we keep you safe</h3>
            <p>Find anwsers to frequently asked questions, 
              and general help navigating the site.
            </p>
            <Link to={'/FAQ'}>Read More</Link>
          </div>
        </div>
      </div>

      <div className="acit-card">
        <div className="acit-face acit-face1">
            <img loading="lazy" src={acit6} alt="where to start" className="card-img"></img>
            <FaArrowRightLong size={30}/>
        </div>
        <div className="acit-face acit-face2">
          <div className="acit-content">
            <h3>Terms & Conditions</h3>
            <p>Find anwsers to frequently asked questions, 
              and general help navigating the site.
            </p>
            <Link to={'/TC'}>Read More</Link>
          </div>
        </div>
      </div>

    </div>
        {/* become a member reference vercel membership card/r3f */}
    <Tech/>

        <Totop/>
      </div>
    )
}