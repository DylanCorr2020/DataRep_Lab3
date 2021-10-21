import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';
//import react 
//import axios and install it on the command prompt

//Read class inherits component
class Read extends Component {

 
  state = {
    movies: []
  };

  //the method conponetDidMount is a component lifecycle hook
  //called every time our component is mounted 
  //or becomes active
  //we want to make our axois call in this method

  //there are two states in a promise fufill and rejected
  //for a fufill sate we use .then()
  //in the response function we want to update our movie array up top with 
  //the information we just got back thats in json format
  //else it will show an error if url didnt come back

  componentDidMount() {

    //the result of this method will return a promise 
    axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
      .then(
        (response) => {
          this.setState({ movies: response.data.movies})
        }
      )
      .catch(
        (error)=>{console.log(error);}
      );

  }

  //render method taking from js libary
  render() {
    return (
      <div>
        <h1>This is the raed componet</h1>

        <Movies movies={this.state.movies}></Movies>
      </div>
    );
  }

}

//mark it for export
export default Read;