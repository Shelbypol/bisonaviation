import {Button, Col, Container, Row} from "react-bootstrap";
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

            <Jumbotron id='home-avionics' className='pt-5 global_eerie-black-bg p-0 m-0'
                       fluid>

            </Jumbotron>

            <Jumbotron id='home-avionics' className='Avionics_jumbo bg-white global_rich-black p-0 m-0'
                       fluid>

                <Row className='Avionics_jumbo-img pt-5'>


                    <Col xs={6} className=' p-0 m-0'>
                    </Col>


                    <Col xs={6} className=''>

                        <Row className='mb-3 '>
                            <Col xs={12}>
                                <Col xs={12}>
                                    <Zoom>
                                        <Col className='py-3'>
                                            <h4 className='global_eerie-black'>Panel Upgrades</h4>
                                        </Col>
                                    </Zoom>
                                </Col>
                                <Row xs={12}>
                                    <Col xs={2} className='d-flex justify-content-center mt-3'>
                                        <i className='far fa-tablet-rugged global_blood-red'
                                           style={{fontSize: '3em'}}> </i>
                                    </Col>
                                    <Col xs={8}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
                                            repellat.</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                        <Row className='mb-3'>
                            <Col xs={12}>
                                <Col xs={12}>
                                    <Zoom>
                                        <Col className='py-3'>
                                            <h4 className='global_eerie-black'>Test & Checks</h4>
                                        </Col>
                                    </Zoom>
                                </Col>
                                <Row xs={12}>
                                    <Col xs={2} className='d-flex justify-content-center mt-3'>
                                        <i className='far fa-tablet-rugged global_blood-red'
                                           style={{fontSize: '3em'}}> </i>
                                    </Col>
                                    <Col xs={8}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
                                            repellat.</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                        <Row className='mb-3'>
                            <Col xs={12}>
                                <Col xs={12}>
                                    <Zoom>
                                        <Col className='py-3'>
                                            <h4 className='global_eerie-black'>Software Updates</h4>
                                        </Col>
                                    </Zoom>
                                </Col>
                                <Row xs={12}>
                                    <Col xs={2} className='d-flex justify-content-center mt-3'>
                                        <i className='far fa-tablet-rugged global_blood-red'
                                           style={{fontSize: '3em'}}> </i>
                                    </Col>
                                    <Col xs={8}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
                                            repellat.</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                        <Row className='mb-3'>
                            <Col xs={12}>
                                <Col xs={12}>
                                    <Zoom>
                                        <Col className='py-3'>
                                            <h4 className='global_eerie-black'>General Repairs</h4>
                                        </Col>
                                    </Zoom>
                                </Col>
                                <Row xs={12}>
                                    <Col xs={2} className='d-flex justify-content-center mt-3'>
                                        <i className='far fa-tablet-rugged global_blood-red'
                                           style={{fontSize: '3em'}}> </i>
                                    </Col>
                                    <Col xs={8}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
                                            repellat.</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </Col>


                </Row>
            </Jumbotron>

            <Jumbotron id='home-avionics' className='Avionics_garmin-jumbo global_eerie-black-bg py-0 px-2 m-0'
                       fluid>

                <AvionicsProducts/>
            </Jumbotron>


            <Row className='Avionics_contact_img'>
                <Col xs={12} className='d-flex justify-content-end align-items-center'>
                    <LinkContainer to={`/contact`}>
                        <Fade right duration='1000'>
                            <Button className=' Avionics_contact-btn'>Book an appointment
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
