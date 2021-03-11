import React from 'react';
import {Row, Col} from 'reactstrap';
import '../../style/animations.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {Carousel} from "react-bootstrap";


const HeroCarousel = () => {


    return (
        <>

            <Carousel style={{height: '500px', overflow: 'hidden'}} className=''>
                <Carousel.Item className='bg-transparent border-bottom border-5 border-dark '>
                    <Carousel.Caption>
                        <Row className='global_text-box'>
                            <Zoom>
                                <Col xs={6}
                                     className=' d-flex justify-content-start align-content-center '>
                                    <h1 className='global_title text-center ml-n2 global_cultured'>
                                        <span className='global_letter global_cultured'>M</span>aintenance
                                    </h1>
                                </Col>
                            </Zoom>
                            <Col xs={12} className='d-flex justify-content-start'>
                                <h3 className='text-center m-0 p-0 global_cultured'>we work hard on the ground</h3>
                            </Col>
                            <Col xs={12} className='d-flex justify-content-start'>
                                <h3 className='text-center m-0 p-0 global_cultured'>so you can fly with confidence
                                    <Fade duration={5000}>
                                        <div className='d-inline'>
                                        </div>
                                    </Fade>
                                </h3>
                            </Col>
                        </Row>
                    </Carousel.Caption>

                    <div className='animations_img-hover-zoom-in global_dots'>
                        <img
                            className=' '
                            src={}
                            alt="First slide"
                            height={'100%'}
                        />
                    </div>
                </Carousel.Item>


            </Carousel>
        </>

    )
};
export default HeroCarousel