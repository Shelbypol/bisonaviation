import React from 'react'
import {Row, Col} from 'reactstrap';
import img1 from '../images/bg-graphics/fs-slider-caption-bg.png'
// import img1 from '../../../images/bg-graphics/screen-maintenance/maintenance1.jpg'
import img2 from '../images/bg-graphics/screen-maintenance/maintenance2.png'
import img4 from '../images/bg-graphics/screen-maintenance/maintenance4.png'
import img5 from '../images/bg-graphics/screen-maintenance/maintenance5.png'
import dots from '../images/bg-graphics/fs-slider-dots3.png'
import {Carousel} from "react-bootstrap"
import Slide from "react-reveal/Slide";


const HeroCarousel = (
    {
        firstTitleLetter,
        firstTitleWord,
        firstSentence,
        secondSentence,
        secondSentenceTrue,
        carouselImg2True,
        carouselImg3True,
        carouselImg4True,
        carouselImg5True

    }
) => {
    return (
        <>
            <Carousel>

                {/*    ================= Img 1 */}
                <Carousel.Item className='border-bottom border-5 border-dark'>
                    <Carousel.Caption>
                        <Row className='global_carousel-text-box'>
                            <Col md={5} xs={7} className='global_carousel-text-top-bar global_blood-red-bg'> </Col>

                            <Col xs={12}
                                 className='d-flex justify-content-start align-content-center '>
                                <h1 className='global_carousel-title ml-n2 global_cultured'>
                                    <span
                                        className='global_carousel-letter global_cultured'>{firstTitleLetter}</span>{firstTitleWord}
                                </h1>
                            </Col>

                            <Col xs={12} className=' d-flex justify-content-start'>
                                <h3 className='global_carousel-text m-0 p-0 global_cultured'>{firstSentence}</h3>
                            </Col>

                            {secondSentenceTrue && (
                                <Col xs={12} className='d-flex justify-content-start'>
                                    <h3 className='global_carousel-text m-0 p-0 global_cultured'>{secondSentence}</h3>
                                </Col>
                            )}

                            <Col md={7} xs={10} className='global_carousel-text-btm-bar global_blood-red-bg'> </Col>
                        </Row>
                    </Carousel.Caption>

                    <div className='carouselImg1'>
                        <Slide left duration={2500}>
                            <img
                                className='global_carousel-divider-img'
                                src={img1}
                                alt=" "
                                height={'100%'}
                            />
                        </Slide>
                    </div>
                </Carousel.Item>

                {/*    ================= Img 2 */}

                {carouselImg2True && (
                    <Carousel.Item className='border-bottom border-5 border-dark'>
                        <Carousel.Caption>
                            <Row className='global_carousel-text-box'>
                                <Col md={5} xs={7} className='global_carousel-text-top-bar global_blood-red-bg'> </Col>

                                <Col xs={12}
                                     className='d-flex justify-content-start align-content-center '>
                                    <h1 className='global_carousel-title ml-n2 global_cultured'>
                                    <span
                                        className='global_carousel-letter global_cultured'>{firstTitleLetter}</span>{firstTitleWord}
                                    </h1>
                                </Col>

                                <Col xs={12} className=' d-flex justify-content-start'>
                                    <h3 className='global_carousel-text m-0 p-0 global_cultured'>{firstSentence}</h3>
                                </Col>

                                <Col xs={12} className='d-flex justify-content-start'>
                                    <h3 className='global_carousel-text m-0 p-0 global_cultured'>{secondSentence}</h3>
                                </Col>

                                <Col md={7} xs={10} className='global_carousel-text-btm-bar global_blood-red-bg'> </Col>
                            </Row>
                        </Carousel.Caption>

                        <div className='carouselImg2'>
                            <Slide left duration={2500}>
                                <img
                                    className='global_carousel-divider-img '
                                    src={img1}
                                    alt=" "
                                    height={'100%'}
                                />
                            </Slide>
                        </div>
                    </Carousel.Item>
                )}

                {/*    ================= Img 3 */}

                {carouselImg3True && (
                    <Carousel.Item className='border-bottom border-5 border-dark'>
                        <Carousel.Caption>
                            <Row className='global_carousel-text-box'>
                                <Col md={5} xs={7} className='global_carousel-text-top-bar global_blood-red-bg'> </Col>

                                <Col xs={12}
                                     className='d-flex justify-content-start align-content-center '>
                                    <h1 className='global_carousel-title ml-n2 global_cultured'>
                                    <span
                                        className='global_carousel-letter global_cultured'>{firstTitleLetter}</span>{firstTitleWord}
                                    </h1>
                                </Col>

                                <Col xs={12} className=' d-flex justify-content-start'>
                                    <h3 className='global_carousel-text m-0 p-0 global_cultured'>{firstSentence}</h3>
                                </Col>

                                <Col xs={12} className='d-flex justify-content-start'>
                                    <h3 className='global_carousel-text m-0 p-0 global_cultured'>{secondSentence}</h3>
                                </Col>

                                <Col md={7} xs={10} className='global_carousel-text-btm-bar global_blood-red-bg'> </Col>
                            </Row>
                        </Carousel.Caption>

                        <div className='carouselImg3'>
                            <Slide left duration={2500}>
                                <img
                                    className='global_carousel-divider-img '
                                    src={img1}
                                    alt=" "
                                    height={'100%'}
                                />
                            </Slide>
                        </div>
                    </Carousel.Item>
                )}


                {/*    ================= Img 4 */}


                {carouselImg4True && (
                    <Carousel.Item className='border-bottom border-5 border-dark'>
                        <Carousel.Caption>
                            <Row className='global_carousel-text-box'>
                                <Col md={5} xs={7} className='global_carousel-text-top-bar global_blood-red-bg'> </Col>

                                <Col xs={12}
                                     className='d-flex justify-content-start align-content-center '>
                                    <h1 className='global_carousel-title ml-n2 global_cultured'>
                                    <span
                                        className='global_carousel-letter global_cultured'>{firstTitleLetter}</span>{firstTitleWord}
                                    </h1>
                                </Col>

                                <Col xs={12} className=' d-flex justify-content-start'>
                                    <h3 className='global_carousel-text m-0 p-0 global_cultured'>{firstSentence}</h3>
                                </Col>

                                <Col xs={12} className='d-flex justify-content-start'>
                                    <h3 className='global_carousel-text m-0 p-0 global_cultured'>{secondSentence}</h3>
                                </Col>

                                <Col md={7} xs={10} className='global_carousel-text-btm-bar global_blood-red-bg'> </Col>
                            </Row>
                        </Carousel.Caption>

                        <div className='carouselImg4'>
                            <Slide left duration={2500}>
                                <img
                                    className='global_carousel-divider-img '
                                    src={img1}
                                    alt=" "
                                    height={'100%'}
                                />
                            </Slide>
                        </div>
                    </Carousel.Item>
                )}

                {/*    ================= Img 5 */}

                {carouselImg5True && (
                    <Carousel.Item className='border-bottom border-5 border-dark'>
                        <Carousel.Caption>
                            <Row className='global_carousel-text-box'>
                                <Col md={5} xs={7} className='global_carousel-text-top-bar global_blood-red-bg'> </Col>

                                <Col xs={12}
                                     className='d-flex justify-content-start align-content-center '>
                                    <h1 className='global_carousel-title ml-n2 global_cultured'>
                                    <span
                                        className='global_carousel-letter global_cultured'>{firstTitleLetter}</span>{firstTitleWord}
                                    </h1>
                                </Col>

                                <Col xs={12} className=' d-flex justify-content-start'>
                                    <h3 className='global_carousel-text m-0 p-0 global_cultured'>{firstSentence}</h3>
                                </Col>

                                <Col xs={12} className='d-flex justify-content-start'>
                                    <h3 className='global_carousel-text m-0 p-0 global_cultured'>{secondSentence}</h3>
                                </Col>

                                <Col md={7} xs={10} className='global_carousel-text-btm-bar global_blood-red-bg'> </Col>
                            </Row>
                        </Carousel.Caption>

                        <div className='carouselImg5'>
                            <Slide left duration={2500}>
                                <img
                                    className='global_carousel-divider-img '
                                    src={img1}
                                    alt=" "
                                    height={'100%'}
                                />
                            </Slide>
                        </div>
                    </Carousel.Item>
                )}

            </Carousel>
        </>
    );
};

export default HeroCarousel;