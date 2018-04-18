import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class PeopleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people`)
            .then((result) => {
                return result.json();
            })
            .then((object) => {
                this.setState({
                    people: object
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        let people = this.state.people.map( (person) => {
            return (
                // key must go in parent div!
                <div className="card col-md-4 mr-0" key={person.id}> 
                    <div className="card-body">
                        <h5 className="card-title"> {person.name} </h5>
                        <p className="card-text"> {person.gender} </p>
                        <p className="card-text"> {person.age} </p>
                        <a target="_blank" href={person.url}> {person.name}'s JSON Response </a>
                        <br/>
                        <Link className="btn btn-primary col-md-5 mt-3" to={`/people/${person.id}`}> View Details </Link>
                    </div>
                </div>
            );
        });

        return (
            <div className="row mt-5"> {people} </div>
        );
    }
}