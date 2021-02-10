import React, {useState} from 'react'
import HomeHero from '../components/1/HomeHero'
import RepairAward from '../components/1/RepairAward'
import Services from "../components/1/Services";
import '../style/global-1.css'
import textured from "../images/bg-graphics/services/textured-line.png";
import {Button, Col, Container, Row} from 'react-bootstrap'

const HomeScreen1 = () => {

    window.onbeforeunload = () => {
        localStorage.clear()
    };

    return (
        <>
            <HomeHero title={'Bison Aviation'}
                      text1={'We work hard on the ground'}
                      text2={'so you can fly with confidence'}
            />

            <RepairAward />



            {/*/!*  =============  SERVICES =============  *!/*/}

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


        </>

    )
};
    export default HomeScreen1