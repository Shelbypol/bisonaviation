import React from 'react';
import '../../style/2/HomeHero.css';
import HeroCarousel from "../Carousels/HeroCarousel.js";


const HomeCarousel = () => {
    return (
        <HeroCarousel

            IDslide1={'HomeHero_carouselImg1'}
            slide1firstTitleLetter={'B'}
            slide1firstTitleWord={'ison Aviation'}
            slide1firstSentence={'Professional Aviation Solutions'}
            slide1secondSentenceTrue={true}
            slide1secondSentence={'FAA Repair Station: 85NR497D'}
            // slide1firstSentence={'we work hard on the ground,'}
            // slide1secondSentenceTrue={true}
            // slide1secondSentence={'so you can fly with confidence!'}

            IDslide2={'HomeHero_carouselImg2'}
            carouselImg2True={true}
            slide2firstTitleLetter={'A'}
            slide2firstTitleWord={'vionics HomeServices'}
            slide2firstSentence={'MINOR REPAIRS TO COMPLETE PANEL UPGRADES. '}
            slide2secondSentenceTrue={true}
            slide2secondSentence={'ALL PERFORMED IN-HOUSE!'}

            IDslide3={'HomeHero_carouselImg3'}
            carouselImg3True={true}
            slide3firstTitleLetter={'C'}
            slide3firstTitleWord={'UTTING EDGE TECHNOLOGY'}
            slide3firstSentence={'CNC MACHINING, LASER ENGRAVING & 3D PRINTING.'}
            slide3secondSentenceTrue={true}
            slide3secondSentence={'THE CUTTING EDGE OF AIRCRAFT MAINTENANCE!'}

            IDslide4={'HomeHero_carouselImg4'}
            carouselImg4True={true}
            slide4firstTitleLetter={'S'}
            slide4firstTitleWord={'TRUCTURAL REPAIRS'}
            slide4firstSentence={'SKIN REPLACEMENTS TO STRUCTURES FABRICATION,'}
            slide4secondSentenceTrue={true}
            slide4secondSentence={'NO PROJECT IS TOO BIG OR TOO SMALL!'}

            IDslide5={'HomeHero_carouselImg5'}
            carouselImg5True={true}
            slide5firstTitleLetter={'A'}
            slide5firstTitleWord={'IRBORNE EO/IR - FLIR'}
            slide5firstSentence={'WORLD LEADER IN LEGACY AIRBORNE'}
            slide5secondSentenceTrue={true}
            slide5secondSentence={'EO/IR EQUIPMENT SERVICE AND SALES!'}
        />

    );
};

export default HomeCarousel;