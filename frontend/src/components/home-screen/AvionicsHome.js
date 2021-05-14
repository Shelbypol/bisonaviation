import React from "react";
import {Button, Col, Row, Image} from "react-bootstrap";
import '../../style/2/AvionicsHome.css';
import tests from '../../images/bg-graphics/screen-avionics/avionics-slider/avionics4.png'
import roel from '../../images/bg-graphics/screen-avionics/avionics-slider/avionics2.png'
import cnc from '../../images/bg-graphics/home-screen/home-slider/cnc-machine copy.png'
import panel from '../../images/bg-graphics/screen-avionics/avionics-slider/avionics1.png'
import tayseer from '../../images/bg-graphics/screen-avionics/avionics/tayseer-avionics.png'
import {LinkContainer} from "react-router-bootstrap";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const AvionicsHome = () => {

    return (
        <>
            <Row className='AvionicsHome_image d-flex justify-content-center align-content-center mx-1'>
                <Col xs={12} style={{backgroundColor: 'rgba(0,0,0,.7)'}}>

                    <Row className='d-flex justify-content-start align-content-center ml-3 mb-5'>
                        <Fade top>
                            <Col xs={12}
                                 className=' AvionicsHome_title-col'>
                                <h1 className='AvionicsHome_title text-white'>Avionics</h1>
                            </Col>
                        </Fade>
                    </Row>

                    <Row className='mb-5 px-4'>

                        <Col xs={7} className='' style={{backgroundColor: 'rgba(0,0,0, .5)'}}>
                            <Zoom>
                                <Col xs={12} className='mb-2 ml-3 pr-4'
                                >
                                    <h1 className='global_cultured'>You depend on your aircraft to carry you and your
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
                                        <Button className=' border-left border-right'
                                                style={{backgroundColor: 'rgba(255,255,255,.3)'}}>
                                            Learn More
                                        </Button>
                                    </Zoom>
                                </LinkContainer>
                            </Col>

                        </Col>


                        <Col xs={4} className=' p-0 mx-auto global_blood-red-bg border-left'>
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

                </Col>

            </Row>
            <Row className='m-0 p-0 global_black'>
                <Col xs={12} className='mt-3 p-0 m-0'>

                    <Row className='m-0 p-0 global_black'>
                        <Col xs={9}>
                            <Row>
                                <Col md={4} sm={12} className=' p-0'>
                                    <Image className=' AvionicsHome_img pr-md-3' src={tayseer} fluid/>
                                </Col>
                                <Col md={8} sm={12} className='p-0'>
                                    <Image className=' AvionicsHome_img' src={cnc} fluid/>
                                </Col>
                                <Col sm={12}
                                     className='p-0 d-flex align-content-center justify-content-center align-content-center'>
                                    <Image className=' AvionicsHome_img pt-md-3' src={panel} fluid/>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={3}>
                            <Row>
                                <Col sm={12} className=' p-0'>
                                    <Image className=' AvionicsHome_img pl-md-3' src={roel} fluid/>
                                </Col>
                                    <Col sm={12} className=' p-0'>
                                    <Image className=' AvionicsHome_img pt-md-3 pl-md-3' src={tests} fluid/>
                                </Col>

                            </Row>
                        </Col>

                    </Row>
                </Col>
            </Row>

        </>

    )
};

export default AvionicsHome