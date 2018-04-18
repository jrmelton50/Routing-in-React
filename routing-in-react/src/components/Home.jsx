import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
// import Link from "react-router-dom";

export default class Home extends Component {

    render() {
        return (
            <div className="row">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="Studio Ghibli logo" />
                <div className="col-md-5"></div>
                <Link className="btn btn-primary col-md-1 m-1" to="/"> Go Home </Link>
                <Link className="btn btn-primary col-md-1 m-1" to="/movies"> View Films </Link>
                <Link className="btn btn-primary col-md-1 m-1" to="/people"> View People </Link>
            </div>
        );
    }


}