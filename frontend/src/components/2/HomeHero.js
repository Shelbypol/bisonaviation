import React from 'react';
import {Jumbotron, Row, Col} from 'reactstrap';
import '../../style/2/HomeHero.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import img1 from '../../images/bg-graphics/avionics/avionics-hero-img.png'
import img2 from '../../images/bg-graphics/avionics/avionics-hero-img-overlay.png'
import img3 from '../../images/bg-graphics/flir/flir-jumbo-img.png'
import {Carousel} from "react-bootstrap"

const HomeHero = () => {
    return (
        <>
            <Carousel style={{height: '500px'}}>
                <Carousel.Item className='bg-transparent border'>
                    <Carousel.Caption className=' bg-transparent border'>
                        {/*<Jumbotron className=' m-0 p-0 d-flex align-items-center' fluid>*/}
                            <Row className='HomeHero_text-box'>
                                <Zoom>
                                    {/*<Col xs={12} className='global_blood-red-bg'> </Col>*/}
                                    <Col xs={6} className=' d-flex justify-content-start align-content-center bg-transparent'>
                                        <h1 className='HomeHero_title text-center ml-n2 global_cultured'>
                                            <span className='HomeHero_letter global_cultured'>B</span>ison
                                            &nbsp;
                                            <span className='HomeHero_letter mr-n2 global_cultured'>A</span>viation
                                        </h1>
                                    </Col>
                                </Zoom>
                                <Col xs={12} className='d-flex justify-content-start'>
                                    <h3 className='text-center m-0 p-0 global_cultured'>we work hard on the ground</h3>
                                </Col>
                                <Col xs={12} className='d-flex justify-content-start'>
                                    <h3 className='text-center m-0 p-0 global_cultured'>so you can
                                        <Fade duration={5000}>
                                            <div className='d-inline'>
                                <span className='global_silver-chalice font-weight-bolder HomeHero_span'>&nbsp;
                                    <i>fly with confidence</i>
                                </span>
                                            </div>
                                        </Fade>
                                    </h3>
                                </Col>
                            </Row>
                        {/*</Jumbotron>*/}

                    </Carousel.Caption>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="First slide"
                        height={'500px'}
                    />
                </Carousel.Item>





                {/*<Carousel.Item>*/}
                {/*    <img*/}
                {/*        className="d-block w-100"*/}
                {/*        src={img2}*/}
                {/*        alt="First slide"*/}
                {/*        height={'500px'}*/}
                {/*    />*/}
                {/*    <Carousel.Caption>*/}
                {/*        /!*<Jumbotron className=' m-0 p-0 d-flex align-items-center' fluid>*!/*/}
                {/*            <Row className='HomeHero_text-box'>*/}
                {/*                <Zoom>*/}
                {/*                    <Col xs={6} className=' d-flex justify-content-start align-content-center'>*/}
                {/*                        <h1 className='HomeHero_title text-center ml-n2 global_cultured'>*/}
                {/*                            <span className='HomeHero_letter global_blood-red global_cultured'>B</span>ison*/}
                {/*                            &nbsp;*/}
                {/*                            <span className='HomeHero_letter global_blood-red mr-n2 global_cultured'>A</span>viation*/}

                {/*                        </h1>*/}
                {/*                    </Col>*/}
                {/*                </Zoom>*/}
                {/*                <Col xs={12} className='d-flex justify-content-start'>*/}
                {/*                    <h3 className='text-center m-0 p-0 global_cultured'>we work hard on the ground</h3>*/}
                {/*                </Col>*/}
                {/*                <Col xs={12} className='d-flex justify-content-start'>*/}
                {/*                    <h3 className='text-center m-0 p-0 global_cultured'>so you can*/}
                {/*                        <Fade duration={5000}>*/}
                {/*                            <div className='d-inline'>*/}
                {/*                <span*/}
                {/*                    className='global_silver-chalice font-weight-bolder HomeHero_span'>*/}
                {/*                    <i> fly with confidence</i>*/}
                {/*                </span>*/}
                {/*                            </div>*/}
                {/*                        </Fade>*/}
                {/*                    </h3>*/}
                {/*                </Col>*/}
                {/*            </Row>*/}
                {/*        /!*</Jumbotron>*!/*/}
                {/*    </Carousel.Caption>*/}
                {/*</Carousel.Item>*/}


                {/*<Carousel.Item>*/}
                {/*    <img*/}
                {/*        className="d-block w-100"*/}
                {/*        src={img3}*/}
                {/*        alt="First slide"*/}
                {/*        height={'500px'}*/}
                {/*    />*/}
                {/*    <Carousel.Caption>*/}
                {/*        /!*<Jumbotron className=' m-0 p-0 d-flex align-items-center' fluid>*!/*/}
                {/*            <Row className='HomeHero_text-box'>*/}
                {/*                <Zoom>*/}
                {/*                    <Col xs={6} className=' d-flex justify-content-start align-content-center'>*/}
                {/*                        <h1 className='HomeHero_title text-center ml-n 2 global_cultured'>*/}
                {/*                            <span className='HomeHero_letter global_cultured'>B</span>ison*/}
                {/*                            &nbsp;*/}
                {/*                            <span className='HomeHero_letter global_cultured mr-n2'>A</span>viation*/}

                {/*                        </h1>*/}
                {/*                    </Col>*/}
                {/*                </Zoom>*/}
                {/*                <Col xs={12} className='d-flex justify-content-start'>*/}
                {/*                    <h3 className='text-center m-0 p-0 global_cultured'>we work hard on the ground</h3>*/}
                {/*                </Col>*/}
                {/*                <Col xs={12} className='d-flex justify-content-start'>*/}
                {/*                    <h3 className='text-center m-0 p-0 global_cultured'>so you can*/}
                {/*                        <Fade duration={5000}>*/}
                {/*                            <div className='d-inline'>*/}
                {/*                <span*/}
                {/*                    className='global_silver-chalice font-weight-bolder HomeHero_span'>*/}
                {/*                    <i> fly with confidence</i>*/}
                {/*                </span>*/}
                {/*                            </div>*/}
                {/*                        </Fade>*/}
                {/*                    </h3>*/}
                {/*                </Col>*/}
                {/*            </Row>*/}
                {/*        /!*</Jumbotron>*!/*/}
                {/*    </Carousel.Caption>*/}
                {/*</Carousel.Item>*/}
            </Carousel>

        </>
    );
};

export default HomeHero;