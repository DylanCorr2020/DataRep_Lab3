import React, { Component } from "react";
import Card from 'react-bootstrap/Card';

//i want to split the movies into differnt components
//we use card from bootstrap to make it look better 
//place the javascriot in the curly brackets 
//retrive information we got from the map function from param movie

class MovieItem extends Component {
    render() {
        return (
            <div>



                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">

                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>




            </div>
        );
    }
}

export default MovieItem;