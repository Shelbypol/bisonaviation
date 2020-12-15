import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import '../style/jumbotron.css'

const Jumbotrons = ({ imgClass, title, text }) => {
    return (
        <div>
            <Jumbotron className={imgClass} fluid>
                <Container fluid>
                    <h1 className="display-3">{title}</h1>
                    <p className="lead">{text}</p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Jumbotrons;