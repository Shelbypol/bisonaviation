import React from 'react';
import {Jumbotron, Row, Col} from 'reactstrap';
import Zoom from 'react-reveal/Zoom'
import '../../style/1/Team.css'
import {Container} from "react-bootstrap";

const Team = () => {
    return (
        <Jumbotron className=' m-0 p-0  d-flex justify-content-center global_eerie-black-bg' fluid>
            {/*<Container className='p-0 fluid'>*/}
                <Row className='global_eerie-black-bg d-flex align-items-center' >
                    <Col xs={7} className='Team_jumbo Team_bg-img ml-n2 '> </Col>

                    <Col xs={5} className='global_cultured'>
                        <Zoom>
                            <p className='Team_text text-center pt-5'>
                                We know that our customers rely on us
                                to provide them with an honest and frank assessment of the condition of
                                their aircraft, and we are honored to accept
                                that charge.
                            </p>
                        </Zoom>
                    </Col>

                </Row>
            {/*</Container>*/}
        </Jumbotron>
    );
};

export default Team;