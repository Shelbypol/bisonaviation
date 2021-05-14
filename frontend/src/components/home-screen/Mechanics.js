import React from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import '../../style/2/Mechanics.css';
import Zoom from 'react-reveal/Zoom';
import {LinkContainer} from "react-router-bootstrap";
import tayseer from "../../images/bg-graphics/screen-avionics/avionics/tayseer-avionics.png";
import test from "../../images/bg-graphics/screen-avionics/avionics/avionics-test.jpg";
import Fade from "react-reveal/Fade";


const Mechanics = () => {

    return (
        <>

            <Row className='AvionicsHome_bg global_cultured m-0'>
                <Col xs={12} className='m-0 p-0'>

                    <Row className='d-flex justify-content-start align-content-center mb-5'>
                        <Fade top>
                            <Col xs={12}
                                 className=' AvionicsHome_title-col'>
                                <h1 className='AvionicsHome_title text-white'>Maintenance</h1>
                            </Col>
                        </Fade>
                    </Row>


                    <Row className='mb-5'>
                        <Col xs={7} className=''>
                            <Zoom>
                                <Col xs={12} className='mb-2' style={{backgroundColor: 'rgba(255,255,255, .1)'}}>
                                    <h1 className='global_cultured'>You depend on your aircraft to carry you and your
                                        passengers safely.</h1>

                                </Col>
                            </Zoom>

                            <Col xs={12} className='global_cursor mt-4'>
                                <Zoom>
                                    <p className='pr-3'>
                                        Whether it's time for a routine annual, a complete series of phase inspections
                                        or a
                                        pre-purchase inspection, Bison Aviation's team of FAA licensed technicians is
                                        ready
                                        to ensure that your aircraft is safe and airworthy for your next flight!

                                    </p>
                                </Zoom>
                            </Col>

                            <Col xs={12} className='py-1 global_cursor '>
                                <LinkContainer to={`/maintenance`}>
                                    <Zoom>
                                        <Button className='global_cultured global_black border-left' style={{backgroundColor: 'rgba(255,255,255,.1)'}}>
                                            Learn More
                                        </Button>
                                    </Zoom>
                                </LinkContainer>
                            </Col>

                        </Col>

                        <Col xs={5} className=' global_blood-red-bg border-left'>
                            <LinkContainer to={`/mechanics`}>
                                <Col xs={12}
                                     className='AvionicsHome_titles global_cursor Mechanics_col d-flex align-items-center '>
                                    <Zoom>
                                        <p className='Avionics_text-titles'>Annual Inspections</p>
                                    </Zoom>
                                </Col>
                            </LinkContainer>

                            <LinkContainer to={`/mechanics`}>
                                <Col xs={12}
                                     className='AvionicsHome_titles global_cursor Mechanics_col d-flex align-items-center '>
                                    <Zoom>
                                        <p className='Avionics_text-titles'>Propeller Balance</p>
                                    </Zoom>
                                </Col>
                            </LinkContainer>

                            <LinkContainer to={`/mechanics`}>
                                <Col xs={12}
                                     className='AvionicsHome_titles global_cursor Mechanics_col d-flex align-items-center '>
                                    <Zoom>
                                        <p className='Avionics_text-titles'> Pre-Buy Inspections</p>
                                    </Zoom>
                                </Col>
                            </LinkContainer>

                        </Col>
                    </Row>

                    <Row className='d-flex justify-content-between mb-5 p-0'>
                        <Col xs={4} className='d-flex justify-content-center pl-0 m-0'>
                            <Card className='Avionics_card border-0 bg-transparent rounded'>
                                <Card.Img variant="top" src={test} className=' Avionics_card-img h-100 w-100'/>
                            </Card>
                        </Col>

                        <Col xs={4} className='d-flex justify-content-center p-0 m-0'>
                            <Card className='Avionics_card border-0 bg-transparent rounded'>
                                <Card.Img variant="top" src={test} className='Avionics_card-img h-100 w-100'/>
                            </Card>
                        </Col>

                        <Col xs={4} className='d-flex justify-content-center pr-0 m-0'>
                            <Card className='Avionics_card border-0 bg-transparent rounded'>
                                <Card.Img variant="top" src={tayseer} className='Avionics_card-img h-100 w-100'/>
                            </Card>
                        </Col>
                    </Row>

                </Col>
            </Row>


        </>

    )
};

export default Mechanics

