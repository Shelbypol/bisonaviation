import React, {useState} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import slide3 from '../images/homeSlider/fullscreen-slider5.jpg'
import slide2 from '../images/homeSlider/fullscreen-slider1.jpg'
import slide5 from '../images/homeSlider/fullscreen-slider3.jpg'
import slide4 from '../images/homeSlider/fullscreen-slider4.jpg'
import slide1 from '../images/homeSlider/fullscreen-slider2.jpg'
import overlay from '../images/graphics/fs-slider-caption-bg.png';
import divider from '../images/graphics/divider1.png'

const items = [
    {
        src: slide1,
        altText: 'Bison Aviation alt',
        caption: 'BISON AVIATION',
        text: 'WE WORK HARD ON THE GROUND, SO YOU CAN FLY WITH CONFIDENCE IN THE SKY.'
    },
    {
        src: slide2,
        altText: 'Slide 2',
        caption: 'Slide 2',
        text: 'FROM MINOR REPAIRS TO COMPLETE PANEL UPGRADES. ALL PERFORMED IN-HOUSE AT BISON AVIATION.'
    },
    {
        src: slide3,
        altText: 'Slide 3',
        caption: 'Slide 3'
    },
    {
        src: slide4,
        altText: 'Slide 3',
        caption: 'Slide 3'
    },
    {
        src: slide5,
        altText: 'Slide 3',
        caption: 'Slide 3'
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
                <img className="d-block w-100" src={item.src} alt={item.altText}/>
                {/*<img className='img-fluid' src={item.src} alt={item.altText}/>*/}
                {/*      OVERLAY / DIVIDER IMAGE      */}
                <img id='overlayImg' className=' img-fluid' src={overlay} alt=""/>
                <img id='dividerImg' className=' img-fluid' src={divider} alt=""/>
                <CarouselCaption captionText={item.text} captionHeader={item.caption}/>
            </CarouselItem>

        );
    });

    return (
        <>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                // className='col-xl-10 col-sm-12 m-xl-auto'
            >

                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
            </Carousel>

            {/*      OVERLAY / DIVIDER IMAGE      */}
            {/*<img id='overlayImg' className=' img-fluid' src={overlay} alt=""/>*/}
            {/*<img id='dividerImg' className=' img-fluid' src={divider} alt=""/>*/}

        </>
    );
};

export default HomeCarousel