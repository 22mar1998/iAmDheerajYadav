import React from 'react';
import { NavLink } from 'react-router-dom';
import hero from "./images/hero.png"

function Hero() {
  return (
    <div className="hero">
        <div className="text">
            <p className='larger-text'> HELLO</p>
            <br />
            <p className='hero-para'>I'm <span className='name'>Dheeraj Yadav</span> I design and develope web applications.</p>
            <p className='hero-para'>I‘m <span className='name'>fullstack web developer & UI designer</span> with a passion for great design and user experiences. </p>
            <p className='hero-para'>Currently i‘m focused on building digital products at <a href="http://www.aadishesh.com/#" target="_blank">aadishesh software</a>....</p>

        </div>
        <div className="hero-image">
            {/* <img src="https://o.remove.bg/downloads/98f54a0c-fa8d-4934-92d6-2456ba1ee491/istockphoto-1400570540-170667a-removebg-preview.png" alt="" /> */}
            <img src={hero} alt="" />

        </div>
        <NavLink className="hero-btn" to="/About" >start</NavLink>

        <div className="bubble one"></div>
        <div className="bubble two"></div>
        <div className="bubble three"></div>
        <div className="bubble four"></div>

       <br />
    </div>
  )
}

export default Hero;