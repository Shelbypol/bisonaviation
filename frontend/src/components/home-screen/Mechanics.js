import React from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import '../../style/2/Mechanics.css';
import {Jumbotron} from "reactstrap";
import Zoom from 'react-reveal/Zoom';
import {LinkContainer} from "react-router-bootstrap";
import tayseer from "../../images/bg-graphics/screen-avionics/avionics/tayseer-avionics.png";
import test from "../../images/bg-graphics/screen-avionics/avionics/avionics-test.jpg";
import Fade from "react-reveal/Fade";


const Mechanics = () => {

    return (
        <>

            <Row className='Mechanics_jumbo AvionicsHome_bg global_cultured px-4 m-0'>
                <Col xs={12} className='px-2 m-0 py-0'>

                    <Row className='d-flex justify-content-start align-content-center ml-3 mb-5'>
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
                                <Col xs={12} className='mb-2 mr-2 pr-4' style={{backgroundColor: 'rgba(255,255,255, .1)'}}>
                                    <h1 className='global_cultured'>You depend on your aircraft to carry you and your
                                        passengers safely.</h1>

                                </Col>
                            </Zoom>

                            <Col xs={12} className='global_cursor mr-5 pr-4 mt-4'>
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


                        {/*</Row>*/}
                        <Col xs={5} className=' p-0 m-0 global_blood-red-bg border-left'>
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

                    {/*</Jumbotron>*/}


                    <Row className='d-flex justify-content-center mb-5'>
                        <Col xs={4} className='d-flex justify-content-center'>
                            <Card className='Avionics_card border-0 bg-transparent rounded'>
                                <Card.Img variant="top" src={test} className=' Avionics_card-img '/>
                                {/*<Card.Body>*/}
                                {/*    <Card.Text>*/}
                                {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor ea est*/}
                                {/*        eveniet*/}
                                {/*        exercitationem illum incidunt maiores odio quam veritatis.*/}
                                {/*    </Card.Text>*/}
                                {/*</Card.Body>*/}
                            </Card>
                        </Col>

                        <Col xs={4} className='d-flex justify-content-center'>
                            <Card className='Avionics_card border-0 bg-transparent rounded'>
                                <Card.Img variant="top" src={test} className='Avionics_card-img '/>
                                {/*<Card.Body>*/}
                                {/*    <Card.Text>*/}
                                {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor ea est*/}
                                {/*        eveniet*/}
                                {/*        exercitationem illum incidunt maiores odio quam veritatis.*/}
                                {/*    </Card.Text>*/}
                                {/*</Card.Body>*/}
                            </Card>
                        </Col>

                        <Col xs={4} className='d-flex justify-content-center'>
                            <Card className='Avionics_card border-0 bg-transparent rounded'>
                                <Card.Img variant="top" src={tayseer} className='Avionics_card-img'/>
                                {/*<Card.Body>*/}
                                {/*    <Card.Text>*/}
                                {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor ea est*/}
                                {/*        eveniet*/}
                                {/*        exercitationem illum incidunt maiores odio quam veritatis.*/}
                                {/*    </Card.Text>*/}
                                {/*</Card.Body>*/}
                            </Card>
                        </Col>
                    </Row>

                </Col>
            </Row>


        </>

    )
};

export default Mechanics

