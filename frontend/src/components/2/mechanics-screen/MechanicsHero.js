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
                slide2firstSentence={'...to gulfstreams, THE BISON AVIATION '}
                slide2secondSentenceTrue={true}
                slide2secondSentence={'TEAM KNOWS YOUR AIRCRAFT INSIDE AND OUT!'}

                carouselImg3True={false}
                // slide3firstTitleLetter={}
                // slide3firstTitleWord={}
                // slide3firstSentence={}
                // slide3secondSentenceTrue={}
                // slide3secondSentence={}

                carouselImg4True={false}
                // slide4firstTitleLetter={}
                // slide4firstTitleWord={}
                // slide4firstSentence={}
                // slide4secondSentenceTrue={}
                // slide4secondSentence={}

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
