import React from 'react';
import {Row, Col} from 'reactstrap';
import '../style/animations.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {Carousel} from "react-bootstrap";


const HeroCarousel = (
                      height,
                      firstTitleLetter,
                      firstTitleWord,
                      secondTitleLetter,
                      secondTitleWord,
                      secondTitleTrue,
                      firstLine,
                      secondLine,
                      secondLineTrue,
                      highlightWords,
                      highlightWordsTrue,
                      img,
                      imgHeight,
                      imgAlt
) => {
    return (
        <>

            <Carousel style={{height: {height}, overflow: 'hidden'}}>
                <Carousel.Item className='bg-transparent border-bottom border-5 border-dark '>
                    <Carousel.Caption>
                        <Row className='global_text-box'>
                            <Zoom>
                                <Col xs={6}
                                     className=' d-flex justify-content-start align-content-center '>

                                    {secondTitleTrue ? (
                                        <h1 className='global_title text-center ml-n2 global_cultured'>
                                            <span
                                                className='global_letter global_cultured'>{firstTitleLetter}</span>{firstTitleWord}
                                            <span
                                                className='global_letter mr-n2 global_cultured'>&nbsp; {secondTitleLetter}</span>{secondTitleWord}
                                        </h1>
                                    ) : (
                                        <h1 className='global_title text-center ml-n2 global_cultured'>
                                            <span
                                                className='global_letter global_cultured'>{firstTitleLetter}</span>{firstTitleWord}
                                        </h1>
                                    )}
                                </Col>
                            </Zoom>

                            <Col xs={12} className='d-flex justify-content-start'>
                                <h3 className='text-center m-0 p-0 global_cultured'>{firstLine}</h3>
                            </Col>

                            {secondLineTrue && (
                                <Col xs={12} className='d-flex justify-content-start'>
                                    <h3 className='text-center m-0 p-0 global_cultured'>{secondLine}
                                        <Fade duration={5000}>
                                            <div className='d-inline'>
                                                {highlightWordsTrue && (
                                                    <span
                                                        className='global_carousel-decoration font-weight-bolder global_span'>&nbsp;
                                                        <i>{highlightWords}</i>
                                                    </span>
                                                )}
                                            </div>
                                        </Fade>
                                    </h3>
                                </Col>
                            )}

                        </Row>
                    </Carousel.Caption>

                    <div className='animations_img-hover-zoom-in '>
                        <img
                            className='global_dots '
                            src={img}
                            alt={imgAlt}
                            height={imgHeight}
                        />
                    </div>
                </Carousel.Item>


            </Carousel>
        </>

    )
};
export default HeroCarousel