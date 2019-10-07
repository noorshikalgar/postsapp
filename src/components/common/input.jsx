import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({ name, lable, error, type, as, ...rest }) => {
    return (
        <Form.Group controlId={name}>
            <Form.Label>{lable}</Form.Label>
            <Form.Control type={type} name={name} as={as || "input"} {...rest} />
            <Form.Text className="text-danger">
                {error && error}
            </Form.Text>
        </Form.Group>
    );
}

export default Input;