import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Movie from "./Movie";

export default class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films`)
            .then((result) => {
                return result.json();
            })
            .then((object) => {
                this.setState({
                    movies: object
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        let movies = this.state.movies.map((movie) => {
            return (
                // key must go in parent div!
                <div className="card col-md-4 mr-0" key={movie.id}>
                    <img className="card-img-top" src="http://cdn3-www.cattime.com/assets/uploads/2012/05/socializing-kitten-300x200.jpg" alt={movie.title} />
                    <div className="card-body">
                        <h5 className="card-title"> {movie.title} </h5>
                        <p className="card-text"> {movie.description.substring(0, 100)}... </p>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <Link className="btn btn-primary col-md-4 mb-4" to={`/movies/${movie.id}`}> View Details </Link>
                    </div>
                </div>
            );
        });

        return (
            <div className="row mt-5"> {movies} </div>
        );
    }
}