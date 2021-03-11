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
            <Carousel style={{height: '350px', overflow: 'hidden'}} className=''>
                <Carousel.Item className='bg-transparent border-bottom border-5 border-dark '>
                    <Carousel.Caption>
                        <Row className='MechanicsHero_text-box'>
                            <Zoom>
                                <Col xs={6}
                                     className=' d-flex justify-content-start align-content-center '>
                                    <h1 className='MechanicsHero_title text-center ml-n2 global_cultured'>
                                        <span className='MechanicsHero_letter global_cultured'>M</span>aintenance
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

                    <div className='animations_img-hover-zoom-in MechanicsScreen_dots'>
                            <img
                                className=' '
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
