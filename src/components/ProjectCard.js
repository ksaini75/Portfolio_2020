import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import YelpCamp from '../components/YelpCamp.png';
import RoboFriends from '../components/roboFriends.png';
import FaceRecognition from '../components/faceRecognition.png';

import '../Styles/ProjectCard.css';



// React component for the frontside of the card
class ProjectCard extends React.Component {
  render() {
   return(
     <React.Fragment>
      <Container className="projectTitle" id="Projects">
       <h1>Projects</h1>
    </Container>


      <Container className="projectContainer">
      <Jumbotron className="projectJumbo" fluid>
      <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Lateef|Bebas+Neue|Rubik:500|Open+Sans|Rancho|Nunito|Permanent+Marker&display=swap" rel="stylesheet"></link>
      
      <Container>
      <h1 className ="projectSubtitle">YelpCamp Project</h1>
      <p className="projectTools">HTML5 | JavaScript | Boostrap 4 | Node.js | Express  | Mongo DB</p>
      <Row>
        <Col lg={6}> 
        <Image  className='projectImage' src={YelpCamp}   thumbnail/> 
        </Col>
        
        <Col lg={6} >
        <p className = "projectContent">

        YelpCamp is another version of Yelp Reviews but it allows users to review campgrounds.
        The users are able to view the different campgrounds available, read the comments and the 
        reviews of each campgrounds. Users can create campgrounds, submit reviews along with a rating 
        of the campgrounds from 1 star to 5 stars.  
        </p>
       
     <br/>
        <Col lg={6}>
        <a href="https://safe-gorge-94321.herokuapp.com"  target="_blank">
          <p className="viewProject"> View Project</p>
          </a>
     
        </Col>
   
        
       
    </Col>
    </Row>
   
</Container>
</Jumbotron>


</Container>
 





<Container className="projectContainer" fluid>
<Jumbotron className="projectJumbo" fluid>
<link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Lateef|Open+Sans|Rancho|Permanent+Marker&display=swap" rel="stylesheet"></link>
<Container>
<h1 className ="projectSubtitle">RoboFriends Application</h1>
  <p className="projectTools"> 
  HTML | CSS | JavaScript | React.js | GitHub Pages | Git | Tachyons </p>
  <Row>
  <Col lg={6}>
    <Image  className='projectImage' src={RoboFriends}   thumbnail/> 
  </Col>

  <Col lg={6} >
  <p className = "projectContent">
 
  This simple application allows users to fetch data from the Robohash API with a responsive searchability function
  to search a specific roboFriend from the list. 

  </p>
  <br/>
  <Col lg={6}>
  <a href="https://ksaini75.github.io/RoboFriends/"  target="_blank">
          <p className="viewProject"> View Project</p>
          </a>
  </Col>
  <br/>

 
  </Col>
  
    </Row>


</Container>

</Jumbotron>

</Container>

<Container className="projectContainer" fluid>
<Jumbotron className="projectJumbo" fluid>
<link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Lateef|Open+Sans|Rancho|Permanent+Marker&display=swap" rel="stylesheet"></link>
<Container>
<h1 className ="projectSubtitle">FaceRecognition Application</h1>
  <p className="projectTools"> 
  HTML | CSS | JavaScript | React.js | GitHub Pages | Git | Tachyons | NPM | Heroku | Express | PostgresQl</p>
  <Row>
  <Col lg={6}>
    <Image  className='projectImage' src={FaceRecognition}   thumbnail/> 
  </Col>

  <Col lg={6} >
  <p className = "projectContent">
 
  A face recognition web app has a front end using React.js, a RESTful API for back-end, a server with Express, deployed to Heroku.

  </p>
  <br/>
  <Col lg={6}>
  <a href="https://face-recognition-application1.herokuapp.com"  target="_blank">
          <p className="viewProject"> View Project</p>
          </a>
  </Col>
  <br/>

 
  </Col>
  
    </Row>


</Container>

</Jumbotron>

</Container>
  
    
</React.Fragment>  
    
    );
  }
 }

 export default ProjectCard;