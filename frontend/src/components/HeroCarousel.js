import React from 'react'
import {Row, Col} from 'reactstrap';
import img1 from '../images/bg-graphics/fs-slider-caption-bg.png'
import {Carousel} from "react-bootstrap"
import Slide from "react-reveal/Slide";


const HeroCarousel = (
    {
        slide1firstTitleLetter,
        slide1firstTitleWord,
        slide1firstSentence,
        slide1secondSentenceTrue,
        slide1secondSentence,

        carouselImg2True,
        slide2firstTitleLetter,
        slide2firstTitleWord,
        slide2firstSentence,
        slide2secondSentenceTrue,
        slide2secondSentence,

        carouselImg3True,
        slide3firstTitleLetter,
        slide3firstTitleWord,
        slide3firstSentence,
        slide3secondSentenceTrue,
        slide3secondSentence,

        carouselImg4True,
        slide4firstTitleLetter,
        slide4firstTitleWord,
        slide4firstSentence,
        slide4secondSentenceTrue,
        slide4secondSentence,

        carouselImg5True,
        slide5firstTitleLetter,
        slide5firstTitleWord,
        slide5firstSentence,
        slide5secondSentenceTrue,
        slide5secondSentence,

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
                                        className='global_carousel-letter global_cultured'>{slide1firstTitleLetter}</span>{slide1firstTitleWord}
                                </h1>
                            </Col>

                            <Col xs={12} className=' d-flex justify-content-start'>
                                <h3 className='global_carousel-text m-0 p-0 global_cultured'>{slide1firstSentence}</h3>
                            </Col>

                            {slide1secondSentenceTrue && (
                                <Col xs={12} className='d-flex justify-content-start'>
                                    <h3 className='text-left global_carousel-text m-0 p-0 global_cultured'>{slide1secondSentence}</h3>
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
                slide2
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
                                        className='global_carousel-letter global_cultured'>{slide2firstTitleLetter}</span>{slide2firstTitleWord}
                                    </h1>
                                </Col>

                                <Col xs={12} className=' d-flex justify-content-start'>
                                    <h3 className='global_carousel-text m-0 p-0 global_cultured'>{slide2firstSentence}</h3>
                                </Col>

                                {slide2secondSentenceTrue && (
                                    <Col xs={12} className='d-flex justify-content-start'>
                                        <h3 className='global_carousel-text m-0 p-0 global_cultured'>{slide2secondSentence}</h3>
                                    </Col>
                                )}

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
                                        className='global_carousel-letter global_cultured'>{slide3firstTitleLetter}</span>{slide3firstTitleWord}
                                    </h1>
                                </Col>

                                <Col xs={12} className=' d-flex justify-content-start'>
                                    <h3 className='global_carousel-text m-0 p-0 global_cultured'>{slide3firstSentence}</h3>
                                </Col>

                                {slide3secondSentenceTrue && (
                                    <Col xs={12} className='d-flex justify-content-start'>
                                        <h3 className='global_carousel-text m-0 p-0 global_cultured'>{slide3secondSentence}</h3>
                                    </Col>
                                )}

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
                                        className='global_carousel-letter global_cultured'>{slide4firstTitleLetter}</span>{slide4firstTitleWord}
                                    </h1>
                                </Col>

                                <Col xs={12} className=' d-flex justify-content-start'>
                                    <h3 className='global_carousel-text m-0 p-0 global_cultured'>{slide4firstSentence}</h3>
                                </Col>

                                {slide4secondSentenceTrue && (
                                    <Col xs={12} className='d-flex justify-content-start'>
                                        <h3 className='global_carousel-text m-0 p-0 global_cultured'>{slide4secondSentence}</h3>
                                    </Col>
                                )}

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
                                        className='global_carousel-letter global_cultured'>{slide5firstTitleLetter}</span>{slide5firstTitleWord}
                                    </h1>
                                </Col>

                                <Col xs={12} className=' d-flex justify-content-start'>
                                    <h3 className='global_carousel-text m-0 p-0 global_cultured'>{slide5firstSentence}</h3>
                                </Col>

                                {slide5secondSentenceTrue && (
                                    <Col xs={12} className='d-flex justify-content-start'>
                                        <h3 className='global_carousel-text m-0 p-0 global_cultured'>{slide5secondSentence}</h3>
                                    </Col>
                                )}

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