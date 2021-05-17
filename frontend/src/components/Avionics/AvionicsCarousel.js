import React from 'react'
import '../../style/avionicsScreen/AvionicsHero.css'
import HeroCarousel from "../Carousels/HeroCarousel";

const AvionicsCarousel = () => {

    return (
        <HeroCarousel
            IDslide1={'AvionicsHero_carouselImg1'}
            slide1firstTitleLetter={'A'}
            slide1firstTitleWord={'VIONICS'}
            slide1firstSentence={'ARE YOU READY FOR THE ULTIMATE PANEL MAKEOVER?'}
            slide1secondSentenceTrue={false}
            slide1secondSentence={''}

            IDslide2={'AvionicsHero_carouselImg2'}
            carouselImg2True={true}
            slide2firstTitleLetter={'E'}
            slide2firstTitleWord={'XPERT SERVICE'}
            slide2firstSentence={'OUR TECHNICIANS HAVE YEARS OF EXPERIENCE'}
            slide2secondSentenceTrue={false}
            slide2secondSentence={''}

            IDslide3={'AvionicsHero_carouselImg3'}
            carouselImg3True={true}
            slide3firstTitleLetter={'L'}
            slide3firstTitleWord={'ATEST TECHNOLOGY'}
            slide3firstSentence={'N-HOUSE 3D PRINTING, CNC MACHINING,'}
            slide3secondSentenceTrue={true}
            slide3secondSentence={'LASER CUTTING & ENGRAVING & MORE'}

            IDslide4={'AvionicsHero_carouselImg4'}
            carouselImg4True={true}
            slide4firstTitleLetter={'T'}
            slide4firstTitleWord={'HE RIGHT EQUIPMENT'}
            slide4firstSentence={'EUQIPPED WITH THE NEWEST & BEST EQUIPMENT'}
            slide4secondSentenceTrue={true}
            slide4secondSentence={'FOR THE MOST DEMANDING TASKS!'}

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

export default AvionicsCarousel