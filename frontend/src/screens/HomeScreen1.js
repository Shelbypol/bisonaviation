import React, {useState} from 'react'
import '../style/global-1.css'
import HomeHero from '../components/1/HomeHero'
import RepairAward from '../components/1/RepairAward'
import Services from "../components/1/Services";
import Team from "../components/1/Team";
import Avionics from "../components/1/Avionics";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Mechanics from "../components/1/Mechanics";
import Flir from "../components/1/Flir";
import {Container} from 'react-bootstrap';
import ImgRow from "../components/1/ImgRow";

const HomeScreen1 = () => {

    window.onbeforeunload = () => {
        localStorage.clear()
    };

    return (
        <>
            <HomeHero/>


            <RepairAward/>
            {/*<Container className='p-0 fluid'>*/}

                <Services
                    showTag={true}
                    title1={'GARMIN DEALER'}
                    title2={'AVIONICS'}
                    title3={'MAINTENANCE'}
                    title4={'EO/IR FLIR'}
                />

                <Avionics/>

                <Team/>

                <Mechanics/>

                <TestimonialCarousel/>

                <Flir/>

                <ImgRow/>
            {/*</Container>*/}
        </>

    )
};
export default HomeScreen1