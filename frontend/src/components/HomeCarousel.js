import React, {useState} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import '../style/homeCarousel.css'

import slide1 from '../images/homeSlider/fullscreen-slider2_2000w_1000h.jpg'
import slide2 from '../images/homeSlider/fullscreen-slider3_2000_1000.jpg'
import slide3 from '../images/homeSlider/fullscreen-slider5_2000_1000.jpg'
import slide4 from '../images/homeSlider/fullscreen-slider4_2000_1000.jpg'
import slide5 from '../images/homeSlider/fullscreen-slider1_2000_1000.jpg'

import overlay from '../images/graphics/dark-overlays/fs-slider-caption-bg_1000_450.png';

const items = [
    {
        src: slide1,
        altText: 'Bison Aviation alt',
        title: 'BISON AVIATION',
        text: 'WE WORK HARD ON THE GROUND, SO YOU CAN FLY WITH CONFIDENCE IN THE SKY.'
    },
    {
        src: slide2,
        altText: 'Slide 2',
        title: 'Slide 2',
        text: 'FROM MINOR REPAIRS TO COMPLETE PANEL UPGRADES. ALL PERFORMED IN-HOUSE AT BISON AVIATION.'
    },
    {
        src: slide3,
        altText: 'Slide 3',
        title: 'Slide 3',
        text: 'FROM MINOR REPAIRS TO COMPLETE PANEL UPGRADES. ALL PERFORMED IN-HOUSE AT BISON AVIATION.'
    },
    {
        src: slide4,
        altText: 'Slide 3',
        title: 'Slide 3',
        text: 'FROM MINOR REPAIRS TO COMPLETE PANEL UPGRADES. ALL PERFORMED IN-HOUSE AT BISON AVIATION.'
    },
    {
        src: slide5,
        altText: 'Slide 3',
        title: 'Slide 3',
        text: 'FROM MINOR REPAIRS TO COMPLETE PANEL UPGRADES. ALL PERFORMED IN-HOUSE AT BISON AVIATION.'
    }
];

const HomeCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <h1 className='carousel-caption imgTitle'>{item.title}</h1>
                <h5 className='carousel-caption imgText'>{item.text}</h5>

                {/*     SLIDER IMGS     */}
                <img className="img-fluid slider-img col-xs-12" src={item.src} alt={item.altText}/>

                {/*      OVERLAY IMAGE      */}
                <img id='overlayImg' className='img-fluid' src={overlay} alt=""/>

            </CarouselItem>

        );
    });

    return (
        <>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
            </Carousel>

        </>
    );
};

export default HomeCarousel