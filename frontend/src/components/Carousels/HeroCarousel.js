import React from 'react'
import {Row, Col} from 'reactstrap';
import img1 from '../../images/bg-graphics/graphics/fs-slider-caption-bg-dark.png'
import {Carousel, Nav, Navbar} from "react-bootstrap"
import Slide from "react-reveal/Slide";
import {LinkContainer} from "react-router-bootstrap";
import logo from "../../images/bg-graphics/graphics/Final-Logo-Horizontal.png";
import SocialIcons from "../SocialIcons";
import '../../style/HeroCarousel.css';


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
                <Carousel.Item>
                    <Carousel.Caption>
                        <Row className='global_carousel-text-box'>
                            <Col md={5} xs={7} className='global_carousel-text-top-bar '> </Col>

                            <Col xs={12}
                                 className='d-flex justify-content-start align-content-center '>
                                <h1 className='global_carousel-title global_cultured'>
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

                            <Col md={7} xs={10} className='global_carousel-text-btm-bar'> </Col>

                            <Col xs={12} className='ml-n3'>
                                <SocialIcons/>
                            </Col>
                        </Row>
                    </Carousel.Caption>

                    <div id={IDslide1} className=' global_HeroCarousel-animation'>
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
                    <Carousel.Item>
                        <Carousel.Caption>
                            <Row className='global_carousel-text-box'>
                                <Col md={5} xs={7} className='global_carousel-text-top-bar global_red-bg'> </Col>

                                <Col xs={12}
                                     className='d-flex justify-content-start align-content-center '>
                                    <h1 className='global_carousel-title global_cultured'>
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

                                <Col md={7} xs={10} className='global_carousel-text-btm-bar global_red-bg'> </Col>
                                <Col xs={12} className='ml-n3'>
                                    <SocialIcons/>
                                </Col>
                            </Row>
                        </Carousel.Caption>

                        <div id={IDslide2} className=' global_HeroCarousel-animation'>
                            {/*<Slide left duration={2500}>*/}
                                <img
                                    className='global_carousel-divider-img '
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
                            <Row className='global_carousel-text-box'>
                                <Col md={5} xs={7} className='global_carousel-text-top-bar global_red-bg'> </Col>

                                <Col xs={12}
                                     className='d-flex justify-content-start align-content-center '>
                                    <h1 className='global_carousel-title global_cultured'>
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

                                <Col md={7} xs={10} className='global_carousel-text-btm-bar global_red-bg'> </Col>
                                <Col xs={12} className='ml-n3 global_carousel-social-icons'>
                                    <SocialIcons/>
                                </Col>
                             </Row>
                        </Carousel.Caption>

                        <div id={IDslide3} className=' global_HeroCarousel-animation'>
                            {/*<Slide left duration={2500}>*/}
                                <img
                                    className='global_carousel-divider-img '
                                    src={img1}
                                    alt=" "
                                    height={'100%'}
                                />
                            {/*</Slide>*/}
                        </div>
                    </Carousel.Item>
                )}


                {/*    ================= Img 4 */}


                {carouselImg4True && (
                    <Carousel.Item>
                        <Carousel.Caption>
                            <Row className='global_carousel-text-box'>
                                <Col md={5} xs={7} className='global_carousel-text-top-bar global_red-bg'> </Col>

                                <Col xs={12}
                                     className='d-flex justify-content-start align-content-center '>
                                    <h1 className='global_carousel-title global_cultured'>
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

                                <Col md={7} xs={10} className='global_carousel-text-btm-bar global_red-bg'> </Col>
                                <Col xs={12} className='ml-n3'>
                                    <SocialIcons/>
                                </Col>
                            </Row>
                        </Carousel.Caption>

                        <div id={IDslide4} className='global_HeroCarousel-animation'>
                            {/*<Slide left duration={2500}>*/}
                                <img
                                    className='global_carousel-divider-img '
                                    src={img1}
                                    alt=" "
                                    height={'100%'}
                                />
                            {/*</Slide>*/}
                        </div>
                    </Carousel.Item>
                )}

                {/*    ================= Img 5 */}

                {carouselImg5True && (
                    <Carousel.Item>
                        <Carousel.Caption>
                            <Row className='global_carousel-text-box'>
                                <Col md={5} xs={7} className='global_carousel-text-top-bar global_red-bg'> </Col>

                                <Col xs={12}
                                     className='d-flex justify-content-start align-content-center '>
                                    <h1 className='global_carousel-title global_cultured'>
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

                                <Col md={7} xs={10} className='global_carousel-text-btm-bar global_red-bg'> </Col>
                                <Col xs={12} className='ml-n3'>
                                    <SocialIcons/>
                                </Col>
                            </Row>
                        </Carousel.Caption>

                        <div id={IDslide5} className=' global_HeroCarousel-animation'>
                            {/*<Slide left>*/}
                                <img
                                    className='global_carousel-divider-img '
                                    src={img1}
                                    alt=" "
                                    height={'100%'}
                                />
                            {/*</Slide>*/}
                        </div>
                    </Carousel.Item>
                )}

            </Carousel>
        </>
    );
};

export default HeroCarousel;