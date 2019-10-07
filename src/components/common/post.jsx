import React from 'react';
import { Card } from 'react-bootstrap';

const Post = ({post}) => {
    return (
        <React.Fragment>
        <Card>
            <Card.Header as="h5">{post.title}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                    {' '}
                    {post.body}{' '}
                </p>
                <footer className="blockquote-footer">
                    Created By <cite title="Source Title">{post.user.name}</cite>
                </footer>
                </blockquote>
            </Card.Body>
        </Card>
        <br/>
        </React.Fragment>
    );
}

export default Post;