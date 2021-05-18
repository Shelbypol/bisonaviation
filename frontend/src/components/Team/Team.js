import React from 'react';
import {Jumbotron, Row, Col} from 'reactstrap';
import Zoom from 'react-reveal/Zoom'
import '../../style/2/Team.css'
import {Container} from "react-bootstrap";

const Team = () => {
    return (
        <Jumbotron className=' mb-0 mx-0 p-0  d-flex justify-content-center' fluid>
            {/*<Container className='p-0 fluid'>*/}
            <Row className=' d-flex align-items-center global_light-grey-bg' >
                <Col xs={7} className='Team_jumbo Team_bg-img'> </Col>

                {/*<Col xs={1} className='global_cultured-bg Team_jumbo'> </Col>*/}
                {/*<Col xs={1} className='global_rich-black-bg Team_jumbo'> </Col>*/}

                <Col xs={5} className='global_rich-black Team_text-col'>
                    <Zoom>
                        <p className='Team_text text-center pt-4 pr-5'>
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