import React from "react";
import {Button, Col, Row, Card, Container, Jumbotron, Image} from "react-bootstrap";
import '../../style/2/AvionicsHome.css';
import test from '../../images/bg-graphics/screen-avionics/avionics/avionics-hero-img.png'
// import tayseer from '../../images/bg-graphics/screen-avionics/avionics-slider/avionics2.png'
import tests from '../../images/bg-graphics/screen-avionics/avionics-slider/avionics4.png'
import roel from '../../images/bg-graphics/screen-avionics/avionics-slider/avionics2.png'
import tayseer from '../../images/bg-graphics/screen-avionics/avionics/tayseer-avionics.png'
import {LinkContainer} from "react-router-bootstrap";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const AvionicsHome = () => {

    return (
        <>
            {/*<Row className='mt-5 d-flex justify-content-center'>*/}
            {/*    <Col xs={12} className='AvionicsHome_image m-0'> </Col>*/}
            {/*</Row>*/}

            <Row className='AvionicsHome_row d-flex justify-content-center align-content-center'>
                <Col xs={9} className='AvionicsHome_bg pb-5'>
                    <Row className='d-flex justify-content-center'>
                        {/*<Fade top>*/}
                            <Col xs={12}
                                 className=' AvionicsHome_title-col pb-5 d-flex justify-content-center align-content-center'>
                                <h1 className='AvionicsHome_title text-white'>Avionics</h1>
                            </Col>
                        {/*</Fade>*/}
                        <Fade top>
                            <Col xs={12}
                                 className='p-3 d-flex justify-content-center align-content-center'>
                                <p className='text-center px-5'>
                                    Whether you need to add ADS-B OUT capabilities in order to meet the December
                                    31,
                                    2019 deadline, a routine pitot-static / transponder certification, or it's
                                    time
                                    for a completely new panel, Bison Aviation's Avionics Team is ready to bring
                                    your avionics systems into the 21st century!
                                    <br/>
                                    <Button href="/avionics"
                                            className='py-1 px-2 border-0 mt-3 rounded-pill AvionicsHome_link'>learn
                                        more
                                    </Button>
                                </p>

                            </Col>
                        </Fade>
                        <Fade top>

                            <Col xs={12} className='mb-5 mt-3'>
                                <Row className='mb-4'>
                                    <Col xs={4}
                                         className='global_cursor d-flex justify-content-center'>
                                        <i className=' rounded-circle AvionicsHome_icon far fa-tools'> </i>
                                    </Col>
                                    <Col xs={4}
                                         className=' global_cursor d-flex justify-content-center'>
                                        <i className='  rounded-circle AvionicsHome_icon far fa-tools'> </i>
                                    </Col>
                                    <Col xs={4}
                                         className='global_cursor d-flex justify-content-center'>
                                        <i className=' rounded-circle  AvionicsHome_icon far fa-tools'> </i>
                                    </Col>
                                </Row>


                                <Row>
                                    <Col xs={4}
                                         className=' global_cursor d-flex justify-content-center'>
                                        {/*<Zoom>*/}
                                        <h5 className='text-white text-center'>Custom Panels</h5>
                                        {/*</Zoom>*/}
                                    </Col>


                                    <Col xs={4}
                                         className=' global_cursor d-flex justify-content-center'>
                                        {/*<Zoom>*/}
                                        <h5 className='text-white text-center'>In-Depth Tests & Checks</h5>
                                        {/*</Zoom>*/}
                                    </Col>


                                    <Col xs={4}
                                         className=' global_cursor d-flex justify-content-center'>
                                        {/*<Zoom>*/}
                                        <h5 className='text-white text-center'> Software Updates</h5>
                                        {/*</Zoom>*/}
                                    </Col>
                                </Row>


                            </Col>
                        </Fade>

                        {/*<hr className='global_blood-red-bg h-25'/>*/}

                        {/*<Col xs={9} className='mt-3'>*/}
                        {/*    <h6 className='pt-3 text-white text-center'>*/}

                        {/*        FROM MINOR REPAIRS TO COMPLETE PANEL UPGRADES.*/}
                        {/*        ALL SERVICES PERFORMED IN-HOUSE AT BISON AVIATION.*/}

                        {/*    </h6>*/}
                        {/*</Col>*/}


                        <Col xs={10} className=' Avionics_img-col'>
                            <Row className=''>
                                <Col xs={4} className=' p-0'>
                                    <Image className=' AvionicsHome_img pr-3' src={tayseer} fluid/>
                                </Col>
                                <Col xs={8} className='p-0'>
                                    <Image className=' AvionicsHome_img' src={tests} fluid/>
                                </Col>
                            </Row>
                            <Row className=''>
                                <Col xs={8} className='p-0'>
                                    <Image className=' AvionicsHome_img pt-3' src={roel} fluid/>
                                </Col>
                                <Col xs={4} className=' p-0 '>
                                    <Image className='AvionicsHome_img pl-3 pt-3' src={tayseer} fluid/>
                                </Col>
                            </Row>
                        </Col>


                    </Row>
                </Col>

            </Row>


            {/*</Container>*/}

        </>

    )
};

export default AvionicsHome