import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import "isomorphic-fetch";
import "es6-promise";
import MovieList from "./MovieList";
import PeopleList from "./PeopleList";
import Movie from "./Movie";
import Person from "./Person";
import Home from "./Home";

export default class App extends Component {
    render() {
        return (
            <Router> 
                <React.Fragment>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/movies" component={MovieList}/>
                        <Route exact path="/movies/:id" component={Movie} />
                        <Route exact path="/people" component={PeopleList}/>
                        <Route exact path="/people/:id" component={Person}/>
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}