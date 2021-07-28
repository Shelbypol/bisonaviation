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
                <Carousel.Item className='HeroCarousel_text-box-margin'>
                    <Carousel.Caption>
                        <Row className='HeroCarousel_carousel-text-box  '>

                            <Col xs={12}
                                 className='d-flex justify-content-center justify-content-md-start'>
                                <h1 className='HeroCarousel_carousel-title global_white'>
                                    <span
                                        className='HeroCarousel_carousel-letter global_white'>{slide1firstTitleLetter}</span>{slide1firstTitleWord}
                                </h1>
                            </Col>

                            <Col md={7} xs={12}
                                 className='HeroCarousel_carousel-text-btm-bar global_blood-red-bg d-block d-md-none p-0 mt-0 mb-3'> </Col>


                            <Col xs={12}
                                 className='d-flex justify-content-sm-center justify-content-md-start'>
                                <h4 className='HeroCarousel_carousel-text m-0 p-0 global_white'>{slide1firstSentence}</h4>
                            </Col>

                            {slide1secondSentenceTrue && (
                                <Col xs={12}
                                     className='d-flex justify-content-sm-center justify-content-md-start'>
                                    <h4 className=' HeroCarousel_carousel-text m-0 p-0 global_white'>{slide1secondSentence}</h4>
                                </Col>
                            )}

                            <Col md={7} xs={12}
                                 className='HeroCarousel_carousel-text-btm-bar global_blood-red-bg d-flex justify-content-sm-center justify-content-md-start mt-3'> </Col>

                            <Col xs={12} className='d-flex justify-content-md-start justify-content-sm-center m-0 p-0'>
                                <SocialIcons/>
                            </Col>


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

                <Carousel.Item className='HeroCarousel_text-box-margin'>
                    <Carousel.Caption>
                        <Row className='HeroCarousel_carousel-text-box  '>

                            <Col xs={12}
                                 className='d-flex justify-content-sm-center justify-content-md-start'>
                                <h1 className='HeroCarousel_carousel-title global_white'>
                                    <span
                                        className='HeroCarousel_carousel-letter global_white'>{slide2firstTitleLetter}</span>{slide2firstTitleWord}
                                </h1>
                            </Col>

                            <Col md={7} xs={12}
                                 className='HeroCarousel_carousel-text-btm-bar global_blood-red-bg d-block d-md-none p-0 mt-0 mb-3'> </Col>


                            <Col xs={12}
                                 className='d-flex justify-content-sm-center justify-content-md-start'>
                                <h4 className='HeroCarousel_carousel-text m-0 p-0 global_white'>{slide2firstSentence}</h4>
                            </Col>

                            {slide2secondSentenceTrue && (
                                <Col xs={12}
                                     className='d-flex justify-content-sm-center justify-content-md-start'>
                                    <h4 className=' HeroCarousel_carousel-text m-0 p-0 global_white'>{slide2secondSentence}</h4>
                                </Col>
                            )}

                            <Col md={7} xs={12}
                                 className='HeroCarousel_carousel-text-btm-bar global_blood-red-bg d-flex justify-content-sm-center justify-content-md-start mt-3'> </Col>

                            <Col xs={12} className='d-flex justify-content-md-start justify-content-sm-center m-0 p-0'>
                                <SocialIcons/>
                            </Col>


                        </Row>
                    </Carousel.Caption>

                    <div id={IDslide2} className='HeroCarousel_animation'>
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


                {/*    ================= Img 3 */}

                <Carousel.Item className='HeroCarousel_text-box-margin'>
                    <Carousel.Caption>
                        <Row className='HeroCarousel_carousel-text-box  '>


                            <Col xs={12}
                                 className='d-flex justify-content-start'>
                                <h1 className='HeroCarousel_carousel-title global_white'>
                                    <span
                                        className='HeroCarousel_carousel-letter global_white'>{slide3firstTitleLetter}</span>{slide3firstTitleWord}
                                </h1>
                            </Col>

                            <Col md={7} xs={12}
                                 className='HeroCarousel_carousel-text-btm-bar global_blood-red-bg d-block d-md-none p-0 mt-0 mb-3'> </Col>


                            <Col xs={12}
                                 className='d-flex justify-content-sm-center justify-content-md-start'>
                                <h4 className='HeroCarousel_carousel-text m-0 p-0 global_white'>{slide3firstSentence}</h4>
                            </Col>

                            {slide3secondSentenceTrue && (
                                <Col xs={12}
                                     className='d-flex justify-content-sm-center justify-content-md-start'>
                                    <h4 className=' HeroCarousel_carousel-text m-0 p-0 global_white'>{slide3secondSentence}</h4>
                                </Col>
                            )}

                            <Col md={7} xs={12}
                                 className='HeroCarousel_carousel-text-btm-bar global_blood-red-bg d-flex justify-content-sm-center justify-content-md-start mt-3'> </Col>

                            <Col xs={12} className='d-flex justify-content-md-start justify-content-sm-center m-0 p-0'>
                                <SocialIcons/>
                            </Col>


                        </Row>
                    </Carousel.Caption>

                    <div id={IDslide3} className='HeroCarousel_animation'>
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


                {/*    ================= Img 4 */}


                <Carousel.Item className='HeroCarousel_text-box-margin'>
                    <Carousel.Caption>
                        <Row className='HeroCarousel_carousel-text-box  '>

                            <Col xs={12}
                                 className='d-flex justify-content-sm-center justify-content-md-start'>
                                <h1 className='HeroCarousel_carousel-title global_white'>
                                    <span
                                        className='HeroCarousel_carousel-letter global_white'>{slide4firstTitleLetter}</span>{slide4firstTitleWord}
                                </h1>
                            </Col>

                            <Col md={7} xs={12}
                                 className='HeroCarousel_carousel-text-btm-bar global_blood-red-bg d-block d-md-none p-0 mt-0 mb-3'> </Col>


                            <Col xs={12}
                                 className='d-flex justify-content-sm-center justify-content-md-start'>
                                <h4 className='HeroCarousel_carousel-text m-0 p-0 global_white'>{slide4firstSentence}</h4>
                            </Col>

                            {slide4secondSentenceTrue && (
                                <Col xs={12}
                                     className='d-flex justify-content-sm-center justify-content-md-start'>
                                    <h4 className=' HeroCarousel_carousel-text m-0 p-0 global_white'>{slide4secondSentence}</h4>
                                </Col>
                            )}

                            <Col md={7} xs={12}
                                 className='HeroCarousel_carousel-text-btm-bar global_blood-red-bg d-flex justify-content-sm-center justify-content-md-start mt-3'> </Col>

                            <Col xs={12} className='d-flex justify-content-md-start justify-content-sm-center m-0 p-0'>
                                <SocialIcons/>
                            </Col>

                        </Row>
                    </Carousel.Caption>

                    <div id={IDslide4} className='HeroCarousel_animation'>
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


                {/*    ================= Img 5 */}
                {carouselImg5True && (
                    <Carousel.Item className='HeroCarousel_text-box-margin'>
                        <Carousel.Caption>
                            <Row className='HeroCarousel_carousel-text-box  '>

                                <Col xs={12}
                                     className='d-flex justify-content-sm-center justify-content-md-start'>
                                    <h1 className='HeroCarousel_carousel-title global_white'>
                                    <span className='HeroCarousel_carousel-letter global_white'>{slide5firstTitleLetter}</span>
                                        {slide5firstTitleWord}
                                    </h1>
                                </Col>

                                <Col md={7} xs={12}
                                     className='HeroCarousel_carousel-text-btm-bar global_blood-red-bg d-block d-md-none p-0 mt-0 mb-3'> </Col>


                                <Col xs={12}
                                     className='d-flex justify-content-sm-center justify-content-md-start'>
                                    <h4 className='HeroCarousel_carousel-text m-0 p-0 global_white'>{slide5firstSentence}</h4>
                                </Col>

                                {slide5secondSentenceTrue && (
                                    <Col xs={12}
                                         className='d-flex justify-content-sm-center justify-content-md-start'>
                                        <h4 className=' HeroCarousel_carousel-text m-0 p-0 global_white'>{slide5secondSentence}</h4>
                                    </Col>
                                )}

                                <Col md={7} xs={12}
                                     className='HeroCarousel_carousel-text-btm-bar global_blood-red-bg d-flex justify-content-sm-center justify-content-md-start mt-3'> </Col>

                                <Col xs={12} className='d-flex justify-content-md-start justify-content-sm-center m-0 p-0'>
                                    <SocialIcons/>
                                </Col>


                            </Row>
                        </Carousel.Caption>

                        <div id={IDslide5} className='HeroCarousel_animation'>
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
                )}

            </Carousel>
        </>
    );
};

export default HeroCarousel;