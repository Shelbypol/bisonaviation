import {Button, Col, Row, Card} from "react-bootstrap";
import '../../style/1/Avionics.css';
import React from "react";
import {Jumbotron} from "reactstrap";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import AvionicsProducts from "./AvionicsProducts";

import Product from "../ProductDisplay/Product"
import ProductCarousel from "../ProductCarousel";
import {LinkContainer} from "react-router-bootstrap";
import ImgRow from "./ImgRow";
import AvionicsAd from "../avionics/AvionicsAd";
import ProductsDisplaySByCatMan from "../ProductDisplay/ProductDisplayByCatMan";


const Avionics = () => {

    return (
        <>

            <Jumbotron id='home-avionics' className='py-4 global_rich-black-bg m-0'
                       fluid>

            </Jumbotron>

            <Jumbotron id='home-avionics' className='Avionics_jumbo bg-white global_rich-black p-0 m-0'
                       fluid>

                <Row className='Avionics_jumbo-img pt-5'>
                    <Col xs={6} className=' p-0 m-0'>
                    </Col>


                    <Col xs={6} className=''>

                        <Row className=' mx-3'>
                            <p className='ml-5 global_eerie-black text-center'>
                                FROM MINOR REPAIRS TO COMPLETE PANEL UPGRADES.
                                ALL SERVICES PERFORMED IN-HOUSE AT BISON AVIATION.
                            </p>
                        </Row>
                        <Row className='mb-3'>
                            <Col xs={12}>
                                <hr/>
                                <AvionicsProducts/>
                                <hr/>
                            </Col>
                        </Row>

                        <Row className=' Avionics_info'>
                            <Zoom>
                                <Col xs={1} className='d-flex justify-content-center mt-3'>
                                    <i className='far fa-tablet-alt global_blood-red'
                                       style={{fontSize: '2em'}}> </i>
                                </Col>
                                <Col xs={12} className=''>
                                    <h3 className='global_eerie-black'>Full / Partial Panel Upgrades</h3>
                                </Col>
                            </Zoom>

                        </Row>


                        <Row className='Avionics_info'>
                            <Zoom>
                                <Col xs={1} className='d-flex justify-content-center mt-3'>
                                    <i className='fal fa-tachometer-alt-fastest global_blood-red'
                                       style={{fontSize: '2em'}}> </i>
                                </Col>
                                <Col xs={12} className=''>
                                    <h3 className='global_eerie-black'>In-depth Tests & Checks</h3>
                                </Col>
                            </Zoom>

                        </Row>


                        <Row className='Avionics_info'>
                            <Zoom>
                                <Col xs={1} className='d-flex justify-content-center mt-3'>
                                    <i className='fal fa-database global_blood-red'
                                       style={{fontSize: '2em'}}> </i>
                                </Col>
                                <Col xs={12} className=''>
                                    <h3 className='global_eerie-black'>Software Updates</h3>
                                </Col>
                            </Zoom>
                        </Row>

                        <Row className='mt-3 ml-5 Avionics_info'>
                            <Zoom>
                                {/*<Col xs={1} className='d-flex justify-content-center mt-2'>*/}
                                {/*    <i className='far fa-tablet-rugged global_blood-red'*/}
                                {/*       style={{fontSize: '2em'}}> </i>*/}
                                {/*</Col>*/}
                                <Col xs={12} className='py-1 global_cursor'>
                                    <Fade right duration='1000'>
                                        <LinkContainer to={`/avionics`}>
                                            <h4 className='Avionics_learn-more-btn'>Learn More</h4>
                                        </LinkContainer>
                                    </Fade>
                                </Col>
                            </Zoom>
                        </Row>


                    </Col>
                </Row>
            </Jumbotron>

            <Jumbotron id='home-avionics' className='py-4 global_rich-black-bg m-0 p-0'
                       fluid>
                <Row className='global_silver-chalice-bg Mechanics_row d-flex align-content-center p-0 m-0'>
                    <LinkContainer to={`/mechanics`}>
                        <Col xs={4} className='global_cursor border-right Mechanics_col d-flex align-items-center '>
                            <Zoom>
                                <p className='Mechanics_text'>Custom Panels</p>
                            </Zoom>
                        </Col>
                    </LinkContainer>

                    <LinkContainer to={`/mechanics`}>
                        <Col xs={4} className='global_cursor border-right Mechanics_col d-flex align-items-center '>
                            <Zoom>
                                <p className='Mechanics_text'>In-Depth Tests & Checks</p>
                            </Zoom>
                        </Col>
                    </LinkContainer>

                    <LinkContainer to={`/mechanics`}>
                        <Col xs={4} className='global_cursor Mechanics_col d-flex align-items-center '>
                            <Zoom>
                                <p className='Mechanics_text'> Software Updates</p>
                            </Zoom>
                        </Col>
                    </LinkContainer>
                </Row>

                <Row className='d-flex justify-content-center mb-0 p-0 mt-5'>
                    <Col xs={4} className='d-flex justify-content-center'>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src="holder.js/100px180"/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={4} className='d-flex justify-content-center'>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src="holder.js/100px180"/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={4} className='d-flex justify-content-center'>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src="holder.js/100px180"/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>




                </Row>

                {/*<Row className='d-flex align-content-center justify-content-center mb-0 p-0 ml-5 mt-5'>*/}
                {/*    <Col xs={3} className='Mechanics_circle1 Mechanics_circles'>*/}
                {/*    </Col>*/}
                {/*    <Col xs={3} className='Mechanics_circle2 Mechanics_circles mt-2'>*/}

                {/*    </Col>*/}
                {/*    <Col xs={3} className='Mechanics_circle3 Mechanics_circles mt-2'>*/}

                {/*    </Col>*/}
                {/*    <Col xs={3} className='Mechanics_circle4 Mechanics_circles'>*/}

                {/*    </Col>*/}
                {/*</Row>*/}

                {/*<Row className='d-flex align-content-center Mechanics_circle-text mx-1 mt-n5 p-0 mb-5'>*/}
                {/*    <Col xs={3} className='mt-n5 pt-n5 text-center global_cursor'>*/}
                {/*        <Zoom>*/}
                {/*            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis eos magni,*/}
                {/*                porro*/}
                {/*                sed*/}
                {/*                voluptate.</p>*/}
                {/*        </Zoom>*/}
                {/*    </Col>*/}

                {/*    <Col xs={3} className='mt-n5 text-center global_cursor'>*/}
                {/*        <Zoom>*/}
                {/*            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor et hic ipsam molestias*/}
                {/*                odio*/}
                {/*                quasi*/}
                {/*                quibusdam quidem sequi tempora, tenetur.</p>*/}
                {/*        </Zoom>*/}
                {/*    </Col>*/}

                {/*    <Col xs={3} className='mt-n5 text-center global_cursor'>*/}
                {/*        <Zoom>*/}
                {/*            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dicta dolorum neque nihil*/}
                {/*                tempore.</p>*/}
                {/*        </Zoom>*/}
                {/*    </Col>*/}

                {/*    <Col xs={3} className='mt-n5 text-center global_cursor'>*/}
                {/*        <Zoom>*/}
                {/*            <Button className='global_blood-red global_cultured-bg Mechanics_btn'>Schedule your plane*/}
                {/*                today!</Button>*/}
                {/*        </Zoom>*/}
                {/*    </Col>*/}
                {/*</Row>*/}

            </Jumbotron>


            <Row className='Avionics_contact_img m-0 p-0'>
                <Col xs={4} className='d-flex justify-content-end align-items-center'>
                    <LinkContainer to={`/contact`}>
                        <Fade right duration='1000'>
                            <Button className=' Avionics_contact-btn'>Book your appointment
                                today
                            </Button>
                        </Fade>
                    </LinkContainer>
                </Col>

            </Row>

        </>

    )
};

export default Avionics
