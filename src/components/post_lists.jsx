import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Advertise from './common/addvertise';
import {getAllPosts} from '../utils/post';
import Post from './common/post';
import _ from 'lodash';

class PostList extends Component {

    state = {
        posts: {}
    }

    componentDidMount() {
        const posts = getAllPosts();
        this.setState({ posts }, () => console.log("component loaded!"));
    }

    showAdvertise = () => {
        for(let i in [1,2,3]){
            return <Advertise id={i} />
        }
    }

    render() {
        const { posts } = this.state;
        return (
            <React.Fragment>
                <Row>
                    <Col sm={12} md={8}>
                        <h3> All Post </h3>
                        <hr />
                        { !_.isEmpty(posts) && Object.keys(posts).map((post) => {
                        return (
                            <Post key={post} post={posts[post]} />
                        )
                        }) }

                        { _.isEmpty(posts) && <p> Dont have any posts yet. </p> }

                    </Col>
                    <Col sm={12} md={4}>
                        <Container className="py-5">
                            <h4> Advertise </h4>
                            <hr />
                            <Advertise />
                            <br />
                            <Advertise />
                            <br />
                            <Advertise />
                        </Container>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}


export default PostList;