import React from "react";
import {Button, Col, Row, Card, Container, Jumbotron, Image} from "react-bootstrap";
import '../../style/2/AvionicsHome.css';
import test from '../../images/bg-graphics/screen-avionics/avionics/avionics-hero-img.png'
import tayseer from '../../images/bg-graphics/screen-avionics/avionics/tayseer-avionics.png'
import {LinkContainer} from "react-router-bootstrap";
import Zoom from "react-reveal/Zoom";


const AvionicsHome = () => {

    return (
        <>
            <Row className=' m-0 d-flex justify-content-center'>
                <Col xs={12} className='AvionicsHome_image m-0'> </Col>
                {/*<Col xs={12} className='AvionicsHome_overlay m-0'> </Col>*/}
                <Col xs={9}
                     className='AvionicsHome_title-col d-flex justify-content-center align-content-center'>
                    <h1 className='AvionicsHome_title text-white'>Avionics</h1>
                </Col>
            </Row>
            <Row className='AvionicsHome_row  m-0 d-flex justify-content-center'>
                <Col xs={9}
                     className='AvionicsHome_text p-3 mt-n5 d-flex justify-content-center align-content-center'>
                    <p className='text-center px-5'>
                        Whether you need to add ADS-B OUT capabilities in order to meet the December
                        31,
                        2019 deadline, a routine pitot-static / transponder certification, or it's
                        time
                        for a completely new panel, Bison Aviation's Avionics Team is ready to bring
                        your avionics systems into the 21st century!
                        <br/>
                        <Button href="/avionics" className='py-1 px-2 border-0 mt-3 rounded-pill Services_link'>learn
                            more
                        </Button>
                    </p>

                </Col>

                <Col xs={9} className=' mt-5'>
                    <Row className='mb-4'>
                        <Col xs={4}
                             className=' global_cursor d-flex justify-content-center'>
                                <i className='global_blood-red Services_icon far fa-tools'> </i>
                        </Col>
                        <Col xs={4}
                             className=' global_cursor d-flex justify-content-center'>
                                <i className='global_blood-red Services_icon far fa-tools'> </i>
                        </Col>
                        <Col xs={4}
                             className=' global_cursor d-flex justify-content-center'>
                                <i className='global_blood-red Services_icon far fa-tools'> </i>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}
                             className=' global_cursor d-flex justify-content-center'>
                            <Zoom>
                                <h5 className='text-white'>Custom Panels</h5>
                            </Zoom>
                        </Col>


                        <Col xs={4}
                             className=' global_cursor d-flex justify-content-center'>
                            <Zoom>
                                <h5 className='text-white'>In-Depth Tests & Checks</h5>
                            </Zoom>
                        </Col>


                        <Col xs={4}
                             className=' global_cursor d-flex justify-content-center'>
                            <Zoom>
                                <h5 className='text-white'> Software Updates</h5>
                            </Zoom>
                        </Col>
                    </Row>


                </Col>

                {/*<hr className='global_blood-red-bg h-25'/>*/}

                {/*<Col xs={9} className='mt-3'>*/}
                {/*    <h6 className='pt-3 text-white text-center'>*/}

                {/*        FROM MINOR REPAIRS TO COMPLETE PANEL UPGRADES.*/}
                {/*        ALL SERVICES PERFORMED IN-HOUSE AT BISON AVIATION.*/}

                {/*    </h6>*/}
                {/*</Col>*/}


                <Col xs={9} className='mt-5' style={{backgroundColor: 'rgba(0,0,0,.5)'}}>
                    <Row className=''>
                        <Col xs={4} className=' p-0'>
                            <Image className=' AvionicsHome_img pr-2' src={tayseer} fluid/>
                        </Col>
                        <Col xs={8} className='p-0'>
                            <Image className=' AvionicsHome_img' src={test} fluid/>
                        </Col>
                    </Row>
                    <Row className=''>
                        <Col xs={8} className='p-0'>
                            <Image className=' AvionicsHome_img pt-2' src={test} fluid/>
                        </Col>
                        <Col xs={4} className=' p-0 '>
                            <Image className='AvionicsHome_img pl-2 pt-2' src={tayseer} fluid/>
                        </Col>
                    </Row>
                </Col>


                {/*</Row>*/}
                {/*</Col>*/}

            </Row>


            {/*</Container>*/}

        </>

    )
};

export default AvionicsHome