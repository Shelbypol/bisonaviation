import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import '../../style/1/Mechanics.css';
import {Jumbotron} from "reactstrap";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {LinkContainer} from "react-router-bootstrap";
import AvionicsProducts from "./AvionicsProducts";


const Mechanics = () => {

    return (
        <>

            {/*<Jumbotron className='h-25 global_cultured-bg p-0 m-0'*/}
            {/*           fluid>*/}
            {/*</Jumbotron>*/}


            <Jumbotron id='home-avionics' className='py-4 global_rich-black-bg m-0'
                       fluid>

            </Jumbotron>

            <Jumbotron id='home-avionics' className='Mechanics_jumbo bg-white global_rich-black p-0 m-0'
                       fluid>

                <Row className='m-0 p-0 Mechanics-top-row'>
                    <Col className=''>

                    {/*==========================================*/}

                        {/*<Row className='d-flex align-content-center Mechanics_circle-text mt-5 mb-0 p-0'>*/}
                        {/*    <Col xs={5} className='Mechanics_circle2 ml-5'>*/}
                        {/*    </Col>*/}
                        {/*    <Col xs={6} className=' text-center global_cursor mt-4'>*/}
                        {/*        <Zoom>*/}
                        {/*            <p>*/}

                        {/*                You depend on your aircraft to carry you and your passengers safely. Whether it's time for a routine annual, a complete series of phase inspections or a pre-purchase inspection, Bison Aviation's team of FAA licensed technicians is ready to ensure that your aircraft is safe and airworthy for your next flight!*/}

                        {/*            </p>*/}
                        {/*        </Zoom>*/}
                        {/*    </Col>*/}
                        {/*</Row>*/}

                        <Row className='Mechanics_margin-pos-top ml-5'>
                            <Zoom>

                                <Col xs={12} className='mb-2'>
                                    <h1 className='global_eerie-black '>You depend on your aircraft to carry you and your passengers safely.</h1>
                                </Col>
                            </Zoom>
                        </Row>

                        <Row className='ml-5 d-flex align-content-center Mechanics_margin-neg-top Mechanics_circle-text mb-0 p-0'>
                            {/*<Col xs={5} className='Mechanics_circle2 ml-5'>*/}
                            {/*</Col>*/}
                            <Col>
                                <h3> </h3>
                            </Col>
                            <Col xs={12} className='  global_cursor mt-4'>
                                <Zoom>
                                    <p>
                                         Whether it's time for a routine annual, a complete series of phase inspections or a pre-purchase inspection, Bison Aviation's team of FAA licensed technicians is ready to ensure that your aircraft is safe and airworthy for your next flight!

                                    </p>
                                </Zoom>
                            </Col>

                            <Col>

                            </Col>
                        </Row>



                        <Row className='mt-3 ml-5 Mechanics_info'>
                            <Zoom>
                                <Col xs={12} className='py-1 global_cursor'>
                                    <Fade right duration='1000'>
                                        <LinkContainer to={`/maintenance`}>
                                            <h4 className='Mechanics_learn-more-btn'>Learn More</h4>
                                        </LinkContainer>
                                    </Fade>
                                </Col>
                            </Zoom>
                        </Row>

                    </Col>


                    <Col className='Mechanics_hero-img global_rich-black-bg'>
                    </Col>
                </Row>

            </Jumbotron>


            <Row className='global_rich-black-bg Mechanics_row d-flex align-content-center'>
                <LinkContainer to={`/mechanics`}>
                    <Col xs={4} className='global_cursor border-right Mechanics_col d-flex align-items-center '>
                        <Zoom>
                            <p className='Mechanics_text'>Annual Inspections</p>
                        </Zoom>
                    </Col>
                </LinkContainer>

                <LinkContainer to={`/mechanics`}>
                    <Col xs={4} className='global_cursor border-right Mechanics_col d-flex align-items-center '>
                        <Zoom>
                            <p className='Mechanics_text'>Propeller Balance</p>
                        </Zoom>
                    </Col>
                </LinkContainer>

                <LinkContainer to={`/mechanics`}>
                    <Col xs={4} className='global_cursor Mechanics_col d-flex align-items-center '>
                        <Zoom>
                            <p className='Mechanics_text'> Pre-Buy Inspections</p>
                        </Zoom>
                    </Col>
                </LinkContainer>
            </Row>

            <Row className='d-flex align-content-center justify-content-center mb-0 p-0 ml-5 mt-5'>
                <Col xs={3} className='Mechanics_circle1 Mechanics_circles'>
                </Col>
                <Col xs={3} className='Mechanics_circle2 Mechanics_circles mt-2'>

                </Col>
                <Col xs={3} className='Mechanics_circle3 Mechanics_circles mt-2'>

                </Col>
                <Col xs={3} className='Mechanics_circle4 Mechanics_circles'>

                </Col>
            </Row>

            <Row className='d-flex align-content-center Mechanics_circle-text mx-1 mt-n5 p-0 mb-5'>
                <Col xs={3} className='mt-n5 pt-n5 text-center global_cursor'>
                    <Zoom>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis eos magni,
                            porro
                            sed
                            voluptate.</p>
                    </Zoom>
                </Col>

                <Col xs={3} className='mt-n5 text-center global_cursor'>
                    <Zoom>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor et hic ipsam molestias
                            odio
                            quasi
                            quibusdam quidem sequi tempora, tenetur.</p>
                    </Zoom>
                </Col>

                <Col xs={3} className='mt-n5 text-center global_cursor'>
                    <Zoom>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dicta dolorum neque nihil
                            tempore.</p>
                    </Zoom>
                </Col>

                <Col xs={3} className='mt-n5 text-center global_cursor'>
                    <Zoom>
                        <Button className='global_blood-red global_cultured-bg Mechanics_btn'>Schedule your plane
                            today!</Button>
                    </Zoom>
                </Col>
            </Row>


        </>

    )
};

export default Mechanics

