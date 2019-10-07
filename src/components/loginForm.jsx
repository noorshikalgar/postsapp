import React from 'react'
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import Joi from 'joi-browser';
import { Link } from 'react-router-dom';
import CustomForm from './common/form';
import Input from './common/input';
import { login } from '../utils/auth';

export default class LoginForm extends CustomForm {


    state = {
        data: {
            email: "",
            password: ""
        },
        errors: {}
    }

    schema = {
        email: Joi.string().email().label("Email").required(),
        password: Joi.string().min(3).max(50).label("Password").required()
    }

    doSubmit = () => {
        const result = login(this.state.data);
        if (result) { 
            console.log("Submitted", this.state.errors , "result" , result);
            window.location = "/postsapp/profile" 
        }
        else {
            const errors = {...this.state.errors};
            errors['email'] = "Email does not exists";
            this.setState({ errors });
            console.log("error", this.state.errors);
        }
        console.log("Submitted", this.state);
    }

    render() {
        const { errors, data } = this.state;
        return (
            <Row>
                <Col md={{ span: 8, offset: 2 }} sm={12}>
                    <Card>
                        <Card.Header as="h5"> Login Form </Card.Header>
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
                                    name="password" lable="Password"
                                    placeholder="Enter password"
                                    type="password"
                                    error={errors.password}
                                />
                                <Button variant="primary" disabled={this.validate()} type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                        <Card.Footer>
                            New here ? <Link to="/register"> Register Now </Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        )
    }
}
