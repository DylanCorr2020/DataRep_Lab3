import React, {Component} from 'react';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Content from './Components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

//we import each container and also import React and Component
//imported features in order for the navbar to work

//import basic routing 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




class App extends Component {

//using html tags we can see each component we craeted being returned in the render method
//and showing on the screen
//this is a single page application


//when we change the url app we change what component the user sees
render(){
     return (
      <Router> 
       <div className="App">


    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/footer">Footer</Nav.Link>
      <Nav.Link href="/header">Pricing</Nav.Link>
    </Nav>
    </Container>
    </Navbar>
       
       <Switch>
         <Route path = "/"exact><Content></Content></Route>
         <Route path = "/header"><Header></Header></Route>
         <Route path = "/footer"><Footer></Footer></Route>
       </Switch>
     </div>
    </Router>
    );
  }

  //we want to embed three components into App.js

  //we are going use rooting in react order show different components to the screen
  //
  
}

//mark the App.js for export
export default App;
