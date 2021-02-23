import {Button, Col, Row, Card} from "react-bootstrap";
import '../../style/2/Avionics.css';
import React from "react";
import {Jumbotron} from "reactstrap";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import AvionicsProducts from "./AvionicsProducts";
import {LinkContainer} from "react-router-bootstrap";
import cnc from '../../images/bg-graphics/avionics/cnc-machine copy.png'
import software from '../../images/bg-graphics/avionics/avionics-4.png'
import test from '../../images/bg-graphics/avionics/avionics-test.jpg'
import tayseer from '../../images/bg-graphics/avionics/tayseer-avionics.png'


const Avionics = () => {

    return (
        <>

            <Jumbotron id='home-avionics' className='pb-4 pt-2 bg-transparent m-0'
                       fluid>

            </Jumbotron>

            <Jumbotron id='home-avionics' className='Avionics_jumbo bg-transparent global_cultured p-0 m-0'
                       fluid>

                <Row className='pt-5'>

                    <Col xs={6} className=''>
                        <Zoom>

                            <Col xs={12} className='mb-2 mr-2 pr-4'>
                                <h1 className='global_cultured'>
                                    FROM MINOR REPAIRS TO COMPLETE PANEL UPGRADES.
                                    ALL SERVICES PERFORMED IN-HOUSE AT BISON AVIATION. </h1>
                            </Col>
                        </Zoom>

                        <Col xs={12} className='global_cursor mr-5 pr-4 mt-4'>
                            <Zoom>
                                <p className='pr-3'>
                                    Whether you need to add ADS-B OUT capabilities in order to meet the December
                                    31,
                                    2019 deadline, a routine pitot-static / transponder certification, or it's
                                    time
                                    for a completely new panel, Bison Aviation's Avionics Team is ready to bring
                                    your avionics systems into the 21st century!</p>
                            </Zoom>
                        </Col>

                        <Zoom>
                            <Col xs={12} className='py-1 global_cursor ml-4'>
                                <Fade right duration='1000'>
                                    <LinkContainer to={`/maintenance`}>
                                        <h4 className='Mechanics_learn-more-btn pl-2'>Learn More</h4>
                                    </LinkContainer>
                                </Fade>
                            </Col>
                        </Zoom>

                    </Col>


                    {/*</Row>*/}
                    <Col xs={6} className=' p-0 m-0'>
                        <LinkContainer to={`/mechanics`}>
                            <Col xs={12}
                                 className=' global_cursor border-left Mechanics_col d-flex align-items-center '>
                                <Zoom>
                                    <p className='Avionics_text-titles'>Custom Panels</p>
                                </Zoom>
                            </Col>
                        </LinkContainer>

                        <LinkContainer to={`/mechanics`}>
                            <Col xs={12}
                                 className=' global_cursor border-left Mechanics_col d-flex align-items-center '>
                                <Zoom>
                                    <p className='Avionics_text-titles'>In-Depth Tests & Checks</p>
                                </Zoom>
                            </Col>
                        </LinkContainer>

                        <LinkContainer to={`/mechanics`}>
                            <Col xs={12}
                                 className=' global_cursor border-left Mechanics_col d-flex align-items-center '>
                                <Zoom>
                                    <p className='Avionics_text-titles'> Software Updates</p>
                                </Zoom>
                            </Col>
                        </LinkContainer>

                    </Col>
                </Row>

            </Jumbotron>


            <Jumbotron className='bg-transparent mt-n5' fluid>

                <Row className='d-flex justify-content-center Avionics_card-top-row'>

                    <Col xs={4} className='d-flex justify-content-center'>
                        <Card className='Avionics_card border-0 bg-transparent rounded'>
                            <Card.Img variant="top" src={tayseer} className='Avionics_card-img'/>
                        </Card>
                    </Col>

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
                </Row>

                <Row className='d-flex justify-content-center'>
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
                            <Card.Body className='global_cultured'>
                                <Zoom>
                                    {/*<Card.Title>Card Title</Card.Title>*/}
                                    <Card.Text className='Avionics_card-text'>
                                        <Zoom>
                                            <Button className='global_cultured global_blood-red-bg ml-5 '>Schedule
                                                your
                                                plane
                                                today!</Button>
                                        </Zoom>
                                    </Card.Text>
                                </Zoom>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


            </Jumbotron>


        </>

    )
};

export default Avionics
