import React from "react";
import { Link } from "react-router-dom";
import img1 from "../Image/maths.png"
import img2 from "../Image/chemistry.png"
import img3 from "../Image/physics.png"
import img4 from "../Image/bio.png"
import Footer2 from "./Footer2";
import "./StudyMaterial.css";
const StudyMaterials = () => {
    return (
        <>
                <div style={{marginTop:'80px'}}></div>
                <div className="container mt-5">
                    <h1 className="mt-5" style={{textAlign:'center'}}>Subject Material</h1>
                    <div className="row" style={{marginBottom:'25px'}}>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" >
                        <div class="card-top" style={{ width: '85%', marginTop: '25px', padding: '10px' , display:'-ms-inline-flexbox' }}>
                            <img class="card-img-top" src={img1} alt="Cardcap"/>
                                <div class="card-body">
                                    <h3 class="card-title t1 mt-2"><strong>Mathematics</strong></h3>
                                    <h5 class="card-title mt-2"><strong>Class : 11</strong></h5>
                                    <Link to="/studymaterial/math11" className="btn btn-10 p-2 m-4" style={{ fontSize: '16px', textAlign:'center' , marginLeft:'10%', width:'80%' , borderRadius:'10px' }}><strong>Explore</strong></Link>
                                </div>
                        </div>
                        </div> 
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="card-top" style={{ width: '85%', marginTop: '25px', padding: '10px' , display:'-ms-inline-flexbox' }}>
                            <img class="card-img-top" src={img2} alt="Cardcap"/>
                                <div class="card-body">
                                    <h3 class="card-title t1 mt-2"><strong>Chemistry</strong></h3>
                                    <h5 class="card-title mt-2"><strong>Class : 11 </strong></h5>
                                    <Link to="/studymaterial/sidebar" className="btn btn-10 p-2 m-4" style={{ fontSize: '16px', textAlign:'center' , marginLeft:'10%', width:'80%' , borderRadius:'10px' }}><strong>Explore</strong></Link>
                                </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="card-top" style={{ width: '85%', marginTop: '25px', padding: '10px' , display:'-ms-inline-flexbox' }}>
                            <img class="card-img-top" src={img3} alt="Cardcap"/>
                                <div class="card-body">
                                    <h3 class="card-title t1 mt-2"><strong>Physics</strong></h3>
                                    <h5 class="card-title mt-2"><strong>Class : 11</strong></h5>
                                    <Link to="/studymaterial/sidebar" className="btn btn-10 p-2 m-4" style={{ fontSize: '16px', textAlign:'center' , marginLeft:'10%', width:'80%' , borderRadius:'10px' }}><strong>Explore</strong></Link>
                                </div>
                        </div>
                        </div>   
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="card-top" style={{ width: '85%', marginTop: '25px', padding: '10px' , display:'-ms-inline-flexbox' }}>
                            <img class="card-img-top" src={img4} alt="Cardcap"/>
                                <div class="card-body">
                                    <h3 class="card-title t1 mt-2"><strong>Biology</strong></h3>
                                    <h5 class="card-title mt-2"><strong>Class : 11</strong></h5>
                                    <Link to="/studymaterial/sidebar" className="btn btn-10 p-2 m-4" style={{ fontSize: '16px', textAlign:'center' , marginLeft:'10%', width:'80%' , borderRadius:'10px' }}><strong>Explore</strong></Link>
                                </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="card-top" style={{ width: '85%', marginTop: '25px', padding: '10px' , display:'-ms-inline-flexbox' }}>
                            <img class="card-img-top" src={img1} alt="Cardcap"/>
                                <div class="card-body">
                                    <h3 class="card-title t1 mt-2"><strong>Mathematics</strong></h3>
                                    <h5 class="card-title mt-2"><strong>Class : 12</strong></h5>
                                    <Link to="/studymaterial/sidebar" className="btn btn-10 p-2 m-4" style={{ fontSize: '16px', textAlign:'center' , marginLeft:'10%', width:'80%' , borderRadius:'10px' }}><strong>Explore</strong></Link>
                                </div>
                        </div>
                        </div> 
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="card-top" style={{ width: '85%', marginTop: '25px', padding: '10px' , display:'-ms-inline-flexbox' }}>
                            <img class="card-img-top" src={img2} alt="Cardcap"/>
                                <div class="card-body">
                                    <h3 class="card-title t1 mt-2"><strong>Chemistry</strong></h3>
                                    <h5 class="card-title mt-2"><strong>Class : 12 </strong></h5>
                                    <Link to="/studymaterial/sidebar" className="btn btn-10 p-2 m-4" style={{ fontSize: '16px', textAlign:'center' , marginLeft:'10%', width:'80%' , borderRadius:'10px' }}><strong>Explore</strong></Link>
                                </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="card-top" style={{ width: '85%', marginTop: '25px', padding: '10px' , display:'-ms-inline-flexbox' }}>
                            <img class="card-img-top" src={img3} alt="Cardcap"/>
                                <div class="card-body">
                                    <h3 class="card-title t1 mt-2"><strong>Physics</strong></h3>
                                    <h5 class="card-title mt-2"><strong>Class : 12</strong></h5>
                                    <Link to="/studymaterial/sidebar" className="btn btn-10 p-2 m-4" style={{ fontSize: '16px', textAlign:'center' , marginLeft:'10%', width:'80%' , borderRadius:'10px' }}><strong>Explore</strong></Link>
                                </div>
                        </div>
                        </div>   
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="card-top" style={{ width: '85%', marginTop: '25px', padding: '10px' , display:'-ms-inline-flexbox' }}>
                            <img class="card-img-top" src={img4} alt="Cardcap"/>
                                <div class="card-body">
                                    <h3 class="card-title t1 mt-2"><strong>Biology</strong></h3>
                                    <h5 class="card-title mt-2"><strong>Class : 12</strong></h5>
                                    <Link to="/studymaterial/sidebar" className="btn btn-10 p-2 m-4" style={{ fontSize: '16px', textAlign:'center' , marginLeft:'10%', width:'80%' , borderRadius:'10px' }}><strong>Explore</strong></Link>
                                </div>
                        </div>
                        </div>       
                    </div>
                </div>
                <Footer2/>
        </>
    )
};
export default StudyMaterials;