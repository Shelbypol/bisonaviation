import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import '../style/jumbotron.css'

const HomeJumbotron = (props) => {
    return (
        <div>
            <Jumbotron className='jumboImg' fluid>
                <Container fluid>
                    <h1 className="display-3">Fluid jumbotron</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default HomeJumbotron;