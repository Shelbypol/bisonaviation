import {Button, Col, Row, Card} from "react-bootstrap";
import '../../style/2/Avionics.css';
import React from "react";
import {Jumbotron} from "reactstrap";
import Zoom from 'react-reveal/Zoom';
import {LinkContainer} from "react-router-bootstrap";
import test from '../../images/bg-graphics/screen-avionics/avionics/avionics-hero-img.png'
import tayseer from '../../images/bg-graphics/screen-avionics/avionics/tayseer-avionics.png'


const Avionics = () => {

    return (
        <>


            <Jumbotron id='home-avionics' className='Avionics_jumbo bg-transparent global_cultured p-0 m-0'
                       fluid>
                <Row>
                    <Col>
                        <h1 className='mt-5 global_cultured'>Avionics</h1>
                    </Col>
                </Row>

                <Row className='pt-5 mb-5'>

                    <Col xs={7} className=''>
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


                            <Col xs={12} className='py-1 global_cursor'>
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


            <Jumbotron className='bg-transparent mt-5 ' fluid>

                <Row className='d-flex justify-content-center Avionics_card-top-row'>

                    <Col xs={4} className='d-flex justify-content-center'>
                        <Card className='Avionics_card border-0 bg-transparent rounded'>
                            <Card.Img variant="top" src={tayseer} className='Avionics_card-img'/>
                        </Card>
                    </Col>

                    <Col xs={4} className='d-flex justify-content-center'>
                        <Card className='Avionics_card border-0 bg-transparent rounded'>
                            <Card.Img variant="top" src={test} className=' Avionics_card-img '/>
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
                            <Card.Img variant="top" src={test} className=' Avionics_card-img '/>
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


            </Jumbotron>


        </>

    )
};

export default Avionics
