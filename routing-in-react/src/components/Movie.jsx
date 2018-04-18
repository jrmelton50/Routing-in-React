import React, { Component } from "react";

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then((result) => {
                return result.json();
            })
            .then((object) => {
                this.setState({
                    movie: object
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="text-center">
                    <h1> {this.state.movie.title} </h1>
                    <hr/>
                </div>
                <div className="row text-center">
                    <div className="col">
                        <div className="w-50 mx-auto">
                        {/* <div className="col-md-6 col-md-offset-3"> */}
                            <h2 className="text-left"> Director: {this.state.movie.director} </h2>
                            <h2 className="text-left"> Producer: {this.state.movie.producer} </h2>
                            <h3 className="text-left"> Release Date: {this.state.movie.release_date} </h3>
                            <p className="text-left"> Description: {this.state.movie.description} </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}