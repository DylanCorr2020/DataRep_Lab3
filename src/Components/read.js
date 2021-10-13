import React, { Component } from 'react';
import Movies from './movies';
//import react 

//Read class inherits component
class Read extends Component{

//we want read in our movies

//create an object in order to store data
//json collection of movie componets
//we wnat to pass dta from our read compnent to our movies component
//create an object in movies
//anytime i want to write javascriot in html use curly brackets
//this.state.movies is used in order to pass the object into movies component

state = {
   movies:[ {
    "Title": "Avengers: Infinity War",
    "Year": "2018",
    "imdbID": "tt4154756",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
   },
    
   {
    "Title": "Captain America: Civil War",
    "Year": "2016",
    "imdbID": "tt3498820",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    },

    {
    "Title": "Charlie Wilson's War",
    "Year": "2007",
    "imdbID": "tt0472062",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"
    }
   ]
};

//render method taking from js libary
render(){
    return(
  <div>
      <h1>This is the raed componet</h1>

    <Movies movies={this.state.movies}></Movies>
  </div>
    );
}

}

//mark it for export
export default Read;