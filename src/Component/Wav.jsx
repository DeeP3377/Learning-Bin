import React from 'react';
import img1 from '../Image/edge1.png';
import ambassador from "../Image/ambassador.ico";
import content_writer from "../Image/content writer.ico";
//import Developer from "../Image/Developer.ico";
import Graphics from "../Image/Graphic designer.ico";
import Teacher from "../Image/Teacher.ico";
import "../Screen/AboutUs.css"
import "./Wav.css"
import { Link } from 'react-router-dom';
import Footer2 from '../Component/Footer2';
 const Wav = ()=>{
 	return(
 			<>
       <div style={{marginTop:'80px'}}></div>
       <div className="row m-auto">
      <div className="col-lg-7  col-sm-12 aboutus-data">
        <div className="container m-lg-5  m-md-3 mt-sm-5">
        <h1 className="aboutus-heading  m-lg-5  m-md-3 m-sm-0">Work As Volunteer</h1>
        <p className="aboutus-para1 m-lg-5  m-md-3 m-sm-0">Our goal requires volunteers who are keen to bring about a change in society by offering quality content for the learners in the form of video lectures and written content.<br/></p>
        <p className="aboutus-para2 m-lg-5  m-md-3 m-sm-0" >It could be any person with adequate knowledge to teach and looks out for exactly how learners would get the best possible content.</p>
        <Link to="/workasvolunteer/volunteer" ><a href="/#" className="btn btn-10 p-2 m-lg-5  m-md-3 m-sm-0" style={{ fontSize: '16px', textAlign:'center' , width:'200px' , borderRadius:'10px' }}><strong>Our Volunteer</strong></a></Link>
      </div>
      </div>
      <div className="col-lg-5  col-sm-12 m-auto">
          <img className="whatwedo-img" src={img1} alt="" />
      </div>
    </div>
    

      <div className="container">
        <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 mt-5" >
          <div className="wav-logo m-auto">
              <p className="text-center"><img className="wav-logo-img" src={ambassador} alt="" ></img></p>
              <h2 className="wav-img-text text-center">Ambassador</h2>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 mt-5" >
          <div className="wav-logo m-auto">
              <p className="text-center"><img className="wav-logo-img" src={Teacher} alt="" ></img></p>
              <h2 className=" wav-img-text text-center">Teacher</h2>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 mt-5" >
          <div className="wav-logo m-auto">
              <img className="wav-logo-img" src={Graphics} alt=""></img>
              <h2 className="wav-img-text text-center">Graphics Designer</h2>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 mt-5">
          <div className="wav-logo m-auto">
              <img className="wav-logo-img" src={content_writer} alt=""></img>
              <h2 className="wav-img-text text-center">Content Writer</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="container mt-5">
        <div className="row mt-5 wav-detail">
            <div className="col">
              <h1 className="text-center wav-heading-1 mt-4">Ambassdor</h1>
              <p className=" text-center wav-para1">
                As we are a new and budding platform, we want creative ambassadors who can spread the word about our platform and Noble cause and help us reach new heights of progress.
              </p><br/>
            </div>
        </div>
        <div className="row mt-5 wav-detail">
            <div className="col">
              <h1 className="text-center wav-heading-1 mt-4">Teacher</h1>
              <p className=" text-center wav-para1">
                We want passionate and skilled teachers who are ready to volunteer us and spread education among one and all.
              </p><br/>
            </div>
        </div>
        <div className="row mt-5 wav-detail">
            <div className="col">
              <h1 className="text-center wav-heading-1">Graphics Designer</h1>
              <p className=" text-center wav-para1">
                  If there is anyone out there who can make interesting animated illustrations for making studying more fun for our students and create attractive banners for promotional purposes, we are looking for you !
              </p><br/>
            </div>
        </div>
        <div className="row mt-5 mb-5 wav-detail">
            <div className="col">
              <h1 className="text-center wav-heading-1">Content Writer</h1>
              <p className=" text-center wav-para1">
                We want writers who can write, authentic, creative, and plag-free subject content for us.
              </p><br/>
            </div>
        </div>
      </div>
       
       {/* <div style={{marginTop:'50px'}}></div>
			 	<section id="head1">
      <div className="head1-wrapper container">
        <div className="head1-text">
          <p className="small" style={{fontSize : '48px'}}>Work As Volunteer</p>
          <h2>Our goal requires volunteers who are keen to bring about a change in society by offering quality content for the learners in the form of video lectures and written content.</h2>

          <p style={{fontSize : '16px'}}>
          <br/>
           It could be any person with adequate knowledge to teach and looks out for exactly how learners would get the best possible content. 
            <br/>
            <br/>
            <Link to="/workasvolunteer/volunteer" ><a href="/#" className="btn btn-10 p-2 " style={{ fontSize: '16px', textAlign:'center' , width:'200px' , borderRadius:'10px' }}><strong>Our Volunteer</strong></a></Link>

          </p>
        </div>
        <div className="head1-img">
          <img className="wavimg" src={img1} alt="" />
        </div>
      </div>
    </section>
    
          
        <div class="row mb-5">
          <div class="column2">
            <div class="card2">
            <img src={ambassador} alt="" style={{width:'130px' , height:"130px"}}></img>
            
            <h3><a href="#Ambassdor" style={{textDecoration:'none'}}>Ambassdor</a></h3>
            </div>
          </div>

        
  
        <div class="column2">
          <div class="card2">
            <img src={Teacher} alt="" style={{width:'130px' , height:"130px"}}></img>
          
          <h3> <a href="#Teacher" style={{textDecoration:'none'}}>Teacher</a></h3>
          </div>
        </div>
        
        <div class="column2">
          <div class="card2">
            <img src={Graphics} alt="" style={{width:'130px' , height:"130px"}}></img>
        
          <h3> <a href="#GraphicsDesigner" style={{textDecoration:'none'}}>Graphics Designer</a></h3>
          </div>
        </div>
        <div class="column2">
          <div class="card2">
            <img src={content_writer} alt="" style={{width:'130px' , height:"130px"}}></img>
        
            <h3> <a href="#ContentWriter" style={{textDecoration:'none'}}>Content Writer </a> </h3>
            
          </div>
        </div>
    </div>
      <section className="container">
        <div className=""  style={{backgroundColor:'white'}}>
          <h1 className="text-center mt-5" style={{fontSize:'36px'}}>Ambassdor</h1><br/>
          <p className=" text-center " style={{fontSize:'20px' , backgroundColor:'white'}}>
          As we are a new and budding platform, we want creative ambassadors who can spread the word about our platform and Noble cause and help us reach new heights of progress.
            <br/><br/>
          </p>
        </div>
      </section>
      <section className="container">
        <div className=""  style={{ backgroundColor:'white'}}>
          <h1 className="text-center mt-5" style={{fontSize:'36px'}}>Teacher</h1><br/>
          <p className=" text-center " style={{fontSize:'20px' , backgroundColor:'white'}}>
          We want passionate and skilled teachers who are ready to volunteer us and spread education among one and all.
            <br/><br/>
          </p>
        </div>
      </section>
      <section className="container">
        <div className=""  style={{backgroundColor:'white'}}>
          <h1 className="text-center mt-5" style={{fontSize:'36px'}}>Graphics Designer</h1><br/>
          <p className=" text-center " style={{fontSize:'20px' , backgroundColor:'white'}}>
          If there is anyone out there who can make interesting animated illustrations for making studying more fun for our students and create attractive banners for promotional purposes, we are looking for you!
            <br/><br/>
          </p>
        </div>
      </section>
      <section className="container">
        <div className="mb-5"  style={{backgroundColor:'white'}}>
          <h1 className="text-center mt-5" style={{fontSize:'36px'}}>Content Writer</h1><br/>
          <p className=" text-center " style={{fontSize:'20px' , backgroundColor:'white' , marginBottom :'100px'}}>
            <div>We want writers who can write, authentic, creative, and plag-free subject content for us.
            <br/>
            </div>
          </p>
        </div>
      </section>


      */}

      <Footer2/>
			</>
 		);
 };
 export default Wav;