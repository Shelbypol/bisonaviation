import React from 'react';
import {Jumbotron, Row, Col} from 'reactstrap';
import Zoom from 'react-reveal/Zoom'
import {Button, Card, Container} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import cnc from "../../images/bg-graphics/screen-avionics/avionics/cnc-machine copy.png";
import test from "../../images/bg-graphics/screen-avionics/avionics/avionics-test.jpg";
import tayseer from "../../images/bg-graphics/screen-avionics/avionics/tayseer-avionics.png";


const Flir = () => {
    return (
        <>
            <Jumbotron id='home-avionics' className='Avionics_jumbo bg-transparent global_cultured p-0 mb-5'
                       fluid>

                <Row>
                    <Col>
                        <h1 className='mt-5 global_cultured'>EO/IR Flir</h1>
                    </Col>
                </Row>

                <Row className='pt-5'>

                    <Col xs={7} className=''>
                        <Zoom>

                            <Col xs={12} className='mb-2 mr-2 pr-4'>
                                <h1 className='global_cultured'>
                                    Bison Aviation’s maintains the world’s largest inventory of legacy airborne
                                    EO/IR equipment.
                                </h1>

                            </Col>
                        </Zoom>

                        <Col xs={12} className='global_cursor mr-5 pr-4 mt-4'>
                            <Zoom>
                                <p className='pr-3 '>
                                    Bison Aviation’s Sensor Service team maintains an average of more than sixty
                                    flight-ready systems from manufacturers such as Wescam, FLIR Systems, Inc.,
                                    GyroCam, PolyTech, SweSystems, and more. Through significant investments in
                                    research and engineering, Bison Aviation has developed the tools and procedures
                                    necessary to repair & service nearly all makes and models of airborne equipment
                                    at the component level.

                                </p>
                            </Zoom>
                        </Col>

                        <Col xs={12} className='py-1 global_cursor '>
                            <LinkContainer to={`/maintenance`}>
                                <Zoom>
                                    <Button className='global_cultured global_blood-red-bg '>
                                        Learn More
                                    </Button>
                                </Zoom>
                            </LinkContainer>
                        </Col>

                    </Col>


                    {/*</Row>*/}
                    <Col xs={5} className=' p-0 m-0'>
                        <LinkContainer to={`/mechanics`}>
                            <Col xs={12}
                                 className=' global_cursor border-left Mechanics_col d-flex align-items-center '>
                                <Zoom>
                                    <p className='Avionics_text-titles'>World's largest inventory</p>
                                </Zoom>
                            </Col>
                        </LinkContainer>

                        <LinkContainer to={`/mechanics`}>
                            <Col xs={12}
                                 className=' global_cursor border-left Mechanics_col d-flex align-items-center '>
                                <Zoom>
                                    <p className='Avionics_text-titles'>Major manufacturers</p>
                                </Zoom>
                            </Col>
                        </LinkContainer>

                        <LinkContainer to={`/mechanics`}>
                            <Col xs={12}
                                 className=' global_cursor border-left Mechanics_col d-flex align-items-center '>
                                <Zoom>
                                    <p className='Avionics_text-titles'> Independent ISR sensor labs</p>
                                </Zoom>
                            </Col>
                        </LinkContainer>

                    </Col>
                </Row>


            </Jumbotron>


            <Row className='d-flex justify-content-center mb-5'>
                <Col xs={4} className='d-flex justify-content-center'>
                    <Card className='Avionics_card border-0 bg-transparent rounded'>
                        <Card.Img variant="top" src={cnc} className=' Avionics_card-img '/>

                    </Card>
                </Col>

                <Col xs={4} className='d-flex justify-content-center'>
                    <Card className='Avionics_card border-0 bg-transparent rounded'>
                        <Card.Img variant="top" src={test} className='Avionics_card-img '/>

                    </Card>
                </Col>

                <Col xs={4} className='d-flex justify-content-center'>
                    <Card className='Avionics_card border-0 bg-transparent rounded'>
                        <Card.Img variant="top" src={tayseer} className='Avionics_card-img'/>

                    </Card>
                </Col>
            </Row>



            {/*<Row className='Avionics_contact_img m-0 p-0'>*/}
            {/*    <Col xs={12} className='d-flex justify-content-end align-items-center'>*/}
            {/*        <LinkContainer to={`/contact`}>*/}
            {/*            <Fade right duration='1000'>*/}
            {/*                <Button className=' Avionics_contact-btn'>Book your appointment*/}
            {/*                    today*/}
            {/*                </Button>*/}
            {/*            </Fade>*/}
            {/*        </LinkContainer>*/}
            {/*    </Col>*/}
            {/*</Row>*/}

        </>

    )
};

export default Flir