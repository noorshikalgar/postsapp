import React from 'react';
import Joi from 'joi-browser';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { Link} from 'react-router-dom';

import CustomForm from './common/form';
import Input from './common/input';
import { register } from '../utils/auth';

export default class RegisterForm extends CustomForm{
    state = {
        data : {
            email : "",
            name : "",
            password : ""
        },
        errors : {}
    };

    schema = {
        email : Joi.string().email().required(),
        name : Joi.string().min(3).max(120).required(),
        password : Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required()
    }

    doSubmit = () => {
        register(this.state.data);
        this.props.history.replace('/login');
        
    }

    render(){
        const { errors, data } = this.state;
        return (
            <Row>
                <Col md={{ span: 8, offset: 2 }} sm={12}>
                    <Card>
                        <Card.Header as="h5"> Register Form </Card.Header>
                        <Card.Body>
                            <Form onSubmit={this.handleSubmit}>
                                <Input
                                    onChange={this.handleChange}
                                    name="email" lable="Email Address"
                                    type="email"
                                    placeholder="Enter email address"
                                    error={errors.email}
                                    value={data.username}
                                />
                                <Input 
                                    onChange={this.handleChange}
                                    name = "name"
                                    lable="Name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    error={errors.name}
                                    value={data.name}
                                />
                                <Input
                                    onChange={this.handleChange}
                                    name="password" lable="Password"
                                    placeholder="Enter password"
                                    type="password"
                                    error={errors.password}
                                    value={data.password}
                                />
                                <Button variant="primary" disabled={this.validate()} type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                        <Card.Footer>
                            Already have an account ? <Link to="/login"> Login here </Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        );
    }

}