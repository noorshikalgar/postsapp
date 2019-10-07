import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import _ from 'lodash';

const Home = ({ user }) => {
    return (
        <Jumbotron className="text-center">
            <h1> Welcome { !_.isEmpty(user) ? user.name : "to Post's App"} </h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit malesuada massa, et varius turpis ultrices sit amet. Nulla consequat justo a lorem ornare, ac tempor nunc pellentesque.  </p>
            <hr />
            <div>
                { _.isEmpty(user) && <React.Fragment>
                <Link to="/posts" className="btn btn-primary mr-3" variant="primary"> Explore Posts </Link>
                <Link to="/login" className="btn btn-outline-primary" > Login Here </Link>
                </React.Fragment> }
                { !_.isEmpty(user) && <React.Fragment>
                <Link to="/dashboard" className="btn btn-primary mr-3" variant="primary"> Dashboard </Link>
                </React.Fragment> }
            </div>
        </Jumbotron>
    );
}

export default Home;