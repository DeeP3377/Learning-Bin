import React from 'react';
import logoimg from "../Image/lb1.png"
import "./navbar.css" ;
import { LinkContainer } from 'react-router-bootstrap';
const Navbar = ({setUser,user})=>{
    function logoutfun(){
        alert("logout")
        setUser({})
    }
    return(
        <>
            <div className="nav">
                <input type="checkbox" id="nav-check"></input>
                <div className="nav-header">
                    <div className="nav-title">
                    <LinkContainer to="/"><a href="/#"><img src={logoimg} alt="logo" /></a></LinkContainer>
                    </div>
                </div>
                <div className="nav-btn">
                    <label for="nav-check">
                        <span>&#9776;</span>
                    </label>
                </div>
                <div className="nav-links">
                    <LinkContainer to="/studymaterial"><a href="/#" >Study Material</a></LinkContainer>
                    <LinkContainer to="/aboutus"><a href="/#">What We Do</a></LinkContainer>
                    <LinkContainer to="/workasvolunteer"><a href="/#">Volunteer</a></LinkContainer>
                    <LinkContainer to="/doubts"><a href="/#" ><b style={{fontSize:'16px'}}><i className="fas fa-question-circle m-2"></i>Doubts</b></a></LinkContainer>
                    {
                        user && user._id ? <LinkContainer to="/login"><a href="/#" onClick={()=> logoutfun() } ><b style={{fontSize:'16px'}}><i className="fas fa-sign-in-alt m-2"></i>Log out</b></a></LinkContainer> : <LinkContainer to="/login"><a href="/#"><b style={{fontSize:'16px'}}><i className="fas fa-sign-in-alt m-2"></i>Log In</b></a></LinkContainer> 
                    }
                </div>
            </div>
        </> 
    );
}
export default Navbar;