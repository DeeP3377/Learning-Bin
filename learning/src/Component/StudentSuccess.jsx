import React from "react";
import CR11 from '../Image/CR1.jpg';
import CR22 from '../Image/CR2.jpg';
import CR33 from '../Image/CR3.jpg';
const StudentSuccess =()=>{
    return(
      <>
      <hr style={{marginTop:'50px'}}></hr>
      <h1>Student Succes Story</h1>
      <p style={{fontSize:'18px'}}>India's best e-learning platform.</p>
      <div className="row1">
        <div className="column11" >
          <div className="content1">
            <img src={CR11} alt="" style={{width:"100%"}}></img>
            <h3 className="heading3">Biology</h3>
            <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
          </div>
        </div>
        <div className="column11">
          <div className="content1">
          <img src={CR22} alt="" style={{width:"100%"}}></img>
            <h3 className="heading3">Mathematics</h3>
            <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
          </div>
        </div>
        <div className="column11">
          <div className="content1">
          <img src={CR33} alt="" style={{width:"100%"}}></img>
            <h3 className="heading3">Chemistry</h3>
            <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
          </div>
        </div>
        
        </div>
      
        </>
    )
}
export default StudentSuccess;