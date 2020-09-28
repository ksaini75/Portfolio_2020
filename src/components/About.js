import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../Styles/About.css';


const About = () => (
   
<Container className="aboutBody" fluid id="about">
   <Jumbotron className="aboutJumbo" fluid>
   <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Lateef|Rubik:500|Open+Sans|Rancho|Nunito|Permanent+Marker&display=swap" rel="stylesheet"></link>
      
  <Container>
  <h1 className ="aboutTitle">About Me</h1>
  <Row>
  <Col lg={12} >
  <p className = "aboutContent">
    I am a detail-oriented Front-end Developer dedicated in creating interactive, user-friendly web applications. 
    I describe myself as a passionate developer who loves to code and to build websites. Aside from my job, I am a highly
    motivated individual seeking to expand my skills as a developer. During my free time, I spend my time taking Udemy courses 
    to learn new materials such as React.js, UX Design skills and JavaScript. This allows me to grow as a developer and understand the 
    users' needs as I build these websites. 
    
  </p>
  
   
    </Col>
 </Row>
  </Container>
</Jumbotron>
</Container>
)

export default About;
