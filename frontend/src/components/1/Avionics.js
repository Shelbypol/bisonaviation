import {Button, Col, Row, Card} from "react-bootstrap";
import '../../style/1/Avionics.css';
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

            <Jumbotron id='home-avionics' className='pb-4 pt-2 global_rich-black-bg m-0'
                       fluid>

            </Jumbotron>

            <Jumbotron id='home-avionics' className='Avionics_jumbo bg-white global_rich-black p-0 m-0'
                       fluid>

                <Row className='Avionics_jumbo-img pt-5'>
                    {/*<Col xs={6} className=' p-0 m-0'>*/}
                    {/*</Col>*/}


                    {/*<Col xs={6} className=''>*/}

                    {/*    <Row className=' mx-3'>*/}
                    {/*        <p className='ml-5 global_eerie-black text-center'>*/}
                    {/*            FROM MINOR REPAIRS TO COMPLETE PANEL UPGRADES.*/}
                    {/*            ALL SERVICES PERFORMED IN-HOUSE AT BISON AVIATION.*/}
                    {/*        </p>*/}
                    {/*    </Row>*/}
                    {/*    <Row className='mb-3'>*/}
                    {/*        <Col xs={12}>*/}
                    {/*            <hr/>*/}
                    {/*            <AvionicsProducts/>*/}
                    {/*            <hr/>*/}
                    {/*        </Col>*/}
                    {/*    </Row>*/}

                    {/*    <Row className=' Avionics_info'>*/}
                    {/*        <Zoom>*/}
                    {/*            <Col xs={1} className='d-flex justify-content-center mt-3'>*/}
                    {/*                <i className='far fa-tablet-alt global_blood-red'*/}
                    {/*                   style={{fontSize: '2em'}}> </i>*/}
                    {/*            </Col>*/}
                    {/*            <Col xs={12} className=''>*/}
                    {/*                <h3 className='global_eerie-black'>Full / Partial Panel Upgrades</h3>*/}
                    {/*            </Col>*/}
                    {/*        </Zoom>*/}

                    {/*    </Row>*/}


                    {/*    <Row className='Avionics_info'>*/}
                    {/*        <Zoom>*/}
                    {/*            <Col xs={1} className='d-flex justify-content-center mt-3'>*/}
                    {/*                <i className='fal fa-tachometer-alt-fastest global_blood-red'*/}
                    {/*                   style={{fontSize: '2em'}}> </i>*/}
                    {/*            </Col>*/}
                    {/*            <Col xs={12} className=''>*/}
                    {/*                <h3 className='global_eerie-black'>In-depth Tests & Checks</h3>*/}
                    {/*            </Col>*/}
                    {/*        </Zoom>*/}

                    {/*    </Row>*/}


                    {/*    <Row className='Avionics_info'>*/}
                    {/*        <Zoom>*/}
                    {/*            <Col xs={1} className='d-flex justify-content-center mt-3'>*/}
                    {/*                <i className='fal fa-database global_blood-red'*/}
                    {/*                   style={{fontSize: '2em'}}> </i>*/}
                    {/*            </Col>*/}
                    {/*            <Col xs={12} className=''>*/}
                    {/*                <h3 className='global_eerie-black'>Software Updates</h3>*/}
                    {/*            </Col>*/}
                    {/*        </Zoom>*/}
                    {/*    </Row>*/}

                    {/*    <Row className='mt-3 ml-5 Avionics_info'>*/}
                    {/*        <Zoom>*/}
                    {/*            /!*<Col xs={1} className='d-flex justify-content-center mt-2'>*!/*/}
                    {/*            /!*    <i className='far fa-tablet-rugged global_blood-red'*!/*/}
                    {/*            /!*       style={{fontSize: '2em'}}> </i>*!/*/}
                    {/*            /!*</Col>*!/*/}
                    {/*            <Col xs={12} className='py-1 global_cursor'>*/}
                    {/*                <Fade right duration='1000'>*/}
                    {/*                    <LinkContainer to={`/avionics`}>*/}
                    {/*                        <h4 className='Avionics_learn-more-btn'>Learn More</h4>*/}
                    {/*                    </LinkContainer>*/}
                    {/*                </Fade>*/}
                    {/*            </Col>*/}
                    {/*        </Zoom>*/}
                    {/*    </Row>*/}
                    <Col xs={6} className=' p-0 m-0'>
                    </Col>


                    <Col xs={6} className=''>

                        <Row className='Flir_margin-pos-top'>
                            <Zoom>

                                <Col xs={12} className='mb-2 mr-2 pr-4'>
                                    <h1 className='global_eerie-black '>
                                        FROM MINOR REPAIRS TO COMPLETE PANEL UPGRADES.
                                        ALL SERVICES PERFORMED IN-HOUSE AT BISON AVIATION.                                    </h1>
                                </Col>
                            </Zoom>
                        </Row>

                        <Row className=' d-flex align-content-center Mechanics_margin-neg-top Mechanics_circle-text mb-0 p-0'>
                            {/*<Col xs={5} className='Mechanics_circle2 ml-5'>*/}
                            {/*</Col>*/}
                            <Col>
                                <h3> </h3>
                            </Col>
                            <Col xs={12} className='global_cursor mr-5 pr-4 mt-4'>
                                <Zoom>
                                    <p className='pr-3'>
                                        Whether you need to add ADS-B OUT capabilities in order to meet the December 31, 2019 deadline, a routine pitot-static / transponder certification, or it's time for a completely new panel, Bison Aviation's Avionics Team is ready to bring your avionics systems into the 21st century!</p>
                                </Zoom>
                            </Col>

                            <Col>

                            </Col>
                        </Row>



                        <Row className='mt-3 ml-n5 Mechanics_info'>
                            <Zoom>
                                <Col xs={12} className='py-1 global_cursor ml-4'>
                                    <Fade right duration='1000'>
                                        <LinkContainer to={`/maintenance`}>
                                            <h4 className='Mechanics_learn-more-btn pl-2'>Learn More</h4>
                                        </LinkContainer>
                                    </Fade>
                                </Col>
                            </Zoom>
                        </Row>


                    </Col>
                </Row>
            </Jumbotron>

            <Jumbotron id='home-avionics' className='bg-white m-0 p-0' fluid>

                <Row className='Avionics_row-titles global_rich-black-bg d-flex align-content-center p-0 m-0'>
                    <LinkContainer to={`/mechanics`}>
                        <Col xs={4} className=' global_cursor border-right Mechanics_col d-flex align-items-center '>
                            <Zoom>
                                <p className='Avionics_text-titles'>Custom Panels</p>
                            </Zoom>
                        </Col>
                    </LinkContainer>

                    <LinkContainer to={`/mechanics`}>
                        <Col xs={4} className=' global_cursor border-right Mechanics_col d-flex align-items-center '>
                            <Zoom>
                                <p className='Avionics_text-titles'>In-Depth Tests & Checks</p>
                            </Zoom>
                        </Col>
                    </LinkContainer>

                    <LinkContainer to={`/mechanics`}>
                        <Col xs={4} className=' global_cursor Mechanics_col d-flex align-items-center '>
                            <Zoom>
                                <p className='Avionics_text-titles'> Software Updates</p>
                            </Zoom>
                        </Col>
                    </LinkContainer>
                </Row>

            </Jumbotron>

            <Jumbotron className='global_cultured-bg m-0 p-0' fluid>

                <Row className='d-flex justify-content-center mb-0 Avionics_card-row'>
                    <Col xs={4} className='d-flex justify-content-center'>
                        <Card className='Avionics_card border-0 global_cultured-bg rounded ml-5'>
                            <Card.Img variant="top" src={cnc} className=' Avionics_card-img '/>
                            <Card.Body className='global_eerie-black'>
                                <Zoom>
                                    {/*<Card.Title>Card Title</Card.Title>*/}
                                    <Card.Text className='Avionics_card-text'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Zoom>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={4} className='d-flex justify-content-center'>
                        <Card className='Avionics_card border-0 global_cultured-bg rounded'>
                            <Card.Img variant="top" src={test} className='Avionics_card-img '/>
                            <Card.Body className='global_eerie-black'>
                                <Zoom>
                                    {/*<Card.Title>Card Title</Card.Title>*/}
                                    <Card.Text className='Avionics_card-text'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Zoom>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xs={4} className='d-flex justify-content-center'>
                        <Card className='Avionics_card border-0 global_cultured-bg global_cultured-bg rounded mr-5'>
                            <Card.Img variant="top" src={tayseer} className='Avionics_card-img'/>
                            <Card.Body className='global_eerie-black'>
                                <Zoom>
                                    {/*<Card.Title>Card Title</Card.Title>*/}
                                    <Card.Text className='Avionics_card-text' >
                                        <Zoom>
                                            <Button className='global_blood-red global_cultured-bg Mechanics_btn'>Schedule your plane
                                                today!</Button>
                                        </Zoom>
                                    </Card.Text>
                                </Zoom>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>


            </Jumbotron>

            {/*<Row className='Avionics_contact_img'>*/}
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

export default Avionics
