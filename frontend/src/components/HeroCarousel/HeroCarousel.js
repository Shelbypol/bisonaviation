import React from 'react'
import {Row, Col} from 'reactstrap';
import img1 from '../../images/bg-graphics/graphics/fs-slider-caption-bg-dark.png'
import {Carousel} from "react-bootstrap"
import Slide from "react-reveal/Slide";
import SocialIcons from "../SocialIcons/SocialIcons";
import './HeroCarousel.css';


const HeroCarousel = (
    {
        IDslide1,
        slide1firstTitleLetter,
        slide1firstTitleWord,
        slide1firstSentence,
        slide1secondSentenceTrue,
        slide1secondSentence,

        IDslide2,
        carouselImg2True,
        slide2firstTitleLetter,
        slide2firstTitleWord,
        slide2firstSentence,
        slide2secondSentenceTrue,
        slide2secondSentence,

        IDslide3,
        carouselImg3True,
        slide3firstTitleLetter,
        slide3firstTitleWord,
        slide3firstSentence,
        slide3secondSentenceTrue,
        slide3secondSentence,

        IDslide4,
        carouselImg4True,
        slide4firstTitleLetter,
        slide4firstTitleWord,
        slide4firstSentence,
        slide4secondSentenceTrue,
        slide4secondSentence,

        IDslide5,
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
            <Carousel className='h-75'>
                {/*    ================= Img 1 */}
                <Carousel.Item className='ml-2'>
                    <Carousel.Caption>
                        <Row className='HeroCarousel_carousel-text-box  '>

                            <Col md={7} xs={12}
                                 className='HeroCarousel_carousel-text-btm-bar global_blood-red-bg d-flex justify-content-sm-center justify-content-md-start'> </Col>

                                    <Col xs={12}
                                         className='d-flex justify-content-sm-center justify-content-md-start'>
                                        <h1 className='HeroCarousel_carousel-title global_white'>
                                    <span
                                        className='HeroCarousel_carousel-letter global_white'>{slide1firstTitleLetter}</span>{slide1firstTitleWord}
                                        </h1>
                                    </Col>

                                    <Col xs={12}
                                         className='d-flex justify-content-sm-center justify-content-md-start'>
                                        <h3 className='HeroCarousel_carousel-text m-0 p-0 global_white'>{slide1firstSentence}</h3>
                                    </Col>

                                    {slide1secondSentenceTrue && (
                                        <Col xs={12}
                                             className='d-flex justify-content-sm-center justify-content-md-start'>
                                            <h3 className=' HeroCarousel_carousel-text m-0 p-0 global_white'>{slide1secondSentence}</h3>
                                        </Col>
                                    )}

                                    <Col md={7} xs={12}
                                         className='HeroCarousel_carousel-text-btm-bar global_blood-red-bg d-flex justify-content-sm-center justify-content-md-start mt-3'> </Col>

                                    <Col xs={12} className='ml-n3 d-none d-md-block mt-2'>
                                        <SocialIcons/>
                                    </Col>

                            {/*    </Row>*/}
                            {/*</Col>*/}

                        </Row>
                    </Carousel.Caption>

                    <div id={IDslide1} className='HeroCarousel_animation'>
                        <Slide left duration={2500}>
                            <img
                                className='HeroCarousel_carousel-divider-img'
                                src={img1}
                                alt=" "
                                height={'100%'}
                            />
                        </Slide>
                    </div>
                </Carousel.Item>

                {/*    ================= Img 2 */}

                {carouselImg2True && (
                    <Carousel.Item>
                        <Carousel.Caption>
                            <Row className='HeroCarousel_carousel-text-box'>
                                <Col md={5} xs={7}
                                     className='HeroCarousel_carousel-text-top-bar global_blood-red-bg'> </Col>

                                <Col xs={12}
                                     className='d-flex justify-content-sm-center justify-content-md-start align-content-center'>
                                    <h1 className='HeroCarousel_carousel-title global_white'>
                                    <span
                                        className='HeroCarousel_carousel-letter global_white'>{slide2firstTitleLetter}</span>{slide2firstTitleWord}
                                    </h1>
                                </Col>

                                <Col xs={12}
                                     className='d-flex justify-content-sm-center justify-content-md-start align-content-center'>
                                    <h3 className='HeroCarousel_carousel-text m-0 p-0 global_white'>{slide2firstSentence}</h3>
                                </Col>

                                {slide2secondSentenceTrue && (
                                    <Col xs={12}
                                         className='d-flex justify-content-sm-center justify-content-md-start align-content-center'>
                                        <h3 className='HeroCarousel_carousel-text m-0 p-0 global_white'>{slide2secondSentence}</h3>
                                    </Col>
                                )}

                                <Col md={7} xs={10} className='HeroCarousel_carousel-text-btm-bar global_red-bg'> </Col>
                                <Col xs={12} className='ml-n3 d-none d-md-block'>
                                    <SocialIcons/>
                                </Col>
                            </Row>
                        </Carousel.Caption>

                        <div id={IDslide2} className='HeroCarousel_animation'>
                            {/*<Slide left duration={2500}>*/}
                            <img
                                className='HeroCarousel_carousel-divider-img '
                                src={img1}
                                alt=" "
                                height={'100%'}
                            />
                            {/*</Slide>*/}
                        </div>
                    </Carousel.Item>
                )}

                {/*    ================= Img 3 */}

                {carouselImg3True && (
                    <Carousel.Item>
                        <Carousel.Caption>
                            <Row className='HeroCarousel_carousel-text-box'>
                                <Col md={5} xs={7} className='global_carousel-text-top-bar global_blood-red-bg'> </Col>

                                <Col xs={12}
                                     className='d-sm-flex justify-content-sm-center justify-content-md-start align-content-center '>
                                    <h1 className='HeroCarousel_carousel-title global_white'>
                                    <span
                                        className='HeroCarousel_carousel-letter global_white'>{slide3firstTitleLetter}</span>{slide3firstTitleWord}
                                    </h1>
                                </Col>

                                <Col xs={12}
                                     className='d-sm-flex justify-content-sm-center justify-content-md-start align-content-center '>
                                    <h3 className='HeroCarousel_carousel-text m-0 p-0 global_white'>{slide3firstSentence}</h3>
                                </Col>

                                {slide3secondSentenceTrue && (
                                    <Col xs={12}
                                         className='d-sm-flex justify-content-sm-center justify-content-md-start align-content-center '>
                                        <h3 className='HeroCarousel_carousel-text m-0 p-0 global_white'>{slide3secondSentence}</h3>
                                    </Col>
                                )}

                                <Col md={7} xs={10}
                                     className='HeroCarousel_carousel-text-btm-bar global_blood-red-bg'> </Col>
                                <Col xs={12} className='ml-n3 HeroCarousel_carousel-social-icons d-none d-md-block'>
                                    <SocialIcons/>
                                </Col>
                            </Row>
                        </Carousel.Caption>

                        <div id={IDslide3} className='HeroCarousel_animation'>
                            <img
                                className='HeroCarousel_carousel-divider-img '
                                src={img1}
                                alt=" "
                                height={'100%'}
                            />
                        </div>
                    </Carousel.Item>
                )}


                {/*    ================= Img 4 */}
                {carouselImg4True && (
                    <Carousel.Item>
                        <Carousel.Caption>
                            <Row className='HeroCarousel_carousel-text-box'>
                                <Col md={5} xs={7}
                                     className='HeroCarousel_carousel-text-top-bar global_blood-red-bg'> </Col>

                                <Col xs={12}
                                     className='d-sm-flex justify-content-sm-center justify-content-md-start align-content-center '>
                                    <h1 className='HeroCarousel_carousel-title global_white'>
                                    <span
                                        className='HeroCarousel_carousel-letter global_white'>{slide4firstTitleLetter}</span>{slide4firstTitleWord}
                                    </h1>
                                </Col>

                                <Col xs={12}
                                     className='d-sm-flex justify-content-sm-center justify-content-md-start align-content-center '>
                                    <h3 className='HeroCarousel_carousel-text m-0 p-0 global_white'>{slide4firstSentence}</h3>
                                </Col>

                                {slide4secondSentenceTrue && (
                                    <Col xs={12}
                                         className='d-sm-flex justify-content-sm-center justify-content-md-start align-content-center '>
                                        <h3 className='HeroCarousel_carousel-text m-0 p-0 global_white'>{slide4secondSentence}</h3>
                                    </Col>
                                )}

                                <Col md={7} xs={10}
                                     className='HeroCarousel_carousel-text-btm-bar global_blood-red-bg'> </Col>
                                <Col xs={12} className='ml-n3 d-none d-md-block'>
                                    <SocialIcons/>
                                </Col>
                            </Row>
                        </Carousel.Caption>

                        <div id={IDslide4} className='HeroCarousel_animation'>
                            <img
                                className='HeroCarousel_carousel-divider-img '
                                src={img1}
                                alt=" "
                                height={'100%'}
                            />
                        </div>
                    </Carousel.Item>
                )}

                {/*    ================= Img 5 */}

                {carouselImg5True && (
                    <Carousel.Item>
                        <Carousel.Caption>
                            <Row className='HeroCarousel_carousel-text-box'>
                                <Col md={5} xs={7}
                                     className='HeroCarousel_carousel-text-top-bar global_blood-red-bg'> </Col>

                                <Col xs={12}
                                     className='d-sm-flex justify-content-sm-center justify-content-md-start align-content-center'>
                                    <h1 className='HeroCarousel_carousel-title global_white'>
                                    <span
                                        className='HeroCarousel_carousel-letter global_white'>{slide5firstTitleLetter}</span>{slide5firstTitleWord}
                                    </h1>
                                </Col>

                                <Col xs={12}
                                     className='d-sm-flex justify-content-sm-center justify-content-md-start align-content-center'>
                                    <h3 className='HeroCarousel_carousel-text m-0 p-0 global_white'>{slide5firstSentence}</h3>
                                </Col>

                                {slide5secondSentenceTrue && (
                                    <Col xs={12}
                                         className='d-sm-flex justify-content-sm-center justify-content-md-start align-content-center '>
                                        <h3 className='HeroCarousel_carousel-text m-0 p-0 global_white'>{slide5secondSentence}</h3>
                                    </Col>
                                )}

                                <Col md={7} xs={10} className='HeroCarousel_carousel-text-btm-bar global_red-bg'> </Col>
                                <Col xs={12} className='ml-n3 d-none d-md-block'>
                                    <SocialIcons/>
                                </Col>
                            </Row>
                        </Carousel.Caption>

                        <div id={IDslide5} className='HeroCarousel_animation'>
                            <img
                                className='HeroCarousel_carousel-divider-img '
                                src={img1}
                                alt=" "
                                height={'100%'}
                            />
                        </div>
                    </Carousel.Item>
                )}

            </Carousel>
        </>
    );
};

export default HeroCarousel;