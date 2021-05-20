import React from "react";
import {Button, Col, Row, Image, CardImg} from "react-bootstrap";
import './HomeAvionics.css';
import tests from '../Avionics/images/avionics4.png'
import roel from '../Avionics/images/avionics2.png'
import cnc from './images/cnc-machine copy.png'
import panel from '../Avionics/images/avionics1.png'
import tayseer from '../Avionics/images/avionics/tayseer-avionics.png'
import {LinkContainer} from "react-router-bootstrap";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const HomeAvionics = () => {

    return (
        <>
            <Row className=' d-flex justify-content-center align-content-center'>
                <Col xs={12} className='AvionicsHome_image p-0 mt-5 mb-0 mx-0 mb-0'>

                    <Row className='justify-content-start align-content-center mx-0 my-5'>
                        <Fade top>
                            <Col xs={12}
                                 className=' AvionicsHome_title-col d-sm-flex justify-content-sm-center global_blood-red-bg'>
                                <h1 className='AvionicsHome_title text-white '>Avionics</h1>
                            </Col>
                        </Fade>
                    </Row>

                    <Row className='mt-5 pt-5 pb-0 mb-0 global_black-bg d-flex justify-content-between px-0 mx-0'>

                        <Col md={7} xs={12} className='m-0 px-0 pt-0 pb-3'>
                            <Zoom>
                                <Col xs={12} className='mb-2 pr-4'
                                >
                                    <h1 className='global_white'>You depend on your aircraft to carry you and your
                                        passengers safely.</h1>

                                </Col>
                            </Zoom>

                            <Col xs={12} className='global_cursor mt-4 ml-2 '>
                                <Zoom>
                                    <p className='pr-3 text-white'>
                                        Whether you need to add ADS-B OUT capabilities in order to meet the December
                                        31,
                                        2019 deadline, a routine pitot-static / transponder certification, or it's
                                        time
                                        for a completely new panel, Bison Aviation's Avionics Team is ready to bring
                                        your avionics systems into the 21st century!

                                    </p>
                                </Zoom>
                            </Col>

                            <Col xs={12} className='py-1 global_cursor ml-2'>
                                <LinkContainer to={`/maintenance`}>
                                    <Zoom>
                                        <Button className=' global_goldenrodtxtborder-btn'>
                                            Learn More
                                        </Button>
                                    </Zoom>
                                </LinkContainer>
                            </Col>

                        </Col>


                        <Col md={4}
                             className='pt-4 mx-0 px-0 global_goldenrod global_black-transparent d-none d-lg-block'>
                            <LinkContainer to={`/mechanics`}>
                                <Col xs={12}
                                     className='AvionicsHome_titles global_cursor global_goldenrodtxtborder-btn Mechanics_col d-flex align-items-end justify-content-center p-0 m-0'>
                                    <Zoom>
                                        <p className='Avionics_text-titles'>Annual Inspections</p>
                                    </Zoom>
                                </Col>
                            </LinkContainer>

                            <LinkContainer to={`/mechanics`}>
                                <Col xs={12}
                                     className='AvionicsHome_titles global_cursor global_goldenrodtxtborder-btn Mechanics_col d-flex align-items-center justify-content-center p-0 m-0'>
                                    <Zoom>
                                        <p className='Avionics_text-titles'>Propeller Balance</p>
                                    </Zoom>
                                </Col>
                            </LinkContainer>

                            <LinkContainer to={`/mechanics`}>
                                <Col xs={12}
                                     className='AvionicsHome_titles global_cursor global_goldenrodtxtborder-btn Mechanics_col d-flex align-items-start justify-content-center p-0 m-0'>
                                    <Zoom>
                                        <p className='Avionics_text-titles '> Pre-Buy Inspections</p>
                                    </Zoom>
                                </Col>
                            </LinkContainer>

                        </Col>
                    </Row>

                </Col>

                <Col xs={12} className='m-0 pt-sm-0 px-0 global_black'>

                    <Row className='m-0 p-0 global_black'>
                        <Col xs={12} className=''>
                            <Row className='d-flex justify-content-between'>


                                <Col className='m-0 p-0 AvionicsHome_tayseer-img AvionicsHome_img'>
                                </Col>
                                <Col className='mx-3 p-0 AvionicsHome_img AvionicsHome_cnc-img'>
                                </Col>
                                <Col className='m-0 p-0 AvionicsHome_roel-img AvionicsHome_img'>
                                </Col>
                                <Col md={12} className=' AvionicsHome_panel-img AvionicsHome_img mt-3'>
                                </Col>

                            </Row>


                        </Col>

                    </Row>
                </Col>
            </Row>
        </>

    )
};

export default HomeAvionics