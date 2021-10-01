import React from 'react';
import img1 from '../Image/edge1.png';
import Doubts from '../Component/Doubts';
import "./AboutUs.css"
 const AboutUs = ()=>{
 	return(
 			<>
			 	<section id="head1">
      <div className="head1-wrapper container">
        <div className="head1-text">
          <p className="small" style={{fontSize : '48px'}}>About Us</p>
          <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p style={{fontSize : '22px'}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ab
            eos omnis, nobis dignissimos perferendis et officia architecto,
            fugiat possimus eaque qui ullam excepturi suscipit aliquid optio,
            maiores praesentium soluta alias asperiores saepe commodi
            consequatur? Perferendis est placeat facere aspernatur!
          </p>
        </div>
        <div className="about-img"> 
          <img src={img1} alt="" />
        </div>
      </div>
    </section>

    <Doubts/>
    
    {/*
    <section id="contact">
      <div className="contact-container container">
        <div className="contact-img">
          <img src={img1} alt="" />
        </div>

        <div className="form-container m-5">
          <h2>Contact Us</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="E-Mail" />
          <textarea
            cols="30"
            rows="6"
            placeholder="Type Your Message"
          ></textarea>
          <a href="/#" className="btn btn-primary">Submit</a>
        </div>
      </div>
    </section>*/ }
			</>
 		);
 };
 export default AboutUs;