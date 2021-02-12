import React from 'react';
import {Jumbotron, Row, Col} from 'reactstrap';
import '../../style/1/Team.css'

const Team = () => {
    return (
        <Jumbotron className='Team_bg-img Team_jumbo m-0 p-0 global_cultured-bg d-flex justify-content-center' fluid>

                <Row >
                    <Col xs={6}  className='mr-4'> </Col>
                    <Col xs={5} className='text-center Team_text my-auto ml-5'>
                        <p className='Team_text'>
                            <span className='global_blood-red'>We</span>
                            &nbsp;know that our customers rely on us
                            to provide them with an honest and frank assessment of the condition of
                            their aircraft, and we are honored to accept
                            that charge.
                        </p>
                    </Col>
                </Row>

        </Jumbotron>
    );
};

export default Team;