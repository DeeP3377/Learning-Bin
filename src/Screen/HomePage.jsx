import React from "react";
import './HomePage.css';
import Footer2 from '../Component/Footer2';
import CR1 from "../Image/bio.png";
import CR2 from '../Image/maths.png';
import CR3 from '../Image/chemistry.png';
import CR4 from '../Image/physics.png';
import Home from "../Component/Home";
const HomePage=()=>{
    return(
    <>
    <Home/>
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
 
  <hr style={{marginTop:'50px'}}></hr>
        <br/>
        <div className="lbwork">
        <br/>
          <h1 className="text-center" style={{color: 'white'}}>Why learning Bin works</h1>
          <br/><br/>
          <div className="row" style={{color: 'white'}}>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="m-4">
              <div className="row"><i className="fab fa-accusoft fa-10x text-center"></i></div>
                <h1 className="text-center">Personalized learning</h1>
                <p style={{color: 'white' , textAlign:'center'}}>Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="m-4">
                <div className="row"><i className="fab fa-accusoft fa-10x text-center"></i></div>
                <h1 className="text-center">Trusted content</h1>
                <p style={{color: 'white', textAlign:'center'}}>Created by experts, Khan Academy’s library of trusted, standards-aligned practice and lessons covers math K-12 through early college, grammar, science, history, SAT®, and more. It’s all free for learners and teachers.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="m-4">
              <div className="row"><i className="fab fa-accusoft fa-10x text-center"></i></div>
                <h1 className="text-center">Trusted content</h1>
                <p style={{color: 'white', textAlign:'center'}}>Created by experts, Khan Academy’s library of trusted, standards-aligned practice and lessons covers math K-12 through early college, grammar, science, history, SAT®, and more. It’s all free for learners and teachers.</p>
              </div>
            </div>   
          </div>
          <br/>
        </div>
        <br/>
        <br/>
  </div>
      <Footer2/>
    </>
    );
}
export default HomePage;