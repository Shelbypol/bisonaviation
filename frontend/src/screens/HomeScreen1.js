import React, {useState} from 'react'
import HomeHero from '../components/1/HomeHero'
import RepairAward from '../components/1/RepairAward'
import Services from "../components/1/Services";
import Team from "../components/1/Team";
import '../style/global-1.css'
import Avionics from "../components/1/Avionics";
import AvionicsProducts from "../components/1/AvionicsProducts";
import textured from "../images/bg-graphics/services/textured-line.png";
import TestimonialCarousel from "../components/TestimonialCarousel";

const HomeScreen1 = () => {

    window.onbeforeunload = () => {
        localStorage.clear()
    };

    return (
        <>
            <HomeHero />

            <RepairAward />

            <Services
                showTag={true}
                title1={'GARMIN DEALER'}
                title2={'AVIONICS'}
                title3={'MAINTENANCE'}
                title4={'EO/IR FLIR'}
                img1={textured}
                img2={textured}
                img3={textured}
                img4={textured}
            />

            <Team />

            <Avionics />

            <TestimonialCarousel/>

        </>

    )
};
    export default HomeScreen1