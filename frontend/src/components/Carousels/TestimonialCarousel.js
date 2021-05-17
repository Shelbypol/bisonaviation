import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import '../../style/TestimonialCarousel.css'
import Zoom from 'react-reveal/Zoom';
import {Col, Row} from "react-bootstrap";

const TestimonialCarousel = () => {
    return (
        <>
            <Row className='global_cultured '>
                <Col xs={12} className='py-0'>

                    <Zoom>
                        <Carousel
                            showArrows={false}
                            infiniteLoop={true}
                            showThumbs={false}
                            showStatus={false}
                            autoPlay={true}
                            interval={4500}
                        >
                            <div className="myCarousel global_blood-red-bg pb-5 my-auto">
                                <h3 className=''>Richard F.</h3>
                                <h1>
                                    <i className='fas fa-star global_cultured'> </i>
                                    <i className='fas fa-star global_cultured'> </i>
                                    <i className='fas fa-star global_cultured'> </i>
                                    <i className='fas fa-star  global_cultured'> </i>
                                    <i className='fas fa-star global_cultured'> </i>
                                </h1>
                                <p className=''>
                                    Had the chance to work with John from Bison on his V-tail recently and the guy's
                                    just a
                                    class act. It's rare to meet someone with equal parts humility, technical acumen,
                                    and
                                    seat time. Bison will be a go-to for me on trips south.
                                </p>
                            </div>

                            <div className="myCarousel my-auto global_blood-red-bg pb-5 my-auto">
                                <h3 className=''>Daniel K.</h3>
                                <h1>

                                    <i className='fas fa-star global_cultured'> </i>
                                    <i className='fas fa-star global_cultured'> </i>
                                    <i className='fas fa-star global_cultured'> </i>
                                    <i className='fas fa-star  global_cultured'> </i>
                                    <i className='fas fa-star-half-alt global_cultured'> </i>

                                </h1>
                                <p className=''>
                                    First class maintenance shop. AOG response was fantastic and they quickly had me
                                    back in
                                    the sky.
                                </p>
                            </div>


                            <div className="myCarousel my-auto global_blood-red-bg pb-5 my-auto">
                                <h3 className=''>Allen H.</h3>
                                <h1>
                                    <i className='fas fa-star global_cultured'> </i>
                                    <i className='fas fa-star global_cultured'> </i>
                                    <i className='fas fa-star global_cultured'> </i>
                                    <i className='fas fa-star  global_cultured'> </i>
                                    <i className='fas fa-star-half-alt global_cultured'> </i>
                                </h1>
                                <p className=''>
                                    Avionics team worked with me for a full panel installation and even added custom
                                    cup-holders for my wife!
                                </p>
                            </div>

                        </Carousel>
                    </Zoom>
                </Col>
            </Row>

        </>
    );
};
export default TestimonialCarousel