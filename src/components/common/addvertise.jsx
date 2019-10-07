import React from 'react';
import { Card } from 'react-bootstrap';

const Advertise = ({ id }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Advertise #{id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">ignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link href="#">Read More</Card.Link>
                <Card.Link href="#">Click to buy</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Advertise;