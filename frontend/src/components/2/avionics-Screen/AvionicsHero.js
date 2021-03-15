import React from 'react'
import '../../../style/avionicsScreen/AvionicsHero.css'
import HeroCarousel from "../../HeroCarousel";

const AvionicsHero = () => {

    return (
        <HeroCarousel
            IDslide1={'AvionicsHero_carouselImg1'}
            slide1firstTitleLetter={'M'}
            slide1firstTitleWord={'aintenance'}
            slide1firstSentence={'Looks complicated...'}
            slide1secondSentenceTrue={true}
            slide1secondSentence={'...that\'s because it is!'}

            IDslide2={'AvionicsHero_carouselImg2'}
            carouselImg2True={true}
            slide2firstTitleLetter={'F'}
            slide2firstTitleWord={'rom gliders...'}
            slide2firstSentence={'...to gulfstreams, THE BISON Team'}
            slide2secondSentenceTrue={true}
            slide2secondSentence={'KNOWS YOUR AIRCRAFT INSIDE AND OUT!'}

            IDslide3={'AvionicsHero_carouselImg3'}
            carouselImg3True={true}
            slide3firstTitleLetter={'I'}
            slide3firstTitleWord={'t isn\'t over until...'}
            slide3firstSentence={'...the paperwork is finished. Let Bison '}
            slide3secondSentenceTrue={true}
            slide3secondSentence={'cure your logbook log jams!'}

            IDslide4={'AvionicsHero_carouselImg4'}
            carouselImg4True={true}
            slide4firstTitleLetter={'F'}
            slide4firstTitleWord={'rom minor repairs...'}
            slide4firstSentence={'...TO COMPLETE RADOME TO TAIL CONE REFURBISHMENT.'}
            slide4secondSentenceTrue={true}
            slide4secondSentence={'BISON IS READY FOR YOUR MAINTENANCE PROJECT!'}

            IDslide5={'AvionicsHero_carouselImg5'}
            carouselImg5True={false}
            slide5firstTitleLetter={'F'}
            slide5firstTitleWord={'rom minor repairs...'}
            slide5firstSentence={'...TO COMPLETE RADOME TO TAIL CONE REFURBISHMENT.'}
            slide5secondSentenceTrue={true}
            slide5secondSentence={'BISON IS READY FOR YOUR MAINTENANCE PROJECT!'}
        />
    )
};

export default AvionicsHero