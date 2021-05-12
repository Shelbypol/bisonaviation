import React from "react";
import {Button, Col, Row, Image} from "react-bootstrap";
import '../../style/2/AvionicsHome.css';
import tests from '../../images/bg-graphics/screen-avionics/avionics-slider/avionics4.png'
import roel from '../../images/bg-graphics/screen-avionics/avionics-slider/avionics2.png'
import tayseer from '../../images/bg-graphics/screen-avionics/avionics/tayseer-avionics.png'
import {LinkContainer} from "react-router-bootstrap";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const AvionicsHome = () => {

    return (
        <>
            <Row className='d-flex justify-content-center align-content-center'>
                <Col xs={12} className='AvionicsHome_bg'>
                    <Row className='d-flex justify-content-center'>
                        <Fade top>
                            <Col xs={12}
                                 className=' AvionicsHome_title-col pb-5 d-flex justify-content-center align-content-center'>
                                <h1 className='AvionicsHome_title text-white'>Avionics</h1>
                            </Col>
                        </Fade>
                        <Fade bottom>
                            <Col md={10} xs={10} className='p-3 mx-auto'>
                                <p className='text-center AvionicsHome_text'>
                                    Whether you need to add ADS-B OUT capabilities in order to meet the December
                                    31,
                                    2019 deadline, a routine pitot-static / transponder certification, or it's
                                    time
                                    for a completely new panel, Bison Aviation's Avionics Team is ready to bring
                                    your avionics systems into the 21st century!
                                    <br/>
                                    <Button href="/avionics"
                                            className='py-2 px-4 border-0 mt-3 rounded-pill AvionicsHome_link'>
                                        learn more
                                    </Button>
                                </p>
                            </Col>
                        </Fade>

                        <Row className='m-0 p-0'>

                            <Col xs={4} className='p-0 mx-0 mt-3'>
                                <Row className='mx-0 mb-0 p-0'>


                                    <LinkContainer to={`/mechanics`}>
                                        <Col xs={12}
                                             className='global_cursor Mechanics_col  '>
                                            <Zoom>
                                                <Row className='Mechanics_title p-0 m-0'>
                                                    <Col
                                                        className='p-0 m-0 Mechanics_col d-flex align-items-center justify-content-start'>
                                                        <p className='Avionics_text-titles'>Annual Inspections</p>
                                                    </Col>
                                                </Row>
                                            </Zoom>
                                        </Col>
                                    </LinkContainer>

                                    <LinkContainer to={`/mechanics`}>
                                        <Col xs={12}
                                             className='global_cursor Mechanics_col  '>
                                            <Zoom>
                                                <Row className='AvionicsHome_titles p-0 m-0'>
                                                    <Col
                                                        className='p-0 m-0 Mechanics_col d-flex align-items-center justify-content-start'>
                                                        <p className='Avionics_text-titles'>Prop Balance</p>
                                                    </Col>
                                                </Row>
                                            </Zoom>
                                        </Col>
                                    </LinkContainer>

                                    <LinkContainer to={`/mechanics`}>
                                        <Col xs={12}
                                             className='global_cursor Mechanics_col  '>
                                            <Zoom>
                                                <Row className='AvionicsHome_titles p-0 m-0'>
                                                    <Col
                                                        className='p-0 m-0 Mechanics_col d-flex align-items-center justify-content-start'>
                                                        <p className='Avionics_text-titles'>Pre-Buy Inspections</p>
                                                    </Col>
                                                </Row>
                                            </Zoom>
                                        </Col>
                                    </LinkContainer>

                                    <LinkContainer to={`/mechanics`}>
                                        <Col xs={12}
                                             className='global_cursor Mechanics_col  '>
                                            <Zoom>
                                                <Row className='AvionicsHome_titles p-0 m-0'>
                                                    <Col
                                                        className='p-0 m-0 Mechanics_col d-flex align-items-center justify-content-start'>
                                                        <p className='Avionics_text-titles'>30+ years of experience</p>
                                                    </Col>
                                                </Row>
                                            </Zoom>
                                        </Col>
                                    </LinkContainer>

                                    <LinkContainer to={`/products`}>
                                        <Col xs={12}
                                             className='global_cursor Mechanics_col mb-5 '>
                                            <Zoom>
                                                <Row className='AvionicsHome_titles p-0 m-0'>
                                                    <Col
                                                        className='p-0 m-0 Mechanics_col d-flex align-items-center justify-content-start '>
                                                        <p className='Avionics_text-titles '>Authorized avionics
                                                            dealer</p>
                                                    </Col>
                                                </Row>
                                                {/*<Row className='AvionicsHome_product-title p-0 m-0'>*/}
                                                {/*    <Col*/}
                                                {/*        className='p-0 m-0 Mechanics_col d-flex align-items-center justify-content-start '>*/}
                                                {/*        <p className='Avionics_text-titles '>Authorized avionics*/}
                                                {/*            dealer</p>*/}
                                                {/*    </Col>*/}
                                                {/*</Row>*/}
                                            </Zoom>
                                        </Col>
                                    </LinkContainer>
                                </Row>
                            </Col>


                            <Col xs={8} className='mt-3 pr-5'>
                                {/*<Col md={10} sm={12} className='mb-0 pb-0'>*/}
                                <Row className='m-0 p-0'>
                                    <Col md={4} sm={12} className=' p-0'>
                                        <Image className=' AvionicsHome_img pr-md-2' src={tayseer} fluid/>
                                    </Col>
                                    <Col md={8} sm={12} className='p-0'>
                                        <Image className=' AvionicsHome_img' src={tests} fluid/>
                                    </Col>

                                </Row>
                                <Row className='m-0 p-0'>

                                    <Col md={8} sm={12}
                                         className='p-0 d-flex align-content-center justify-content-center align-content-center'>
                                        {/*<ProductCarousel/>*/}
                                        <Image className=' AvionicsHome_img pt-md-2' src={roel} fluid/>
                                    </Col>
                                    <Col md={4} sm={12} className=' p-0'>
                                        <Image className='AvionicsHome_img pl-md-2 pt-md-2' src={tayseer} fluid/>
                                    </Col>

                                </Row>


                            </Col>
                        </Row>
                    </Row>

                </Col>

            </Row>


        </>

    )
};

export default AvionicsHome