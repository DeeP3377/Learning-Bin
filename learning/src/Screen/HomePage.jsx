import React from "react";
import './HomePage.css';
import CR1 from "../Image/bio.png";
import CR2 from '../Image/maths.png';
import CR3 from '../Image/chemistry.png';
import CR4 from '../Image/physics.png';
import Home from "../Component/Home";
import StudentSuccess from "../Component/StudentSuccess";
const HomePage=()=>{
    return(
    <>
<div className="container" >
      <Home/>
</div>

<div className="container">


<hr></hr>

<h1>Study Material</h1>
<p style={{fontSize:'18px'}}>India's best e-learning platform.</p>
<div className="row1">
  <div className="column1">
    <div className="content1">
      <img src={CR1} alt="" style={{width:"90%"}}></img>
      <h3 className="heading3">Biology</h3>
      
    </div>
  </div>
  <div className="column1">
    <div className="content1">
    <img src={CR2} alt="" style={{width:"90%"}}></img>
      <h3 className="heading3">Mathematics</h3>
    </div>
  </div>
  <div className="column1">
    <div className="content1">
    <img src={CR3} alt="" style={{width:"90%"}}></img>
      <h3 className="heading3">Chemistry</h3>
    </div>
  </div>
  <div className="column1">
    <div className="content1">
    <img src={CR4} alt="" style={{width:"90%"}}></img>
      <h3 className="heading3">Physics</h3>
    </div>
  </div>
  </div>
 



  <StudentSuccess/>
      



  
 
  </div>

    </>
    );
}
export default HomePage;