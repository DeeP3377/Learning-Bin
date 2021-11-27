import React , {useState} from "react";
import { Collapse } from "react-bootstrap";
import DoubtsDetails from "../DoubtsDetail";
import { LinkContainer } from 'react-router-bootstrap';
import "./Doubts.css";
import Footer2 from '../Component/Footer2';
const MyDoubts =()=>{
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [doubtsitem] = useState(DoubtsDetails);
    return(
        <>  
            <div style={{marginTop:'80px'}}></div>
            <div className="container"> 
            
              
                <div className="row doubts">

                {
                /*
                    <div className="col-lg-4 col-md-4 col-sm-12 doubts1">
                    <form>
                        <label style={{fontSize:'18px' , marginLeft:'5%'}}>Ask Doubts</label>
                        <textarea className="p-2" id="" name="" rows="10" placeholder="Enter Your Doubts  Question" style={{width:'90%' , marginLeft:'5%' , marginRight:'5%' , fontSize:'14px' , boxShadow :'0 0 3px' , border:"none"}} />
                        <label style={{fontSize:'12px' , marginLeft:'10%'}}>Or Upload</label>
                        <input type="file" className="p-2" style={{fontSize:'14px' , marginLeft:'5%'}} ></input> 
                        <input type="submit" value="Send Doubts" className="p-2" style={{fontSize:"14px" , width:'100px', marginLeft:'5%', marginTop:'15px' ,backgroundColor:'#007bff' , border:'none' , color:'white'}}></input>
                        <br/><br/>
                      </form>  
                    </div>
                */
                }
                
                    <div className="col-lg-7 col-md-7 col-sm-12 m-auto"  id="doubts2" >

                        <div className="row m-4" style={{backgroundColor :'white'}}>
                            <div className="d-flex">
                                <LinkContainer to="/doubts/mydoubts"><div><a href="#doub" className="btn btn-success m-2 p-2 doubtslink" style={{color:'#fff'}} >My doubts</a></div></LinkContainer>
                                <LinkContainer to="./doubts"><div className="m-auto"><a href="#doubts11" className="btn m-2 p-2 doubtslink" >All doubts</a></div></LinkContainer> 
                                <LinkContainer to="/doubts/askdoubts"><div className=""><a href="#askdoubts" className="btn m-2 p-2 doubtslink">Ask doubts</a></div></LinkContainer> 
                            </div>
                        </div>
                        {
                            doubtsitem.map((elem)=>{
                                const { Name , Question , QuestionImage , Answer } = elem;
                                return(
                                    <div className="doubtsbody m-4" style={{backgroundColor :'white'}} >
                                    <div className="row m-4">
                                    <div className="col text-left d-flex mt-2"><i className="fas fa-user-circle fa-3x mt-2"/><h6 className="mt-3"><span style={{fontSize:'16px', marginLeft:'5px'}}>{Name}</span></h6></div>
                                    <div className="col text-right mt-2"><i className="fas fa-share-alt fa-2x m-4" /></div>
                            </div>
                            <div className="row m-4" style={{minHeight:'75px'}}>
                                {(Question.length > 0) ? <p style={{fontSize:'18px'}}>{Question}</p> : <img src={QuestionImage} alt="" className="quesimg" />}
                               
                            </div>
                            <hr/>
                            <div className="row m-3" style={{backgroundColor :'whitesmokes' , height:'50px'}}>
                                {/*<div className="d-flex">
                                    <div className="col"><a  href="#upvote" style={{ textDecoration: 'none' , display:'flex'}}><i className="far fa-heart  m-2 doubtsbtn1 "></i> <h4 className="doubtsbtn1 mt-2" style={{display:'flex'}}>Vote Up</h4></a></div>
                                    <div className="col m-auto"><a href="#open" style={{textDecoration: 'none' , display:'flex'}} onClick={() => setOpen1(!open1)} aria-controls="example-collapse-text" aria-expanded={open1} ><i className="far fa-comment-alt doubtsbtn1 m-2"></i><h4 className="doubtsbtn1 mt-2">Answers</h4></a></div>
                                    <div className="col text-right "><a href="#upvote" className="btn btn-primary" style={{textDecoration: 'none'}} onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}><h4 className="doubtsbtn11 mt-2">Answer Now</h4></a></div>
                                </div>*/}
                                <div className="d-flex mb-5" >
                                    <div>
                                        <a href="#doubts" className="btn m-2 p-2 doubtslink1" style={{color:'#000' , backgroundColor:'transparent'}} >
                                        <i className="far fa-heart  m-2 doubtsbtn1 "></i>Vote Up
                                        </a>
                                    </div>
                                    <div className="m-auto">
                                        <a href="#doubts" className=" m-2 p-2 doubtslink1" style={{color:'#000' , backgroundColor:'transparent', textDecoration:'none'}} onClick={() => setOpen1(!open1)} aria-controls="example-collapse-text" aria-expanded={open1}>
                                        <i className="far fa-comment-alt doubtsbtn1 m-2"></i>Answer
                                        </a>
                                    </div>
                                    <div className="">
                                        <a href="#doubts" className="btn btn-primary m-2 p-2 doubtslink1" style={{color:'#fff'}} onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open} >
                                            My Answer
                                        </a>
                                    </div>  
                                </div>
                            </div>
                            <Collapse in={open}>
                                <div id="example-collapse-text">
                                <form>
                                    <div className="row m-4">
                                            <textarea className="p-2" rows="6" style={{ fontSize:'12px' , boxShadow :'0 0 3px' , border:"none" , width:'100%'}} />
                                    </div>
                                    <div className="row m-4 text-right">
                                        <p className="text-right d-flex "><input type="file" className="p-2" style={{fontSize:'14px' , marginLeft:'5%'}} ></input> <input type="submit" value="Send Answer" className="p-2" style={{fontSize:"14px" , width:'100px' ,backgroundColor:'#007bff' , border:'none' , color:'white'}}></input></p>
                                    </div>
                                </form>
                                </div>
                            </Collapse>
                            <Collapse in={open1}>
                                <div id="example-collapse-text" style={{marginTop:'25px'}}>
                                    <div className="row m-4" >
                                        <div className="col text-left d-flex"><i className="fas fa-user-circle fa-3x mt-2"/><h6 className="mt-3"><span style={{fontSize:'14px', marginLeft:'5px'}}>{Name}</span></h6></div>
                                        <p className="m-4" style={{fontSize:'16px'}}>{Answer}</p>
                                    </div>
                                </div>
                            </Collapse>
                        </div>

                                )
                        })
                        }

                        {/*
                        <label class="btn btn-default">
                            Browse <input type="file" hidden>
                        </label> */}

                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-0">
                       
                    </div>
                </div>
            </div>
            <Footer2/>
        </>
    )
}
export default MyDoubts;