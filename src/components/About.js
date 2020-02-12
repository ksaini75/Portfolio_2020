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
  <Col lg={12} xs={12} >
  <p className = "aboutContent">
    I am a detail-oriented Front-end Developer dedicated in creating interactive, user-friendly web applications. 
    I’ve completed my Bachelor of Science Degree in Computer Science along with a minor in Finance at Pace University. 
    I am expected to graduate upcoming May 2020 with a Master’s Degree of Science in Information Technology with a Cybersecurity Concentration. 
    I am currently working as a graduate assistant in the Financial Information System department at Pace University where I join a team of developers to implement admin web pages for the new system. 
    These pages reduce manual processes, manages the deletion, updates and uploading data into the database. I am a highly motivated individual seeking to expand my skills as a developer, who has successfully implemented web applications using the latest technologies and frameworks. 
    As I am pursuing my Master’s Degree, during my free time I take the opportunity to teach myself React.js and building web applications projects such as Yelp Camp, and Face Recognition from Udemy courses.
  </p>
  
   
    </Col>
 </Row>
  </Container>
</Jumbotron>
</Container>
)

export default About;
