import React from "react";
import "./Home.css";
//import Carousels from "./Carousels";
import img from "../Image/edge3.png"
const Home = ()=>{
    return(
        <>
           <section id="head1" className="head11">
      <div className="head1-wrapper container">
        <div className="head1-text">
          <p className="small" style={{fontSize : '48px' , color:'white'}}>Best Way To Learn</p><br/>
          <h2>Education is one thing no one can take away from you.</h2>
          <p style={{fontSize : '20px'}}>
          <br/>
          <br/>
           <a className="btn btn-primary p-2" href="/#" style={{fontSize:'20px'}}>Study Material</a>
          </p>
        </div>
        <div className="about-img"> 
          <img src={img} alt="" />
        </div>
      </div>
    </section>

        </>
    )
} 
export default Home;