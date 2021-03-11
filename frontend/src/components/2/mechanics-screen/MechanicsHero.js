import React from 'react'
import '../../../style/mechanicsScreen/MechanicsHero.css'
import '../../../style/animations.css'
import {Row, Col, Jumbotron} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import img1 from '../../../images/bg-graphics/screen-maintenance/maintenance1.jpg'
import img2 from '../../../images/bg-graphics/screen-maintenance/maintenance2.png'
import img4 from '../../../images/bg-graphics/screen-maintenance/maintenance4.png'
import img5 from '../../../images/bg-graphics/screen-maintenance/maintenance5.png'
import dots from '../../../images/bg-graphics/fs-slider-dots3.png'
import {Carousel} from "react-bootstrap"

const MechanicsHero = () => {
    return (
        <>
            <Carousel style={{height: '500px', overflow: 'hidden'}} className='global_carousel-bg'>
                <Carousel.Item className=' border-bottom border-5 border-dark'>
                    <Carousel.Caption>
                        <Row className='global_text-box'>
                            <Col xs={6} style={{height:'3vh', marginTop: '-3vh'}} className='global_blood-red-bg'> </Col>

                                <Col xs={12}
                                     className='global_carousel-text-bg d-flex justify-content-start align-content-center '>
                                    <h1 className='global_title text-center ml-n2 global_cultured'>
                                        <span className='global_letter global_cultured'>M</span>aintenance
                                    </h1>
                                </Col>

                            <Col xs={12} className='global_carousel-text-bg d-flex justify-content-start'>
                                <h3 className='text-center m-0 p-0 global_cultured'>we work hard on the ground</h3>
                            </Col>

                            <Col xs={12} className='global_carousel-text-bg d-flex justify-content-start'>
                                <h3 className='text-center m-0 p-0 global_cultured'>so you can fly with confidence
                                </h3>
                            </Col>

                            <Col xs={7} style={{height:'3vh', marginTop: '3vh'}} className='global_blood-red-bg'> </Col>
                        </Row>
                    </Carousel.Caption>

                    <div className='animations_img-hover-zoom-in global_caption-bg'>
                        <img
                            className=''
                            src={img1}
                            alt="First slide"
                            height={'100%'}
                        />
                    </div>
                </Carousel.Item>


            </Carousel>
        </>
    );
};

export default MechanicsHero;
