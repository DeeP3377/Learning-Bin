import React from 'react';
import img1 from '../Image/edge1.png';
import ambassador from "../Image/ambassador.ico";
import content_writer from "../Image/content writer.ico";
//import Developer from "../Image/Developer.ico";
import Graphics from "../Image/Graphic designer.ico";
import Teacher from "../Image/Teacher.ico";
import "../Screen/AboutUs.css"
import "./Wav.css"
 const Wav = ()=>{
 	return(
 			<>
			 	<section id="head1">
      <div className="head1-wrapper container">
        <div className="head1-text">
          <p className="small" style={{fontSize : '48px'}}>Work As Volunteer</p>
          <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p style={{fontSize : '22px'}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ab
            eos omnis, nobis dignissimos perferendis et officia architecto,
            fugiat possimus eaque qui ullam excepturi suscipit aliquid optio,
            maiores praesentium soluta alias asperiores saepe commodi
            consequatur? Perferendis est placeat facere aspernatur!
          </p>
        </div>
        <div className="head1-img">
          <img src={img1} alt="" />
        </div>
      </div>
    </section>
    {/**/}
          
        <div class="row2 mb-5">
          <div class="column2">
            <div class="card2">
            <img src={ambassador} alt="" style={{width:'130px' , height:"130px"}}></img>
            {/*<i class="fas fa-user-tie fa-10x"></i>*/}
            <h3><a href="/#" style={{textDecoration:'none'}}>Ambassdor</a></h3>
            </div>
          </div>

        
  
        <div class="column2">
          <div class="card2">
            <img src={Teacher} alt="" style={{width:'130px' , height:"130px"}}></img>
          {/*<i class="fas fa-chalkboard-teacher fa-10x"></i>*/}
          <h3> <a href="/#" style={{textDecoration:'none'}}>Teacher</a></h3>
          </div>
        </div>
        
        <div class="column2">
          <div class="card2">
            <img src={Graphics} alt="" style={{width:'130px' , height:"130px"}}></img>
          {/*<i class="fas fa-edit fa-10x"></i>*/}
          <h3> <a href="/#" style={{textDecoration:'none'}}>Graphics Designer</a></h3>
          </div>
        </div>
        <div class="column2">
          <div class="card2">
            <img src={content_writer} alt="" style={{width:'130px' , height:"130px"}}></img>
          {/*<i class="fas fa-user-edit fa-10x"></i>*/}
            <h3> <a href="/#" style={{textDecoration:'none'}}>Content Writer </a> </h3>
            
          </div>
        </div>
    </div>
      

			</>
 		);
 };
 export default Wav;