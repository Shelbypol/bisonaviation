import React, {useState} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import slide1 from '../images/homeSlider/fullscreen-slider5.jpg'
import slide5 from '../images/homeSlider/fullscreen-slider1.jpg'
import slide2 from '../images/homeSlider/fullscreen-slider2.jpg'
import slide3 from '../images/homeSlider/fullscreen-slider3.jpg'
import slide4 from '../images/homeSlider/fullscreen-slider4.jpg'



const items = [
    {
        src: slide1,
        altText: 'Bison Aviation alt',
        caption: 'Bison Aviation caption'
    },
    {
        src: slide2,
        altText: 'Slide 2',
        caption: 'Slide 2'
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
                className='img-fluid w-100 h-100'
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} />
                {/*<CarouselCaption captionText={item.caption} captionHeader={item.caption} />*/}
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className='justify-content-center'
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
};

export default HomeCarousel