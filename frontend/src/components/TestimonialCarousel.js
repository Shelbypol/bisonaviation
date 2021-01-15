import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import '../style/TestimonialCarousel.css'

const TestimonialCarousel = () => {
        return (
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={4000}
            >
                <div>
                    {/*<img src="/images/shirley.png" />*/}
                    <div className="myCarousel global_bisonRedFadedBgColor">
                        <h3>Richard F.</h3>
                        <h1>
                            {/*<i style={{color: 'yellow'}} className='TestimonialCarousel_star-space fas fa-star'> </i>*/}
                            {/*<i style={{color: 'yellow'}} className='TestimonialCarousel_star-space fas fa-star'> </i>*/}
                            {/*<i style={{color: 'yellow'}} className='TestimonialCarousel_star-space fas fa-star'> </i>*/}
                            {/*<i style={{color: 'yellow'}} className='TestimonialCarousel_star-space fas fa-star'> </i>*/}
                            {/*<i style={{color: 'yellow'}} className='TestimonialCarousel_star-space fas fa-star'> </i>*/}

                            <i style={{color: 'rgba(90, 00, 09, 1)'}} className='fas fa-star'> </i>
                            <i style={{color: 'rgba(90, 00, 09, 1)'}} className='fas fa-star'> </i>
                            <i style={{color: 'rgba(90, 00, 09, 1)'}} className='fas fa-star'> </i>
                            <i style={{color: 'rgba(90, 00, 09, 1)'}} className='fas fa-star'> </i>
                            <i style={{color: 'rgba(90, 00, 09, 1)'}} className='fas fa-star'> </i>
                        </h1>
                        <p>
                            Had the chance to work with John from Bison on his V-tail recently and the guy's just a class act. It's rare to meet someone with equal parts humility, technical acumen, and seat time. Bison will be a go-to for me on trips south.
                        </p>
                    </div>
                </div>

                <div>
                    {/*<img src="/images/daniel.png" />*/}
                    <div className="myCarousel global_bisonRedFadedBgColor">
                        <h3>Daniel K.</h3>
                        <h1>
                            {/*<i style={{color: 'yellow'}} className='TestimonialCarousel_star-space fas fa-star'> </i>*/}
                            {/*<i style={{color: 'yellow'}} className='TestimonialCarousel_star-space fas fa-star'> </i>*/}
                            {/*<i style={{color: 'yellow'}} className='TestimonialCarousel_star-space fas fa-star'> </i>*/}
                            {/*<i style={{color: 'yellow'}} className='TestimonialCarousel_star-space fas fa-star'> </i>*/}
                            {/*<i style={{color: 'yellow'}} className='TestimonialCarousel_star-space fas fa-star-half-alt'> </i>*/}

                            <i style={{color: 'rgba(90, 00, 09, 1)'}} className='fas fa-star'> </i>
                            <i style={{color: 'rgba(90, 00, 09, 1)'}} className='fas fa-star'> </i>
                            <i style={{color: 'rgba(90, 00, 09, 1)'}} className='fas fa-star'> </i>
                            <i style={{color: 'rgba(90, 00, 09, 1)'}} className='fas fa-star'> </i>
                            <i style={{color: 'rgba(90, 00, 09, 1)'}} className='fas fa-star-half-alt'> </i>
                        </h1>
                        <p>
                            First class maintenance shop. AOG response was fantastic and they quickly had me back in the sky.
                        </p>
                    </div>
                </div>

                <div>
                    {/*<img src="/images/theo.png" />*/}
                    <div className="myCarousel global_bisonRedFadedBgColor">
                        <h3>Allen H.</h3>
                        <h1>
                            {/*<i style={{color: 'yellow'}} className='TestimonialCarousel_star-space fas fa-star'> </i>*/}
                            {/*<i style={{color: 'yellow'}} className='TestimonialCarousel_star-space fas fa-star'> </i>*/}
                            {/*<i style={{color: 'yellow'}} className='TestimonialCarousel_star-space fas fa-star'> </i>*/}
                            {/*<i style={{color: 'yellow'}} className='TestimonialCarousel_star-space fas fa-star'> </i>*/}
                            {/*<i style={{color: 'yellow'}} className='TestimonialCarousel_star-space fas fa-star-half-alt'> </i>*/}
                            <i style={{color: 'rgba(90, 00, 09, 1)'}} className='fas fa-star'> </i>
                            <i style={{color: 'rgba(90, 00, 09, 1)'}} className='fas fa-star'> </i>
                            <i style={{color: 'rgba(90, 00, 09, 1)'}} className='fas fa-star'> </i>
                            <i style={{color: 'rgba(90, 00, 09, 1)'}} className='fas fa-star'> </i>
                            <i style={{color: 'rgba(90, 00, 09, 1)'}} className='fas fa-star-half-alt'> </i>
                        </h1>
                        <p>
                            Avionics team worked with me for a full panel installation and even added custom cup-holders for my wife!
                        </p>
                    </div>
                </div>
            </Carousel>
        );
};
export default TestimonialCarousel