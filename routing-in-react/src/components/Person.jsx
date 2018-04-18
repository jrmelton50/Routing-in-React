import React, { Component } from "react";

export default class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then((result) => {
                return result.json();
            })
            .then((object) => {
                console.log("object = ", object);
                this.setState({
                    person: object
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
                    <h1> Name: {this.state.person.name} </h1>
                    <h2> Age: {this.state.person.age} </h2>
                    <h2> Gender: {this.state.person.gender} </h2>
                    <h2> Eye Color: {this.state.person.eye_color} </h2>
                    <h2> Hair Color: {this.state.person.hair_color} </h2>
                </div>
            </div>
        );
    }
}