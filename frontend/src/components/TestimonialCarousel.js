import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import '../style/TestimonialCarousel.css'
import {Jumbotron} from "reactstrap";

const TestimonialCarousel = () => {
    return (
        <>
            <Jumbotron className=' global_eerie-black-bg m-0'
                       fluid>

                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={3000}
                >
                    <div>
                        {/*<img src="/images/shirley.png" />*/}
                        <div className="myCarousel global_eerie-black-bg">
                            <h3 className='global_cultured'>Richard F.</h3>
                            <h1>
                                <i className='fas fa-star global_blood-red'> </i>
                                <i className='fas fa-star global_blood-red'> </i>
                                <i className='fas fa-star global_blood-red'> </i>
                                <i className='fas fa-star  global_blood-red'> </i>
                                <i className='fas fa-star global_blood-red'> </i>
                            </h1>
                            <p className='global_cultured'>
                                Had the chance to work with John from Bison on his V-tail recently and the guy's just a
                                class act. It's rare to meet someone with equal parts humility, technical acumen, and
                                seat time. Bison will be a go-to for me on trips south.
                            </p>
                        </div>
                    </div>

                    <div>
                        {/*<img src="/images/daniel.png" />*/}
                        <div className="myCarousel global_eerie-black-bg">
                            <h3 className='global_cultured'>Daniel K.</h3>
                            <h1>
                                <i className='fas fa-star global_blood-red'> </i>
                                <i className='fas fa-star global_blood-red'> </i>
                                <i className='fas fa-star global_blood-red'> </i>
                                <i className='fas fa-star  global_blood-red'> </i>
                                <i className='fas fa-star-half-alt global_blood-red'> </i>
                            </h1>
                            <p className='global_cultured'>
                                First class maintenance shop. AOG response was fantastic and they quickly had me back in
                                the sky.
                            </p>
                        </div>
                    </div>

                    <div>
                        {/*<img src="/images/theo.png" />*/}
                        <div className="myCarousel global_eerie-black-bg">
                            <h3 className='global_cultured'>Allen H.</h3>
                            <h1>
                                <i className='fas fa-star global_blood-red'> </i>
                                <i className='fas fa-star global_blood-red'> </i>
                                <i className='fas fa-star global_blood-red'> </i>
                                <i className='fas fa-star  global_blood-red'> </i>
                                <i className='fas fa-star-half-alt global_blood-red'> </i>
                            </h1>
                            <p className='global_cultured'>
                                Avionics team worked with me for a full panel installation and even added custom
                                cup-holders for my wife!
                            </p>
                        </div>
                    </div>
                </Carousel>
            </Jumbotron>
        </>
    );
};
export default TestimonialCarousel