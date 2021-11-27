import React from 'react';
import img1 from '../Image/Cheerful_woman.png';
//import Doubts from '../Component/Doubts';
//import ContactUs from "../Component/ContactUs"
import Footer2 from '../Component/Footer2';
import "./AboutUs.css"
 const AboutUs = ()=>{
 	return(
 			<>
       <div style={{marginTop:'80px'}}></div>
			 	{/*<section id="head1">
      <div className="head1-wrapper container">
        <div className="head1-text">
          <p className="small mt-5">What We Do</p>
          <h2>Learning Bin is solidified on the belief that everyone deserves to get access to learn and chase their dreams.</h2><br/>
          <p style={{fontSize : '16px'}}>
          Learning Bin was meant to be an enterprise but, as we dug deep, we came to realize the need for free quality content in the field of education. That is when we, a team of three young minds;<b> Amrita Kumari, Akshat Kashyap, Nikhi Batra (Founders)</b> decided this is going to be an unrestricted platform for those who need education, the only fee we are willing to take is the achievements of our students! We are providing video lectures, written content for subjects Physics, Chemistry, math, and biology at the moment, and as time passes, we are planning to bring many more subjects' scopes on our platform.<br/><br/> As a team comprising of youth, we know what the generation of today needs and wants. We want to help them learn in a way where they don't only learn to pass in exams but to become capable of imagining, creating, and growing.
          </p>
        </div>
        <div className="about-img mt-5"> 
          <img className="whatwedoimg mt-5" src={img1} alt="" />
        </div>
      </div>
    </section>*/}
    <div className="row m-auto">
      <div className="col-lg-7  col-sm-12 aboutus-data">
        <div className="container m-lg-5  m-md-3 mt-sm-5">
        <h1 className="aboutus-heading  m-lg-5  m-md-3 m-sm-0">What We Do</h1>
        <p className="aboutus-para1 m-lg-5  m-md-3 m-sm-0">Learning Bin is solidified on the belief that everyone deserves to get access to learn and chase their dreams.<br/></p>
        <p className="aboutus-para2 m-lg-5  m-md-3 m-sm-0" >Learning Bin was meant to be an enterprise but, as we dug deep, we came to realize the need for free quality content in the field of education. That is when we, a team of three young minds;<b> Amrita Kumari, Akshat Kashyap, Nikhi Batra (Founders)</b> decided this is going to be an unrestricted platform for those who need education, the only fee we are willing to take is the achievements of our students! We are providing video lectures, written content for subjects Physics, Chemistry, math, and biology at the moment, and as time passes, we are planning to bring many more subjects' scopes on our platform.<br/><br/> As a team comprising of youth, we know what the generation of today needs and wants. We want to help them learn in a way where they don't only learn to pass in exams but to become capable of imagining, creating, and growing.</p>
      </div>
      </div>
      <div className="col-lg-5  col-sm-12 m-auto">
          <img className="whatwedo-img" src={img1} alt="" />
      </div>
    </div>
  
    
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
    <Footer2/>
			</>
 		);
 };
 export default AboutUs;