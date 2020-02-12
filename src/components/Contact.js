import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

import  linedin_logo from '../components/icons8-linkedin-50.png';
import  GitHub_Logo  from '../components/github_logo.png';
import  Email from '../components/email.png';
import resume from '../components/resume.png';
import Karishma_Saini_Resume_2020 from '../components/resume/Karishma_Saini_Resume.pdf';



import '../Styles/Contact.css'

const Contact = () => (


<Container className="contactBody"  fluid id="Contact">

<Jumbotron className="contactJumbo" fluid>
<link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Lateef|Rubik:500|Open+Sans|Rancho|Nunito|Permanent+Marker&display=swap" rel="stylesheet"></link>
<Container>


  <h1 className="contactTitle">
           Let's Build Something Great

          </h1>

          <hr/>
          
  <Row className="contactBody"> 
      <Col md={3}>
      <p className="contactContent">  
            Email</p>
         <a href ="mailto:ksaini7595@gmail.com" >
          <Image className="logo" src={Email} />
    </a> 
           
     
         
      </Col>
      <Col md={3}>
<p className="contactContent">
   GitHub 
</p>
      <a href ="https://github.com/ksaini75"  target="_blank">
          <Image className="logo" src={GitHub_Logo} />
    </a>
            
      </Col>
      <Col md={3}>
<p className="contactContent">
   LinkedIn
</p>
       <a href="https://www.linkedin.com/in/karishma-saini/" target="_blank">
     <Image  className="logo" src={linedin_logo }/>
   </a>
            
      </Col>
      <Col md={3}>
<p className="contactContent">
  Resume
</p>
       <a  href={Karishma_Saini_Resume_2020} target="_blank">
    <Image className="logo" src ={resume}/>  
    </a>
            
      </Col>





  </Row>
 

</Container>

</Jumbotron>

</Container>

)

export default Contact;