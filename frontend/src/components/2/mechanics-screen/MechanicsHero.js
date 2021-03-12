import React from 'react'
import '../../../style/mechanicsScreen/MechanicsHero.css'
import HeroCarousel from "../../HeroCarousel";


const MechanicsHero = () => {
    return (
        <>
            <HeroCarousel
                slide1firstTitleLetter={'M'}
                slide1firstTitleWord={'aintenance'}
                slide1firstSentence={'Looks complicated...'}
                slide1secondSentenceTrue={true}
                slide1secondSentence={'...that\'s because it is!'}

                carouselImg2True={true}
                slide2firstTitleLetter={'F'}
                slide2firstTitleWord={'rom gliders...'}
                slide2firstSentence={'...to gulfstreams, THE BISON Team'}
                slide2secondSentenceTrue={true}
                slide2secondSentence={'KNOWS YOUR AIRCRAFT INSIDE AND OUT!'}

                carouselImg3True={true}
                slide3firstTitleLetter={'I'}
                slide3firstTitleWord={'t isn\'t over until...'}
                slide3firstSentence={'...the paperwork is finished. Let Bison '}
                slide3secondSentenceTrue={true}
                slide3secondSentence={'cure your logbook log jams!'}

                carouselImg4True={true}
                slide4firstTitleLetter={'F'}
                slide4firstTitleWord={'rom minor repairs...'}
                slide4firstSentence={'...TO COMPLETE RADOME TO TAIL CONE REFURBISHMENT.'}
                slide4secondSentenceTrue={true}
                slide4secondSentence={'BISON IS READY FOR YOUR MAINTENANCE PROJECT!'}

                carouselImg5True={false}
                // // slide5firstTitleLetter={}
                // // slide5firstTitleWord={}
                // // slide5firstSentence={}
                // // slide5secondSentenceTrue={}
                // // slide5secondSentence={}
            />

        </>
    );
};

export default MechanicsHero;
