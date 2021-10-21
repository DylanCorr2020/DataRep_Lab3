import React, { Component } from "react";

//in order to create a form
//create an object called state 
//in order to use forms we call super 
//parent class react.Component



class Create extends React.Component {

    //in the constructor we have three fields 
    //each one is an empty string 

    constructor() {
        super();


        //i need to bind the events 
        //wont work if i dont bind to an instamce of this class
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }


    //create a form and call a method called onSubmit
    //e.prevantDefault will stop us calling button multiple times 
    onSubmit(e) {
        e.preventDefault();
        alert("Movie" + this.state.Title + "Yaer" + this.state.Year + "Poster" + this.state.Poster);
    }

    //this.setState holds objects of components

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }


    onChangeYear(e){
        this.setState({
            Year: e.target.value
        });
    }

    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        });
    }

    render() {
        //className is the styling from app
        //we have onSubmit button
        //value is the initial value of the state
        //onChange allows you to pass in the value of an event 

        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add movie Title</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                    <label>Add movie Year</label>
                    <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                    </div>
                    
                    <div claasName = "form-group">
                    <label>Movie Poster</label>
                    <textarea type = 'text'
                    className = 'form-control'
                    value = {this.state.Poster}
                    onChange={this.onChangePoster}>
                    </textarea>
                    </div>


                    <div className="form-group">
                        <input type='submit'
                            value='Add Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Create;