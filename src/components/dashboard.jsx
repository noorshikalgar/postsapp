import React from 'react';
import { Row, Col, Button, ButtonToolbar, Modal, Container, Form } from 'react-bootstrap';
import Joi from 'joi-browser';
import _ from 'lodash';

import  Input  from './common/input';
import CustomForm from './common/form';
import Post from './common/post';

import { addPost, getUserPosts } from '../utils/post'; 
import { getLoggedUser } from '../utils/auth';  


export default class Dashboard extends CustomForm {

    state = {
        showModal : false,
        user : {},
        data : {
            title : "",
            body : ""
        },
        errors : {},
        posts : {}
    }

    
    componentDidMount(){
        const posts = getUserPosts();
        const user = getLoggedUser() || {};
        this.setState({
            user,
            posts
        });
    }

    schema = {
        title : Joi.string().max(255).label("Title").required(),
        body : Joi.string().min(10).max(1024).label("Body").required()
    }

    doSubmit = () => {
        const post = {...this.state.data};
        post['user'] = this.state.user;
        post['created_at'] = Date.now();    
        addPost(post);
        const posts = getUserPosts();

        this.setState({
            posts
        });

        this.showModal();
    }


   renderModal = () => {
       const { showModal,  errors} = this.state;
        return (
          <Modal
            show={showModal}
            size="lg"
            onHide={this.showModal}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Create Post
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Input 
                        name="title"
                        lable="Title"
                        placeholder = "Enter title here"
                        onChange={this.handleChange}
                        error={errors.title}
                        type="text"
                    />
                    <Input 
                        name="body"
                        as="textarea"
                        lable="Body"
                        placeholder = "Post message"
                        onChange={this.handleChange}
                        error={errors.body}
                        type="text"
                    />
                    <Button type="submit" block> Create </Button>
                </Form>
              </Container>
            </Modal.Body>
          </Modal>
        );
      }

     showModal = () => {
         const showModal = !this.state.showModal;
        this.setState( {
            showModal
        });
     } 

    render() {
        const { user, posts  } = this.state;
        return (
            <React.Fragment>
                <Row>
                    <Col sm={12} md={10}>
                        <h4> Hello, {user.name}! </h4>
                    </Col>
                    <Col sm={12} md={2}>
                    <ButtonToolbar>
                        <Button size="sm" variant="primary" onClick={this.showModal}>
                        New Post
                        </Button>
                
                        {this.renderModal()}
                    </ButtonToolbar>
                    </Col>
                </Row>
                <hr />
                { _.isEmpty(posts) && <p className="text-center"     > You dont have any post!, Create one now. </p> }

                { Object.keys(posts).map((post) => {
                        return (
                            <Post key={post} post={posts[post]} />
                        )
                    }) }
            </React.Fragment>
        )
    }
}
