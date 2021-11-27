import React from "react";
import {Container,Nav,Navbar } from "react-bootstrap";
import logoimg from "./logo.png"
import './Header.css';
const Header =()=>{
    return(
        <>
            <Navbar collapseOnSelect expand="lg" fixed="top" style={{backgroundColor: 'whitesmoke', borderBottom : '2px solid rgb(209, 202, 202)'}}>
            <Container fluid style={{fontSize:'18px' , marginTop:'10px'}}>
            <Navbar.Brand href="#home"><img src={logoimg} alt="logo" style={{width : '80px' }} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                
                
                </Nav>
                <Nav>
                    <Nav.Link href="grade" className="navlink"  style={{textDecoration:'none'}}>Grade</Nav.Link>
                    <Nav.Link href="about" className="navlink"  style={{textDecoration:'none'}}>About</Nav.Link>
                    <Nav.Link href="faq" className="navlink"  style={{textDecoration:'none'}}>FAQ</Nav.Link>
                    <Nav.Link href="wav" className="navlink"  style={{textDecoration:'none'}}>Work As Volenteer</Nav.Link>
                    <Nav.Link href="login" className="navlink  btn-secondary text-light" style={{border: '1px solid whitesmoke' ,textDecoration:'none' }}>Log In</Nav.Link>
                    <Nav.Link href="signup" className="navlink btn-success text-light" style={{textDecoration:'none'}}>Sign Up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}
export default Header;