import React from 'react';
import {Card , Container,Row ,Col } from 'react-bootstrap';
import akshat from "../Image/Akshat.png";
import nikhil from "../Image/Nikhil.png";
import "./Team.css";
export default function App() {
  return (
    <Container style={{backgroundColor:'whitesmoke', padding:'50px',marginTop:'50px'} }>
    <div className="team-section">
        <h1 style={{textAlign:'center', marginBottom:'20px'} }>Our Team</h1> 
        <Row>
        <Col lg="4" md="12" sm="12" xs="12">
            <Card style={{width:"70%",marginLeft:"10%" ,marginTop:"10%" , marginRight:"10%"}}>
                <div className="circle">
                <Card.Img variant="top" src={akshat} style={{ width: '80%' ,marginLeft:"10%" ,marginTop:"10%" , marginRight:"10%" , borderRadius: '50%'}} className="ourcard"/>
                </div>
                <Card.Body>
                <div className="cardtext">
                    <Card.Title style={{textAlign:'center'}}>Akshat</Card.Title>
                </div>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col lg="4" md="12" sm="12" xs="12">
            <Card style={{width:"70%",marginLeft:"10%" ,marginTop:"10%" , marginRight:"10%" }}>
                <div className="cardimage">
                    <Card.Img variant="top" src={nikhil} style={{ width: '80%' ,marginLeft:"10%" ,marginTop:"10%" , marginRight:"10%",borderRadius: '50%'}}/>
                </div>
                <Card.Body>
                    <div className="cardtext">
                        <Card.Title style={{textAlign:'center'}}>Nikhil Batra</Card.Title>
                    </div>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    
                </Card.Body>
            </Card>
            </Col>
            <Col lg="4" md="12" sm="12" xs="12">
            <Card style={{width:"70%",marginLeft:"10%" ,marginTop:"10%" , marginRight:"10%"}}>
                <Card.Img variant="top" src={akshat} style={{ width: '80%' ,marginLeft:"10%" ,marginTop:"10%" , marginRight:"10%",borderRadius: '50%'}}/>
                <Card.Body>
                <div className="cardtext">
                    <Card.Title style={{textAlign:'center'}}>Nikhil Batra</Card.Title>
                </div>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>
       
    </div>
</Container>
  );
}