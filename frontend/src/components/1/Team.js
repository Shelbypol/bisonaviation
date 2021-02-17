import React from 'react';
import {Jumbotron, Row, Col} from 'reactstrap';
import Zoom from 'react-reveal/Zoom'
import '../../style/1/Team.css'
import {Container} from "react-bootstrap";

const Team = () => {
    return (
        <Jumbotron className=' m-0 p-0 global_cultured-bg d-flex justify-content-center' fluid>
            <Container className='p-0 fluid'>
                <Row >
                    <Col xs={8} className='Team_jumbo Team_bg-img ml-n5'> </Col>

                    <Col xs={4} className='ml-5'>
                        <Zoom>
                            <p className='Team_text text-center py-5'>
                                We know that our customers rely on us
                                to provide them with an honest and frank assessment of the condition of
                                their aircraft, and we are honored to accept
                                that charge.
                            </p>
                        </Zoom>
                    </Col>

                </Row>
            </Container>
        </Jumbotron>
    );
};

export default Team;