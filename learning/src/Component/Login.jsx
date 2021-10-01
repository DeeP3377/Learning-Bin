import React from 'react';
//import {Button,Form, FormGroup,Label,Input } from "reactstrap";
//import {Container} from 'react-bootstrap';
//import img1 from './loginimg.png';
import img from "../Image/footerlogo.png"
import './Login.css';
const Login = ()=>{
    
    return(
        <>
            {/*<div>
                <Container style={{ margin:'auto'}}>
                <Form className="loginform" style={{marginTop:'20px',border: '10px solid #1F60ab', borderRadius:'10px'}}>
                    <img src={img1} alt="Log In" width="125" height="125" className="logoimg">
                    </img>
                    
                    <h3 style={{textAlign:'center'}}>Log In</h3>
                    <div className="loginfrom2">
                    <FormGroup style={{fontSize:'18px'}}>
                        <Label><span>Email : </span></Label>
                        <Input type="email" placeholder="Enter your Email " style={{fontSize:'16px'}}></Input>
                    </FormGroup>
                    
                    <br></br>
                    <FormGroup style={{fontSize:'18px'}}>
                        <Label><span>Password :</span></Label>
                        <Input type="password" placeholder="Enter your password " style={{fontSize:'16px'}}></Input>
                    </FormGroup>
                        <div className="d-grid gap-2">
                            <Button  className="loginbtn" size="lg" style={{backgroundColor:'#337ab7',fontSize:'16px'}}>
                               Log In
                            </Button>
                            
                        </div>
                    </div>
                    
                </Form><br/>
                </Container>
            </div>*/}
          
            <div class="container px-4 py-0 mx-auto" >
                <div class="style={{marginTop:'50px'}}">
                    <div class="d-flex flex-lg-row flex-column-reverse" >

                        <div class="logincard1" style={{margin:'auto' , marginTop:'50px' , marginBottom:'50px'}}>
                            <div class="row justify-content-center my-auto">
                                <div class="col-md-8 col-10 my-2">
                                    <div class="row justify-content-center "> <img id="loginlogo" src={img} alt="" /> </div>
                                    <h1 class="mb-3 text-center heading">Sign In</h1>
                                    <h6 class="msg-info" style={{fontSize:'14px'}}>Please login to your account</h6>
                                    <div class="form-group"> <label class="form-control-label text-muted" style={{fontSize:'14px'}}>Email</label> <input type="text" id="email" name="email" placeholder="Enter Your Email" class="form-control"/> </div>
                                    <div class="form-group"> <label class="form-control-label text-muted" style={{fontSize:'14px'}}>Password</label> <input type="password" id="psw" name="psw" placeholder="Enter Your Password" class="form-control"/> </div>
                                    <div class="row justify-content-center"> <button class="btn-block btn-color" style={{fontSize:'16px'}}>Login</button> </div>
                                    <div class="row justify-content-center my-2"> <a href="/#"><small class="text-muted mt-3" style={{fontSize:'12px'}}s>Forgot Password?</small></a> </div>
                                </div>
                            </div>
                            <div class="bottom text-right mb-5">
                                <p href="#" class="sm-text mx-auto mb-3 " style={{fontSize:'12px'}}>Don't have an account?<button class="btn btn-white m-2" style={{fontSize:'14px'}}>Sign Up</button></p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;