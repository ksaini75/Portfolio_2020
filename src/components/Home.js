import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Animation from '../components/Animation';

import '../Styles/Home.css';
import ProjectCard from './ProjectCard';
import About from '../components/About';
import Contact from '../components/Contact';








class Home extends Component {
render () {
  return(
  <React.Fragment>
  <Container fluid className="homeTitle" id="home">
  <Animation/>
 </Container>

  <About/>

 <Container>
  <ProjectCard/>
</Container>

<Contact/>
 </React.Fragment>






  )

}
}

export default Home;