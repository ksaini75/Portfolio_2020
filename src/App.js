import React, { Component } from 'react';
import { BrowserRouter  as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import About  from './components/About';
import Contact from './components/Contact';
import  Layout  from './components/Layout';
import NavigationBar from './components/NavigationBar';
import ProjectCard from './components/ProjectCard';
import Footer from '../src/components/Footer';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

class App extends Component{
  render() {
    return(
      // another version of div
      // Switch is used to switch between the different routes
    <React.Fragment>
    <NavigationBar/>
   
        <Router>
          <Switch>
          <Redirect exact from="/" to="/home" />
            <Route  exact path="/home" component={Home}/>
           
            <Route  exact path="/About" component={About}/>
           <Layout>
            <Route exact path ="/Projects" component={ProjectCard}/>
          </Layout>
            <Route  exact path="/Contact" component={Contact}/>
        
          
          
          </Switch>
        </Router>
   <Footer/>
    </React.Fragment>
    );
  }
}

export default App;
