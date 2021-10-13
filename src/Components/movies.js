import React, { Component } from "react";
import MovieItem from "./movieItem";


//i want to split the movies into differnt components
//make a movie item for each one
//map function very  simply takes a collection we have and split them into
//each section
//breaks the object array
//then returns each one in movie item


class Movies extends Component{
    
       render() {
         
        return this.props.movies.map((movie)=>{
            return <MovieItem movie={movie}></MovieItem>
        })

       } 
             
           
        
    
}

export default Movies;