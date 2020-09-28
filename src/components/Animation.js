import React from 'react';
import Container from 'react-bootstrap/Container';
import {useSpring, animated} from 'react-spring';

import '../Styles/Home.css'



const Animation = () => {

const test = useSpring({
    from: { opacity : 0, transition: '5s'},
    to: { opacity: 1, transition: '5s'}
});

return (
   <Container>
    <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Lateef|Rubik:500|Open+Sans|Rancho|Nunito|Permanent+Marker&display=swap" rel="stylesheet"></link>
      
    <animated.h1 style ={test} className="homeText"> I am <span>Karishma</span> ,     </animated.h1>
    <animated.h5 style ={test} className="homeText"> a Front-End Developer based in New York</animated.h5>
  </Container>
)
}

export default Animation;
