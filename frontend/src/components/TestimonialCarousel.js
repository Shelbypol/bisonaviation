import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import '../style/TestimonialCarousel.css'
import {Jumbotron} from "reactstrap";
import Zoom from 'react-reveal/Zoom';

const TestimonialCarousel = () => {
    return (
        <>
            <Jumbotron className='m-0 p-0 global_blood-red-bg global_white TestimonialCarousel_jumbotron '
                       fluid>
                <Zoom>
                    <Carousel
                        showArrows={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        interval={3000}
                    >
                            <div className="myCarousel global_blood-red-bg">
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

                            <div className="myCarousel my-auto global_blood-red-bg">
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



                            <div className="myCarousel my-auto global_blood-red-bg">
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
            </Jumbotron>

        </>
    );
};
export default TestimonialCarousel